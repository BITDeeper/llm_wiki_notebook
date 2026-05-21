---
type: entity
title: Octo (Octo-V / Octo-VP)
tags: [foundation-model, vla, robotics, policy-learning]
related: [vla-视觉-语言-动作, gap算法, 视觉-本体感觉策略]
created: 2026-03-08
updated: 2026-03-08
sources: ["vla引入本体状态，机器人随时掉链子？人大北航攻克难题iclr26.md"]
---

# Octo

[[octo]] 是一个用于机器人策略学习的视觉-语言-动作（VLA）基础模型，常作为具身智能研究的基线模型。

## 变体
-   **Octo-V**：纯视觉输入的 VLA 模型版本。
-   **Octo-VP**：引入了本体感觉输入的多模态版本。

## 在研究中的角色
在 [[gewu-lab]] 关于 [[视觉-本体感觉策略]] 的研究中，Octo-VP 被用作验证对象。实验发现，简单的引入本体感觉会导致 Octo-VP 性能下降（低于 Octo-V），而应用 [[gap算法]] 后，其性能得到了显著提升，证明了该算法在大型 VLA 模型上的有效性。