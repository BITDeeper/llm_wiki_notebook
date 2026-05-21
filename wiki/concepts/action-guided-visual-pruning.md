---
type: concept
title: Action-Guided Visual Pruning
created: 2026-03-25
updated: 2026-03-25
tags: [概念, 算法, 优化]
related: [deepvision-vla, vision-language-mixture-of-transformers, 视觉走神]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# Action-Guided Visual Pruning

[[Action-Guided Visual Pruning]] (AGVP) 是 [[DeepVision-VLA]] 框架中提出的一种特征筛选策略，旨在解决引入高分辨率视觉专家带来的计算开销和噪声问题。

## 核心思想
虽然 VLA 模型的深层存在“[[视觉走神]]”现象，但浅层通常仍保留着较强的任务视觉 grounding 能力。AGVP 利用这一特性，利用浅层的动作注意力来指导深层视觉特征的筛选。

## 实施步骤
1.  **提取响应图**：从 VLA 的若干浅层提取 action-conditioned 的视觉响应图。
2.  **聚合映射**：对这些浅层结果进行聚合，并将其映射到视觉专家（如 [[DINOv3]]）的高分辨率 Token 空间。
3.  **Top-K 剪枝**：仅保留相关性最高的 Top-K 个视觉专家 Token，将其送入深层模块，其余背景或无关区域 Token 被剪枝。

## 效果
*   **降低计算量**：显著减少了需要处理的 Token 数量。
*   **去噪**：过滤掉了背景和无关区域的视觉噪声。
*   **对齐**：确保深层获得的视觉增强是与“当前动作真正需要”相对齐的。