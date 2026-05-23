---
type: entity
title: Skywork-OR1-Math-7B
created: 2026-05-14
updated: 2026-05-14
tags: [大语言模型, 数学推理, 强化学习]
related: [on-policy-distillation, deepseek-r1-distill-系列, 清华thunlp-opd研究-202605]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# Skywork-OR1-Math-7B

经过额外 RL post-training 的 7B 数学推理模型，在清华大学 THUNLP 的 [[on-policy-distillation|OPD]] 研究中作为 Teacher 对照组。

## 研究中的角色

作为"经过 RL post-training 的 Teacher"的代表性案例，用于验证"高分 ≠ 新知识"法则。与同 pipeline 的 [[deepseek-r1-distill-系列|DeepSeek-R1-Distill-7B]]（仅参数更大但未经额外 RL）形成对比。

## 关键数据

- Gap recovery：**16.9%**（vs R1-Distill-7B 的 5.3%）
- 证明了经过 RL post-training 的 Teacher 能恢复更多 teacher-student gap，因为它提供了真正的新知识，而非仅仅是参数规模红利。