---
type: concept
title: Exploration Anchoring（探索锚定）
created: 2026-05-26
updated: 2026-05-26
tags: [强化学习, 格式约束, 训练技巧]
related: [para-grpo, tool-prior-paradox, format-fragility]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# Exploration Anchoring（探索锚定）

Exploration Anchoring 是 [[para-grpo]] 算法的核心组件之一，用于解决 [[format-fragility]]（结构格式脆性）问题。

## 核心思路

与其在整段 rollout 上做格式约束，不如把 format reward 只施加在最容易 collapse 的结构性 token 位置。

## 具体实现

1. **精准定位**：仅对 `</think`、`</tool_call`、`<answer>` 等 closing tags 施加 format reward
2. **双侧锚点**：配合 Think Prefix（思考前缀）+ Answer Suffix（答案后缀）锁定结构
3. **自由探索**：tool-call 的 content token 保持完全自由探索，不受格式约束

## 效果

- 将 format compliance 从 vanilla GRPO 的 0.13 提升至 0.41 均值 / 0.64 峰值
- 在锁定结构的同时不牺牲内容层面的探索能力

## 设计哲学

体现"只在 prior 最脆的位置兜底"的思路——不全面约束，而是精准锚定最容易出问题的位置。