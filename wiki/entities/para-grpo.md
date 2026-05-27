---
type: entity
title: PARA-GRPO
created: 2026-05-26
updated: 2026-05-26
tags: [算法, 强化学习, GRPO, 视频理解]
related: [paravt, tool-prior-paradox, medgrpo, exploration-anchoring, nframes-gating]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# PARA-GRPO

PARA-GRPO（Parseability-Anchored and Ratio-gAted GRPO）是 [[paravt]] 框架提出的强化学习训练算法，专门用于解决 [[tool-prior-paradox]] 带来的两种失败模式。

## 核心组件

### Exploration Anchoring（探索锚定）

针对 **Format Fragility（结构格式脆性）** 的解决方案：

- 仅在最容易 collapse 的结构性 token 位置施加 format reward（即 `</think`、`</tool_call`、`<answer>` 的 closing tags）
- 配合 Think Prefix + Answer Suffix 作为双侧锚点锁定结构
- Content token 保持完全自由探索
- 效果：将 format compliance 从 vanilla GRPO 的 0.13 提升至 0.64 峰值

### nFrames Gating（帧数门控）

针对 **Tool Necessity Gap（工具必要性塌缩）** 的解决方案：

- 对每条 prompt 的 overview frame budget K 做 Uniform{4, 8, 16, 32, 64} 随机化
- 确保 GRPO group 内自然出现"必须调工具才能答对"的样本
- 恢复"调用 vs 跳过"的非零 advantage，为探索工具提供持续训练信号
- 效果：工具调用率与 task reward 同步抬升

## 与相关算法的对比

- **vs. Vanilla GRPO**：解决 vanilla GRPO 在工具先验强的模型上出现的格式崩塌和工具调用率归零问题
- **vs. [[MedGRPO]]**：同为 GRPO 变体用于多模态强化学习，但解决不同问题——MedGRPO 解决异构数据奖励尺度失衡，PARA-GRPO 解决工具先验悖论

## 设计哲学

PARA-GRPO 体现了一种"把 prior 当朋友"的思路：只在 prior 最脆的位置兜底（Exploration Anchoring），同时让 prior 主导不了的地方持续产生学习信号（nFrames Gating）。

## 迁移潜力

作为通用 RL 训练技巧，PARA-GRPO 的两个组件可能适用于其他存在工具先验悖论的多模态 RL 场景。