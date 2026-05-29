---
type: concept
title: Cross-task Causal Mask
created: 2026-05-28
updated: 2026-05-28
tags: [注意力机制, 因果掩码, 模型架构, 自动驾驶]
related: [automot, layer-wise-shared-attention, vla-视觉-语言-动作]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
---
# Cross-task Causal Mask

Cross-task Causal Mask 是 [[automot|AutoMoT]] 中的注意力设计机制，用于在 Understanding、Decision、Planning 三类任务之间建立明确的信息流。

## 设计原理

AutoMoT 将驾驶任务分解为三个阶段：

1. **Understanding**：场景理解与语义建模
2. **Decision**：驾驶决策（如是否减速、是否变道）
3. **Planning**：轨迹规划

Cross-task Causal Mask 为这三类任务定义了有序的信息流向：

- **Decision 可以读取 Understanding** 的场景理解信息
- **Planning 可以同时读取 Understanding 和 Decision** 的信息
- **任务内部保持双向注意力**，允许同类型token之间自由交互

## 意义

这一机制确保信息从理解到决策到规划的有序流动，避免信息混乱或短路。Action Expert 不是从零开始学习规划，而是在基座模型先验知识的基础上，先理解场景、再基于理解形成决策、最后结合两者生成规划。