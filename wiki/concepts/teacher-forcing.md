---
type: concept
title: Teacher-Forcing
tags: [machine-learning, training-technique]
related: [promptecho, reward-signal]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# Teacher-Forcing

[[teacher-forcing]] 是一种在训练序列模型时常用的技术，指在时间步 $t$，将真实的上一时间步输出（或标准答案）作为当前时间步的输入，而不是使用模型自己在 $t-1$ 步生成的输出。

## 在 PromptEcho 中的应用

在 [[promptecho]] 方法中，[[teacher-forcing]] 模式被用于计算 Reward。具体而言，冻结的 VLM 不是自由生成图像描述，而是被强制以原始 Prompt 的每个 Token 作为输入来计算预测概率。

## 作用

这种机制确保了 Reward 信号的**确定性**。通过强制模型预测原始 Prompt，[[promptecho]] 避免了自回归生成带来的随机性和幻觉问题，从而获得了一个连续、稳定的对数似然值作为 Reward，能够敏锐地捕捉不同生成图像在 Prompt 遵循程度上的细微差异。