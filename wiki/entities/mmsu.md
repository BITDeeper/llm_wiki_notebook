---
type: entity
title: MMSU (Massive Multi-task Spoken Language Understanding and Reasoning Benchmark)
tags: [数据集, 评测基准, 语音理解, ICLR]
related: [gemini, 副语言学, 语音理解的多层结构, 感知与推理的倒置现象]
created: 2026-05-04
updated: 2026-05-04
sources: ["大模型真听懂了吗？最全综合性口语感知与推理基准-iclr'26.md"]
---

# MMSU

MMSU (Massive Multi-task Spoken Language Understanding and Reasoning Benchmark) 是一个发表于 ICLR 2026 的综合性口语感知与推理基准测试。它旨在系统评估语音大模型（SpeechLLMs）在真实口语交流场景中的理解与推理能力。

## 核心特征
- **规模**：包含 5,000 道选择题，覆盖 47 个子任务（24 个感知任务，23 个推理任务）。
- **数据来源**：结合了真实音频样本与专业录音，确保语音现象（如重音、停顿）的清晰呈现与可控对比。
- **理论框架**：基于语言学理论构建，将语音理解拆解为 [[语音理解的多层结构]]。

## 评测结果
- **人类表现**：89.72%
- **最佳模型**：[[Gemini]]-1.5-Pro (60.68%)
- **主要差距**：模型在 [[感知与推理的倒置现象]] 中表现出基础感知（尤其是音系）能力的短板。

## 设计维度
1. **感知 vs 推理**：评估模型是否能在捕捉声学特征的基础上进行逻辑推断。
2. **语言学 vs 副语言学**：区分语言内容理解与 [[副语言学]] 特征（如情绪、语调）的捕捉。
3. **理论分支**：涵盖语义、音系、说话人特征和表达风格四个核心分支。

## 意义
MMSU 揭示了当前语音大模型虽然擅长文本转写，但在处理“怎么说”（How it was said）和“真正想表达什么”（What was truly meant）方面存在严重缺陷，为模型改进提供了明确的方向。