---
type: concept
title: DINO潜空间
tags: [表征学习, 计算机视觉, 具身智能]
related: [wam-world-action-model, lda-1b]
created: 2026-04-29
updated: 2026-04-29
sources: ["银河通用lda定义全域数据利用范式，跨本体世界动作大模型开启具身gpt-2时刻.md"]
---

# DINO潜空间

[[dino-潜空间]] 是指使用 DINO (Self-distillation with no labels) 特征构建的紧凑潜在表示空间。在 [[lda-1b]] 模型中，动力学建模在此潜空间中进行，而非传统的像素空间。

## 优势

-   **专注本质**：过滤掉光照、纹理、反射等像素级细节，使模型专注于物体的结构、形状和动作的本质。
-   **计算效率**：相比像素空间，潜空间维度更低，计算更高效。
-   **泛化能力**：对视觉干扰（如背景变化、光照改变）具有更强的鲁棒性。

## 应用

在 [[wam-world-action-model]] 框架中，利用 DINO 潜空间进行前向/逆向动力学建模，是实现高效跨本体泛化和长程任务处理的关键技术之一。