---
type: entity
title: InternAgent
created: 2026-03-10
updated: 2026-03-10
tags: [ai-agent, scientific-discovery, shanghai-ai-lab, platform]
related: [mlevolve, intern-discovery, 上海人工智能实验室]
sources: ["12小时登顶openai-mle-bench！上海ai-lab开源算法进化框架mlevolve.md"]
---

# InternAgent

[[intern-agent]] 是 [[上海人工智能实验室]]“书生”科学发现平台（[[intern-discovery]]）的核心智能系统。它旨在将科学研究抽象为可不断迭代的智能推理过程，通过 AI 驱动的方式加速科学发现。

## 系统架构
InternAgent 构建了生成、验证、进化三大协同子系统，形成了一个完整的科研自动化闭环：

1.  **生成子系统**：负责提出假设和生成初步方案。
2.  **验证子系统**：负责方案的执行、测试与评估。[[mlevolve]] 作为该子系统中的**方案优化引擎**，利用图搜索和记忆机制对算法进行深度迭代。
3.  **进化子系统**：基于验证反馈进行全局优化和策略调整。

## InternAgent 1.5
在 1.5 版本中，系统引入了 [[mlevolve]] 带来的图增强蒙特卡洛搜索机制与经验驱动记忆技术。这使得系统不仅限于算法设计任务，还成功拓展至生物科学、地球科学、物质科学等跨学科科学发现场景。

## 核心价值
InternAgent 代表了 AI 从单一任务执行向复杂科研活动协作的转变。通过多智能体分工和自进化机制，它能够在高维度的科学问题空间中进行高效探索，是实现 [[递归式自我改进]] 和自动化科研的重要基础设施。