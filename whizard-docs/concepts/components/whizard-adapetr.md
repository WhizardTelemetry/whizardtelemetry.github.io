# Whizard-adapter

`whizard-adapter` 是一个用于同步相关资源并转换为 `Whizard Tenant` 的组件。当前，它部署在 KuberSphere Enterprise 环境中，通过使用 `watch` 机制，监视 `KubeSphere Cluster` 的资源变化，并根据需要创建、删除或更新相应的`Whizard Tenant` 资源，保持之间的关联同步, 以实现代码解耦和提升可扩展性。

综上所述，`whizard-adapter` 是一个强大且灵活的工具，通过使用 `watch` 机制实现了资源的解耦和资源同步。它能够根据资源的变化，在 `Whizard` 中相应地创建、删除或更新 `Tenant`，从而实现 `Tenant` 的同步和解耦。同时，支持扩展 `watch` 的范围，使其能够适应不同类型的资源，提升了系统的可扩展性。
