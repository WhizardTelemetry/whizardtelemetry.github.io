# Compactor

Thanos Compact 是 Thanos 组件之一，主要用于对存储在对象存储中的时间序列数据进行压缩和优化。它通过合并和压缩数据块，减少存储空间，提高查询性能。以下是 Thanos Compact 的一些关键功能和特点：

1. **数据合并**:
   - Thanos Compact 会定期扫描对象存储中的数据块，将时间相邻的小数据块合并成更大的块。这有助于减少文件数量，提高查询效率。

2. **块压缩**:
   - 合并后的数据块会进行压缩处理，减少存储空间占用。压缩后的数据块不仅占用更少的存储空间，还能提高数据传输效率。

3. **删除标记清理**:
   - 在数据合并过程中，Thanos Compact 还会清理已经被标记为删除的数据，确保存储中的数据保持最新和高效。

4. **元数据更新**:
   - Thanos Compact 会更新合并后的数据块的元数据，以确保查询组件（如 Thanos Querier）能够正确识别和读取这些块。

Thanos Compact 是 Thanos 架构中的关键组件，通过合并和压缩存储在对象存储中的时间序列数据块，减少存储空间占用，提高查询性能。在大规模监控数据存储和多租户环境中，Thanos Compact 能够显著提高系统的存储和查询效率，是实现高效、可扩展监控解决方案的重要组成部分。

更多 Compactor 使用说明可参考 [https://thanos.io/tip/components/compact.md/](https://thanos.io/tip/components/compact.md/)
