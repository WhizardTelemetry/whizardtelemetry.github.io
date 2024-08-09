---
sidebar_position: 3
description: Whizard 组件资源配额推荐
---

# Whizard 组件资源配额推荐

## 默认各组件资源配置

| 工作负载名称 | 工作负载类型 | 副本数 | 容器名称 | CPU 限制 | 内存限制 | CPU 请求 | 内存请求 | 说明 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gateway-whizard | Deployment | 2 | gateway | 2 | 4Gi | 50m | 64Mi | |
| ingester-whizard | StatefulSet | 2 | receive | 4 | 16Gi | 50m | 64Mi | 为软租户单独配置 |
| ingester-whizard-(local/remote)-auto-0 | StatefulSet | 2 | receive | 4 | 16Gi | 50m | 64Mi | 将根据租户数量自动扩展 |
| compactor-whizard-remote-xxx | StatefulSet | 1 | receive | 4 | 16Gi | 50m | 64Mi | 将根据租户数量自动扩展 |
| store-whizard-remote-xxx | StatefulSet | 2 | receive | 4 | 16Gi | 50m | 64Mi | 将根据租户数量自动扩展 |
| query-frontend-whizard | Deployment | 2 | query-frontend | 2 | 4Gi | 50m | 64Mi | |
| query-whizard | Deployment | 3 | query | 2 | 4Gi | 50m | 64Mi |  |
|  |  |  | proxy | 2 | 4Gi | 50m | 64Mi | sidecar 容器 |
| router-whizard | Deployment | 2 | receive | 2 | 4Gi | 50m | 64Mi |  |
| ruler-\<tenant\>-0 | StatefulSet | 1 | rule | 2 | 4Gi | 50m | 64Mi | 与 Whizard Tenant 一一对应 |
|  |  | | write-proxy | 2 | 4Gi | 50m | 64Mi | sidecar 容器 |
|  |  | | config-reloader | 100m | 128Mi | 100m | 128Mi | sidecar 容器 |
| whizard-adapter | Deployment | 1 | adapter | 200m | 256Mi | 100m | 128Mi |  |
| whizard-agent-proxy | Deployment | 1 | whizard-agent-proxy | 2 | 4Gi | 50m | 64Mi |  |
| whizard-controller-manager | Deployment | 1 | manager | 200m | 512Mi | 100m | 128Mi  |  |

## 资源使用配置调整策略

* Query: 与数据查询压力相关，在长时间范围查询或查询结果数据量大时负载较高，正常情况下使用默认配置即可。如需调整，每次增大 50%
* Ingester: Ingester 的资源消耗与指标摄入率（即平均每秒采集Series 数量）相关，根据压测建议每增加10k serise 增加1C 4G
* Compactor: Compactor 需要拉取数据到本地进行压缩与降采样，资源调整建议每次增加20%，并注意挂载卷使用情况
* Store: 当对应存储数据保存较久，建议使用时间分片进行拓展，参考 [Store 基于时间分片进行扩展](./store-partition.md)
* 其他组件遵循常见配额调整策略，如需调整，每次增大 20%
