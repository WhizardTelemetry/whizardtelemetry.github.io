---
sidebar_position: 5
description: 本文档介绍 Whizard 默认配置参数
---

# Whizard 参数配置

> 注: 自 Whizard v0.10 起，Whizard 主要参数配置在 CRD `services.monitoring.whizard.io` 中。

Whizard 配置参数存储于 CRD 中，其中有组件自身的 CRD，如 `queries.monitoring.whizard.io`、 `ingesters.monitoring.whizard.io`, 也有定义整个 Whizard 各服务部署的 CRD `services.monitoring.whizard.io`， 由于 Whizard 部分组件根据租户数量进行自动伸缩， 在组件 CRD 中配置无法适应自定伸缩场景，所以在 `services.monitoring.whizard.io` CRD 中定义了各组件的配置模板 `xxxxTemplateSpec`，可以在该 CRD 中定义各组件的配置参数，但组件 CRD 配置优先级高于 `xxxxTemplateSpec`。

```yaml
spec:
  compactorTemplateSpec:
    dataVolume:
      persistentVolumeClaim:
        spec:
          resources:
            requests:
              storage: 20Gi
    # 在配置对象存储情况下每个 Compactor 实例允许处理 Tenant 数量，即 Compactor 承载租户数据的能力，默认值为10
    defaultTenantsPerCompactor: 10         
    flags:
    - --block-files-concurrency=20
    - --compact.blocks-fetch-concurrency=5
    - --web.disable
    - --compact.enable-vertical-compaction
    image: docker.io/thanosio/thanos:v0.36.0
    retention:
      retention1h: 360d
      retention5m: 180d
      retentionRaw: 60d
    securityContext:
      fsGroup: 0
  defaultTenantId: unknown
  gatewayTemplateSpec:
    image: docker.io/kubesphere/whizard-monitoring-gateway:v0.10.0
  ingesterTemplateSpec:
    dataVolume:
      persistentVolumeClaim:
        spec:
          resources:
            requests:
              storage: 20Gi
    # 空租户时 Ingester 回收周期； Ingester 会由于租户删除或迁移，导致 Ingester 上没有租户，此时需要回收；
    # 在使用对象存储时默认为3h， 在无对象存储情况下，此参数会和该 Ingester 的 localTsdbRetention 保持一致。
    defaultIngesterRetentionPeriod: 3h   
    # 每个 Ingester 实例允许处理 Tenant 数量，即 Ingester 承载租户数据的能力，默认值为3   
    defaultTenantsPerIngester: 3
    disableTsdbCleanup: true
    flags:
    - --tsdb.out-of-order.time-window=10m
    image: docker.io/thanosio/thanos:v0.36.0
    securityContext:
      fsGroup: 0
  queryFrontendTemplateSpec:
    flags:
    - --no-query-range.align-range-with-step
    image: docker.io/thanosio/thanos:v0.36.0
  queryTemplateSpec:
    envoy:
      image: docker.io/envoyproxy/envoy:v1.20.2
    flags:
    - --query.max-concurrent=200
    image: docker.io/thanosio/thanos:v0.36.0
    replicaLabelNames:
    - prometheus_replica
    - receive_replica
    - ruler_replica
  routerTemplateSpec:
    image: docker.io/thanosio/thanos:v0.36.0
  rulerTemplateSpec:
    dataVolume:
      emptyDir: {}
    disableAlertingRulesAutoSelection: true
    evaluationInterval: 1m
    image: docker.io/thanosio/thanos:v0.36.0
    prometheusConfigReloader:
      image: quay.io/prometheus-operator/prometheus-config-reloader:v0.75.1
    ruleSelectors:
    - matchLabels:
        role: alert-rules
    rulerQueryProxy:
      image: docker.io/kubesphere/whizard-monitoring-gateway:v0.10.0
    rulerWriteProxy:
      image: docker.io/kubesphere/cortex-tenant:v1.12.5
    securityContext:
      fsGroup: 0
    shards: 1
  storeTemplateSpec:
    dataVolume:
      persistentVolumeClaim:
        spec:
          resources:
            requests:
              storage: 20Gi
    flags:
    - --web.disable
    - --no-cache-index-header
    image: docker.io/thanosio/thanos:v0.36.0
    securityContext:
      fsGroup: 0
    timeRanges:
    - maxTime: -36h
  tenantHeader: cluster
  tenantLabelName: cluster
```
