---
type: concept
title: nFrames Gating（帧数门控）
created: 2026-05-26
updated: 2026-05-26
tags: [强化学习, 训练技巧, 视频理解]
related: [para-grpo, tool-prior-paradox, tool-necessity-gap]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# nFrames Gating（帧数门控）

nFrames Gating 是 [[para-grpo]] 算法的核心组件之一，用于解决 [[tool-necessity-gap]]（工具必要性塌缩）问题。

## 核心思路

通过对 overview frame budget 进行随机化，确保 GRPO group 内自然出现"必须调工具才能答对"的样本。

## 具体实现

对每条 prompt 的 overview frame budget K 做 Uniform{4, 8, 16, 32, 64} 随机化：

- K=4 或 8 时：overview 信息极少，模型必须调用工具才能正确回答
- K=64 时：overview 信息充足，模型可能不调工具也能答对
- 随机化确保 group 内同时存在两种情况

## 效果

- 恢复"调用 vs 跳过"的非零 advantage
- 为工具调用探索提供持续的 GRPO 训练信号
- 工具调用率与 task reward 同步抬升

## 设计哲学

体现"让 prior 主导不了的地方持续产生学习信号"的思路——通过人为制造信息不足的场景，迫使模型在训练中保持工具调用行为。