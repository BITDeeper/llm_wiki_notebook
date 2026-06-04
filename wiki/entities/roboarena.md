---
type: entity
title: RoboArena
created: 2026-06-03
updated: 2026-06-03
tags: [评测基准, 具身智能, 真机评测]
related: [真机对抗评测, spirit-v1.6, cosmos-3, gm-100]
sources: ["老黄的cosmos-3刚发一天，就被一家中国公司反超了.md"]
origin_date: 2025-01-01
---
# RoboArena

RoboArena 是具身机器人真机对抗评测榜单，可理解为 LMArena 的具身机器人版本。由 UC Berkeley、Stanford、NVIDIA 等机构参与发起，相关论文入选 CoRL 2025 Oral。

## 核心机制

1. **分布式协作**：扩大任务和环境的覆盖面
2. **双盲对决**：降低评测中的主观偏见
3. **Elo 式动态排名**：榜单像体育赛事一样持续更新
4. **开放评测网络**：更多模型可被放到同一个真实世界擂台上检验

## 核心理念

RoboArena 切中了当前机器人基础模型评测的核心问题：很多模型可以在仿真环境或静态 benchmark 上表现很好，但一到真实机器人、真实物体、真实误差环境下就很难稳定复现。RoboArena 将具身智能评测从"静态跑分"推向了"真机对抗"。

## 与其他评测基准的关系

- 与 [[gm-100]]（上海交通大学发布）形成互补：RoboArena 重真机对抗，GM-100 重任务覆盖
- 取代了此前的 RoboChallenge 评测基准

## 里程碑事件

2026年6月，[[千寻智能]] 的 [[spirit-v1.6]] 在 RoboArena 上反超英伟达 [[cosmos-3]] 登顶全球第一，成为首个在该榜单登顶的中国企业。