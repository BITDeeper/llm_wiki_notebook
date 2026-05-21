---
type: entity
title: MobileVLA-R1
tags: [robotics, model, vla, quadruped, reasoning]
related: [peking-university, unitree-go2, chain-of-thought, grpo, mobilevla-cot, vla-视觉-语言-动作]
created: 2025-12-05
updated: 2025-12-05
sources: ["四足机器人首次同时「思考+走路」，北大提出链式推理mobilevla-r1.md"]
---

# MobileVLA-R1

[[mobilevla-r1]] 是由 [[北京大学]] 团队提出的首个具备链式推理能力的四足机器人 [[vla-视觉-语言-动作]] 模型。它通过引入显式的思维链，解决了传统 VLA 模型在具身智能任务中存在的“语义与控制断层”和“决策黑盒”问题。

## 核心特性
*   **推理即控制**：模型在执行动作前会先生成结构化的“内心独白”（CoT），包括高层目标（去哪、做什么）、中层规划（路径选择）和低层意图（加速、转向）。
*   **多模态融合**：同时处理 RGB 图像、深度图和 3D 点云/地图，通过 Projection Layer 统一为时序场景表示。
*   **两阶段训练**：结合监督微调（SFT）与 [[grpo]] 强化学习，确保模型既能“想得清楚”，又能“走得漂亮”。

## 技术架构
模型分为三个主要部分：
1.  **Vision Encoder**：处理多源视觉输入。
2.  **Reasoning Module**：基于 [[mobilevla-cot]] 数据集生成链式推理文本。
3.  **Action Decoder**：将推理结果转化为连续的机器人控制指令。

## 性能表现
在 VLN-CE 仿真基准和 [[unitree-go2]] 真机实验中，MobileVLA-R1 在任务成功率和路径效率（SPL）上均超越了 [[gpt-4o]] 和 [[navila]] 等基线模型，特别是在复杂长指令执行（如上下台阶、绕障）上表现出色。