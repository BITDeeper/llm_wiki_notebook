---
type: concept
title: 技能库
tags: [agent, storage, optimization]
related: [skillcraft, skill-reuse, verifier]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 技能库

**技能库**（Skill Library）是用于存储经过验证的、可复用的工具链（即 [[skill-reuse|技能]]）的数据库。它是 [[skillcraft]] 框架中的核心组件，旨在解决 [[agent]] 无法积累和复用成功经验的问题。

## 功能与作用

技能库使得 Agent 能够从“一次性执行”转向“经验积累”。当 Agent 完成任务后，成功的执行轨迹会被抽象为参数化的技能并存入库中。在遇到新任务时，Agent 会优先检索库中是否有可用技能，从而避免重复规划和调用原子工具。

## 维护机制

为了确保入库技能的质量，防止错误技能污染库，所有技能在入库前必须通过 [[verifier]]（验证器）的检查。

## 收益

根据 SkillCraft 的实验数据，使用技能库可以带来：
-   **Token 消耗降低**（最高可达 80%）。
-   **工具调用次数减少**。
-   **任务成功率提升**。