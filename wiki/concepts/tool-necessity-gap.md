---
type: concept
title: Tool Necessity Gap（工具必要性塌缩）
created: 2026-05-26
updated: 2026-05-26
tags: [强化学习, 工具调用, 训练信号]
related: [tool-prior-paradox, para-grpo, nframes-gating]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# Tool Necessity Gap（工具必要性塌缩）

Tool Necessity Gap 是 [[tool-prior-paradox]] 的两种表现之一，指 overview 帧已足以让部分 prompt"不调工具也能蒙对"，导致 GRPO 对"调用 vs 跳过"的 advantage 趋近于零，工具调用率滑落至 0。

## 现象描述

当模型获得 64 帧 overview 后，相当一部分问题已经可以直接回答。GRPO 在计算"调用工具 vs 跳过工具"的 advantage 时发现两者差异趋近于零，策略迅速发现"省事的捷径"——不调工具。工具调用率从训练开始就一路向 0 滑落。

## 根因

overview 帧预算固定且充足时，模型缺乏"必须调工具才能答对"的训练信号，导致工具调用行为无法被强化。

## 解决方案

[[para-grpo]] 的 [[nframes-gating]] 组件：对每条 prompt 的 overview frame budget K 做 Uniform{4, 8, 16, 32, 64} 随机化，确保 GRPO group 内自然出现"必须调工具才能拿到 reward"的样本，恢复非零 advantage。