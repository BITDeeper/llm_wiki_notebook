---
type: concept
title: Codex Goal Mode（/goal 命令）
created: 2026-05-13
updated: 2026-05-13
tags: [ai编程, 目标驱动, agent, openai]
related: [ralph-loop, gpt-5.5, claude-code, 任务执行范式, ai-for-science]
sources: ["博士80小时熬夜改代码，codex-2小时交卷！科研奇点来了.md"]
---
# Codex Goal Mode（/goal 命令）

OpenAI Codex中的**目标驱动模式**，通过 `/goal` 命令激活，标志着从对话式AI到目标驱动AI的工程范式切换。

## 工作原理

按OpenAI Codex工程师Philip Corey的描述，`/goal` 是对 [[ralph-loop|Ralph Loop]] 的一种工程实现——让目标在多轮对话中持续存在，不达成不停止。

**普通Codex调用**：用户说一句 → AI做一步 → 回复一句（线性交互）

**Codex /goal模式**：用户设定一个目标 → AI自行拆分子任务 → 自行执行 → 自行review → 自行继续循环 → 直到达成或失败（自主循环）

## 最优配置

[[dan-mcateer|Dan McAteer]] 总结的当前最高效AI智能体配置：

- **工具**：OpenAI Codex /goal 命令
- **模型**：[[gpt-5.5|GPT-5.5]] high
- **模式**：fast mode

其核心优势在于：模型自行设定的目标和提示词很可能比人类手写的更出色。

## 科研应用

/goal模式天然契合科研型循环任务（提出假设→设计实验→运行→看结果→修正假设→再实验），在机械可解释性研究任务中实现了约40倍效率提升（博士预估80小时 vs AI实际1小时56分钟）。

## 与竞品的关系

Codex Goal Mode 与 [[claude-code|Claude Code]] 在AI编程代理赛道形成直接竞争，但/goal的"目标驱动"模式区别于Claude Code的"对话驱动"模式，代表了不同的Agent设计哲学。