---
type: source
title: "0%完成率！Claude、GPT、Gemini 全灭，SWE-Bench作者新作把AI圈干沉默了"
tags: [ai-coding, benchmark, software-engineering, llm]
related: [programbench, 工程智能, 单体化代码, claude-code, gemini]
created: 2026-05-07
updated: 2026-05-07
authors: ["机器之心"]
year: 2026
url: "https://mp.weixin.qq.com/s/43wPVMKzNxC_R0ZYmUn0Rg"
venue: "机器之心"
sources: ["0%完成率！claude、gpt、gemini-全灭，swe-bench作者新作把ai圈干沉默了.md"]
---

# 源文档摘要

本文报道了由 Meta FAIR、斯坦福和哈佛联合发布的新一代软件工程基准测试 [[programbench]] 的核心发现：当前顶尖大语言模型（包括 Claude Opus 4.7、GPT-5.4、Gemini 3.1 Pro 等）在从零重建真实软件项目的任务中，**严格完成率为 0%**。

## 核心观点

- **评估范式转移**：[[programbench]] 将评估重点从局部代码补全（如 SWE-Bench）转向全局系统构建。它要求模型仅根据功能描述和文档，从零开始重建 FFmpeg、SQLite 等真实软件系统。
- **行为等价**：测试不比对源码相似度，只要求生成的程序在输入输出行为上与原程序一致。这允许使用不同的语言或架构实现，更接近真实工程需求。
- **根本缺陷**：模型极度倾向于生成 [[单体化代码]]（逻辑集中在单文件、目录结构浅、模块拆分少），缺乏人类工程师的模块化思维和全局系统规划能力。
- **语言差异**：模型在 C/C++ 项目上表现较好（可能因训练数据丰富），在强调工程哲学（模块化、所有权）的 Rust 项目上表现最差。

## 行业影响

该基准测试揭示了 AI 编程的瓶颈已从“代码生成”转向“长期系统维护”。未来的竞争焦点将集中在 Memory、Agents、Repo-level reasoning 和 Autonomous software engineering 等领域。

## 相关争议

针对“连人类都做不到”的质疑，硅谷投资人 Deedy Das 辩护称，Benchmark 的目标是推动超越人类平均水平的智能，且 AlphaGo 的例子证明超越人类的 Benchmark 依然有价值。