---
type: entity
title: PaperBench
tags: [benchmark, evaluation, machine-learning]
related: [aiscientist, 长程机器学习研究工程]
created: 2026-04-20
updated: 2026-04-20
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# PaperBench

[[PaperBench]] 是一个用于评测 AI 系统从零复现论文能力的高难度基准测试。

## 评测背景

在 PaperBench 这类严苛的评测中，现有的顶尖 Agent 系统仅能达到约 21% 的复现率，而人类顶尖 ML 博士在 48 小时预算下可达到 41%。这揭示了当前 AI 系统在处理复杂、模糊的真实科研任务时与人类的巨大差距。

## AiScientist 的表现

[[aiscientist]] 在 PaperBench 上相比最佳匹配基线平均提升了约 **10.54 分**。这一结果不仅展示了 AiScientist 在代码实现和环境配置方面的能力，更证明了其在长程任务中保持状态连贯性和进行错误归因的优势。

## 相关性

PaperBench 的测试结果直接支撑了关于 [[状态连续性]] 重要性的论点。消融实验显示，当移除 AiScientist 的外部记忆机制时，其 PaperBench 分数显著下降，说明在长程复现任务中，系统架构比单步推理能力更为关键。