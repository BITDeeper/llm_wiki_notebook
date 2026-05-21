---
type: concept
title: Agentic Engineering Patterns
tags: [methodology, ai-programming, workflow]
related: [simon-willison, claude-code, red-green-tdd, linear-walkthroughs]
created: 2026-03-16
updated: 2026-03-16
sources: ["拒绝vibe-coding！大神揭秘8套ai编程模式.md"]
---

# Agentic Engineering Patterns

## 概述
[[Agentic Engineering Patterns]]（智能体工程模式）是由 [[Simon Willison]] 总结的一套利用 AI Agent（如 [[Claude Code]]）进行软件开发的实战方法论。该模式旨在解决代码成本趋近于零时代的工程严谨性问题。

## 核心理念
在 AI 时代，代码生成的边际成本几乎为零，但交付高质量、可维护系统的成本依然高昂。该模式强调利用 AI 的生成能力，同时通过严格的工程约束（如测试）和深度理解（如演练）来保持系统的可控性。

## 包含模式
1.  **写代码很便宜**：大胆利用 AI 进行重构和尝试，打破传统的“开发成本”思维定势。
2.  **囤积已知技巧**：建立个人知识库，利用 AI 重组旧知识解决新问题。
3.  **[[红绿TDD]]**：使用“红绿”提示词策略，强制 AI 先写测试再写实现。
4.  **先跑测试**：在会话开始时强制运行测试，让 AI 理解项目上下文。
5.  **[[线性演练]]**：生成代码讲解文档，将 AI 转化为学习工具，偿还 [[认知债务]]。
6.  **[[交互式解释]]**：生成可视化演示（如动画），直观解释复杂逻辑。
7.  **GIF 优化案例**：针对特定任务（如 WebAssembly）的完整提示词示例。
8.  **常用提示词库**：积累高效的提示词模板。

## 目标
训练工程师掌握“让 AI 不跑偏”的能力，即在享受 AI 带来的效率提升的同时，确保代码质量和开发者的认知掌控力。