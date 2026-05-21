---
type: concept
title: PivotRL
tags: [reinforcement-learning, agent, stability, training]
related: [nemotron-3-super, 强化学习, agent-训练]
created: 2026-03-12
updated: 2026-03-12
sources: ["老黄入局吃龙虾！英伟达发布最强开源agent推理模型.md"]
---

# PivotRL

## 定义
[[PivotRL]] 是一种针对智能体训练的强化学习技术，旨在提升模型在多步工作流中的行为稳定性。

## 核心机制
在智能体编程和搜索等关键领域，专家轨迹中存在许多不确定性较高的决策点。PivotRL 的核心思想是：
- **重点强化**：识别并重点强化这些高不确定性的决策点。
- **防止漂移**：通过针对性的反馈修正，有效遏制长程任务中常见的推理漂移风险。

## 应用场景
该技术特别适用于需要长链路推理和工具调用的 [[Agent]] 任务。[[英伟达]] 在训练 [[nemotron-3-super]] 时引入了 PivotRL，以确保模型在追求效率的同时，在陌生领域或复杂流程中不会出现逻辑偏差。