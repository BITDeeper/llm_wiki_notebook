---
type: concept
title: 以人为本的数据采集
created: 2026-03-11
updated: 2026-03-11
tags: [具身智能, 数据采集, 机器人学习]
related: [robot-centric-ji-qi-ren-zhong-xin-lun, embodiment-gap-ju-shen-hong-gou, lingchu-intelligence, psi-synengine]
sources: ["20亿砸向00后创业机器人公司！估值一年暴涨7倍，国家级资本重仓.md"]
---

# 以人为本的数据采集

以人为本的数据采集（Human-Centric Data Collection）是一种具身智能领域的数据获取范式，指直接采集人类操作的真实数据，而非通过机器人遥操作或仿真环境生成数据。

## 核心逻辑

### 任务本质 vs 机器结构
与 [[robot-centric-ji-qi-ren-zhong-xin-lun]]（以机器人为中心）不同，Human-Centric 强调让模型学习人类如何完成任务（Task Essence），而不是模仿特定硬件结构（如夹爪）的运动轨迹。

### 优势
1.  **打破硬件锁定**：数据不依赖于特定的机器人本体，理论上可以迁移到任何构型的机器人上（如五指灵巧手）。
2.  **高自由度**：人类手部拥有 20 多个自由度，采集的数据比简单的夹爪开合数据包含更丰富的语义信息。
3.  **解决仿真鸿沟**：直接采集真实物理世界的交互数据，避免了 [[sim2real]]（仿真到现实）迁移中的精度损失和域差问题。

## 实现方式
该范式通常需要借助高精度的穿戴设备（如 [[psi-synengine]] 中的触觉手套）来记录人类操作时的多维信息（视觉、触觉、本体感觉、语言）。

## 案例
[[lingchu-intelligence]]（灵初智能）是这一范式的典型代表，他们通过采集人类原生数据，声称将数据采集成本降低至传统遥操作的 10%，并实现了跨本体的泛化能力。