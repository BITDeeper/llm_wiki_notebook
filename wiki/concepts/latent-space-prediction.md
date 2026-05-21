---
type: concept
title: 潜在空间预测
created: 2026-05-03
updated: 2026-05-03
tags: [representation-learning, efficiency, world-model]
related: [jepa, leworldmodel, autoencoder]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# 潜在空间预测

[[latent-space-prediction]] 是指模型不直接预测原始数据（如像素），而是预测经过编码器压缩后的抽象特征。这是 [[jepa]] 架构和 [[leworldmodel]] 的核心特征。

## 工作流程

1.  **编码**：输入数据（如 64x64 图像）通过编码器被压缩为低维向量（如 50 维）。
2.  **预测**：模型在低维空间中预测下一时刻的特征向量。
3.  **解码（可选）**：如果需要可视化，可以使用解码器将预测特征还原为图像。

## 优势

- **极高的计算效率**：[[leworldmodel]] 将观测数据缩小了约 200 倍，这使得规划速度比像素级预测模型快 48 倍。
- **聚焦物理规律**：忽略不相关的像素细节（如光照微变），专注于物体位置、速度等核心物理属性的变化。
- **鲁棒性**：在潜在空间进行规划对视觉噪声具有更强的抗干扰能力。