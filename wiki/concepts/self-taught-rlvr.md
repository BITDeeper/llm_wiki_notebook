---
type: concept
title: Self-Taught RLVR（自教式强化学习与验证推理）
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 自我改进, 后训练, RLVR]
related: [rlsd, npo-近未来策略优化, copd-协同进化策略蒸馏, 递归式自我改进, scaling-law, 京东探索研究院, 中科院信工所]
sources: ["让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义self-taught-rlvr.md"]
origin_date: 2026-04-01
---
# Self-Taught RLVR（自教式强化学习与验证推理）

Self-Taught RLVR 是由 [[京东探索研究院]] 和 [[中科院信工所]] 联合提出的训练范式，核心思想是**让大模型通过不同形式的"自身"提供学习信号，实现迭代自我演化**。

## 核心命题

如何引入更好的学习信号并被模型有效吸收？Self-Taught RLVR 给出的答案是：让模型自己为自己提供贴合当前能力的、更易吸收的学习信号。

## 三个互补维度

Self-Taught RLVR 从三个维度探索"自己教自己"：

1. **[[rlsd|RLSD]]**（Informed Self）：由特权信息增强的自身来教自己。将 RLVR 的方向信号与自蒸馏的幅度信号解耦，解决 OPSD 中的信息泄漏问题。
2. **[[npo-近未来策略优化|NPO]]**（Temporal Self）：由近未来的自身教自己。用训练过程中稍后的 checkpoint 作为 teacher，最大化有效学习信号 S=Q/V。
3. **[[copd-协同进化策略蒸馏|CoPD]]**（Parallel Self）：由走另一条路的自身教自己。多专家分支在训练期间互相蒸馏、协同进化。

## 理论贡献

- **RLSD**：证明 OPSD 目标函数中存在不可消除的互信息间隙（I(Yt; R | X, Y₀)），导致信息泄漏
- **NPO**：提出有效学习信号指标 S=Q/V，为辅助学习信号选择提供统一理论框架
- **CoPD**：提出效用函数 Utility = aₚ × X(D₁,D₂) + bₚ，揭示 mixed-data 和静态 OPD 的对称损失

## 与现有概念的关系

Self-Taught RLVR 本质上是 [[递归式自我改进]] 在训练阶段的具体实现。CoPD 暗示的"新 scaling 范式"可能扩展 [[scaling-law]] 的维度——从单纯算力扩展到训练范式创新。

## 扩展方向

模型可以从更多形式的"自己"身上学习：不同条件化的自己、以不同温度采样的自己、human-in-the-loop 后的自己、不同 prompt 的自己等。

## 时间线

- 2026年4月：三篇论文提交至 arXiv（编号 2604.03128、2604.20733、2604.27083）
- 2026年5月19日：量子位报道发布