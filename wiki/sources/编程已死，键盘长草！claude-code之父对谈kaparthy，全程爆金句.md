---
type: source
title: "编程已死，键盘长草！Claude Code之父对谈Kaparthy，全程爆金句"
tags: [ai-coding, agentic-ai, software-engineering, future-of-work]
related: [claude-code, andrej-karpathy, boris-cherny, agentic-coding, slopacolypse]
created: 2026-02-04
updated: 2026-02-04
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/MoOKJau-DdpuoiU_qOujZA"
venue: "新智元"
sources: ["编程已死，键盘长草！claude-code之父对谈kaparthy，全程爆金句.md"]
---

# 编程已死，键盘长草！Claude Code之父对谈Kaparthy，全程爆金句

## 概述
本文记录了 [[andrej-karpathy]] 与 [[boris-cherny]]（[[claude-code]] 负责人）之间关于编程未来的深度对谈。对话揭示了在 [[opus-4-5]] 等强力模型的推动下，软件开发正经历从“命令式编程”向 [[agentic-coding]]（代理编码）的范式转移。两位从业者分享了从“搬砖工”进化为“指挥官”的实战经验，同时也深刻反思了 [[disuse-atrophy]]（废用性萎缩）和 [[slopacolypse]]（垃圾代码末日）等潜在风险。

## 核心观点

### 1. 编程范式的彻底转移
- **现状**：Boris 团队目前的开发工作 **100% 由 Claude Code 结合 Opus 4.5 完成**，已持续两个多月。
- **工作流**：Boris 采用“AI 原生”工作流，同时运行 5-10 个 [[claude-code]] 实例，利用 **Plan Mode**（计划模式）确立策略，再切换至执行模式。
- **Karpathy 的体验**：在一个月内，工作流从“80% 手动 + 20% AI”转变为“80% AI + 20% 手动”。他形容这种体验为“用英语编程”，一旦习惯就回不去了。

### 2. 从 Software 2.0 到 Agentic Coding
- **Software 2.0**：Karpathy 于 2017 年提出的概念，即用神经网络权重替代人工编写的逻辑。
- **Agentic Coding (Software 3.0)**：当前阶段，人类仅提供 [[declarative-intent]]（声明式意图），AI 全权负责实现细节。
- **核心机制**：利用 [[opus-4-5]] 的长程推理能力和 **CLAUDE.md** 记忆文件，AI 能够理解项目架构，进行自我修正的“循环验证”（Looping），直到通过测试。

### 3. “10x 工程师”的重新定义
- **通才的胜利**：在 AI 填补技术细节的时代，死记硬背 API 不再是护城河。
- **新角色**：未来的顶级工程师是拥有宏观视野的通才，集产品经理、架构师和测试官于一身。
- **生存危机**：仅负责将需求翻译成代码的初级程序员面临被淘汰的风险。

### 4. 阴影与风险
- **废用性萎缩**：Karpathy 警告，过度依赖 AI 导致手动写代码和底层理解能力的退化。人类从“生成”模式转向“辨别”模式，可能丧失对系统的深层掌控。
- **Slopacolypse（垃圾代码末日）**：预计 2026 年，互联网和代码库可能被低质量、充满隐患的 AI 代码填满。AI 容易犯“微妙的概念错误”，如过度抽象和堆砌死代码。
- **解药**：Boris 提出的 **[[ai-reviewing-ai]]**（AI 审 AI）机制，即利用 Claude 审查 Claude 生成的代码，以抵消制造垃圾的速度。

## 关键引述
> “我两个月没手写过一行代码了。” — Boris Cherny

> “2025年11月，我还是80%手动+20% AI；到了12月，直接变成了80% AI + 20%手动。” — Andrej Karpathy

> “编程已死，编程万岁。死的是作为‘打字员’的程序员，活下来的是作为‘创造者’的我们。”

## 意义
这篇文章是关于 AI 时代编程范式转移的里程碑式记录。它不仅展示了 [[claude-code]] 和 [[opus-4-5]] 的实战能力，更深刻地探讨了人类在 [[agentic-coding]] 时代的定位：从执行者进化为决策者，同时也面临着技能退化和生态污染的严峻挑战。