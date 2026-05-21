---
type: entity
title: Baichuan-M3
tags: [model, medical-ai, llm, open-source]
related: [百川智能, 百小应, 严肃问诊, scan-bench, spar-algorithm, 事实感知强化学习]
created: 2026-01-13
updated: 2026-01-13
sources: ["世界最强医疗模型百川m3发布：ai医疗，奇点已至.md"]
---

# Baichuan-M3

**Baichuan-M3** 是由 [[百川智能]] 发布并开源的新一代医疗增强大语言模型。该模型号称“全球最强医疗模型”，在 [[HealthBench]] 等权威评测中达到 SOTA，并以其低幻觉率和主动问诊能力著称。

## 核心特性

### 严肃问诊能力
与传统的“背医书”式模型不同，[[baichuan-m3]] 具备原生的“端到端”严肃问诊能力。它不再满足于被动回答问题，而是能像真人医生一样主动追问、排查病因，特别是针对 [[红旗征]]（危险信号）的排查。

### 极低幻觉率
通过 [[事实感知强化学习]]（Fact-Aware RL）技术，M3 试图从模型“基因”里剔除幻觉。在不依赖外部搜索工具的情况下，其医疗幻觉率降至 **3.5%**，低于 [[GPT-5.2-High]]。

### 评测表现
- **HealthBench & HealthBench Hard**：双双夺冠。
- **SCAN-bench**：在自建的动态临床考场中，问诊准确度超越人类医生平均水平。

## 技术架构

### SCAN 原则
指导模型进行多轮对话的方法论，包含：
1.  **安全分层**：优先排查危急重症。
2.  **信息澄清**：量化诱因，明确症状。
3.  **关联追问**：基于初步回答锁定病因。

### SPAR 算法
通过分步惩罚机制，解决了长轮次对话中模型逻辑破碎的问题，让 AI 在有限轮次中精准获取关键信息。

## 应用场景
该模型已集成至 [[百川智能]] 旗下的医疗应用 [[百小应]] 中，充当医患之间的“翻译官”，帮助患者理清病情，为医生提供结构化报告。

## 开源信息
- **Hugging Face**: [Baichuan-M3-235B](https://huggingface.co/baichuan-inc/Baichuan-M3-235B)
- **GitHub**: [Baichuan-M3-235B](https://github.com/baichuan-inc/Baichuan-M3-235B)