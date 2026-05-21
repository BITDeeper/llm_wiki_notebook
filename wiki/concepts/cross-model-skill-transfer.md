---
type: concept
title: 跨模型技能迁移
tags: [agent, llm, transfer-learning]
related: [skillcraft, skill-reuse, claude]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 跨模型技能迁移

**跨模型技能迁移**（Cross-Model Skill Transfer）是指由一个强模型生成的技能，被另一个模型（通常是弱模型或不同架构的模型）用于执行任务的过程。

## 核心发现

[[skillcraft]] 的研究证实了高质量技能具有极强的通用性和可迁移性：

-   **成功率**：由 [[claude]] 生成的技能，在四种不同的执行模型上均保持了 100% 的成功率。
-   **Token 节省**：强模型生成的技能在不同执行器上普遍能带来显著的 Token 节省；而质量较弱的技能，节省效果则不稳定，甚至可能出现负收益。

## 意义

这一发现打破了模型能力的边界，表明 Agent 的价值不再仅取决于基础模型的能力，还取决于其积累的技能库。它暗示了一种可能的未来分工：强模型作为“技能生成器”，而弱模型作为低成本的“执行器”。