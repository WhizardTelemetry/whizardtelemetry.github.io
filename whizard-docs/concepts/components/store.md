# Store

Thanos Store Gateway 是 Thanos 生态系统中的一个重要组件，主要用于从对象存储中读取时间序列数据块，并提供高效的数据查询和检索服务。它的主要功能是桥接对象存储和查询层，确保在查询历史数据时的高性能和高可靠性。以下是 Thanos Store Gateway 的详细说明：

1. **数据读取**:
   - Thanos Store Gateway 从对象存储中读取 Prometheus 格式的时间序列数据块，这些数据块通常由 Thanos Sidecar 或其他数据注入器上传。

2. **索引缓存**:
   - 为了提高查询性能，Thanos Store Gateway 会缓存索引数据。索引缓存允许快速定位和读取对象存储中的时间序列数据。

3. **PromQL 查询支持**:
   - 支持 Prometheus 的查询语言（PromQL），用户可以通过 Thanos Query 查询接口使用熟悉的语法进行数据检索。

4. **水平扩展**:
   - 可以通过增加多个 Thanos Store Gateway 实例来水平扩展系统，从而处理更大的查询负载和更大规模的数据存储。

5. **高可用性**:
   - 支持高可用性部署，多实例协作确保系统的连续性和数据查询服务的可靠性。

Thanos Store Gateway 是 Thanos 架构中的核心组件，通过桥接对象存储和查询层，提供高效的数据读取和查询服务。其支持长期数据存储、水平扩展和 PromQL 查询，使其成为大规模监控系统和分布式存储环境中不可或缺的组成部分。通过合理的资源配置和高可用部署，Thanos Store Gateway 可以显著提升系统的查询能力和可靠性，为用户提供快速、可靠的历史数据检索服务。

更多 Store 使用说明可参考 [https://thanos.io/tip/components/store.md/](https://thanos.io/tip/components/store.md/)
