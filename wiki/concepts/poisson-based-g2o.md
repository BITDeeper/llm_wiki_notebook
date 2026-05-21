---
type: concept
title: 泊松式高斯到占据转换
tags: [3d-vision, training-methodology]
related: [legoocc, language-embedded-gaussians]
created: 2026-05-05
updated: 2026-05-05
sources: ["cvpr-2026-oral｜横扫室内3d场景，港科大（广州）打造单目开放词汇占据预测新sota.md"]
---

# 泊松式高斯到占据转换

[[泊松式高斯到占据转换]]（Poisson-based Gaussian-to-Occupancy, Poisson-based G2O）是 [[LegoOcc]] 提出的一种将 3D 高斯分布聚合为体素占据概率的方法。

## 背景问题

在仅有二值占据监督（弱监督）的设定下，传统的伯努利并集式聚合容易导致训练不稳定。这是因为 2D 渲染时使用了基于不透明度的 $\alpha$ 混合，而 3D 占据聚合时若忽略不透明度，会导致两者之间存在优化冲突。

## 解决方案

LegoOcc 将每个高斯在某个体素位置的有效贡献视作泊松事件强度，并将“该位置是否被占据”解释为“至少发生一次事件”的概率。这种基于泊松过程的建模方式在弱监督条件下更稳定，避免了性能退化。