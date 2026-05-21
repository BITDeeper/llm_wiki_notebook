---
type: entity
title: "Deep Research Max"
created: 2026-04-30
updated: 2026-04-30
tags: [google, agent, research, finance]
related: [gemini-3-1-pro, test-time-compute, mcp-协议, 任务执行范式]
sources: ["谷歌掀桌：深度研究智能体进入自动驾驶时代.md"]
---

# Deep Research Max

Deep Research Max 是 [[google-deepmind]] 发布的增强版 AI 研究智能体，旨在处理需要最大详尽度和最高质量的重度研究任务。

## 核心特性

### 扩展测试时计算
与追求速度的标准版 Deep Research 不同，Deep Research Max 利用 [[test-time-compute]]（测试时计算）技术。这意味着在推理阶段，系统会投入更多的计算资源和时间，进行反复的搜索、推理、检索和精炼，以生成最终报告。

### 性能表现
Deep Research Max 在多项权威基准测试中取得了 SOTA（State of the Art）成绩：
- **DeepSearchQA**：得分 **93.3%**（综合网页研究能力），相比谷歌去年 12 月的 66.1% 有显著提升。
- **Humanity's Last Exam (HLE)**：得分 **54.6%**，刷新了人类最难学科专家级题库的纪录。
- **BrowseComp**：得分 **85.9%**，在网页上定位难找事实的能力。

## 应用场景
Deep Research Max 专为处理复杂的、长时间周期的专业任务设计，包括但不限于：
- **尽职调查**：对目标公司或资产进行全面的背景和财务审查。
- **竞品分析**：深度挖掘竞争对手的市场策略、产品优劣势及数据表现。
- **市场研报**：生成包含数据洞察、图表引用和专业级分析的完整报告。

## 技术架构
该智能体由 [[gemini-3-1-pro]] 模型驱动，并支持通过 [[mcp-协议]] 接入私有数据源（如 FactSet、S&P Global），使其能够在专业数据仓库中自主导航和综合分析。

## 商业意义
Deep Research Max 的出现标志着 AI 研究能力已达到替代初级分析师的水平。其高昂的算力成本（计算资源即入场券）也暗示了未来 AI 应用在企业级市场的马太效应。