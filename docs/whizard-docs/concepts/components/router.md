# Router

Router 是 Thanos Receive 在 "router mode"（路由模式）下是一种特殊的配置方式，用于高效地处理和分发时间序列数据。该模式下，Thanos Receive 组件不仅接收数据，还负责根据标签（如租户 ID）等规则将数据路由到适当的后端实例或存储位置。以下是关于 Thanos Receive 路由模式的详细说明：

1. **数据接收**:
   - Thanos Receive 在路由模式下可以接收来自 Prometheus 的远程写入（remote write）请求。

2. **路由规则配置**:
   - 通过配置路由规则，Thanos Receive 可以基于特定的标签（如租户 ID、metric 名称等）将接收到的数据分发到不同的接收实例或存储后端。

3. **标签重写**:
   - 支持标签重写功能，可以在将数据路由到目标实例前修改或添加标签。

4. **高可用性**:
   - 路由模式支持高可用性部署，多个 Thanos Receive 实例可以协同工作，确保数据接收和路由的可靠性。

5. **水平扩展**:
   - 通过增加接收实例，可以轻松实现水平扩展，处理更大规模的数据流量。

6. **多租户支持**:
   - 在多租户环境中，可以根据租户 ID 路由数据，确保不同租户的数据隔离和安全。

Thanos Receive 在路由模式下提供了一种高效、灵活的数据接收和分发机制，适用于大规模、多租户和分布式存储环境。通过合理配置路由规则和高可用部署，可以确保系统的高效运行和数据的可靠管理。

更多 Router 使用说明可参考 [https://thanos.io/tip/components/receive.md/](https://thanos.io/tip/components/receive.md/)。
