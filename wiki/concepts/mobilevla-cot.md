---
type: concept
title: MobileVLA-CoT
tags: [dataset, embodied-ai, reasoning]
related: [mobilevla-r1, chain-of-thought, gemini-2.5]
created: 2025-12-05
updated: 2025-12-05
sources: ["四足机器人首次同时「思考+走路」，北大提出链式推理mobilevla-r1.md"]
---

# MobileVLA-CoT

[[mobilevla-cot]] 是为训练 [[mobilevla-r1]] 而构建的多粒度链式推理数据集/引擎。它利用 [[gemini-2.5]] 生成结构化的标注数据，包含两个主要部分：
*   **Step-CoT**：面向单步控制的推理。
*   **Episode-CoT / Nav-CoT**：覆盖整条任务轨迹的推理。

该数据集通过半自动校验，确保每一步生成的“想法”都与实际的动作和空间轨迹对齐，是连接语义理解与运动控制的关键桥梁。