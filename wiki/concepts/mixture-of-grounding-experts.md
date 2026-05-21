---
type: concept
title: Mixture of Grounding Experts
tags: [agent-method, computer-vision, nlp, web-automation]
related: [avenir-web, agent-harness, dom-tree]
created: 2026-04-29
updated: 2026-04-29
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md"]
---

# Mixture of Grounding Experts

混合定位专家（Mixture of Grounding Experts, 简称 MoGE）是一种用于网页智能体的元素定位策略。它主张采用“视觉优先”的原则，将网页视为统一的视觉画布，直接基于坐标进行交互，而非过度依赖 DOM 树结构。

## 核心逻辑
1.  **视觉优先**：利用多模态模型的视觉理解能力，直接识别界面元素并生成点击坐标。这种方式天然地解决了 DOM 树方法在处理 Canvas、嵌套 iframe 或 Shadow DOM 等非标准结构时的失效问题。
2.  **语义兜底**：当视觉信息不足（例如元素被遮挡或过于微小）时，触发语义结构推理作为备用方案，确保交互的鲁棒性。

## 应用场景
MoGE 是 [[avenir-web]] 框架解决“元素定位不准”这一核心痛点的关键模块。消融实验显示，移除该模块会导致成功率下降 8%，证明了视觉与语义混合策略的有效性。