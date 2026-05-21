---
type: entity
title: Subquadratic
tags: [ai-startup, llm, architecture, ssa, controversy, ai-company, infrastructure]
related: [subq, ssa, justin-dangel, alexander-whedon, aldea, 亚二次稀疏注意力]
created: 2026-05-06
updated: 2026-05-08
sources: ["13人干翻transformer！新架构ssa算力暴减千倍，成本仅opus-5%.md", "领先于transformer！新架构首个1200万上下文模型subq，成本仅opus的5%.md"]
---

# Subquadratic

[[Subquadratic]] 是一家位于美国迈阿密的 AI 初创公司，前身为 Aldea。该公司因发布声称能颠覆 [[Transformer]] 架构的 [[SSA]]（亚二次方稀疏注意力）模型 [[SubQ]] 而受到广泛关注。

## 公司概况
- **成立时间**：2024 年
- **团队规模**：13 人（包括 2 位创始人和 11 位全博士研究人员）
- **融资情况**：2900 万美元种子轮，估值 5 亿美元
- **转型历史**：最初名为 Aldea，专注于语音模型，后转型专注于底层注意力架构研究。

## 核心产品与技术
### [[SubQ]]
全球首个基于 [[SSA]] 架构的大语言模型，主打 1200 万 token 超长上下文和极低推理成本。

### [[SSA]] 架构
Subquadratic 提出了 SSA（Subquadratic Sparse Attention，亚二次稀疏注意力）架构，旨在打破 Transformer 的“二次方诅咒”，使百万级 token 的处理在计算和经济上成为可行。

## 技术理念
Subquadratic 认为，企业 AI 的核心痛点（如代码库、合同、知识库分析）本质上是长上下文问题。传统的解决方案（如 RAG、Agent 编排）通过切碎文档来绕过上下文限制，导致信息碎片化和结构丢失。Subquadratic 主张通过改造模型架构，让模型真正具备处理长文档的能力，从而减少对外部“脚手架”的依赖。

## 团队成员
- **[[Justin Dangel]]**：联合创始人兼 CEO。
- **[[Alexander Whedon]]**：联合创始人兼 CTO，积极宣传 [[SubQ]] 的技术突破，称其为 LLM 智能的一次重大飞跃。
- **研究团队**：成员均拥有博士学位，来自 Meta、谷歌、牛津大学、剑桥大学、Adobe 等机构。

## 争议
尽管发布了惊人的基准测试数据，但因其极小的团队规模和缺乏技术细节，部分业内人士（如 OpenAI 前研究员 [[Will Depue]]）质疑其模型可能是基于现有开源模型（如 Kimi 或 DeepSeek）的微调版，而非原创架构突破。