---
type: entity
title: VideoDR
tags: [benchmark, video-understanding, multimodal, evaluation]
related: [video-deep-research, agentic-vs-workflow, 目标漂移, gemini, gpt-5.2, qwen3-omni-30b]
created: 2026-01-22
updated: 2026-01-22
sources: ["视频理解+开放网络搜索=首个视频deep-research评测基准.md"]
---

# VideoDR

VideoDR (Video Deep Research) 是首个“视频深度研究”评测基准，由 QuantaAlpha 联合兰州大学、香港科技大学（广州）和北京大学推出。

## 核心特性
VideoDR 旨在模拟人类“看视频找线索 -> 上网搜证 -> 综合推理”的解决问题过程，填补了传统 VideoQA 仅关注视频内信息的空白。

### 双重依赖性
这是 VideoDR 数据集构建的核心原则。它剔除了仅凭视频或仅凭文本搜索就能回答的样本，强制要求模型必须同时具备：
1.  **视觉感知能力**：从多个视频帧中准确识别连续的关键信息。
2.  **检索验证能力**：跳出视频，在开放网络环境中进行交互式搜索和多跳推理。

### 评测覆盖
涵盖日常生活、经济、科技、文化、历史、地理六大领域，所有样本均经过严格的人工标注与质检。

## 评测发现
VideoDR 的评测结果揭示了当前多模态模型在处理复杂长链路任务时的局限性：
- **闭源领先**：[[Gemini-3-pro-preview]] 和 [[GPT-5.2]] 处于第一梯队。
- **开源差距**：开源模型（如 [[Qwen3-Omni-30B]]）在处理需要多跳推理和长程记忆的任务时表现显著落后。
- **范式反思**：证明了 [[agentic-vs-workflow]] 中，显式的 Workflow 模式在防止 [[目标漂移]] 方面往往优于端到端的 Agentic 模式。

## 外部资源
- [论文地址](https://arxiv.org/abs/2601.06943)
- [代码仓库](https://github.com/QuantaAlpha/VideoDR-Benchmark)