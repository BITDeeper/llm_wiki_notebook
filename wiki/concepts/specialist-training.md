---
type: concept
title: Specialist Training
tags: [training-methodology, deepseek, agent]
related: [deepseek-v4, opd-multi-teacher-on-policy-distillation, dsec]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# Specialist Training

Specialist Training（专家特训法）是 DeepSeek 提出的一种后训练范式，旨在通过分领域专项训练来保证模型在各项能力上的性能上限。

## 核心流程
不同于直接训练一个全能模型，DeepSeek V4 首先分别训练针对不同领域的专家模型，包括：
- 数学专家
- 代码专家
- Agent 专家
- 指令跟随专家

## 优势
这种分阶段训练确保了每个特定领域的技能都能被打磨到极致，避免了多任务训练中的相互干扰。

## 融合机制
训练完各个专家模型后，DeepSeek 使用 [[OPD (Multi-teacher On-Policy Distillation)]] 技术将这些专家模型的“灵魂”聚合成一个统一的通用模型。这一过程通过缓存隐藏状态而非 logits 来解决显存瓶颈，实现了高效的模型融合。