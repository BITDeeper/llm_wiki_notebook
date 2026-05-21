---
type: concept
title: 红绿TDD
tags: [methodology, testing, ai-programming]
related: [agentic-engineering-patterns, tdd, claude-code]
created: 2026-03-16
updated: 2026-03-16
sources: ["拒绝vibe-coding！大神揭秘8套ai编程模式.md"]
---

# 红绿TDD

## 定义
[[红绿TDD]]（Red-Green TDD）是针对 AI 编程优化的一种测试驱动开发（TDD）提示词策略。它将复杂的 TDD 流程浓缩为简单的指令：“先写测试（失败/红），确认失败，写实现（通过/绿）”。

## 为什么对 AI 特别有效？
AI 生成代码时存在两大风险：
1.  生成“能跑但不对”的代码。
2.  生成“从不被用”的冗余代码。

通过在提示词中强制执行“红绿”循环：
- **强制定义正确性**：AI 必须先理解测试用例，才能通过测试。
- **约束输出范围**：测试用例限制了 AI 的生成空间，防止其发散。
- **明确项目结构**：测试文件本身也是项目结构的文档。

## 实践方式
在 [[Claude Code]] 等工具中，可以直接使用提示词：“使用红绿 TDD 模式：先写测试，确认失败，然后写实现通过测试。”