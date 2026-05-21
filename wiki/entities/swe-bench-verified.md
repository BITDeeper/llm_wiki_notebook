---
type: entity
title: SWE-Bench Verified
tags: [benchmark, software-engineering, evaluation, 评测基准, 编程, 代码生成]
related: ["terminal-bench", "llm-as-a-verifier", "claude-code", "gemini", "斯坦福年度结论：中美大模型已没差距.md"]
created: 2026-04-27
updated: 2026-05-07
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md", "斯坦福年度结论：中美大模型已没差距.md"]
---

# SWE-Bench Verified

**SWE-Bench Verified** 是衡量 AI 模型软件工程能力（特别是代码生成与修复能力）的核心基准测试。它基于真实的 GitHub 仓库问题，用于评估 AI 智能体解决复杂软件工程任务的能力。

## 特点

与简单的代码生成任务不同，SWE-Bench Verified 涉及长时序的推理、多文件编辑和环境交互。它是测试 **[[LLM-as-a-Verifier]]** 在复杂场景下验证能力的重要基准。

## 性能表现

### 总体趋势
根据《2026年AI指数报告》，在该基准测试上，AI模型的性能在短短一年内（约2025年至2026年）从 **60%** 提升至 **接近100%**。这一数据表明，AI在解决真实世界编程问题（如通过GitHub提交的测试用例）的能力已经达到了极高的水平，接近甚至超越了人类初级开发者的效率。

这一飞跃直接对应了 [[claude-code]] 和 [[gemini]] 等编程模型在2025-2026年的激烈竞争与快速迭代。

### SOTA 成绩
在该基准上，应用 LLM-as-a-Verifier 框架的 Agent 取得了 SOTA 性能，证明了该验证框架在处理长时序任务时的有效性。