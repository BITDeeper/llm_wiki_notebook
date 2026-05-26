---
type: concept
title: 多模态生成RL后训练
created: 2026-05-25
updated: 2026-05-25
tags: [强化学习, 多模态生成, 后训练, 对齐]
related: [verl-omni, flowgrpo, vlm-as-judge, 异构rollout流水线]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# 多模态生成RL后训练

多模态生成 RL 后训练是指利用强化学习对覆盖图像/视频/音频理解与生成的扩散和全模态模型进行人类偏好对齐的技术。RL 已成为将大型生成模型对齐到人类偏好与下游任务奖励的有力手段，但过去一年的快速演进主要集中在 LLM 领域，多模态生成 RL 仍存在关键缺口。

## 三大核心挑战

### 1. 扩散与全模态扩展
将 RL 训练能力从自回归文本模型延伸到多模态、非自回归的世界，需要支持扩散 Transformer 主干、混合 AR-DiT 架构、统一理解+生成模型等多种架构范式。

### 2. 异构 Rollout 流水线
与文本 RL 中 rollout 是 token 序列不同，多模态生成 RL 的 [[异构rollout流水线|rollout 是连续 latent 空间中的去噪轨迹]]。单次 rollout 可能调用多个异构模型组件，走多阶段流水线（text encoder → DiT → VAE），技术复杂度显著提升。

### 3. 复杂负载调度
多模态 RL 训练的奖励函数本身就是多模态模型（VLM judge、OCR scorer 等），多模态生成 rollout 的峰值显存远高于文本生成，工作流编排的难度大幅增加。

## 当前进展

[[verl-omni]] 是首个系统性尝试填补上述缺口的框架，通过集成 [[vllm-omni]] 的异步高吞吐 serving、灵活的奖励引擎和模块化训练后端，为多模态生成 RL 后训练提供了基础设施。