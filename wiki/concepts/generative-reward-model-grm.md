---
type: concept
title: Generative Reward Model (GRM)
tags: [rlhf, agent, evaluation, deepseek]
related: [deepseek-v4, specialist-training]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# Generative Reward Model (GRM)

Generative Reward Model（生成式奖励模型）是 DeepSeek 提出的一种替代传统标量奖励模型的技术，主要用于解决 Agent 任务中“难以验证”的评估问题。

## 工作原理
与传统的输出 0 到 1 标量分数的奖励模型不同，GRM 根据预设的 Rubric（评估准则）生成详细的**评估报告**。

## 联合优化
DeepSeek 对 GRM 本身也进行了强化学习（RL）优化。这使得 Actor 网络可以同时充当生成式奖励模型，实现了**评判能力与生成能力在同一个模型中的联合优化**。

## 优势
对于复杂的 Agent 任务（如长代码重构、多步推理），简单的标量分数难以提供有效的反馈。GRM 生成的详细报告能提供更丰富的监督信号，显著提升了模型在复杂任务上的表现。