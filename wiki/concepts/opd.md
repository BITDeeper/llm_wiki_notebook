---
type: concept
title: OPD (在线策略蒸馏)
tags: [training, alignment, deepseek]
related: [deepseek-v4, rlhf, distillation]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# OPD (在线策略蒸馏)

[[OPD]] (On-Policy Distillation) 是 [[DeepSeek V4]] 在后训练阶段引入的一种新方法论，完全替代了传统的 Mixed RL 阶段。

## 流程
OPD 分为两个主要步骤：
1. **领域专家训练**：针对数学、代码、Agent、指令跟随等不同领域，分别独立训练一个专家模型。这些模型先经过 SFT（监督微调）打底，再使用 GRPO 进行特定领域的强化学习。
2. **知识合并**：通过 on-policy distillation 将十几个专家模型的知识合并到一个统一的 Student 模型中。Student 模型自己进行 rollout，并通过最小化反向 KL 散度向对应领域的专家对齐（例如，数学任务向数学专家对齐）。

## 工程考量
引入 OPD 的部分原因是工程上的限制：十几个万亿参数级别的 Teacher 模型无法同时加载到显存中。
- **权重 Offload**：Teacher 权重存储在分布式存储中，按需加载。
- **缓存优化**：只缓存 hidden states，不 materialize logits。
- **批处理**：按 Teacher 对样本进行排序，保证每个 mini-batch 只需加载一个 Teacher head。

## 意义
OPD 提供了一种优雅且工程上可行的多领域对齐方案，使得单一模型能够集多个领域专家之长。