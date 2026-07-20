---
type: entity
title: DAPO (Dynamic Policy Optimization)
created: 2026-06-15
updated: 2026-06-15
tags: ["算法", "强化学习", "强化学习算法", "大模型训练"]
related: ["microcoder", "grpo", "可验证奖励的强化学习", "dyco-rl"]
sources: ["打破代码大模型训练瓶颈：微软&剑桥&普林推出microcoder，算法、数据、框架、训练经验全面升级.md", "rss/dyco-rl：动态跨模态协同学习让多模态大模型“看得准也想得清”.md"]
---
# DAPO (Dynamic Policy Optimization)

DAPO（动态策略优化）是用于大模型推理增强的强化学习算法之一。[[dyco-rl|DyCo-RL]] 框架在实验中证明，其基于 Fisher-Rao 距离的动态优势重加权机制可以无缝接入 DAPO，有效解决其在多模态视觉推理中 Token 级学习信号“一刀切”的问题。