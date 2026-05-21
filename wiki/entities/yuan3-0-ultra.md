---
type: entity
title: Yuan3.0 Ultra
tags: [multimodal-llm, moe, enterprise-ai, open-source]
related: [yuanlab-ai, openclaw, layer-adaptive-expert-pruning-laep, 反思抑制奖励机制-rirm, localized-filtering-attention-lfa]
created: 2026-03-05
updated: 2026-03-05
sources: ["企业级openclaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布.md"]
---

# Yuan3.0 Ultra

[[Yuan3.0 Ultra]] 是由 [[YuanLab.ai]] 开源发布的万亿参数级多模态大模型。它是源 3.0 系列的旗舰版本，也是业界少数几个开源的万亿参数多模态模型之一。该模型专注于企业级应用，旨在为 [[OpenClaw]] 等智能体框架提供强大的多模态数据处理和复杂任务执行能力。

## 模型架构

- **基础架构**：采用统一多模态模型架构，实现视觉与语言信息的协同建模。
- **主干网络**：基于混合专家（MoE）架构构建。
- **参数规模**：
  - 初始训练参数：1515B
  - 经 [[Layer-Adaptive Expert Pruning (LAEP)]] 优化后：1010B
  - 激活参数：68.8B
- **注意力机制**：引入 [[Localized Filtering Attention (LFA)]] 机制，强化语义关系建模能力。

## 核心优化技术

### LAEP 优化
通过 [[Layer-Adaptive Expert Pruning (LAEP)]] 算法，模型在训练稳定阶段识别并剔除了低贡献专家。这一过程基于 [[Functional Specialization]] 理论，即模型内部会自发形成类似大脑功能区的专业化分工。
- **效果**：参数减少 33.3%，预训练算力效率提升 49%。

### RIRM 训练策略
采用 [[Fast-thinking]] 强化学习范式，并引入 [[反思抑制奖励机制 (RIRM)]]。
- **目的**：抑制“过度思考”现象，在保持高精度的同时降低推理过程中的 Token 消耗。
- **策略**：鼓励模型在获得可靠答案后减少无效反思，优先处理高信息增益步骤。

## 企业级能力

[[Yuan3.0 Ultra]] 针对企业复杂业务场景进行了深度优化，特别是在以下方面：

1.  **复杂文档与图表理解**：
    -   能够解析图文混排文档、复杂表格及跨页面信息关联。
    -   在 [[DocMatix]] 和 [[MMTab]] 评测中表现优异。

2.  **多源信息检索与整合 (RAG)**：
    -   支持跨文档知识检索与深度语义整合。
    -   在 [[ChatRAG]] 和 [[SummEval]] 评测中领先。

3.  **数据分析与决策辅助**：
    -   具备强大的 Text-to-SQL 能力，支持自然语言转数据库查询。
    -   在 [[Spider]] 和 [[BIRD]] 评测中表现出色。

## 开源发布

模型已全面开源，提供 16bit 和 4bit 版本，包含完整的训练方法、技术报告及评测结果。