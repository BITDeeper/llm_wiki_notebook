---
type: entity
title: OverLayBench
created: 2026-05-24
updated: 2026-05-24
tags: [评测基准, 计算机视觉, 遮挡处理]
related: [occlusionformer, 布局到图像生成]
sources: ["icml-2026：复旦大学新作，如何让布局条件模型生成出更精准的物体遮挡？.md"]
---
# OverLayBench

OverLayBench 是用于评估布局条件图像生成模型在密集重叠场景下遮挡处理能力的标准评测基准。

## 评测维度

OverLayBench 将测试场景按重叠复杂度分为三个级别：
- **Simple（简单重叠）**
- **Regular（常规重叠）**
- **Complex（复杂重叠）**

## 核心指标

- **O-mIoU**：空间准确度
- **Occ.（遮挡顺序）**：测定深度层的正确度
- **Dep.（深度顺序）**：测量层级分歧
- **FID**：生成图像真实感

[[occlusionformer|OcclusionFormer]] 在该基准上全面超越了 Eligen、Creatilayout、InstanceAssemble 等 SOTA 基线方法。