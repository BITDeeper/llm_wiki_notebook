---
type: concept
title: Warmup Deep Credit Assignment
created: 2026-06-09
updated: 2026-06-09
tags: [训练稳定性, 梯度回传, 递归架构]
related: [hrm-分层递归架构, hrm-text, magic-norm]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# Warmup Deep Credit Assignment

[[hrm-分层递归架构|HRM]]架构中引入的渐进式梯度回传策略。

## 机制

- **训练初期**：仅对最后2个递归步骤进行梯度回传
- **随训练稳定**：回传范围线性增加到最后5个步骤

类比"循序渐进的追责机制"：先让模型为距离输出最近的几步内部计算负责，稳定后再逐步让更早的计算过程承担责任。既利用更深的递归计算，又避免模型从一开始就暴露在过长的梯度路径中。