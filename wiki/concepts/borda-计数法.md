---
type: concept
title: Borda 计数法
tags: [voting-theory, decision-making, autoreason]
related: [autoreason, 三方锦标赛机制]
created: 2026-04-13
updated: 2026-04-13
sources: ["龙虾让位！硅谷顶流ai「爱马仕」一夜闯进微信，冲上全球第一.md"]
---

# Borda 计数法

## 定义
[[Borda 计数法]]（Borda Count）是一种排序投票法，常用于选举和决策制定。在 [[autoreason]] 算法中，它被用来聚合多个“盲评智能体”对不同输出版本（如 [[三方锦标赛机制]] 中的 A、B、AB）的偏好。

## 在 Autoreason 中的应用
在每一轮迭代中，盲评智能体会对生成的候选版本进行排序。Borda 计数法根据排序位置赋予分值（例如，第一名得 N 分，第二名得 N-1 分，以此类推），最终累计得分最高的版本胜出。

## 作用
相比于简单的“多数票决”或单一评分，Borda 计数法能更细腻地反映群体偏好，减少因个别极端评分导致的决策偏差，从而确保 [[autoreason]] 迭代方向的稳定性和正确性。