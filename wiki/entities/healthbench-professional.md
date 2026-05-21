---
type: entity
title: HealthBench Professional
tags: [数据集, 基准测试, 医疗ai, 评测]
related: [chatgpt-for-clinicians, 医疗-llm-评审]
created: 2026-04-24
updated: 2026-04-24
sources: ["72%美国医生已用ai！chatgpt杀入诊室，不看病专干杂活.md"]
---

# HealthBench Professional

## 概述
[[HealthBench Professional]] 是 OpenAI 发布的针对临床 AI 的评测基准，是此前 HealthBench 的升级版。它从面向普通健康对话的评估，进一步聚焦到临床医生在日常工作中向 [[chatgpt-for-clinicians]] 提出的真实任务。

## 数据集构成
- **规模**：包含 525 个最终任务。
- **来源**：从 15,079 个候选示例池中筛选得出，均来自医生在 ChatGPT for Clinicians 中的真实对话。
- **质量控制**：每个任务由 3 名以上医生参与评分标准编写和多轮裁定。
- **红队测试**：约三分之一的案例来自医生的“红队测试”，故意刁难模型、专找弱点。困难案例占比是普通分布的 3.5 倍。

## 评测结果
在该基准测试中，各模型得分如下：
- **ChatGPT for Clinicians (GPT-5.4)**: 59.0
- **基础版 GPT-5.4**: 48.1
- **Claude Opus 4.7**: 47.0
- **Gemini 3.1 Pro**: 43.8
- **人类医生**: 43.7

此外，发布前的测试显示，在 6,924 段对话中，99.6% 的回答被评为安全且准确。

## 争议与局限性
由于基准由 OpenAI 发布，且 OpenAI 的模型在评测中获得了最高分，这引发了关于“既当裁判又参赛”的公信力质疑。尽管 OpenAI 声称测试设计严谨（多医生裁定、红队测试），但缺乏独立第三方验证仍是一个主要局限。

## 参见
- [[医疗-llm-评审]]：更广泛的医疗 AI 评审概念。