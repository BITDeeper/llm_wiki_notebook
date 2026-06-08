---
type: entity
title: Hilbert 证明系统
created: 2026-06-06
updated: 2026-06-06
tags: [形式化证明, ai, 数学, 谷歌]
related: [goedel-architect, putnam-bench, 形式化验证]
sources: ["deepseek-v4做数学证明，500倍成本优势：智能体系统刷新多项纪录.md"]
---
# Hilbert 证明系统

此前最具竞争力的开源形式化证明pipeline之一，由谷歌Gemini 2.5 Pro驱动。

## 核心特点

- 采用**递归分解策略**：将难题递归拆分为子目标，形成自上而下的树状结构
- 缺点：一旦某个分支走入死胡同，整棵树的工作可能白费

## 性能对比

在 [[putnam-bench]]（672题）上：
- 通过率：70.0%
- API调用费用：约17万美元

作为对比，[[goedel-architect]] 以294美元达到75.6%通过率，实现约500倍成本优势。

## 控制变量实验

将Hilbert移植到相同的DeepSeek-V4-Flash骨干模型上，在 [[mini-f2f]] 上仅达84.4%，而Goedel-Architect在同样骨干下达到99.2%，证明架构设计是性能差异的关键。