---
type: concept
title: 语言嵌入高斯
tags: [3d-vision, representation-learning]
related: [legoocc, open-vocabulary-occupancy-prediction]
created: 2026-05-05
updated: 2026-05-05
sources: ["cvpr-2026-oral｜横扫室内3d场景，港科大（广州）打造单目开放词汇占据预测新sota.md"]
---

# 语言嵌入高斯

[[语言嵌入高斯]]（Language-embedded Gaussians, LE-Gaussians）是 [[LegoOcc]] 提出的一种统一 3D 表示方法。

## 定义

在这种表示中，每个 3D 高斯不仅包含描述其几何形状的参数（如位置、协方差、不透明度），还携带一个与语言空间对齐的语义嵌入向量。

## 优势

-   **统一架构**：避免了在几何分支和语义分支中使用两套独立表示（如双分支架构），减少了信息损耗。
-   **联合优化**：使得“空间哪里有东西”（几何）和“这个东西是什么”（语义）能在同一个框架下协同优化。
-   **开放词汇能力**：通过将语义嵌入与语言模型对齐，使得模型能够响应任意文本查询。