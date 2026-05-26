---
type: concept
title: FlowGRPO
created: 2026-05-25
updated: 2026-05-25
tags: [强化学习算法, 扩散模型, flow-matching]
related: [verl-omni, 多模态生成rl后训练, 异构rollout流水线]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# FlowGRPO

FlowGRPO 是一种面向 flow-matching 模型的在线策略（on-policy）强化学习方法，是 [[verl-omni]] 框架中演示的核心算法。

## 算法原理

FlowGRPO 通过扩散策略模型做多步 SDE（随机微分方程）采样以实现高效的 RL 探索，并采用基于模型的奖励评估生成质量。

## 训练流程

训练流程主要分为四个步骤：

1. **Rollout 生成**：扩散策略模型生成样本 rollout，收集 log probability 和生成图像的轨迹
2. **奖励模型打分**：奖励模型给每个生成样本打分，用于计算 trajectory advantage
3. **策略优化**：用 FlowGRPO CLIP-style loss 更新策略，基于 advantage 优化奖励
4. **权重同步**：定期将 trainer 最新的策略权重同步到 rollout worker，确保生成样本反映最新策略

## 验证效果

在 Qwen-Image OCR 任务中，使用 Qwen3-VL-8B-Instruct 作为奖励模型（通过读取生成图像中的渲染文字与 ground truth 比对评分），仅120步训练后生成图像的文字渲染质量即有显著提升，critic reward 与 validation reward 收敛稳定。

## 性能数据

- **LoRA 微调**：在 NVIDIA H800 GPU 上运行，将奖励模型放到独立 GPU 与策略训练 overlap，每步 wall-clock 时间降低约14%
- **全模型微调**：non-CFG 全模型在 4×NVIDIA H200 上达 0.510 images/GPU/s，每步约250秒