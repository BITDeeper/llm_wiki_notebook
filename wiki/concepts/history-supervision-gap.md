---
type: concept
title: History Supervision Gap（历史监督鸿沟）
created: 2026-05-22
updated: 2026-05-22
tags: [视频生成, 自回归模型, 训练推理不一致, 分布偏移]
related: [raven, 自回归视频扩散模型, training-time-test, 批次不变性]
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
---
# History Supervision Gap（历史监督鸿沟）

**History Supervision Gap**（历史监督鸿沟）是 [[raven|RAVEN]] 论文中识别并命名的核心问题，指在 [[自回归视频扩散模型]] 中，训练时的历史上下文与推理时模型依赖的历史之间存在双重不一致。

## 问题定义

历史监督鸿沟包含两个层面：

1. **分布不一致**：训练时模型看到的是真实历史或由真实视频加噪得到的历史，而推理时模型只能依赖自己前面生成的结果。一旦早期 chunk 出现轻微偏差，后面所有 chunk 都要在这个偏差上继续外推，误差沿历史缓存不断累积。

2. **监督缺失**：即使使用 Self Forcing 等方法让模型在训练时看自己的 rollout，历史 cache 通常仍被当作 detached context 使用——后续 chunk 的损失并不会反向监督前面历史表示本身。

## 与其他概念的联系

历史监督鸿沟在精神上与 [[批次不变性]]（DeepSeek V4）相通，都关注训练与推理的一致性问题。但 RAVEN 聚焦于历史上下文的分布一致性，而批次不变性关注的是数值确定性。

## 解决方案

[[raven|RAVEN]] 通过 [[training-time-test]] 框架解决了这一问题：将模型自生成 rollout 中的 clean endpoint 和 noisy state 交错打包进训练过程，使后续 chunk 的损失能够直接监督前面被缓存、被复用的历史表示。