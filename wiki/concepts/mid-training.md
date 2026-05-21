---
type: concept
title: mid-training
tags: [training-methodology, llm, agent]
related: [mirothinker-1-7, heavy-duty-reasoning, agent-native-competence]
created: 2026-03-16
updated: 2026-03-16
sources: ["不卷速度卷验证，陈天桥miromind精准预测15天后黄金价格.md"]
---

# mid-training

[[mid-training]]（中期训练）是 [[MiroMind]] 在开发 [[MiroThinker-1.7]] 时引入的一种新型模型训练阶段。该阶段位于传统的预训练和微调之间。

## 目的

Mid-training 旨在利用大规模高质量任务数据，重点训练模型的 [[智能体原生能力]]（agent-native competence），包括：
- 规划能力
- 推理能力
- 总结能力

## 作用

通过这一阶段，模型能够建立起更强的 Agent 基础能力，例如目标分解、工具调用选择、理解工具返回结果以及整合生成最终答案。在此基础之上，再结合 SFT（监督微调）、DPO（偏好优化）和 RL（强化学习），可以进一步将 Agent 能力内化，实现长时任务的稳定推理。