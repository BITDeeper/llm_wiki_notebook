---
type: entity
title: Agent Arena
tags: [评测平台, 智能体, 排行榜, 基准测试]
related: [claude-fable-5, artificial-analysis, gdpval-aa, gpt-5.5, ale-智能体的最后考试]
created: 2026-06-11
updated: 2026-06-16
sources: ["rss/神话级claude-5，登顶了！.md", "rss/claude-fable-5最难档零分！智能体的最后考试来了.md"]
---
# Agent Arena

Agent Arena（智能体竞技场）是 Arena 推出的大语言模型智能体能力评测平台，通过数百万个真实世界的长周期智能体任务来评估模型在真实任务场景中的综合表现。

## 评测特点

- **任务规模**：基于数百万个真实世界长周期任务
- **工具调用**：需要模型调用网页搜索、文件系统、终端等工具
- **工作流类型**：涵盖写代码、制作幻灯片、网页研究、构建应用、分析文档等复杂工作流

## 评测维度

Agent Arena 将模型表现拆解为以下核心信号维度：

1. **综合净提升**（Overall Net Improvement）— 衡量模型相对基线的综合优势幅度
2. **确认任务成功率**（Confirmed Task Success Rate）— 衡量"能不能把活干完"
3. **好评与投诉比**（Praise vs Complaint Ratio）— 衡量"用户满不满意"
4. **可引导性**（Steerability）— 衡量模型遵循用户指令的程度
5. **工具幻觉**（Tool Hallucination）— 衡量模型在工具调用场景中虚构不存在工具的倾向
6. 其他维度

## 历史纪录

[[claude-fable-5|Claude Fable 5]]在 Agent Arena 排名第一，并创下11.2%的综合净提升，为该榜单有史以来的最大分差纪录。其在确认任务成功率（领先18.2%）和好评投诉比（领先30.6%）两项最接近真实工作的指标上实现了断崖式领先。

## 与 ALE 的区别

Agent Arena 侧重于通用长周期任务的综合能力评估，而 [[ale-智能体的最后考试|ALE]] 更聚焦于深度专业任务和具有经济价值的工作。[[claude-fable-5|Claude Fable 5]]在 Agent Arena 中排名第一，但在 ALE 中落后于 [[gpt-5.5|GPT-5.5]]，揭示了两种基准对模型能力的不同要求。