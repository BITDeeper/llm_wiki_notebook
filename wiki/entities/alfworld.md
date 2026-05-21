---
type: entity
title: ALFWorld
tags: ["benchmark", "dataset", "embodied-ai", "agent", "具身智能"]
related: ["skill0", "search-qa", "agentocr", "webshop", "scienceworld", "具身智能", "tcod", "qwen2-5-3b"]
created: 2026-04-11
updated: 2026-05-08
sources: ["小模型用不好skill？新范式让模型学会skill的底层逻辑，3b模型推理token省5倍，性能反超.md", "多轮agent蒸馏终于不翻车！港中文x通义新方法成功率暴涨18点，训练还快32%.md"]
---

# ALFWorld

**ALFWorld** 是一个具身智能领域的经典基准测试，主要用于模拟和评估 Agent 在家庭环境中的具身导航与物体操作能力。它模拟了真实的视觉-语言交互场景，要求 Agent 根据文本指令（例如“找一只苹果并洗净”）在模拟环境中进行多轮交互。Agent 需要理解指令、观察环境、规划路径并执行一系列动作（如移动、打开、拿取等）。

## 在研究中的应用

ALFWorld 是多个研究项目中用于验证算法有效性的核心评测基准。

### SKILL0 实验
在 [[SKILL0]] 的研究中，ALFWorld 被用作核心评测基准之一。实验结果显示，经过技能内化训练的 3B 模型在该基准上的成功率达到 87.9%，显著优于传统的强化学习基线 [[AgentOCR]]。

### TCOD 实验
在 [[tcod]] 相关的研究中，ALFWorld 被用作核心验证基准之一：
- 它是一个典型的多轮交互任务，极易暴露 [[轨迹级kl不稳定性]] 问题。
- 实验显示，使用 [[tcod]] 方法训练的 [[qwen2-5-3b]] 模型在该基准上的成功率提升了 18.74 个百分点。
- 该基准包含 Valid Unseen 测试集和研究者构建的 Hard 测试集，用于全面评估模型的泛化能力。