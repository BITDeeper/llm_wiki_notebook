---
type: source
title: "结构化扩展拿下Agent工具检索新SOTA，精准找到API｜ICLR'26"
created: 2026-03-18
updated: 2026-05-03
tags: [tool-retrieval, iclr-2026, agent, nlp, documentation]
related: [eit-nlp, tool-rex, tool-embed, tool-rank, 工具检索, 文档结构化扩展]
authors: [路璇, 黄浩航, 沈晓宇]
year: 2026
url: "https://mp.weixin.qq.com/s/2XB5Ljdau3frmi-_ZK9Ykw"
venue: "ICLR 2026"
sources: ["结构化扩展拿下agent工具检索新sota，精准找到api｜iclr'26.md"]
---

# 结构化扩展拿下Agent工具检索新SOTA，精准找到API｜ICLR'26

## 概述

本文报道了宁波东方理工大学（EIT-NLP）沈晓宇团队在 ICLR 2026 上发表的关于工具检索的研究工作。该研究提出核心观点：当前工具检索的瓶颈主要在于**工具文档质量**（描述不完整、结构不统一），而非模型能力本身。团队通过“文档结构化扩展”方法，构建了新的基准 [[tool-rex]] 并训练了专用模型 [[tool-embed]] 和 [[tool-rank]]，取得了 SOTA 成绩。

## 核心论点

- **文档优于模型**：在工具检索任务中，提升文档表达质量往往比增加模型复杂度更直接有效。
- **语义鸿沟**：用户自然语言查询与简略技术文档之间的表达差异是导致检索失败的根本原因。
- **结构化扩展**：通过 LLM 将零散的工具文档补充为包含 `function`、`tags`、`when_to_use`、`limitation` 等字段的标准化结构。

## 关键技术组件

### 1. TOOL-REX 基准
在原有 [[toolret]] 基准基础上，引入结构化的 `tool_profile` 字段。通过自动化 Pipeline（[[qwen3-32b]] 生成 → [[llama-3-1-70b]] 校验 → 人工抽检）构建高质量扩展文档。

### 2. 大规模训练语料
- 50k embedding 训练样本
- 200k reranker 训练样本

### 3. 专用模型
- **[[tool-embed]]**：面向 [[dense-retrieval]] 的嵌入模型，用于高效召回。
- **[[tool-rank]]**：基于 LLM 的重排序模型，用于精细排序。

## 实验发现

- 仅替换为扩展后的文档，在相同模型下检索性能显著提升。
- `function` 与 `tags` 字段对密集检索影响显著；`when_to_use` 在 [[reranking]] 阶段作用关键。
- 证明了“Better documentation → Better retrieval”。

## 相关链接

- 论文标题：Tools are under-documented: Simple Document Expansion Boosts Tool Retrieval
- arXiv: https://arxiv.org/abs/2510.22670
- GitHub: https://github.com/EIT-NLP/Tool-REX