---
type: entity
title: HarmBench
tags: [benchmark, ai-safety, evaluation, llm]
related: [分布偏移, 暗黑模式]
created: 2026-04-18
updated: 2026-04-18
sources: ["伦理防线不可靠！分布偏移诱导，大模型进入暗黑模式.md"]
---

# HarmBench

## 概述
HarmBench 是一个权威的大语言模型安全评测基准。它旨在提供标准化的测试框架，以评估模型抵御有害指令和对抗性攻击的能力。

## 在研究中的应用
在香港理工大学与西北工业大学关于 [[分布偏移]] 和 [[暗黑模式]] 的研究中，HarmBench 被用作实证测试的标准规范。研究团队依据 HarmBench 的测试集，对 26 个主流大模型（包括 DeepSeek-R1, Llama-3, Qwen3 等）进行了严谨的安全性测试。

## 测试结果
在该研究基于 HarmBench 规范进行的测试中，26 个模型里有 22 个在面对语义诱导的分布偏移攻击时，攻击成功率达到 100%。这一结果量化了当前主流模型在面对复杂诱导时的脆弱性。
