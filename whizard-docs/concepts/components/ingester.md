# Ingester

Ingester，即 Thanos Ingesting Receiver, 是 Thanos 原生组件之一，它不处理任何路由或哈希环，主要用于处理多租户 Prometheus 远程写入的数据。它能够接收、缓冲和持久化时间序列数据，并且在多租户环境中非常有用。以下是 Thanos Ingesting Receiver 的一些关键功能和特点：

1. **高可用性**:
   - Thanos Receiver 支持多实例部署，提供高可用性和故障转移功能。如果某个实例出现故障，其他实例可以继续处理数据。

2. **多租户支持**:
   - 它能够处理来自多个租户的数据，确保不同租户的数据隔离和安全。

3. **水平扩展**:
   - Thanos Receiver 可以根据需求水平扩展，以处理更大的数据负载。通过增加实例数量，可以轻松应对增长的写入请求。

4. **数据持久化**:
   - 接收到的数据可以持久化到对象存储（如 S3 或 GCS），确保数据的长期存储和可靠性。

5. **与 Thanos Query 集成**:
   - 持久化的数据可以被 Thanos Query 组件查询和聚合，提供全局视图和历史数据分析能力。

6. **Buffering and Batching**:
   - Thanos Receiver 可以对接收到的数据进行缓冲和批处理，提高数据写入效率和系统性能。

总结来说，Thanos Ingesting Receiver 是一个强大而灵活的数据接收组件，适用于各种大规模和多租户监控场景，通过与 Thanos 其他组件的紧密集成，提供了一套完整的监控解决方案。

更多 Ingester 使用说明可参考 [https://thanos.io/tip/components/receive.md/](https://thanos.io/tip/components/receive.md/)。
