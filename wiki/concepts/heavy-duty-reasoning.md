---
type: concept
title: 重型推理
tags: [reasoning, ai-paradigm, verification]
related: [mirothinker-1-7, heavy-duty-solver, mid-training, extended-effective-interaction]
created: 2026-03-16
updated: 2026-03-16
sources: ["不卷速度卷验证，陈天桥miromind精准预测15天后黄金价格.md"]
---

# 重型推理

[[重型推理]]（Heavy-duty Reasoning）是由 [[MiroMind]] 提出的一种 AI 推理范式。与当前主流的“卷速度”模式不同，重型推理主张为了解决复杂任务，应牺牲推理速度，通过增加验证和反思步骤来换取高精度和深度的推理质量。

## 核心特征

1.  **慢思考**：不追求秒出答案，允许模型花费 1-2 分钟进行深度推理。
2.  **高验证**：通过 [[局部验证]] 和 [[全局验证]] 确保每一步推理的可靠性。
3.  **有效交互**：追求每一步交互的逻辑质量，而非单纯增加交互步数。

## 技术实现

重型推理依赖于 [[重型求解器]]（Heavy-duty Solver），该系统结合了智能体原生训练和以验证为核心的推理模式。通过 [[mid-training]] 阶段，模型被训练出更强的规划、推理和总结能力。

## 优势与局限

- **优势**：在复杂长期任务（如 F1 预测、金融分析）中表现优异，能提供逻辑严密、可追溯的推理过程。
- **局限**：推理速度较慢，计算成本相对较高，可能不适合对实时性要求极高的简单对话场景。