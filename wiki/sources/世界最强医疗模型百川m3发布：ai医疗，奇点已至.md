---
type: source
title: "世界最强医疗模型百川M3发布：AI医疗，奇点已至"
tags: [ai-healthcare, llm, baichuan-ai, medical-ai, open-source]
related: [baichuan-m3, 百小应, 严肃问诊, scan-bench, 王小川]
created: 2026-01-13
updated: 2026-01-13
authors: [新智元, 艾伦]
year: 2026
url: "https://mp.weixin.qq.com/s/pFIjeFbHtewWTAHL14eaXw"
venue: "新智元"
sources: ["世界最强医疗模型百川m3发布：ai医疗，奇点已至.md"]
---

# 世界最强医疗模型百川M3发布：AI医疗，奇点已至

## 摘要
百川智能发布并开源了新一代医疗增强大语言模型 [[baichuan-m3]]。该模型在全球权威医疗 AI 评测 [[HealthBench]] 及其高难度子集 HealthBench Hard 上双双夺冠，并在低幻觉领域以 3.5% 的幻觉率击败了 [[GPT-5.2-High]]。M3 的核心突破在于从“被动答题”转向具备“主动追问”能力的 [[严肃问诊]]，标志着 AI 医疗从聊天机器人向专业工具的进化。

## 核心观点
- **重新定义 AI 医疗**：AI 不再是被动的答题者，而是像医生一样具备主动追问、排查病因（特别是 [[红旗征]]）的能力。
- **技术突破**：通过 [[事实感知强化学习]]（Fact-Aware RL）从“基因”里剔除幻觉，而非仅依赖外挂知识库（RAG）。
- **评测创新**：联合 150 位医生构建了基于 [[OSCE]] 方法的 [[SCAN-bench]] 动态临床考场，评测结果显示问诊准确度超越人类医生平均水平。
- **应用落地**：旗下应用 [[百小应]] 集成 M3 模型，作为医患之间的“翻译官”，重塑工作流。

## 关键技术
- **SCAN 原则**：指导模型进行多轮对话的方法论，包含安全分层、信息澄清、关联追问。
- **SPAR 算法**：通过分步惩罚机制，让 AI 在有限对话轮次中精准获取关键信息。
- **Fact-Aware RL**：在模型训练奖惩中加入医学事实严苛校验，抑制幻觉。

## 数据表现
- HealthBench & HealthBench Hard：双料冠军。
- 幻觉率：3.5%（低于 GPT-5.2）。
- 问诊准确度：在 SCAN-bench 四个维度均显著高于人类医生基线。

## 相关链接
- [百小应网页端](https://ying.baichuan-ai.com/chat)
- [Hugging Face 模型地址](https://huggingface.co/baichuan-inc/Baichuan-M3-235B)
- [GitHub 开源地址](https://github.com/baichuan-inc/Baichuan-M3-235B)