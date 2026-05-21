---
type: entity
title: DeepVision-VLA
created: 2026-03-25
updated: 2026-03-25
tags: [vla, 模型, 框架, 具身智能]
related: [视觉走神, vision-language-mixture-of-transformers, action-guided-visual-pruning, dinov3, pi-presentation-intelligence]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# DeepVision-VLA

[[DeepVision-VLA]] 是由[[至简动力]]、[[北京大学]]和[[香港中文大学]]联合提出的一种面向机器人操作的视觉增强 [[vla-视觉-语言-动作]] 框架。其核心目标是解决 VLA 模型在深层动作预测时出现的“[[视觉走神]]”问题。

## 核心架构
DeepVision-VLA 基于 [[QwenVLA-OFT]] 构建，主要由两个关键组件构成：

1.  **[[Vision-Language Mixture-of-Transformers]] (VL-MoT)**：
    *   引入高分辨率视觉专家（如 [[DINOv3]]）。
    *   在 VLA 主干网络的深层与视觉专家建立共享注意力机制，直接注入高质量视觉特征，防止深层视觉表征退化。

2.  **[[Action-Guided Visual Pruning]] (AGVP)**：
    *   利用浅层动作注意力来筛选视觉专家 Token。
    *   仅保留与当前动作最相关的 Top-K 视觉信息，降低计算开销并减少噪声干扰。

## 性能表现
*   **仿真环境**：在 [[RLBench]] 基准测试中达到 83% 的平均成功率。
*   **真实世界**：在真实机器人任务中达到 91.7% 的平均成功率，相比 [[Pi0.5]] 提升了 7.5%（相比基线模型提升约 18%）。
*   **泛化能力**：在未见过的背景和光照条件下表现出稳健的操作能力，证明其提升源于视觉建模能力的增强而非单纯的任务记忆。

## 与现有方案的区别
与传统通过增加视觉提示或辅助目标的方法不同，DeepVision-VLA 专注于解决深层推理过程中的视觉信息丢失问题，强调在“正确的位置”（深层）以“正确的方式”（共享注意力）增强视觉表征。