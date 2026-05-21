---
type: entity
title: "StochasticGoose"
tags: [ai-agent, reinforcement-learning, cnn, arc-agi]
related: [arc-agi-3, opus-4-6, tufa-labs]
created: 2026-03-26
updated: 2026-03-26
sources: ["全球顶尖大模型一夜惨遭血洗！最难测试人类拿满分，ai第一名得0.2%分.md"]
---

# StochasticGoose

[[StochasticGoose]] 是由 [[Tufa Labs]] 开发的 AI 智能体，在 [[ARC-AGI-3]] 的开发者预览期中夺得冠军（得分 12.58%）。它是“小模型打败大模型”的典型案例。

## 技术特点
- **架构**：基于卷积神经网络（CNN），而非大语言模型（LLM）。
- **方法**：使用简单的强化学习来预测哪些操作会导致画面变化。
- **特点**：没有复杂的预训练知识包袱，专注于从环境反馈中学习。

## 表现
- **得分**：12.58%，远高于所有基于 LLM 的前沿模型（普遍低于 1%）。
- **行为**：虽然仍远不如人类（在某些关卡中仍需 350 步 vs 人类的 2-3 步），但展现出了比大模型更好的适应性和探索效率。

## 意义
StochasticGoose 的成功证明了：
1.  在需要实时交互和适应的任务中，轻量级、专注于环境反馈的模型可能比庞大的 LLM 更有效。
2.  LLM 的预训练知识（[[先入为主的偏见]]）在全新的未知环境中可能成为累赘而非资产。