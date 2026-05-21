---
type: entity
title: Orchestrator
tags: [model, agent, orchestration, nvidia]
related: [nvidia-research, toolscale, gpt-5, 复合ai, 决策与执行分离]
created: 2025-12-12
updated: 2025-12-12
sources: ["别让米其林主厨削土豆！英伟达用「小脑指挥大脑」，重构agi生产力.md"]
---

# Orchestrator

Orchestrator 是由 [[英伟达研究院]] 开发的一个 80 亿参数（8B）的轻量级模型，旨在作为 [[复合ai]] 系统中的“调度中枢”或“小脑”。

## 核心功能
它不直接执行所有任务，而是负责指挥其他大模型（如 [[gpt-5]]）和专用工具（如 [[qwen-math-7b]]）协同工作。其核心思想是 [[决策与执行分离]]：将高价值的决策权保留在轻量级模型中，而将具体的执行任务分配给成本最低或能力最匹配的工具。

## 性能表现
- **HLE 基准**：取得 37.1% 的准确率，超越 GPT-5（35.1%）。
- **成本效率**：推理成本仅为 GPT-5 的 30% 左右。
- **延迟**：在 FRAMES 测试中，延迟降至 GPT-5 的 41%。

## 训练方法
- 使用 [[toolscale]] 数据集进行训练。
- 采用自定义的强化学习算法，优化目标包含三个部分：结果准确性、效率（成本/时间）和用户偏好对齐。

## 架构意义
Orchestrator 证明了“小模型可以指挥大模型”，打破了单纯追求模型参数规模的 [[scaling-law]] 迷思，为解决 [[ai-subscription-crisis]] 提供了工程化的解决方案。