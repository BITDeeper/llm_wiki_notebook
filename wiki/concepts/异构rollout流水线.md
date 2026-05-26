---
type: concept
title: 异构Rollout流水线
created: 2026-05-25
updated: 2026-05-25
tags: [强化学习, 多模态生成, rollout, 流水线]
related: [verl-omni, 多模态生成rl后训练, vllm-omni]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# 异构Rollout流水线

异构 Rollout 流水线是多模态生成 RL 区别于文本 RL 的核心技术挑战之一。

## 与文本 Rollout 的本质区别

在传统文本 RL 训练中，rollout 是离散的 token 序列，模型结构单一（通常就是一个 Transformer）。但在多模态生成 RL 中，rollout 发生在连续的 latent 空间中，是去噪轨迹而非 token 序列。

## 多阶段异构组件

单次多模态 rollout 可能需要调用多个异构模型组件，走多阶段流水线：

1. **Text Encoder**：将文本提示编码为条件向量
2. **DiT（扩散 Transformer）**：在 latent 空间中进行多步去噪
3. **VAE（变分自编码器）**：将 latent 解码为最终图像/视频

每个组件的计算特性、显存需求和并行策略各不相同，编排这些异构组件的高效协同是 [[verl-omni]] 框架解决的核心工程问题之一。