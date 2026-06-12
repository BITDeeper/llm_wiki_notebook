---
type: concept
title: 混合Transformer（MoT）
created: 2026-06-08
updated: 2026-06-08
tags: [architecture, transformer, 3d-vision]
related: [sam-3d]
sources: ["rss/永远可以期待的meta！cvpr-2026-最佳论文提名奖作品“sam-3d”解读.md"]
---
# 混合Transformer（MoT）

混合Transformer（Mixture-of-Transformers, MoT）是[[sam-3d|SAM 3D]]几何模型采用的架构，参数量1.2B。

## 在SAM 3D中的应用
几何模型采用MoT架构，负责联合预测物体的粗糙形状和三维布局（旋转、平移、缩放）。其输出传递给纹理与精细化模型进行进一步处理。