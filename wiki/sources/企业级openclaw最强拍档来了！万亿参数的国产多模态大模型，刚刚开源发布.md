---
type: source
title: "企业级OpenClaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布"
tags: [yuanlab-ai, multimodal-llm, moe, enterprise-ai, openclaw]
related: [yuan3-0-ultra, yuanlab-ai, layer-adaptive-expert-pruning-laep, 反思抑制奖励机制-rirm, openclaw]
created: 2026-03-05
updated: 2026-03-05
authors: [允中]
year: 2026
url: "https://mp.weixin.qq.com/s/OoehaXFDiONkaZVx-QzRLQ"
venue: "量子位"
sources: ["企业级openclaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布.md"]
---

# 企业级OpenClaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布

本文报道了 [[YuanLab.ai]] 开源发布的 [[Yuan3.0 Ultra]] 多模态大模型。这是一个万亿参数级别的混合专家（MoE）模型，旨在为企业级 [[OpenClaw]] 智能体提供核心多模态能力支撑。

## 核心技术亮点

- **[[Layer-Adaptive Expert Pruning (LAEP)]]**：一种针对预训练 MoE 模型的专家裁剪算法。通过分析训练稳定阶段的专家负载（发现差异近 500 倍），动态识别并剔除低贡献专家。该技术将模型参数从 1515B 优化至 1010B，同时将预训练算力效率提升了 49%。
- **[[反思抑制奖励机制 (RIRM)]]**：一种强化学习优化机制，旨在解决“过度思考”问题。通过对反思次数引入奖励约束，鼓励模型在获得可靠答案后减少无效反思，从而在保持精度的同时降低 Token 消耗。
- **[[Localized Filtering Attention (LFA)]]**：一种注意力机制变体，用于强化语义关系建模，相比经典 Attention 结构提供更高精度。

## 企业级能力表现

文章强调 [[Yuan3.0 Ultra]] 在企业级任务中的表现，并在多项评测中声称领先于 Claude Opus 4.6、Gemini 3.1 Pro 和 GPT-5.2 等模型：

- **复杂文档理解**：在 [[DocMatix]] 和 [[MMTab]] 评测中表现出色，能够处理图文混排文档和复杂表格。
- **检索增强生成 (RAG)**：在 [[ChatRAG]] 和 [[SummEval]] 评测中领先，支持跨文档知识检索与整合。
- **数据分析**：在 [[Spider]] 和 [[BIRD]] 等 Text-to-SQL 基准评测中表现优异，支持自然语言转数据库查询。

## 理论洞察

文章提出了 [[Functional Specialization]]（功能专一化）的概念，认为 MoE 模型在训练中会自发涌现类似大脑皮层的分工结构。[[LAEP]] 算法正是基于这一理论，通过裁剪冗余结构来保留高效的信息处理通路。

此外，模型采用了 [[Fast-thinking]]（快思考）范式，优先处理高信息增益步骤，而非单纯延长推理链条，以适应企业场景对响应速度和成本效率的要求。

## 开源与发布

[[Yuan3.0 Ultra]] 已全面开源，包括模型权重（16bit 与 4bit）、技术报告、训练方法及评测结果。