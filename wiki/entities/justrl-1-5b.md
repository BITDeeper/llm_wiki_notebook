---
type: entity
title: JustRL-1.5B
created: 2026-05-14
updated: 2026-05-14
tags: [大语言模型, 强化学习]
related: [on-policy-distillation, deepseek-r1-distill-系列, 清华thunlp-opd研究-202605]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# JustRL-1.5B

经过 RL 训练的 1.5B 模型，在清华大学 THUNLP 的 [[on-policy-distillation|OPD]] 研究中用于极端"反向蒸馏"实验。

## 反向蒸馏实验

研究者让 RL 后的 JustRL-1.5B 作为 Student，反过来向自己 RL 前的 checkpoint（[[deepseek-r1-distill-系列|R1-Distill-1.5B]]）学习，同时以更大的 R1-Distill-7B 做对照。

## 关键发现

向 7B 学习和向 1.5B 学习，效果几乎一样——都让学生的能力倒退回了前 RL 的水平，下降曲线非常相近。这证明了 7B 虽然分数高，但相较于 1.5B 只是参数规模带来的红利，并没有提供 Student 更多可学习的信息。