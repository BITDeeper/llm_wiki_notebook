---
type: concept
title: "Pointing (具身智能)"
tags: [embodied-ai, interaction, spatial-reasoning]
related: [gemini-robotics-er-1-6, spatial-reasoning, agentic-vision]
created: 2026-04-15
updated: 2026-04-15
sources: ["谷歌最强具身大脑发布！波士顿机器狗瞬间人模人样.md"]
---

# Pointing (具身智能)

在具身智能领域，**Pointing**（指代/指点）是指机器人模型通过输出空间坐标（“点”）来表达其对环境理解的一种基础交互能力。它是 [[gemini-robotics-er-1-6]] 模型空间推理能力的基石。

## 功能与作用
Pointing 不仅仅是视觉识别，它要求模型将语义理解与空间定位相结合：
- **物体定位**：指出“哪里有什么”。
- **属性描述**：通过点的位置表达“有几个”或“抓哪里最合适”。
- **抗幻觉**：对于不存在的物体，模型能够拒绝输出点，从而减少传统多模态模型常见的“幻觉”问题。

## 应用实例
在 [[gemini-robotics-er-1-6]] 的演示中，Pointing 被用于：
1. **仪表读取**：精确定位压力表指针和刻度的位置，以便计算数值。
2. **物体计数**：准确识别工具图中的锤子、剪刀等物品数量，且不会误报不存在的物品（如手推车）。

## 意义
Pointing 将视觉感知从“看”提升到了“理解与交互”的层面，使机器人能够以更符合人类直觉的方式与物理世界进行精确交互。