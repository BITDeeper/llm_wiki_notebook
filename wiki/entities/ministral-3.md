---
type: entity
title: Ministral 3
tags: [model, edge-ai, slm, multimodal]
related: [mistral-ai, mistral-large-3, 边缘部署, fp4]
created: 2025-12-03
updated: 2025-12-03
sources: ["ai三国杀！openai狂卷，deepseek封神，却被mistral偷了家？.md"]
---

# Ministral 3

Ministral 3 是 [[Mistral AI]] 发布的小模型系列，包含 3B、8B 和 14B 三个参数量版本。该系列专为 [[边缘部署]] 设计，强调在保持高性能的同时实现低延迟和低成本，是 Mistral “软件制造业”哲学的核心体现。

## 特性
-   **多模态**：全系列支持原生图像理解。
-   **版本**：每个参数量均提供 Base、Instruct 和 Reasoning 三个版本。
-   **部署能力**：经过官方优化，可运行在 DGX Spark、RTX PC、普通笔记本，甚至 Jetson 嵌入式板子上。

## 性能基准
-   **综合智能**：Instruct 版本得分分别为 31（14B）/ 28（8B）/ 22（3B），全面超越上一代 Mistral Small 3.2。
-   **数学推理**：14B Reasoning 版本在 AIME’25 上达到 85% 的准确率。
-   **对比竞品**：14B 版本在数学、代码和多模态任务上几乎全面领先 Gemma 13B 和 Qwen 14B “Thinking”，被称为同量级中的“天花板”。

## 应用场景
Ministral 3 系列旨在解决企业场景中的成本和延迟问题。[[Guillaume Lample]] 指出，许多公司发现使用顶级闭源大模型（如 GPT-4）做原型成本过高，最终转而使用 Mistral 的小模型进行微调以满足生产环境需求。这使得 Ministral 3 成为替代昂贵云端 API 的有力选择。