---
type: entity
title: MR-GRPO
tags: [algorithm, reinforcement-learning, ai]
related: [deepgen-1-0, kl-正则化, 辅助-sft-loss]
created: 2026-03-18
updated: 2026-03-18
sources: ["5b参数+4060ti，10秒出图，全流程开源可复现！补齐统一多模态生成编辑的开源版图，让高质量图像生成真正变得更轻量、更普及.md"]
---

# MR-GRPO

[[mr-grpo]] (Multi-Reward Group Relative Policy Optimization) 是 [[deepgen-1-0]] 模型在强化学习阶段引入的优化算法。它是针对传统 Flow-GRPO 的改进版本，旨在解决多模态生成编辑模型在 RL 训练中常见的性能退化问题。

## 核心机制
MR-GRPO 混合使用了 pointwise 和 pairwise 奖励模型来评估生成图像的质量。它整合了三种互补的奖励函数：
1. **VLM Pairwise 偏好奖励**：评估图文对齐度和视觉质量。
2. **OCR 奖励**：专门优化文字渲染的准确度。
3. **CLIP 相似度**：衡量生成图像与提示词的整体语义一致性。

## 稳定性保障
为了防止模型在长程 RL 训练中出现能力崩塌（如图像网格化、通用能力退化），MR-GRPO 引入了双重约束机制：
- **辅助 SFT Loss**：作为结果引导，提供高质量生成的监督信号，锚定模型输出，防止能力漂移。
- **KL 正则化**：作为过程引导，约束模型的去噪轨迹不偏离参考模型太远。

## 效果
实验表明，移除辅助 SFT Loss 后，模型在约 300 步后性能开始崩塌。MR-GRPO 通过上述机制的协同作用，成功将 RL 训练稳定扩展至 1500 步，显著提升了文本渲染能力（+10%）和综合能力（+1.5%）。