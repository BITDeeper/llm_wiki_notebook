---
type: concept
title: Advisor（顾问）策略
created: 2026-06-01
updated: 2026-06-01
tags: [agent, 成本优化, 模型协作, 架构设计]
related: [step-3.7-flash, ai-subscription-crisis, tokenmaxxing, 任务执行范式]
sources: ["400-tokens秒！阶跃step-3.7-flash，把agent任务成本打到claude零头.md"]
---
# Advisor（顾问）策略

一种小模型与大模型协作的 Agent 执行范式：让小模型（如 [[step-3.7-flash|Step 3.7 Flash]]，激活 11B）作为执行官全程控制流程——调工具、读结果、自我迭代；仅在少数几个"拿不准"的关键拐点（如做规划、连续失败后的自救），才去请教一个更大的"顾问模型"。

## 核心逻辑

传统 Agent 模式下，每一步都调用最强大的前沿模型（如 Claude Opus），导致 token 消耗巨大。Advisor 策略的核心洞察是：Agent 任务中大部分步骤是常规执行（读结果、调工具、格式化输出），不需要峰值智能；真正需要"大智慧"的决策点只占少数。

## 实测效果

[[step-3.7-flash|Step 3.7 Flash]] 开启 Advisor 模式后：
- 单任务成本：0.19 美元（vs Claude Opus 4.6 的 1.76 美元，约 1/9）
- 编码能力：达到 Claude Opus 4.6 的 97%

## 与现有概念的关联

- 直接回应 [[ai-subscription-crisis|AI 订阅制危机]]：通过成本压缩使 Agent 任务在经济上可持续
- 与 [[tokenmaxxing|Token 吞吐量最大化]] 形成对照：不是追求更多 token，而是用更少 token 完成同等任务
- 是 [[任务执行范式]] 的具体实现：从"最强模型做所有事"转向"合适模型做合适事"的工程化分工