---
sidebar_position: 1
description: Whizard is a Prometheus Long-Term Storage powered by Thanos
---

# 什么是 Whizard?

简短说明 Whizard 是什么，不是什么。

Whizard 是一个基于 Thanos 的 operator，专为多租户的 Prometheus 长期存储而设计。它通过定义 Thanos 相关组件的配置，并抽象出服务、存储和租户等自定义资源定义（CRD），实现了开箱即用的体验。

Whizard 在 Thanos 之上，增强并简化 Thanos 多租户部署和管理。

## 为什么选择 Whizard？

- **多租户支持**：Whizard 专为多租户环境设计，使不同的租户可以共享相同的基础设施而互不干扰。
- **自动化管理**：通过 operator 模式，Whizard 自动化了 Thanos 组件的部署、扩展和运维，减少了手动配置和管理的复杂度。
- **开箱即用**：Whizard 定义了清晰的 CRD，使用户可以快速上手和使用，无需深入了解底层的 Thanos 配置细节。
- **自动扩缩容**：Whizard 可以依据租户数量自动调整组件的副本数，确保资源的高效利用。
- **可扩展性**：它利用 Kubernetes 的原生扩展能力和 Thanos 的强大功能，提供了灵活和可扩展的长时间存储解决方案。

## 接下来做什么？

- 参阅入门指南 — [立即开始](https://whizardtelemetry.github.io/docs/whizard-docs/getting-started/)！
- 了解 [Whizard 的概念](https://whizardtelemetry.github.io/docs/whizard-docs/concepts/)。
