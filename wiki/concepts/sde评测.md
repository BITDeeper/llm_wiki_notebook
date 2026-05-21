---
type: concept
title: SDE评测
tags: [benchmark, scientific-discovery, evaluation, ai-for-science]
related: [深度原理, scaling-law, ai-for-science, gpt-5, claude-4.5]
created: 2026-01-15
updated: 2026-01-15
sources: ["一夜200万阅读，openai神同步！这项测评框架让全球顶尖llm全翻车.md"]
---

# SDE评测

**SDE**（Scientific Discovery Evaluation，科学发现评测）是首个针对大语言模型在科学发现领域能力的评测体系。该体系由中国团队「[[深度原理]]」领衔全球24所顶尖科研机构共同提出。

## 核心理念
SDE旨在解决传统评测标准（如GPQA、MMMU）仅能评估模型「做题」能力，而无法评估真实科研能力的问题。它将评测重点从简单的问答式转向了具体的**「假设->实验->分析」**实验场景闭环。

## 评测维度
SDE覆盖生物、化学、材料、物理四大科学领域，重点考察模型在以下方面的能力：
- **多步推理**：处理复杂科学逻辑链条的能力。
- **不确定性量化**：对实验结果和理论预测的置信度评估。
- **实验-理论闭环**：根据实验结果调整理论假设的能力。

## 主要发现
1.  **高分低能**：GPT-5、Claude-4.5、DeepSeek-R1、Grok-4等顶尖模型在GPQA/MMMU上准确率达80-90%，但在SDE中平均仅为50-70%。
2.  **Hard难题极低分**：在86道「SDE-Hard」高难度题目中，所有模型得分均不足12%。
3.  **边际效益递减**：GPT-5相比前代模型，算力和参数大幅增加，但在SDE上的平均准确率提升仅为3%-5%，部分场景（如NMR结构解析）甚至出现性能下滑。

## 意义
SDE的发布揭示了当前[[scaling-law]]在科学发现领域的局限性，证明了单纯增加模型规模无法直接通向科学超级智能。该评测与OpenAI同期发布的《FrontierScience》论文观点神同步，共同指出了AI for Science领域需要新的评测思路和模型架构。