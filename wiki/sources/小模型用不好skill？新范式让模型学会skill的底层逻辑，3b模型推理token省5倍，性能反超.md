---
type: source
title: "小模型用不好Skill？新范式让模型学会Skill的底层逻辑，3B模型推理token省5倍，性能反超"
tags: [reinforcement-learning, agent, skill-internalization, small-models, zhejiang-university, meituan]
related: [skill0, 技能内化, alfworld, 上下文强化学习, 课程学习, 视觉编码压缩]
created: 2026-04-11
updated: 2026-04-11
authors: ["ZJU REAL Lab"]
year: 2026
url: "https://mp.weixin.qq.com/s/HNPZamXp6wUB6Q7LfoXQsw"
venue: "量子位"
sources: ["小模型用不好skill？新范式让模型学会skill的底层逻辑，3b模型推理token省5倍，性能反超.md"]
---

# 源文档摘要

本文报道了浙江大学联合美团龙猫团队、清华大学提出的 SKILL0 训练框架。该框架提出了 [[技能内化]] 的新范式，旨在解决小模型在推理时无法有效利用外部技能（RAG/Tool Use）的问题。

## 核心观点

文章指出，对于参数量较小（3B、7B）的模型，推理时的“外挂技能”存在检索噪声致命、Token 开销爆炸和缺乏深度理解三大缺陷。SKILL0 通过 [[上下文强化学习]] 和 [[课程学习]]，将外部的过程性技能知识转化为模型内部的参数权重，使模型在推理时无需外部辅助即可执行任务。

## 关键技术

1.  **上下文强化学习**：训练时提供完整技能上下文，推理评估时移除所有技能，迫使模型学习技能本身而非依赖指令。
2.  **视觉编码压缩**：将技能文档渲染为图像，利用视觉编码器压缩上下文信息，大幅降低训练 Token 开销。
3.  **动态课程学习**：通过 Filter → Rank → Select 机制，动态调整技能预算（从多到少，直至为零），引导模型逐步从依赖外部指令过渡到自主执行。

## 实验结果

-   **性能提升**：在 [[ALFWorld]] 任务上，3B 模型的 SKILL0 成功率达到 87.9%，比标准 RL 基线高 9.7%，甚至比推理时仍带技能的 SkillRL（82.4%）更强。
-   **大模型碾压**：7B 模型的 SKILL0 零技能推理成功率达 89.8%，远超 GPT-4o (48.0%) 和 Gemini-2.5-Pro (60.3%)。
-   **极致效率**：推理 Token 开销仅为传统方案的 1/5（ALFWorld: 0.38k vs SkillRL 的 >1.9k）。

## 意义

SKILL0 挑战了当前 Agent 生态中“更好的检索、更好的技能库”的主流叙事，证明了通过训练范式优化（内化）来提升小模型性能的可能性，为 Agent 走向自主提供了新路径。