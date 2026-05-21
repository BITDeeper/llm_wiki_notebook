---
type: source
title: "Meta-Harness让Haiku性能狂飙，甚至追平Opus！"
authors: [倾倾]
year: 2026
url: "https://mp.weixin.qq.com/s/06Q4gS0v7-qkL0ySFqKXRA"
venue: "新智元"
tags: [ai-agent, llm-optimization, harness-engineering, code-agent]
related: [meta-harness, harness, claude-code, agent-model-harness, terminalbench-2]
created: 2026-04-04
updated: 2026-04-04
sources: ["meta-harness让haiku性能狂飙，甚至追平opus！.md"]
---

# Meta-Harness让Haiku性能狂飙，甚至追平Opus！

## 摘要
本文报道了斯坦福 IRIS Lab 联合 MIT 等机构提出的 **[[Meta-Harness]]** 框架。该框架通过自动化优化 AI 智能体的“脚手架”（[[Harness]]），显著提升了模型性能。实验表明，轻量级模型 [[Claude Haiku 4.5]] 在优化后性能提升了 37.6%，甚至超越了未优化的更大模型，证明了 **[[Agent = Model + Harness]]** 这一新范式的有效性。

## 核心观点

### 模型是商品，Harness 决定成败
文章指出，随着模型能力趋同，支撑模型运行的 **[[Harness]]**（包括系统提示词、工具定义、重试逻辑、上下文管理等）已成为决定智能体性能的关键因素。
- 同一个模型，仅改变编辑格式，性能差距可达一倍以上（如 GPT-4 Turbo 准确率从 26% 升至 59%）。
- [[Harness]] 是让模型“大脑”能够干活的“身体”。

### Meta-Harness 的技术突破
传统的优化方法（如 Self-Refine, OPRO）只能看到压缩后的摘要或标量分数，上下文窗口通常限制在几千 token。
**[[Meta-Harness]]** 的核心创新在于：
1. **完整执行轨迹**：保留所有历史候选代码、每一轮的执行轨迹、命令日志、错误信息等，上下文量高达 **1000 万 token**（是传统方法的 400 倍）。
2. **反事实诊断**：基于完整轨迹分析失败原因，提出“如果当时这样做会怎样”的假设性改进。
3. **文件系统交互**：优化器（Proposer，使用 [[Claude Code]]）可以像人类工程师一样检索日志、浏览历史、编辑代码。

### 实验结果
1. **代码代理 ([[TerminalBench-2]])**：
   - [[Claude Haiku 4.5]] 成功率达到 **37.6%**，登顶所有 Haiku 智能体榜首。
   - [[Claude Opus 4.6]] 成功率达到 **76.4%**，仅次于 ForgeCode。
2. **文本分类**：
   - 在 LawBench 等数据集上，以十分之一的评估次数追平对手，并超越 SOTA 方法 7.7 个百分点。
3. **数学推理**：
   - 发现的检索策略在 5 个未见过的模型上平均提升 **4.7 个百分点**，证明了策略的可迁移性。

## 行业意义
这标志着 AI 竞争焦点从单纯比拼模型参数转向 **[[Harness]] 工程优化**。通过自动化优化“身体”，小模型也能发挥出接近大模型的性能，为降低 AI 应用成本提供了新路径。