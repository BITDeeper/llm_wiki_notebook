---
type: concept
title: Agent Harness 后训练
created: 2026-06-08
updated: 2026-06-08
tags: [后训练, agent, 强化学习, 训练范式, mind-lab]
related: [macaron-v1-preview, mind-lab, mixture-of-lora, 任务执行范式, agentic-engineering, scaling-law]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# Agent Harness 后训练

将模型后训练过程直接放入 Agent 执行环境中协同优化的训练方法，使模型在训练阶段就与实际执行环境深度适配。

## 核心理念

传统后训练通常针对单项能力（数学、代码、长上下文）进行优化。Agent Harness 后训练则面向真实任务流、工具流、交互流和用户反馈进行整体优化，让模型学会在具体的产品环境中行动。

## 技术实现

[[mind-lab|Mind Lab]] 在 [[macaron-v1-preview|Macaron-V1-Preview]] 中的实现：
- 将底层 [[mixture-of-lora|Mixture-of-LoRA]] 架构与顶层路由、缓存调度、工具调用等 Harness 运行脚手架进行原生协同设计
- 模型在部署到真实场景时几乎没有"部署摩擦"，能直接、稳定、高效地发挥 Agent 能力

## 行业背景

后训练正成为大模型能力提升的关键引擎：
- GPT-5.5、[[deepseek-v4|DeepSeek V4]]、Claude Opus 4.8 等头部模型均验证了以强化学习为核心的后训练路径
- Claude Code 与 Opus 共同构建的生态同样印证了智能体优化范式
- 模型正沿着这条路径由纯粹聊天助手向复杂任务执行的 Agent 演进

## 与相关概念的关系

- **[[任务执行范式]]**：Agent Harness 后训练是任务执行范式从理念到工程的技术落地
- **[[agentic-engineering]]**：两者都强调 AI 深度参与真实任务执行，但 Agent Harness 更侧重训练阶段的协同优化
- **[[scaling-law]]**：后训练范式提示能力提升的路径不只是扩大参数规模，也可以是更精细的训练环境适配