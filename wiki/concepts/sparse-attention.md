---
type: concept
title: Sparse Attention
tags: [algorithm, optimization, efficiency]
related: [glm-5, deepseek-v4]
created: 2026-02-07
updated: 2026-02-07
sources: ["股价暴涨32%！glm-5登顶全球开源第一，25分钟一镜到底搓出完整系统.md"]
---

# Sparse Attention

[[Sparse Attention]]（稀疏注意力）是一种优化长上下文处理的技术。它通过减少注意力机制中的计算量，使得模型在处理超长文本时既能保持记忆力，又能大幅降低计算成本。

## 技术应用
[[GLM-5]] 首次集成了来自 [[DeepSeek]] 的 Sparse Attention 机制。这一集成解决了 Agent 运行中 Token 消耗巨大的痛点，使得在保持高性能的同时，部署成本更加可控。

## 重要性
在 [[Agentic Engineering]] 范式下，模型往往需要处理大量的上下文信息（如整个代码库、长对话历史）。Sparse Attention 是实现这一目标的关键技术支撑之一。