---
type: entity
title: Thoth
created: 2026-05-15
updated: 2026-05-15
tags: [ai-for-science, 科学推理模型, 生物实验, iclr-2026]
related: [scirecipe, sketch-and-fill, score-reward, knowledge-to-action, 上海人工智能实验室, 复旦大学, 上海交通大学]
sources: ["8b模型做生物实验：实验步骤顺序不乱、剂量无幻觉｜iclr-2026.md"]
origin_date: 2025-10-01
---
# Thoth

Thoth 是由 [[上海人工智能实验室]]、[[复旦大学]]和[[上海交通大学]]联合提出的科学推理大语言模型，基于 Qwen3-8B 构建，专门面向生物实验 protocol 生成任务。论文已在 ICLR 2026 正式发表。

## 核心定位

Thoth 不是让模型"写得像 protocol"，而是让模型按照实验逻辑，生成可解析、可评估、可执行的 protocol。它代表了一类新的科学AI助手方向：将科学知识转化为可检查、可复现、可执行的实验行动。

## 技术架构

- **推理范式**：采用 [[sketch-and-fill]] 三阶段推理（think→key→orc），先生成实验骨架，再填充为完整操作说明
- **奖励机制**：使用 [[score-reward]]（Structured COmponent-based REward），从步骤粒度、动作顺序、语义保真三个维度评估可执行性
- **训练策略**：采用 [[knowledge-to-action]] 三阶段训练路径（预训练→监督微调→强化学习），使用 GRPO 算法配合 SCORE 奖励信号

## 性能表现

| 对比对象 | 提升幅度 |
|---------|---------|
| 基座 Qwen3-8B | 平均 +17.78% |
| Thoth-mini vs 基座 | 平均 +22.01% |
| ChatGPT-4o | 平均 +3.69% |
| DeepSeek-V3（Semantic-Alignment） | +4.88% |
| DeepSeek-V3（Order-S） | +4.06% |
| DeepSeek-V3（Step-MATCH） | +11.29% |

在 HLE、LAB-Bench、PubMedQA 等更广泛的科学基准上也展现出泛化能力。

## 数据基础

基于 [[scirecipe]] 数据集训练，该数据集覆盖27个生物学子领域、约12K条高质量结构化实验protocol数据。

## 资源链接

- 论文：https://arxiv.org/abs/2510.15600
- 代码：https://github.com/InternScience/Thoth
- 模型API：https://scphub.intern-ai.org.cn/detail/19