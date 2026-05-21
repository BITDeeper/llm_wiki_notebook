---
type: concept
title: Latent CoT (隐空间思维链)
tags: [reasoning, embodied-ai, cognitive-architecture]
related: [last-r1, lapo, chain-of-thought, vla-视觉-语言-动作]
created: 2026-05-11
updated: 2026-05-11
sources: ["机器人模型r1时刻！不只学动作更学会物理推理，libero-99.9%.md"]
---

# Latent CoT (隐空间思维链)

**Latent CoT** (Latent Chain-of-Thought) 是一种在具身智能领域使用的推理机制，指模型在生成最终动作之前，先在连续的隐空间中生成一段“推理嵌入”。

## 与语言 CoT 的区别
传统的 **Chain-of-Thought (CoT)** 通常指大语言模型（LLM）通过生成中间文本步骤来增强推理能力。然而，在具身智能（机器人操作）场景中，许多关键信息（如物体接触、摩擦力、位姿微调）难以用自然语言精确描述。

**Latent CoT** 通过在高维连续隐空间中进行推理，能够更有效地表征和处理这些非语言化的物理信息。

## 工作原理
在 [[LaST-R1]] 等模型中，Latent CoT 的流程如下：
1.  **输入**: 接收视觉观测和语言指令。
2.  **隐空间推理**: 生成一段 `latent reasoning embeddings`，用于建模场景结构、物体关系和未来的物理动态。
3.  **动作生成**: 基于上述隐空间推理结果，并行生成具体的动作指令。

## 自适应推理
为了平衡计算效率和推理深度，Latent CoT 通常结合 **Adaptive Latent CoT** 机制。模型通过学习生成特殊的 `<latent_end>` token 来动态决定推理的长度：
- **简单任务**: 快速结束推理，直接执行。
- **复杂任务**: 延长推理时间，进行更深入的物理规划。

## 价值
Latent CoT 赋予了机器人一种“物理直觉”，使其不再是简单地模仿训练数据中的像素轨迹，而是能够理解动作背后的物理因果，从而在面对环境变化时具有更好的泛化能力。