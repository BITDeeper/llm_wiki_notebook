---
type: concept
title: UV
tags: [verification, training, automation]
related: [rlaf, dspo]
created: 2026-04-01
updated: 2026-04-01
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# UV

UV（Universal Verifier，通用验证器）是 [[Agnes]] 在 [[RLAF]] 框架中提出的组件，旨在解决传统强化学习中依赖人工标注和奖励机制的问题。

## 工作原理
UV 使用智能评估器替代人工，对模型输出进行自动评估。在 RLAF 框架中，多个 AI Agent 会从逻辑一致性、事实准确性和任务完成度等多个维度对输出进行打分，生成反馈信号。

## 价值
通过实现“AI 训练 AI”的闭环，UV 有助于大幅降低训练成本，并提升模型迭代的自动化程度。