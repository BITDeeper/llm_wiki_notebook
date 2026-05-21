---
type: entity
title: GTR (Guided Thought Reinforcement)
tags: [ai, agents, reinforcement-learning, framework]
related: [gtr-turbo, 过程引导, 思维崩塌]
created: 2026-04-03
updated: 2026-04-03
sources: ["别再花钱请gpt当老师了！gtr-turbo用「历史经验」自我蒸馏，训练成本砍半，效果反超丨cvpr'26.md"]
---

# GTR (Guided Thought Reinforcement)

**GTR**（Guided Thought Reinforcement）是一种用于训练多模态智能体的框架，旨在解决智能体在多轮复杂任务中出现的“思维崩塌”问题。

## 工作原理
GTR 通过引入强大的外部“修正器模型”（如 GPT-4o 或 Gemini）来提供**过程引导**。在强化学习训练过程中，教师模型不仅提供最终奖励，还提供中间步骤的思维链指导，从而有效缓解奖励稀疏和长程信用分配的难题。

## 局限性
尽管 GTR 能够有效抑制思维崩塌，但它存在明显的短板：
*   **高昂成本**：调用外部模型 API 需要大量费用。
*   **训练延迟**：每步 RL 都需要查询外部模型，显著增加等待时间。
*   **隐私与可及性**：前沿模型可能无法获取，且训练数据可能因隐私原因无法上传。

## 演进
GTR 的局限性促使了 [[GTR-Turbo]] 的诞生。GTR-Turbo 摒弃了外部依赖，转而利用模型自身的历史检查点进行自我蒸馏，实现了更低成本、更高效率的训练。