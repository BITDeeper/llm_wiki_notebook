---
type: concept
title: Useful Context Searching
tags: [agent-technique, lsp, optimization]
related: [codebrain-1, validation-feedback, lsp]
created: 2026-02-11
updated: 2026-02-11
sources: ["硬刚openai！中国团队杀入agentic-ai全球前二，一战封神.md"]
---

# Useful Context Searching

[[Useful Context Searching]]（有效上下文检索）是一种旨在提高 AI 智能体代码生成质量的技术策略。其核心思想是：在复杂任务中，信息并非越多越好，而是“是否相关”才至关重要。

## 工作原理
该技术通常利用 [[LSP]] (Language Server Protocol) 的功能，根据当前任务需求和已有的 Code Base 索引，精准检索与当前任务高度相关的代码片段、API 签名、文档和使用实例。

## 优势
- **减少噪音**：避免向模型输入大量无关代码，从而减少上下文干扰。
- **抑制幻觉**：通过提供高度相关的参考信息，降低 LLM 产生错误逻辑或虚构 API 的概率。
- **提高效率**：缩短模型查找和理解代码的时间，加速生成过程。

## 应用案例
[[Feeling AI]] 的 [[CodeBrain-1]] 框架利用此技术，在为游戏 Bot 规划任务时，能够准确获取 `move_to(target)` 等方法的签名和文档，从而高效生成正确的代码。