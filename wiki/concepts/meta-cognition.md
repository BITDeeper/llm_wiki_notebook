---
type: concept
title: 元认知
tags: [cognitive-science, ai-reasoning, consciousness]
related: [tinyzero, pure-reinforcement-learning, three-system-cognitive-framework]
created: 2026-02-27
updated: 2026-02-27
sources: ["华人天才出走xai：算力竞赛已死，30美元解锁ai自进化！.md"]
---

# 元认知

在人工智能领域，元认知指的是模型具备“思考自己的思考”的能力。具体表现为模型在生成最终输出之前，会进行内部的自我监控、验证、试错和纠错过程。

## 表现形式

- **思维链**：模型输出 `<thinking>` 标签，展示其推理步骤。
- **自我纠错**：在推理过程中，模型能识别出之前的逻辑错误（例如输出 "Wait, that's wrong"），并回溯到之前的步骤重新推导。
- **顿悟**：在训练过程中，模型能力突然发生跃迁式提升，仿佛“理解”了任务的底层逻辑。

## 技术实现

元认知通常不是通过显式编程实现的，而是通过 [[pure-reinforcement-learning]] 训练后涌现出的能力。当模型被奖励机制鼓励去寻找正确答案时，学会“检查自己的作业”是提高成功率的自然策略。

## 意义

元认知的出现标志着 AI 从简单的“概率预测机器”向具备逻辑深度的“推理者”转变。它是实现高级 AI 和通用人工智能（AGI）的关键特征之一。[[tinyzero]] 的实验表明，这种能力并非大模型独有，小模型通过适当的训练也能习得。