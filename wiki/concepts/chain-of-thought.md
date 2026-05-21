---
type: concept
title: 链式推理
tags: [ai, reasoning, method]
related: [mobilevla-r1, grpo, mobilevla-cot]
created: 2025-12-05
updated: 2025-12-05
sources: ["四足机器人首次同时「思考+走路」，北大提出链式推理mobilevla-r1.md"]
---

# 链式推理

[[链式推理]] (Chain-of-Thought, CoT) 是一种提示或生成技术，旨在引导 AI 模型展示中间推理步骤，而不仅仅是直接给出最终答案。在 [[mobilevla-r1]] 的语境下，CoT 被具体化为机器人的“内心独白”，包括：
*   **高层目标**：去哪里、做什么。
*   **中层规划**：如何绕过障碍、路径选择。
*   **低层意图**：当前的加速、转向或减速决策。

这种机制将传统的“黑盒”控制转变为可解释、可纠错的“白盒”推理过程，显著提升了具身智能系统的安全性和可靠性。