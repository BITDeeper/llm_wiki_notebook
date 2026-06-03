---
type: concept
title: Skill 2.0
created: 2026-06-03
updated: 2026-06-03
tags: [agent, skill, 范式迭代, 工作流]
related: [meta-skill, opensquilla, 办公技能框架, 任务执行范式, 1-n-agent调度]
sources: ["刚刚，meta-skill来了.md"]
origin_date: 2026-06-01
---
# Skill 2.0

Skill 2.0 是从单 Skill 调用到多 Skill 编排的范式迭代。Agent 核心问题从"会不会调用工具"变为"会不会组织工具"。

## 三线交汇

Skill 2.0 的出现被三条线的交汇所倒逼：

1. **模型线**：复杂多步骤指令的理解能力飞速拉升，模型已经"听得懂"复杂的编排指令，Agent Token 数据飞轮已经开始转动
2. **生态线**：社区创建的 Skill 爆发式增长，从用户手写到基于数据自动生成再到社区汇集分享，当可选 Skill 成千上万时，需要更高的抽象层（Meta Skill）简化筛选成本
3. **成本线**：大规模跑大模型依然昂贵，Agent 在线上 trial-and-error 反复摸索最优路径会烧掉大量 Token，通过 Meta Skill 固化复杂度可将优化问题前置到 Skill 层

## 与 Skill 1.0 的对比

| 维度 | Skill 1.0 | Skill 2.0 |
|------|-----------|-----------|
| 核心问题 | 会不会调用工具 | 会不会组织工具 |
| 调用方式 | 单个 Skill 逐一调用 | 多 Skill 自动编排 |
| 人工介入 | Human in the loop | 全自动推进 |
| 抽象层级 | 原子操作 | 工作流白皮书 |

## 行业观察

当前腾讯 Marvis、MiniMax Mavis、Kimi Agent 集群等均在模型层竞争，Skill 层基本停留在被 Claude 带火时的阶段，社区主要还在为单个模型写 SKILL.md。多 Agent 的潜能一直未能被完全释放，[[meta-skill|Meta Skill]] 的出现提供了一种可能性——专为 Agent 团队设计的白皮书，赋予模型更宏观的全局上下文。