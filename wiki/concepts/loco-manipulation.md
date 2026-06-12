---
type: concept
title: Loco-Manipulation（移动操作）
created: 2026-06-09
updated: 2026-06-09
tags: [人形机器人, 具身智能, 机器人任务]
related: [psi-0, psi-lab, humanoid-everyday]
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# Loco-Manipulation（移动操作）

移动和操作结合在一起的人形机器人任务类型，是[[psi-0|Psi-0]]的核心任务定义。

## 典型任务

- 推车
- 递送物品
- 倒水
- 清洁
- 开水龙头
- 拉椅子

## 与桌面操作的区别

机器人不是固定在桌前抓取一个物体，而是要：

- 移动身体
- 协调双臂和手部动作
- 在长程任务中持续处理场景状态变化

这类任务比桌面操作更复杂，更接近人形机器人未来要面对的真实应用场景。

## 研究意义

Loco-Manipulation代表了人形机器人操作能力从受控桌面环境向开放真实世界的延伸，对数据采集、模型训练和评测基准都提出了更高要求。[[humanoid-everyday|Humanoid Everyday]]数据集正是面向这类开放世界操作任务而设计。