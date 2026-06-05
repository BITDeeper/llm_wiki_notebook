---
type: concept
title: FLOPs（浮点运算次数）
created: 2026-06-04
updated: 2026-06-04
tags: [ai, 算力, 训练, 度量单位]
related: [scaling-law, claude-mythos]
sources: ["微软「意外泄密」：claude-mythos万亿参数，训练规模浮出水面？.md"]
---
# FLOPs（浮点运算次数）

FLOPs（Floating Point Operations）是衡量 AI 模型训练算力消耗的标准单位，表示训练过程中执行的浮点运算总数。它是 [[scaling-law|Scaling Law]] 的核心度量维度之一。

## 算力规模演进

- **2023 年**：业界争论 10²⁶ FLOPs 是否已是理性极限
- **2026 年**：[[claude-mythos|Claude Mythos]] 达到 6.1×10²⁷ FLOPs（95% 置信区间 5.3×10²⁷ 至 7.1×10²⁷）

## 意义

FLOPs 是衡量 AI 模型训练投入的最直接指标。从 10²⁶ 到 10²⁷ 的跃升代表了一个数量级的算力增长，对应 [[scaling-law|Scaling Law]] 所描述的模型性能可预测提升。这一指标也用于跨模型能力对比，如 Mythos 的训练算力与 Gemini 3.1 Pro 相当。