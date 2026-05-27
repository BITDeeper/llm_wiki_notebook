---
type: concept
title: Format Fragility（结构格式脆性）
created: 2026-05-26
updated: 2026-05-26
tags: [强化学习, 格式稳定性, 工具调用]
related: [tool-prior-paradox, para-grpo, exploration-anchoring]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# Format Fragility（结构格式脆性）

Format Fragility 是 [[tool-prior-paradox]] 的两种表现之一，指 RL 阶段温度采样下 SFT 学到的结构性闭合 token 大面积丢失，导致 rollout 不可解析。

## 现象描述

SFT 阶段模型学会了用 `</think`、`</tool_call`、`<answer>` 等结构化标签组织输出。但在 RL 阶段引入温度采样后，这些 closing tag 大面积丢失——模型仍在按结构思考，但 rollouts 已经无法被解析器正确识别。

## 根因

工具先验越强的模型，在 RL 探索时越容易打破 SFT 阶段建立的结构约束。探索能力与格式稳定性深度耦合。

## 量化表现

- Vanilla GRPO 下 format compliance 仅为 0.13
- 使用 [[exploration-anchoring]] 后提升至 0.41 均值 / 0.64 峰值

## 解决方案

[[para-grpo]] 的 [[exploration-anchoring]] 组件：仅在最容易 collapse 的结构性 token 位置施加 format reward，配合 Think Prefix + Answer Suffix 双侧锚点锁定结构，同时保持 content token 自由探索。