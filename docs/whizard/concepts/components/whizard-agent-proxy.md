# Whizard-agent-proxy

`whizard-agent-proxy` 是一个用于代理 `whizard-monitoring-gateway` 请求的组件。它部署在 Prometheus 侧，通常于 Prometheus Agent 共同使用。 它的主要功能是处理 `remote-write` 和 `query` 两种类型的请求。`remote-write` 请求用于代理将 Prometheus 监控数据发送到 `whizard-monitoring-gateway` ，而 query 请求则代理从 `whizard-monitoring-gateway` 查询监控数据。通过`whizard-agent-proxy`中间层， 可以满足其他服务在集群内无法对 Prometheus Agent 发起查询，优化服务配置。

在监控系统中，`whizard-agent-proxy` 充当了一个中间层，确保数据的高效传输和请求的快速响应。通过代理请求，`whizard-agent-proxy` 可以在不同的网络环境中提供更好的性能和安全性。它能够处理大量的并发请求，并且具有良好的扩展性，能够适应不断增长的监控需求。它还支持认证和加密机制，确保数据在传输过程中的安全性。

总的来说，Whizard-agent-proxy 是一个关键组件，确保了监控数据的可靠传输和高效查询，为整个监控系统的稳定运行提供了重要保障。
