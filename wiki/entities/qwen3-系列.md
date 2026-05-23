---
type: entity
title: Qwen3 系列
created: 2026-05-14
updated: 2026-05-14
tags: [大语言模型, 阿里巴巴, 开源模型]
related: [on-policy-distillation, 思维模式一致性, 清华thunlp-opd研究-202605]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# Qwen3 系列

阿里巴巴通义千问团队推出的第三代大语言模型系列，在 2026 年大模型后训练中广泛采用 [[on-policy-distillation|On-Policy Distillation]] 技术。

## 在 OPD 研究中的角色

清华大学 THUNLP 团队的研究中，Qwen3 系列作为主要实验对象，用于验证 [[思维模式一致性]] 法则：

- **Qwen3-1.7B-Base**：作为 Student 模型（弱 Base 模型）
- **Qwen3-4B (Non-thinking)**：作为对照 Teacher
- **Qwen3-4B-Base-GRPO**：经过 GRPO 训练的 Base Teacher，与 Student 思维模式更近，蒸馏效果显著提升

## 关键实验发现

在 Qwen family 中，经过 RL post-training 的 Teacher 与同 pipeline 更大模型的 gap recovery 差距达到 **58.6% vs 15.6%**，有力证明了"高分 ≠ 新知识"法则。