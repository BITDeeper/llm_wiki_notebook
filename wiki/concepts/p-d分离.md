---
type: concept
title: P/D分离
created: 2026-05-14
updated: 2026-05-14
tags: [推理架构, 大模型部署, 分布式系统]
related: [sglang, mooncake, deepseek-v4]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
---
# P/D分离

大模型推理中将 Prefill（预填充）和 Decode（解码）拆分部署的架构模式。

## 技术原理

- **Prefill**：处理输入 prompt 的并行计算阶段，计算密集型
- **Decode**：逐 token 生成的串行计算阶段，访存密集型

两者资源需求差异巨大，拆分部署可以分别优化资源分配和调度策略。

## 性能表现

[[sglang|SGLang]] 通过 P/D 分离架构，在12个 H100 节点上实现：
- 输入吞吐：52.3k token/s/node
- 输出吞吐：22.3k token/s/node
- 成本比 DeepSeek 官方 API 便宜5倍

## 生态关联

P/D 分离与 [[mooncake|Mooncake]] 的 KVCache 解耦架构深度关联，共同构成大模型推理生产部署的核心基础设施。