---
type: concept
title: 不确定性量化
tags: [trustworthy-ai, statistics, machine-learning, risk-management]
related: [conformal-prediction, cheng-lu, hallucination, ai-for-science]
created: 2026-02-07
updated: 2026-02-07
sources: ["华科校友程璐斩获美国nsf科研奖！用可信ai助力ai医疗奇点.md"]
---

# 不确定性量化

**不确定性量化**（Uncertainty Quantification, UQ）是指让 AI 系统具备评估并表达其预测置信度的能力。简单来说，就是让 AI 能够回答“我对这个答案有多大把握”。

## 为什么需要 UQ？
- **信任危机**：在 [[hallucination|AI 幻觉]] 和偏见频发的背景下，用户难以判断何时可以信任 AI 的输出。
- **高风险应用**：在医疗、金融、自动驾驶等领域，一个错误的预测可能导致灾难性后果。AI 必须知道何时“不知道”，并请求人类介入。

## 实现方法
- **统计学工具**：如 [[conformal-prediction|共形预测]]，为模型输出提供数学上的置信区间。
- **集成方法**：通过多个模型的预测差异来估计不确定性。
- **贝叶斯方法**：通过后验分布来表示参数和预测的不确定性。

## 认知意义
- **知之为知之，不知为不知**：UQ 赋予了 AI 类似人类的诚实品质，这是其从“聊天玩具”走向“专业助手”的关键入场券。
- **辅助人类决策**：在 [[三系统认知框架]] 中，具备 UQ 能力的 AI 能为作为“系统3”的人类提供更可靠的监督依据，帮助人类判断是否采纳 AI 的建议。