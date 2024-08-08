---
sidebar_position: 3
description: Whizard 存储
---
# Whizard Storage

`Whizard Storage` 是一个抽象设计，旨在支持对象存储，类似于 Thanos 的存储解决方案。它为监控数据提供了高效的存储和检索机制，当前支持 Amazon S3 作为存储后端。

## 使用场景

`Whizard Storage` 适用于需要高效存储和检索大量监控数据的场景。通过支持对象存储，`Whizard Storage` 能够提供可靠的存储解决方案，确保数据的持久性和可用性。

## Storage CRD 定义

参见 [StorageSpec](/whizard-docs/references/api/api.md)

## 未来计划

未来，`Whizard Storage` 计划扩展支持更多的对象存储服务，如 Google Cloud Storage、Azure Blob Storage 等，以满足不同用户的需求。同时，将进一步优化存储和检索机制，提高系统的性能和效率。

总的来说，`Whizard Storage` 是一个强大的存储解决方案，通过支持对象存储，为监控数据提供了高效、可靠的存储和检索机制，确保数据的持久性和可用性。
