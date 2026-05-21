---
type: entity
title: AxiomProver
tags: [ai-for-science, mathematics, formal-verification, lean]
related: [carina-hong, putnam-competition, lean, mathlib, 形式化证明]
created: 2026-01-10
updated: 2026-01-10
sources: ["华人女学霸ai杀疯！本科最难数赛12题全对，自主证明首次公开.md"]
---

# AxiomProver

[[axiom-prover]] 是由 AxiomMathAI 团队（创始人 [[carina-hong]]）开发的基于 [[lean]] 语言的自动定理证明系统。它在 2025 年 [[putnam-competition]] 中取得了满分（12/12）的惊人成绩，标志着 AI 在高难度数学推理和形式化验证领域达到了新的高度。

## 核心特性
- **满分成绩**：在 2025 年 Putnam 竞赛中，[[axiom-prover]] 成功解决了所有 12 道题目，这是人类也极难企及的成就。
- **形式化验证**：系统生成的所有证明均以 [[lean]] 代码形式公开，确保了逻辑的严格可验证性。
- **独特的解题风格**：
  - **蛮力计算**：在解决 A6 题（p 进算术动力系统）时，使用了人类觉得“笨拙”但极其有效的蛮力方法，消耗了大量 Token 但最终攻克了难题。
  - **无几何引擎的几何证明**：在没有专门几何引擎的情况下，通过纯符号推理解决了 B1 题（欧式几何），证明了符号逻辑在一定程度上可以替代几何直觉。

## 技术架构
- **底层语言**：基于 [[lean]] 交互式定理证明助手。
- **数学库**：依赖 [[mathlib]]（Lean 数学库）作为基础定义和公理来源。

## 意义与影响
[[axiom-prover]] 的成功展示了 AI 在处理复杂逻辑推理方面的潜力，同时也揭示了 [[形式化证明]] 的代价（即“形式化的税”）。它推动了数学研究向“人机协作”模式的转变，即人类负责提供高层次的直觉和猜想，机器负责繁琐的验证和形式化落地。