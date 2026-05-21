---
type: entity
title: OpenAI Frontier
tags: [team, openai, automation, platform, agent]
related: ["harness-engineering", "ryan-lopopolo", "openai", "promptfoo", "openclaw"]
created: 2026-05-01
updated: 2026-05-08
sources: ["撕开claude-code真相：让它好用的98.4%，是工程不是ai.md", "openai为龙虾紧急收购了一家23人公司.md"]
---

# OpenAI Frontier

**OpenAI Frontier** 是 [[OpenAI]] 内部的一个实验性团队与平台，致力于探索极限的 AI 自动化编程及智能体（Agent）基础设施。它既是 [[Harness Engineering]] 范式的极致实践者，也是 OpenAI 在“龙虾”（智能体）时代战略布局的核心平台。

## 平台定位与战略背景

OpenAI Frontier 专注于解决智能体在实际业务落地中的工程化问题，包括评估、安全性和合规性。随着智能体被赋予访问邮箱、文档、数据库及各类 API 的高权限，平台的安全性和稳定性变得至关重要。

该平台的推出反映了 AI 行业从单纯模型开发向 [[任务执行范式]] 的转变。企业不再满足于简单的对话生成，而是要求 AI 能够自主完成复杂任务，这对平台的控制能力和安全机制提出了更高要求。

## 实验成果：极限自动化编程

在一个内部 Beta 项目中，该团队从空仓库起步，在约 5 个月内实现了惊人的自动化指标：
- 由 Codex 生成了约 **100 万行代码**。
- 创建了约 **1500 个 PR**。
- 团队从 3 人扩展到 7 人，实现了接近 **“0 人工代码、0 人工 review”** 的形态。

## 工程理念

团队负责人 [[Ryan Lopopolo]] 指出，他们的核心策略是利用模型极高的并发能力和极低的成本，来替代人类有限且昂贵的同步注意力。

### 关键实践
- **层级架构强约束**：依赖关系单向流动，由 Linter 在 CI 层强制执行。
- **Linter 即指令**：错误信息被设计为 AI 可直接读懂并修复的指令（如 `use logger.info instead of console.log`），而非仅给人类看的警告。

## 安全与评估：Promptfoo 整合

为了确保智能体在执行任务时的行为符合预期，防止类似 [[OpenClaw]] 删除邮件的事故再次发生，OpenAI 于 2026 年 3 月收购了 [[Promptfoo]] 并将其技术整合进 OpenAI Frontier。

此次整合旨在利用 Promptfoo 的自动化评测、[[AI红队演练]] 和 CI/CD 集成能力，为 Frontier 平台上的智能体提供标准化的安全测试流程。