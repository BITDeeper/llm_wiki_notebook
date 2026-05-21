---
type: entity
title: Entire CLI
tags: [tool, cli, open-source, version-control]
related: [entire, checkpoints, claude-code, gemini]
created: 2026-04-05
updated: 2026-04-05
sources: ["「ai杀死git」？前github掌门人开启ai原生操作系统.md"]
---

# Entire CLI

Entire CLI 是 [[entire]] 公司发布的首个开源产品，是一个命令行工具，旨在通过 [[checkpoints]] 功能解决 AI 编程中的上下文丢失问题。

## 核心功能：Checkpoints
传统的 Git 只保存代码的变更内容，而丢失了产生这些变更的“原因”。Entire CLI 的 Checkpoints 功能将 AI 编程时的完整上下文作为版本数据的一部分存入 Git，包括：
- 对话记录
- 提示词
- 涉及文件
- Token 使用量
- 工具调用

## 价值与优势
1. **可追溯性**：代码评审时可以关注大模型推理时的意图和约束，而不仅仅是代码差异。
2. **无缝交接**：接手代码时无需重放提示或会话即可理解上下文。
3. **减少消耗**：由于包含上下文信息，编程智能体可以避免重复过去会话中已纠正的错误，从而减少 Token 消耗。
4. **多智能体协同**：支持多智能体并发对话，共享上下文。

## 兼容性
目前支持 Anthropic 的 [[claude-code]] 和 Google 的 [[gemini]] CLI。Entire 承诺将保持平台开放，支持所有智能体和模型。

## 使用方法
开发者只需执行以下命令即可启用：
```bash
curl -fsSL https://entire.io/install.sh | bash
entire enable
```