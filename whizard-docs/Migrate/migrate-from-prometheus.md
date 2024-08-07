# 将 Prometheus 本地监控数据迁移至 Whizard

Prometheus 本身的存储机制适合短期数据存储，但对于长期数据存储和查询，Prometheus 并不是最佳选择。Whizard 提供了长期存储的解决方案，通过对象存储（如 S3 等）来存储历史数据，确保数据的持久性和可访问性。同时单个 Prometheus 实例无法跨集群查询数据。Whizard 提供了全局查询的功能，可以跨多个 Prometheus 实例进行统一查询，方便用户获取全局视角的数据。

## 1. Prometheus 调整为 Agent 模式

Prometheus 作为数据采集、查询及存储的服务端，需要消耗大量的内存、磁盘等资源。而在与 Whizard 协同部署场景下，更推荐将 Prometheus 以 Agent 模式部署，在此模式下，只保留数据采集和推送功能，结合 Whizard 的存储和查询能力，可以大幅降低 Prometheus 的资源消耗，提高系统整体的资源利用率。

以下为Prometheus Agent 的启动参数，请根据当前部署信息自行变更。

```yaml
containers:
  - name: prometheus
    image: 'prom/prometheus:v2.39.1'
    args:
      - '--config.file=/etc/prometheus/config_out/prometheus.env.yaml'
      - '--storage.agent.path=/prometheus'
      - '--enable-feature=agent'
      - '--web.enable-lifecycle'
    ports:
      - name: web
        containerPort: 9090
        protocol: TCP
```

> 注意:  请将 prometheus config配置文件中的remote_write 增加或更改为whizard Agent-proxy地址。

```yaml
remote_write:
- url: http://whizard-agent-proxy.kubesphere-monitoring-system.svc:9090/api/v1/receive
  remote_timeout: 30s
  follow_redirects: true
  enable_http2: true
  queue_config:
    capacity: 2500
    max_shards: 200
    min_shards: 1
    max_samples_per_send: 500
    batch_send_deadline: 5s
    min_backoff: 30ms
    max_backoff: 5s
  metadata_config:
    send: true
    send_interval: 1m
    max_samples_per_send: 500
```

## 2. Whizard-agent-proxy 部署

Whizard-agent-proxy 用于代理转发 Prometheus 请求， 通过 remote-write 将 Prometheus 数据写入 Whizard，同时也暴露 query 接口，用于本地查询。 它既可以容器化部署于 Kubernetes 环境中，也可以二进制部署在裸机上。以下展示容器化部署的方式:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app.kubernetes.io/instance: whizard-agent-proxy
    app.kubernetes.io/name: whizard-agent-proxy
  name: whizard-agent-proxy
  namespace: kubesphere-monitoring-system
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/instance: whizard-agent-proxy
      app.kubernetes.io/name: whizard-agent-proxy
  template:
    metadata:
      labels:
        app.kubernetes.io/instance: whizard-agent-proxy
        app.kubernetes.io/name: whizard-agent-proxy
    spec:
      containers:
      - args:
        - --gateway.address=http://gateway-whizard-operated.kubesphere-monitoring-system.svc:9090
        - --tenant=<your_tenant_name>
        image: kubesphere/whizard-monitoring-agent-proxy:v0.10.0
        name: agent-proxy
        ports:
        - containerPort: 9090
          name: http
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/instance: whizard-agent-proxy
    app.kubernetes.io/name: whizard-agent-proxy
  name: whizard-agent-proxy
  namespace: kubesphere-monitoring-system
spec:
  ports:
  - name: http
    port: 9090
    targetPort: http
  selector:
    app.kubernetes.io/instance: whizard-agent-proxy
    app.kubernetes.io/name: whizard-agent-proxy
  sessionAffinity: ClientIP
```

> 注：
>
> 1. 以上部署文件适用于同whizard共同部署，请根据租户修改 --tenant=\<your_tenant_name\> 字段；
> 2. 如agent-proxy 和 whizard 不在同一集群中，请修改 --gateway.address 为实际链接地址；
> 3. agent-proxy 默认为ClientIP 方式，如需外部访问，请自行修改暴露方式；
