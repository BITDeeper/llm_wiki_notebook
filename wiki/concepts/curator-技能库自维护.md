---
type: concept
title: Curator（技能库自维护）
created: 2026-06-03
updated: 2026-06-03
tags: [agent, 技能管理, 自维护, 性能调优]
related: [自进化学习闭环, hermes-agent, 自进化架构]
sources: ["老黄也来养马了！英伟达版hermes-agent发布.md"]
---
# Curator（技能库自维护）

Curator 是 [[hermes-agent]] 中的自主运行机制，负责技能库的自维护。

## 核心功能

- **打分**：按周期给技能库中的技能打分，评估其实用性和效果
- **合并**：识别并合并重复的技能，避免冗余
- **归档**：将过时的技能归档，保持技能库的整洁

## 意义

Curator 相当于 Agent 自己给自己做性能调优，是 [[自进化学习闭环]] 的重要补充。它确保随着使用时间增长，技能库不会无限膨胀，而是保持高效可用。