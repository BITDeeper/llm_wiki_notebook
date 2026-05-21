---
type: entity
title: "Kaggle ARC Prize"
tags: [competition, agi, benchmark, reasoning, kaggle]
related: [arc-agi, nvarc, claude, 通义千问]
created: 2025-12-06
updated: 2025-12-06
sources: ["英伟达周末双炸！cuda二十年最大更新，顺手屠榜agi比赛.md"]
---

# Kaggle ARC Prize

Kaggle ARC Prize 是一项在 Kaggle 平台上举办的人工智能竞赛，基于 François Chollet 提出的 ARC-AGI（Abstraction and Reasoning Corpus）基准测试。该比赛被业内视为衡量人类向通用人工智能（AGI）进度的“实时晴雨表”。

## 竞赛特点
与典型的机器学习基准不同，ARC-AGI 任务无法通过堆砌模型规模、死记硬背或抓取表面模式来解决。它被视为 AI 界的“智商测试”，专门测试 AI 面对陌生问题时的**举一反三**能力（泛化推理能力）。

## 历史战绩
- **2025 年冠军**：英伟达特级大师团队（KGMoN）开发的 **NVARC** 方案。
  - **分数**：27.64%。
  - **亮点**：使用 4B 参数的小模型（Qwen3），结合 320 万合成数据和测试时训练（TTT）策略，击败了 Claude Opus 4.5 等巨型模型，且成本极低（20 美分/任务）。

## 评价
ARC Prize 的进展代表了 AI 在抽象推理和逻辑泛化方面的前沿水平。NVARC 的夺冠证明了在特定推理任务中，数据质量和工程策略（如合成数据、代码生成、TTT）比单纯增加模型参数量更为关键。