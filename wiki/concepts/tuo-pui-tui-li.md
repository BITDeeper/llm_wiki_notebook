---
type: concept
title: "拓扑推理"
tags: [reasoning, logic, computer-vision, evaluation]
related: [thinking-with-visual-primitives, v4-flash]
created: 2026-04-30
updated: 2026-04-30
sources: ["刚刚，deepseek多模态技术范式公布，以视觉原语思考.md"]
---

# 拓扑推理

涉及对复杂空间连接关系、路径追踪及结构逻辑进行分析与推断的任务。在多模态 AI 评测中，这通常指需要理解图像内部元素之间连接关系的任务，而非单纯的物体识别。

## 典型任务
- **迷宫导航**：在给定迷宫中找到从起点到终点的路径，涉及回溯、死胡同判断和路径规划。
- **路径追踪**：在多条相互交叉的曲线（如贝塞尔曲线）中，追踪特定线条从起点到终点的轨迹，需解决交叉歧义。

## 评测表现
在 [[DeepSeek]] 的技术报告中，基于 [[thinking-with-visual-primitives]] 的模型在拓扑推理任务上表现出了显著优势：
- **迷宫导航**：得分 66.9%，而 GPT-5.4 为 50.6%，Gemini-3-Flash 为 49.4%。
- **路径追踪**：得分 56.7%，而 GPT-5.4 为 46.5%。

这表明，通过引入坐标作为推理锚点，模型在处理需要严格空间逻辑的任务时，能够有效避免注意力漂移，从而超越依赖自然语言推理的 Frontier 模型。