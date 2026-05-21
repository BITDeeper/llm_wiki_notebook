---
type: concept
title: 线性演练
tags: [learning, code-review, ai-programming]
related: [cognitive-debt, agentic-engineering-patterns, simon-willison]
created: 2026-03-16
updated: 2026-03-16
sources: ["拒绝vibe-coding！大神揭秘8套ai编程模式.md"]
---

# 线性演练

## 定义
[[线性演练]]（Linear Walkthroughs）是一种利用 AI 生成结构化代码讲解文档的学习模式。它要求 AI 按照逻辑顺序详细讲解代码库中的每一个文件或函数，帮助开发者快速理解陌生代码或偿还 [[认知债务]]。

## 应用场景
- **偿还认知债务**：在使用 AI 快速构建原型后，通过演练补全对代码逻辑的理解。
- **代码审查**：让 AI 先讲解代码逻辑，再进行人工审查，提高效率。
- **学习新技术栈**：例如 Simon Willison 在使用 SwiftUI 时，通过演练文档快速掌握了该框架的知识。

## 价值
- **将 AI 转化为导师**：AI 不再仅仅是代码生成器，而是变成了个性化导师。
- **防止黑盒化**：确保开发者始终掌握系统的核心逻辑，避免核心业务变成不可控的黑盒。
- **加速学习**：相比于阅读枯燥的文档，AI 生成的演练文档更具针对性和上下文相关性。

## 操作示例
“请配合 Showboat 工具，为这个项目生成一份详细的演练文档，讲解所有 `.swift` 文件的作用和逻辑。”