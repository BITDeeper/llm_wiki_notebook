---
type: entity
title: ProgramBench
tags: [benchmark, software-engineering, meta, stanford, reverse-engineering, llm, evaluation]
related: [swe-bench, claude-opus-4-7, 行为等价性测试, 黑盒逆向工程, mini-swe-agent, 工程智能, 单体化代码, claude-code, gemini]
created: 2026-05-06
updated: 2026-05-08
sources: ["刷榜ai全挂了！meta斯坦福地狱级测试，gptclaudegemini交出0分.md", "0%完成率！claude、gpt、gemini-全灭，swe-bench作者新作把ai圈干沉默了.md"]
---

# ProgramBench

**ProgramBench** 是由 [[SWE-Bench]] 作者联合 [[Meta]] FAIR、[[斯坦福]] 大学、[[哈佛]] 大学等机构发布的新一代软件工程基准测试。它旨在评估大语言模型从零开始构建真实、可执行软件系统的能力，而非仅仅测试局部代码补全或 Bug 修复能力。

## 核心评测方法

与 [[SWE-Bench]] 等传统基准不同，ProgramBench 采用了独特的**黑盒逆向工程**场景：

1.  **任务设定**：删除原始源码和测试，仅保留可执行文件和使用文档，要求模型重建项目（如 FFmpeg、SQLite、ripgrep）。
2.  **禁止联网**：迫使模型必须展示内在的工程推理能力，而非通过搜索或复制粘贴代码来通过测试。
3.  **行为等价性测试**：不比对源码相似度，只要求生成的程序在输入输出行为上与原程序一致。这允许模型使用不同的语言、算法或架构来实现功能。评测利用 Agent 驱动的模糊测试生成了 248,853 个行为测试来验证正确性。

## 测试规模

-   **任务数量**：200 个软件项目。
-   **覆盖领域**：压缩工具（zstd, lz4）、语言解释器（PHP, Lua）、数据库（DuckDB, SQLite）、媒体处理（FFmpeg）等。
-   **代码量**：中位数 8,635 行，最大项目（FFmpeg）达 270 万行。

## 测试结果（2026）

在 9 个顶级模型（包括 [[Claude Opus 4.7]], [[GPT-5.4]], [[Gemini 3.1 Pro]]）的测试中：

-   **严格完成率**：**0%**（所有模型均未完全通过任何项目）。
-   **接近完成率**（>95%）：[[Claude Opus 4.7]] 最高，但也仅达到 3%。
-   **平均通过率**：[[Claude Opus 4.7]] 最高，为 51.2%。

## 暴露的问题

这一结果揭示了当前 AI 模型在软件工程领域的核心短板：

-   **缺乏全局规划**：模型虽然具备代码生成能力，但极度缺乏全局系统规划能力和长期软件系统构建能力。
-   **单体化倾向**：模型倾向于生成 [[单体化代码]]，即逻辑集中在单文件、目录结构浅、模块拆分少，这与人类工程师追求的模块化和关注点分离背道而驰。
-   **架构设计缺陷**：模型在软件架构设计（如模块化、抽象）方面存在严重不足。
-   **语言差异**：模型在 C/C++ 项目上表现相对较好，而在强调工程哲学（如模块化、所有权）的 Rust 项目上表现最差。

## 技术栈与行业意义

测试使用了 [[mini-SWE-agent]] 作为极简脚手架，强调无上下文压缩、无多 Agent 协作、无定制化工具链，以纯粹考察模型本身的能力。

ProgramBench 的发布标志着 AI 编程评估从“函数级”向“系统级”的跨越。它指出了 AI Coding 的下一个瓶颈，促使行业研究重心转向 Memory、Agents、Repo-level reasoning 和 Long-horizon planning 等方向。