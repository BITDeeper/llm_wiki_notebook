---
type: entity
title: Bench2Drive
created: 2026-05-28
updated: 2026-05-28
tags: [评测基准, 自动驾驶, 闭环评测, carla]
related: [automot, nuscenes]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
---
# Bench2Drive

Bench2Drive 是基于CARLA仿真器的闭环驾驶评测基准，用于评估端到端自动驾驶系统的综合驾驶能力。

## 评测指标

- **DS（Driving Score）**：综合驾驶评分
- **SR（Success Rate）**：路线完成成功率

## 在AutoMoT中的使用

[[automot|AutoMoT]] 在Bench2Drive上取得了SOTA性能：
- AutoMoT：87.34 DS / 70.00% SR
- AutoMoT+（含Action Refiner）：89.42 DS / 74.09% SR
- 超越此前最优的SimLingo（85.07 / 67.27）

## 局限性

Bench2Drive基于CARLA仿真器，与真实道路驾驶环境仍存在差距，属于 [[sim2real|仿真到现实迁移]] 讨论的范畴。