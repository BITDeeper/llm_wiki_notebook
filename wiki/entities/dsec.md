---
type: entity
title: DSec
tags: [deepseek, infrastructure, agent-training, sandbox]
related: [deepseek-v4, megamoe, specialist-training]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# DSec

DSec 是 DeepSeek 自研的生产级沙箱集群系统，专门用于训练和验证大模型的 Agent 能力。

## 核心特性

### 3FS 分布式文件系统
DSec 采用了名为 3FS 的分布式文件系统，确保了海量训练数据的极速存取。这对于需要频繁读写环境状态和文件操作记录的 Agent 训练至关重要。

### 大规模并发实例
该平台支持数十万个并发 Sandbox 实例同时运行。这意味着在 [[DeepSeek V4]] 的训练过程中，模型可以同时在数十万台“虚拟电脑”上执行代码、测试 Bug 并获得环境反馈。这种大规模的并行实操训练是提升模型 Agent 能力的关键基础设施。

## 设计理念
DSec 的构建体现了 DeepSeek 将 Agent 训练视为“分布式系统工程”的理念。通过提供接近真实的交互环境，DSec 使得模型能够在 mid-training 阶段就“长”出 Agent 能力，而非仅在后期通过微调“教”会模型使用工具。