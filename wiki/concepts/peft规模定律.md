---
type: concept
title: PEFT规模定律
created: 2026-06-08
updated: 2026-06-08
tags: [规模定律, peft, lora, 协作智能, mind-lab]
related: [mixture-of-lora, macaron-v1-preview, mind-lab, scaling-law]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# PEFT规模定律

[[mind-lab|Mind Lab]] 在大量实践中发现的规律：多个模型协作决策的准确性与模型数量之间呈对数增长关系，多样性转化为系统整体智能。

## 核心发现

随着多样化模型数量的增加，基于分工协作的模型整体智能也会随之提升。当大量不同历史、偏好和技能的 LoRA 适配器形成大规模的适配器种群后，系统可以利用适配器之间的差异进行更高层次的协作与决策。

## 协作机制

- 路由选择
- 投票决策
- 多适配器检索与交叉验证

这些机制将种群内部的多样性直接转化为系统整体智能水平的提升。

## 理论支撑

43页论文《On the Scaling of PEFT》详细阐述了这一发现。

## 与 [[scaling-law|Scaling Law]] 的关系

PEFT规模定律是对传统 Scaling Law 的补充和扩展。传统 Scaling Law 关注参数规模、数据量和算力的关系，而 PEFT规模定律揭示了在固定基座模型上，通过增加适配器数量和多样性也能实现性能的对数增长——为有限算力条件下的能力提升开辟了新路径。