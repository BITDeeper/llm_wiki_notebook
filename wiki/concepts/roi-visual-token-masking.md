---
type: concept
title: ROI Visual Token Masking
created: 2026-03-25
updated: 2026-03-25
tags: [概念, 实验方法, 探测]
related: [视觉走神, deepvision-vla]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# ROI Visual Token Masking

[[ROI Visual Token Masking]] 是一种用于探测模型内部行为的实验方法，全称为感兴趣区域视觉 Token 掩蔽。

## 用途
该方法用于定量测量 [[vla-视觉-语言-动作]] 模型在动作预测时对特定视觉区域的敏感性。

## 原理
通过掩蔽图像中任务关键区域（ROI）对应的视觉 Token，观察模型动作预测误差（MSE）的变化。

## 发现
在 [[DeepVision-VLA]] 的相关研究中，ROI Visual Token Masking 实验揭示了 VLA 模型的层级特性：
*   **浅层**：掩蔽关键视觉 Token 会显著增加动作预测误差，说明浅层高度依赖视觉信息。
*   **深层**：掩蔽关键视觉 Token 对动作预测的影响微弱，这为“[[视觉走神]]”现象提供了定量证据。