---
type: concept
title: LA-GRPO（Latent-Anchored GRPO）
created: 2026-05-22
updated: 2026-05-22
tags: [强化学习, 视觉推理, 优化算法, ai机制]
related: [atlas-视觉推理, functional-token, 梯度稀释]
sources: ["meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
origin_date: 2026-05-22
---
# LA-GRPO（Latent-Anchored GRPO）

LA-GRPO（Latent-Anchored GRPO）是 [[atlas-视觉推理|ATLAS]] 范式中针对 [[functional-token|Functional Token]] 稀疏性问题设计的强化学习优化算法。

## 解决的问题

在 ATLAS 的视觉推理输出中，[[functional-token|Functional Token]] 只占极小比例，绝大多数 Token 仍然是普通文本。标准 GRPO 使用 Sequence-level Reward，虽然能整体优化模型，但对于极少数关键 Functional Token 来说，梯度信号很容易被大量普通文本 Token 淹没，产生 [[梯度稀释]] 问题。

## 核心机制

LA-GRPO 在 GRPO 基础上引入 **Token-level Anchor**：

- 如果某条推理轨迹最终答对了问题，并且其中某个 Functional Token 起到了关键作用，LA-GRPO 会更直接地强化这个 Token 的生成概率。
- 相当于在训练中告诉模型：**不是所有词都一样重要，真正触发视觉操作的那个 word 需要被更精准地学习。**

## 设计哲学

LA-GRPO 体现了"稀疏关键信号需要专门强化"的工程洞见。在长序列生成中，少数关键决策点的梯度信号容易被淹没，需要通过锚定机制进行精准强化，而非依赖序列级奖励的均匀传播。