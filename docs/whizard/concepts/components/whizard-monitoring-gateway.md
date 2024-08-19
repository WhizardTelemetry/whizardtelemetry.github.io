# Gateway(Whizard-monitoring-gateway)

`whizard-monitoring-gateway` 是一个关键组件，专门用于接收和处理来自 `Tenant` 端上传的监控数据。它的主要功能包括数据接收转储和查询。

作为数据的接受网关，`whizard-monitoring-gateway` 负责接收以 Prometheus remote-write 协议上传的监控数据。接收到的数据会被处理并转储到持久化存储中，以便后续查询和分析使用。

在数据查询方面，`whizard-monitoring-gateway` 支持租户注入查询功能。这意味着在进行数据查询时，系统会根据租户信息只返回特定租户的数据，从而确保数据的隔离性和安全性。不同租户之间的数据不会互相干扰，保证了每个租户的数据隐私和安全。

此外，`whizard-monitoring-gateway` 还具备高效的数据处理能力，能够处理大量并发请求，确保系统的高性能和稳定性。它与 `whizard-agent-proxy` 共同工作，代理请求，减轻网关的直接负载，并提供更好的性能和安全性。

总的来说，`whizard-monitoring-gateway` 是监控系统中的核心组件，确保了监控数据的可靠接收、处理和存储，并通过租户注入查询功能提供了灵活和安全的数据访问方式。它在整个监控系统中起到了数据转储和查询的关键作用，为系统的稳定运行提供了重要保障。
