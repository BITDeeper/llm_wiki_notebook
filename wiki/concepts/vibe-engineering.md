---
type: concept
title: Vibe Engineering (氛围流工程)
tags: [software-engineering, ai-collaboration, methodology]
related: [codex, 任务执行范式, 认知投降]
created: 2025-12-15
updated: 2025-12-15
sources: ["仅4人28天！openai首曝sora内幕：85%代码竟由ai完成.md"]
---

# Vibe Engineering (氛围流工程)

**Vibe Engineering**（氛围流工程）是一种在 AI 辅助开发中的人机协作模式，由 AI 研究员 Simon Willison 提出，并在 [[OpenAI]] 的 [[Codex]] 实践中得到验证。

## 定义
与盲目接受 AI 生成代码的“氛围编程”不同，Vibe Engineering 强调**人类必须保持在循环中**。在这种模式下，开发者从“代码编写者”转变为“指挥官”和“审查者”，负责制定目标、约束条件和架构决策，而 AI 智能体则负责具体的实现和填充工作。

## 核心原则

1. **先规划，再编码**
    在执行任务前，先让 AI 阅读相关代码并生成实施计划（微型设计文档），经人类确认后再动手。这能有效防止 AI 在架构判断上跑偏。

2. **立规矩**
    通过 `AGENTS.md` 等文件固化代码风格、检查规则和架构约束。这解决了 AI 上下文遗忘和风格不一致的问题，确保 AI 在不同会话中输出符合团队标准的代码。

3. **人类把控高杠杆工作**
    人类专注于架构设计、用户体验、系统性变更和最终质量把控，而将繁琐的代码实现、单元测试编写等任务交给 AI。

## 实践意义
Vibe Engineering 解决了 [[认知投降]] 的风险，确保了 AI 时代的工程严谨性。它表明，AI 并没有降低软件工程的门槛，反而要求开发者具备更深刻的系统理解能力，以便有效地指挥和审查 AI 的工作。