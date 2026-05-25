---
type: entity
title: Opus 4.7
tags: [anthropic, 大语言模型, 代码生成, 企业级ai, ai编程, claude]
related: [anthropic, claude-code, 任务执行范式, 长任务执行, gpt-5.5, swe-atlas, cursor, coding-agent-index]
created: 2026-04-19
updated: 2026-05-25
sources: ["opus-4.7重新登顶榜单，但强得多的gpt-5.5极大概率下周就发.md", "ai编程进入下半场！新基准不测补丁，拷问真正的工程能力.md"]
---

# Claude Opus 4.7

**Claude Opus 4.7**（简称 [[Opus 4.7]]）是 [[Anthropic]] 发布的 Claude 系列大语言模型版本，于 2026 年 4 月发布。该版本在综合智能和代码生成能力上重新登顶多项榜单，标志着 Anthropic 在 [[企业级 AI]] 市场战略上的重要里程碑。

## 核心特性

Opus 4.7 的主要改进集中在工程化落地能力，而非单纯的参数规模或对话体验：

- **长任务执行**：在多步骤、长链路任务中保持上下文连贯性，能够处理依赖错误并在失败后继续推进。
- **工具调用稳定性**：显著降低了调用外部 API 或软件工具时的错误率（降至原来的三分之一）。
- **工作流完成率**：在复杂的企业级工作流中表现出更高的可靠性。

## 性能表现

### 综合智能与代码能力

根据 [[Artificial Analysis]] 和 [[Arena.ai]] 的评测数据：

- **综合智能**：得分 57 分，高于前代 Opus 4.6 的 53 分。
- **代码能力**：在 Code Arena 排名第一，得分 1583，并在 React 和 HTML 子榜位居榜首。
- **基准测试**：
  - Anthropic 自建编码基准：任务解决率提升 13%。
  - CursorBench：成绩从 58% 提升至 70%。
  - Notion 多步工作流：整体效果提升 14%。

### SWE Atlas 评测表现

在 [[SWE Atlas]] 评测中，Opus 4.7 以 41.89% 的 Pass@1 排名第二，与榜首的 [[GPT-5.4]] 在统计意义上几乎打平：

- **Pass@1**：41.89%（通过 [[Claude Code]] 运行）
- **Pass@1（mini-SWE-Agent）**：38.94%（裸跑环境）
- **Pass³**：22.9%（三次全部通过的比例，相对 Pass@1 下滑约 45%）
- **主要失败模式**：缺乏运行时证据（46%），面对运行时问题时选择只读静态代码而非执行

### Coding Agent Index

在 [[Coding Agent Index|Artificial Analysis Coding Agent Index]] 中，Cursor CLI + Claude Opus 4.7 组合以综合 pass@1 61 分位居榜首。

## 市场定位

Opus 4.7 的发布反映了 Anthropic 的战略定力：不追求"全能状元"，而是致力于成为"最好用的执行单元"。它针对的是企业客户对 ROI（投资回报率）、人力替代率和错误率下降的量化需求，而非普通用户的娱乐或对话体验。

## 局限与权衡

- **创意写作回归**：尽管在工程和编码任务上表现强劲，但在部分 Creative Writing（创意写作）细分领域，Opus 4.7 的表现仍落后于上一代 Opus 4.6。这揭示了模型迭代中常见的"回归"现象，即优化特定工程能力可能在一定程度上牺牲通用或创意能力。
- **跨文件重构**：在跨文件重构任务中，Opus 4.7 能覆盖更高比例的需要修改的文件，但仍会在跨文件的调用点（call sites）上漏掉一部分。
- **运行时证据缺失**：Claude 系列模型在 Codebase Q&A 任务中的主要弱点是缺乏运行时证据，倾向于静态分析而非动态执行。