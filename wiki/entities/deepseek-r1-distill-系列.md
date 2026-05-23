---
type: entity
title: DeepSeek R1-Distill 系列
created: 2026-05-14
updated: 2026-05-14
tags: [大语言模型, DeepSeek, 蒸馏模型]
related: [on-policy-distillation, 清华thunlp-opd研究-202605, deepseek-v4]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# DeepSeek R1-Distill 系列

DeepSeek 推出的蒸馏系列模型，通过蒸馏技术将大模型能力迁移到小模型中。在清华大学 THUNLP 的 [[on-policy-distillation|OPD]] 研究中作为关键实验对象。

## 在 OPD 研究中的角色

- **R1-Distill-7B**：作为同 pipeline 更大 Teacher 的代表，gap recovery 仅 **5.3%**
- **R1-Distill-1.5B**：用于极端"反向蒸馏"实验，作为 RL 前 checkpoint

## 关键实验发现

在 DeepSeek family 中，经过 RL 的 [[skywork-or1-math-7b|Skywork-OR1-Math-7B]] gap recovery 为 **16.9%**，而同 pipeline 的 R1-Distill-7B 仅 **5.3%**，证明同 pipeline 更大模型不提供新可学习信息。

### 反向蒸馏实验

研究者用 RL 后的 [[justrl-1-5b|JustRL-1.5B]] 反过来向 R1-Distill-1.5B 学习，同时以 R1-Distill-7B 做对照。结果：向 7B 学习和向 1.5B 学习效果几乎一样，都让学生能力倒退回前 RL 水平。