---
type: concept
title: Meta-GRPO（元群组相对策略优化）
created: 2026-05-25
updated: 2026-05-25
tags: [强化学习, 元学习, 视觉分割, 训练方法]
related: [conceptseg-r1, 概念分割]
sources: ["视觉分割进入下半场：conceptseg-r1-开启“分割任意概念”新范式.md"]
---
# Meta-GRPO（元群组相对策略优化）

Meta-GRPO（Meta-Group Relative Policy Optimization）是一种元强化学习机制，由 [[conceptseg-r1]] 团队提出，用于解决视觉分割中模型"头痛医头、无法举一反三"的问题。

## 核心思想

Meta-GRPO 的核心是让模型在看参考图像时，不仅要找出目标，还要**总结出背后的通用规则**。这与传统的"给一个例子、学一个例子"的方式根本不同——模型必须学会从演示中归纳可迁移的规则。

## 拆分参考策略

Meta-GRPO 采用拆分参考策略（Split-Reference Strategy）：

1. 将参考图分为**支持集（Support Set）**：用于教授规则。
2. **代理查询集（Proxy Query Set）**：用于测试规则。
3. 模型先从支持集归纳规则，在代理集上验证规则正确性，最后才处理真正的目标查询图。

## 元奖励机制

团队设计了元奖励（Meta Reward）：只有当模型在代理集和目标集上都正确识别时，才能获得高分。这种机制强迫模型必须学会通用规则，而非死记硬背个别样本。

## 意义

Meta-GRPO 赋予了 AI 像人类一样通过"举一反三"理解复杂规则的能力，是 [[概念分割]] 从理论到实践的关键技术桥梁。