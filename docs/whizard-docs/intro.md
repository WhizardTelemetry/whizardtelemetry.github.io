---
sidebar_position: 1
description: Whizard is a Prometheus Long-Term Storage powered by Thanos
---

# 什么是 Whizard?

简短说明 Whizard 是什么，不是什么。

Whizard 是高可用、可扩展、可存储与查询海量监控数据、易运维、安全的 Prometheus 长期存储方案，提供 Thanos 及相关监控组件的 Kubernetes 原生部署和管理。


## 功能亮点

- 云原生化部署与运维：所有组件均支持以 CRD 的方式定义与维护，更易于配置与运维。包括 Thanos 的 Router, Ingester, Compactor, Store, Query, QueryFrontend, Ruler 等组件以及 Whizard 引入的 Service, Tenant, Storage 等。

- 基于租户的自动水平扩展机制：基于 CPU 与 Memory 的 HPA 对于稳定性要求更高的企业级有状态工作负载并不是最好的选择，为此 Whizard 创造性地引入了基于租户的工作负载水平伸缩机制。Ingester，Compactor，Ruler 等均支持随着租户的创建与删除进行水平伸缩，保证租户工作负载稳定运行的同时，提供了租户级别的水平扩展与资源回收机制。

- 适配 K8s 多集群管理：为了对 K8s 多集群监控告警提供更好的支持，Whizard 的维护者开发了 whizard-adapter ，可根据 K8s/KubeSphere 集群的创建与删除自动创建或删除 Whizard 的租户，进而触发 Thanos 有状态工作负载的自动水平伸缩。

- 规则计算更好的扩展性：Thanos 原生的 Ruler 的水平扩展性并不好，无法满足海量 K8s 集群(租户)的 Alerting Rules 与 Recording Rules 的计算需求。为此 Whizard 的维护者为每个租户引入了专属的 Ruler，其可随着租户的生命周期自动创建与删除；除了租户专属的 Ruler， Whizard 的维护者还引入了全局 Ruler 的分片机制，用于满足跨海量集群(租户)的全局规则(Alerting rules or Recording Rules)计算需求;  此外 Thanos Ruler 目前尚不支持将计算后的各租户的 recording rules 分别写入各自租户的 Ingester，Whizard 的维护者为此也做了额外的支持。

- 更细粒度的规则管理：目前社区流行用 PrometheusRule 来管理 Prometheus recording rules 及 alerting rules，这种方式存在的问题是 PrometheusRule 里存在属于多个规则组的多条规则，粒度过大，不宜并发编辑与维护。为了解决这个问题，Whizard 维护者引入了更细粒度的 RuleGroup 的 CRD 用于管理属于一个规则组内的所有规则；此外还引入了3-tiers 的 RuleGroup 管理机制，RuleGroup 用于管理某一 namespace 下的规则组；ClusterRuleGroup 用于管理某一集群范围内的集群规则组；GlobalRuleGroup 用于管理扩跨多集群范围的全局规则组；在做到更细粒度规则管理的同时，满足了企业用户对不同权限范围的规则进行单独管理的需求。

- 支持对象存储网关 Store 的按时间分片查询：Thanos 通过将 Prometheus 的数据写入对象存储并支持从对象存储查询海量的监控数据，如果查询的时间范围过大，会导致 Store 占用资源过多，为止 Whizard 的维护者为 Store 加入了按时间分片查询的机制，用户可以根据要查询的时间段分别创建不同的 Store CRD。

- 引入 Gateway 及 Agent Proxy 以对数据的写入与读取进行更好的控制：客户端如 Prometheus Agent 或 Prometheus 无需直接与 Gateway 交互，通过 Whizard Agent Proxy  即可代理数据写入与查询请求至 Whizard Gateway，Whizard Gateway 进而可根据租户的权限放行或拒绝查询或写入请求。

- 支持企业级的安全需求：企业用户通常对安全性有更高的需求。Whizard 除了支持组件间更方便的配置 tls 之外，还将 Thanos 的 WebUI 通过 Whizard Gateway 暴露出来并支持 Basic Auth 与 OAuth2-Proxy 两种认证方式，企业用户可以更安全的访问 Thanos 的 WebUI.

- 更方便的 2-Tiers 组件配置：Whizard 支持 Service 与 Comopnents 两级组件配置，通用的配置可放在全局的 Servce 里做统一配置，各租户的所有组件共用；特殊的定制化配置可放在单独的 Component 里做个性化的定制。


## 接下来做什么？

- 参阅入门指南 — [立即开始](https://whizardtelemetry.github.io/docs/category/%E5%BC%80%E5%A7%8B%E4%B8%8A%E6%89%8B)！
- 了解 [Whizard 的概念](https://whizardtelemetry.github.io/docs/category/%E6%A6%82%E5%BF%B5/)。
