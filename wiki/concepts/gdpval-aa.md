---
type: concept
title: GDPval-AA
tags: ["benchmarks", "agent-workflows", "llm-evaluation", "benchmark", "evaluation"]
related: [artificial-analysis, intelligence-index, grok-4-3, claude-opus-4-6, gpt-5-2]
created: 2026-05-02
updated: 2026-05-08
sources: ["马斯克的grok-4.3悄悄上线，跑分评测出炉.md", "最强claude模型提前曝光！附带anthropic三千份保密档案在线裸奔.md"]
---

# GDPval-AA

## 定义
[[GDPval-AA]] 是一个侧重于代理任务 的评测基准，旨在评估 AI 模型在知识工作领域的表现。

与传统的 MMLU 或 Chatbot Arena 不同，它更接近真实的工作流场景，例如整理资料、执行复杂步骤、处理办公任务等。其评测范围主要涵盖金融、法律和其他具有高经济价值的任务。

## 评测表现
该基准被广泛用于衡量模型在实际“干活”的能力（如写周报、搭表格、做方案）。

- **[[Grok 4.3]]**：在该基准上取得了 1500 Elo 的成绩，相比前代提升了 321 分。
- **[[claude-opus-4-6]]**：在与 OpenAI 的 [[gpt-5-2]] 的对比中，Opus 4.6 在 GDPval-AA 上比 GPT-5.2 高出 144 Elo，表明其在处理复杂经济相关任务时具有显著优势。

## 意义
GDPval-AA 的高分意味着模型更适合作为 [[任务执行范式]] 中的工具，能够胜任自动化办公和流程化任务，而不仅仅是进行对话。