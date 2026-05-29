---
type: entity
title: nuScenes
created: 2026-05-28
updated: 2026-05-28
tags: [数据集, 评测基准, 自动驾驶, 开环评测]
related: [automot, bench2drive]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
---
# nuScenes

nuScenes 是自动驾驶领域主流的开环规划评测基准和数据集，由Motional（原nuTonomy）发布。

## 评测指标

- **L2误差**：规划轨迹与真实轨迹的平均距离误差（@1s / 2s / 3s）
- **碰撞率**：规划轨迹导致碰撞的比例（@1s / 2s / 3s）

## 在AutoMoT中的使用

[[automot|AutoMoT]] 在nuScenes开环规划评测中取得SOTA安全指标：
- L2@1s / 2s / 3s：0.14 / 0.29 / 0.54，平均L2为0.32
- 碰撞率@1s / 2s / 3s：0.01% / 0.06% / 0.15%，平均碰撞率仅0.07%

## 局限性

nuScenes为开环评测，即模型基于已录制数据生成规划，不与环境交互。与闭环评测（如 [[bench2drive|Bench2Drive]]）相比，开环评测无法完全反映系统的实际驾驶能力。