---
type: entity
title: Nomic
tags: [model, local-inference, embedding, cost-optimization]
related: [本地推理, openclaw]
created: 2026-03-05
updated: 2026-03-05
sources: ["一行代码不写，龙虾军团日夜为我打工赚钱.md"]
---

# Nomic

Nomic 是一个 AI 模型，在 [[matthew-berman]] 的自动化工作流中被用于执行 [[本地嵌入]]任务。

## 应用场景
在 [[openclaw]] 的高频自动化场景中，为了降低 API 调用成本，Matthew Berman 选择在本地 MacBook 上运行 Nomic 模型来处理文本向量化。这一策略实现了数据处理的零边际成本，是 [[本地推理]] 在实际工程中优化成本的具体案例。

## 技术特点
- 支持本地部署，无需云端 API。
- 专注于嵌入任务，适合知识库检索和相似度匹配。