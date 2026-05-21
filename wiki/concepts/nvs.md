---
type: concept
title: "NVS"
tags: [3d, computer-vision, rendering]
related: [3dgs, hy-world-2-0, worldmirror-2-0]
created: 2026-04-16
updated: 2026-04-16
sources: ["腾讯混元开源世界模型！2.0版本一键生成3d空间，游戏关卡随心造.md"]
---

# NVS

[[NVS]] (Novel View Synthesis，新视角合成) 是指根据一组已知的 2D 图像，生成该场景从未见过的视角下的图像的技术。

## 技术挑战
-   **空间一致性**：新生成的图像必须在几何关系上与已有图像严格对齐，不能出现物体错位。
-   **画面质量**：在视角变化时保持纹理清晰和光照合理。

## 在世界模型中的实现
[[HY-World 2.0]] 通过 HY-WorldStereo 模型实现了业界领先的 NVS 效果。它利用记忆机制和后训练算法，确保在生成多条运镜轨迹时，画面质量不衰减且空间逻辑不冲突，从而支持无缝的 3D 场景扩展。