# Query

Query 是 Thanos 组件之一，主要用于聚合和查询分布式存储的数据。它能够与多个 Prometheus 实例或其他 Thanos 组件（如 Store、Sidecar、Receive 等）集成，提供全局查询功能。以下是 Thanos Query 的一些关键功能和特点：

1. **全局视图**:
   - Thanos Query 能够聚合多个数据源的数据，提供全局统一的查询视图。无论数据存储在何处，都可以通过 Thanos Query 进行查询。

2. **水平扩展**:
   - Thanos Query 可以水平扩展，通过增加查询实例来处理更多的查询请求，提高查询吞吐量和性能。

3. **高可用性**:
   - 支持高可用性部署，可以通过多个 Thanos Query 实例的协作，确保查询服务的连续性和可靠性。

4. **PromQL 支持**:
   - 完全支持 Prometheus 的查询语言（PromQL），用户可以使用熟悉的查询语法进行数据分析和查询。

5. **集成多种存储后端**:
   - 能够与多种存储后端集成，包括 Prometheus、Thanos Store、Thanos Sidecar、Thanos Receive 等，实现数据的统一查询。

6. **分层存储查询**:
   - Thanos Query 支持查询分层存储中的数据，通过与 Thanos Store Gateway 的配合，可以查询对象存储中的长期历史数据。

Thanos Query 是 Thanos 生态系统中的核心组件，通过聚合和查询分布式存储的数据，提供全局统一的查询视图。其支持高可用部署、水平扩展和 PromQL 查询，使其成为大规模监控系统和分布式存储环境中不可或缺的组成部分。在合理的资源配置和监控调优下，Thanos Query 能够显著提升查询性能和用户体验，为用户提供强大的数据分析和查询能力。

更多 Query 使用说明可参考 [https://thanos.io/tip/components/query.md/](https://thanos.io/tip/components/query.md/)。
