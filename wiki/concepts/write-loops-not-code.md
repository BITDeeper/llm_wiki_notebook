---
type: concept
title: 写Loops而非写代码
tags: [ai编程, 自动化, agent调度, 工作方式]
related: [boris-chemy, claude-code, 1-n-agent调度, agentic-engineering, vibe-coding]
created: 2026-06-07
updated: 2026-06-07
sources: ["rss/claude-code之父：「品味」不是人类护城河；当工程师不再写代码，招聘看什么？.md"]
---
# 写Loops而非写代码

## 核心概念
[[boris-chemy|Boris Cherny]] 描述的新工作方式：不再直接 Prompt AI 模型，而是编写自动运行流程和循环来管理多个 AI 实例。工作从"写代码"变成"设计自动化系统"。

## 演进阶段

### 第一阶段：传统开发
打开 IDE、编写代码、偶尔使用自动补全。这是传统的软件开发方式。

### 第二阶段：指挥模型
向 Claude 描述需求、让 Claude 写代码、自己负责检查和修正。人依然在直接指挥模型，只是代码由模型生成。这是一个过渡阶段。

### 第三阶段：写 Loops
不再直接 Prompt Claude，而是编写各种自动运行的流程和循环。这些循环负责：
- 向 Claude 提出问题
- 拆解任务
- 管理上下文
- 协调多个 Claude 实例之间的工作

人的工作变成了设计这些自动运行的系统。

## 与其他概念的关系

### 与 [[1-n-agent调度]] 的关系
"写 Loops"是 [[1-n-agent调度]] 的具体实践形态。Boris 日常同时运行5-10个 Claude 实例，分析反馈时运行数百个实例。

### 与 [[agentic-engineering]] 的关系
从 Copilot 模式到 Agent 系统模式的演进，是 Agentic Engineering 在编程领域的具体体现。

### 与 [[vibe-coding]] 的关系
两者都代表了编程抽象层级的提升，但"写 Loops"比 Vibe Coding 更进一步——不仅代码由模型生成，连与模型的交互本身也被自动化了。

### 与 [[任务执行范式]] 的关系
代表了从"人指挥模型"到"程序指挥模型"的范式转换，是任务执行范式的最新演进阶段。

## 关键引述
> "我的工作已经变成写 Loops。"

> "过去是人向 Claude 下达指令。现在则是程序替他向 Claude 下达指令。"