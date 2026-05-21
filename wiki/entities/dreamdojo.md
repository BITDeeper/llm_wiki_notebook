---
type: entity
title: DreamDojo
tags: [model, nvidia, robotics, world-model]
related: [physgen, par-physical-autoregressive-model, 物理自回归]
created: 2026-03-27
updated: 2026-03-27
sources: ["732m模型超越7b！机器人操控新范式：从视频中「悟」物理.md"]
---

# DreamDojo

DreamDojo 是英伟达（NVIDIA）于 2026 年 2 月发布的基于大规模视频训练的通用机器人世界模型。

## 技术理念
DreamDojo 与中山大学团队的 [[physgen]] 和 [[par-physical-autoregressive-model]] 在核心思路上高度重合，两者独立开发却达成了共识：
1.  **预测目标**：未来的动作+视频联合体（物理量）。
2.  **架构选择**：自回归逐步展开（契合物理因果）。
3.  **表示方法**：连续空间建模（避免量化误差）。
4.  **训练范式**：零动作预训练（视频物理先验迁移）。

## 意义
DreamDojo 的发布从行业巨头的角度侧面印证了“物理自回归”路线的潜力，表明该方向正在成为机器人操控领域的主流技术标准之一。