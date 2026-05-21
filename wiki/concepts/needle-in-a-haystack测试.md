---
type: concept
title: Needle-in-a-Haystack测试
tags: [evaluation, benchmark, llm]
related: [200万tokens上下文窗口, gpt-5.4, deepseek-v4]
created: 2026-05-04
updated: 2026-05-04
sources: ["gpt-5.4意外泄露！openai最新模型瞄准这2大能力突围.md"]
---

# Needle-in-a-Haystack测试

Needle-in-a-Haystack（大海捞针）测试是一种用于评估大语言模型长上下文能力有效性的评测方法。

## 测试方法
测试者会在一段极长的文本（“干草堆”，Haystack）中插入一个特定的、不相关的句子或事实（“针”，Needle），然后要求模型准确提取出该信息。

## 评测意义
- **衡量召回率**：该测试直接反映了模型在海量信息中精准定位和提取关键信息的能力。
- **验证窗口有效性**：对于声称支持 [[200万Tokens上下文窗口]] 的模型（如 [[GPT-5.4]]），单纯的容量大小并不代表实际可用性。只有在 Needle 测试中保持高准确率（例如超过 90%），才能证明其长上下文能力是真实有效的，而非“虚标”。

## 行业标准
目前，该测试已成为衡量下一代大模型（如 [[DeepSeek V4]]、GPT-5.4）长上下文性能的核心指标之一。