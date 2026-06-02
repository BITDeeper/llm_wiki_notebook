---
type: event
title: "Scaling从预训练到RL的蜕变"
created: 2026-06-01
updated: 2026-06-01
tags: [scaling-law, 强化学习, 预训练, 范式转换]
related: [scaling-law, rl-scaling-law, grpo, deepseek-v4]
sources: ["别光会调grpo，来看看真正的大规模rl是怎么炼的.md"]
origin_date: 2025-01-01
time_span:
  start: 2025-01-01
  end: null
participants: [deepseek-v4, openai]
causes: [scaling-law]
effects: [rl-scaling-law, grpo, scalerl]
significance: high
---
# Scaling从预训练到RL的蜕变

## 概述

2025年以来，AI 进步的核心驱动力正在经历从预训练算力扩展到强化学习算力扩展的范式转换。这一转变标志着 [[scaling-law|Scaling Law]] 概念的第二次蜕变。

## 关键标志

- **DeepSeek-R1**（2025年1月）：RL 训练使用 10 万 H800 GPU 小时，占预训练算力的 3.75%
- **OpenAI o 系列**：从 o1 到 o3，RL 算力增加超过 10 倍
- **Grok 系列**：从 Grok-3 到 Grok-4 有类似的算力飞跃

## 范式差异

| 维度 | 预训练 Scaling | RL Scaling |
|------|--------------|-----------|
| 数学形式 | 幂律（无上限） | S 形曲线（有上限） |
| 标准化程度 | 高 | 低（"更多是艺术而非科学"） |
| 设计空间 | 相对简洁 | 庞大且复杂 |
| 算力定义 | 统一（C = 6ND） | 不统一（采样+更新） |

## 催生的研究

这一范式转换催生了大量 RL Scaling 研究：

- [[grpo]] 及其变体（[[gspo]]、[[dapo]]、[[dr-grpo]]、[[tis]]、[[cispo]]）
- [[rl-scaling-law|RL Scaling Law]] 的系统性研究
- [[scalerl|ScaleRL]] 最佳实践方案
- [[采样算力最优分配]] 方法论

## 当前状态

截至 2026 年 6 月，RL Scaling Law 研究仍处于快速演进阶段。虽然已提炼出有价值的实践要点，但 RL 的 Scaling 趋势仍高度依赖具体训练设置，缺乏预训练 Scaling Law 那样的普适性。

参见：[[scaling-law]]、[[rl-scaling-law]]、[[grpo]]