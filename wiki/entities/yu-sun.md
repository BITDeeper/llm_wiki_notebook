---
type: entity
title: Yu Sun
tags: [researcher, stanford, nvidia, author]
related: [ttdiscover, 测试时训练]
created: 2026-01-25
updated: 2026-01-25
sources: ["斯坦福×英伟达发布ai推理新范式，刷新了多领域sota.md"]
---

# Yu Sun

[[Yu Sun]] 是斯坦福大学博士后、英伟达研究员，也是 [[测试时训练]]（Test-Time Training, TTT）概念的长期布道者和核心推动者。

## 学术背景

Yu Sun 博士毕业于加州大学伯克利分校，导师是计算机视觉领域的泰斗 Alexei A. Efros 和机器学习专家 Moritz Hardt。

## 研究路线

Yu Sun 的研究具有极强的连续性，他围绕 TTT 概念构建了一条清晰的进化路线：

1.  **TTT 1.0（视觉修复）**：代表作《Test-Time Training with Self-Supervision》(ICML 2020)。主要解决图片分布偏移问题，模型在测试时通过微调来适应模糊或旋转的图片，此时 TTT 主要作为增强健壮性的“修补匠”。
2.  **TTT 2.0（架构革命）**：代表作《Learning to (Learn at Test Time): RNNs with Expressive Hidden States》(ICML 2025)。他挑战 Transformer 的地位，提出用 TTT 过程替代 Attention 机制（TTT-LM），引发了社区广泛讨论。
3.  **TTT 3.0（智能进化）**：代表作 [[TTT-Discover]] (2026)。将 TTT 应用于最硬核的科学发现，不再是为了适应数据，而是为了在推理时“进化”出超越预训练水平的智力。

## 核心思想

Yu Sun 坚信“学习不应该在训练结束时停止”。他认为现有的神经网络（Train-then-Freeze）是僵化的，真正的智能体应该在推理阶段继续通过参数更新来学习。他的目标是重写深度学习的底层范式，从“静态的模型”转向“动态的过程”。