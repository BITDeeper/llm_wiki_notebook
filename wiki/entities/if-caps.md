---
type: entity
title: IF-caps
tags: [dataset, audio, fine-grained, instruction-following]
related: [audiox, t2a-bench, gemini-2-5-pro, qwen2-audio]
created: 2026-03-09
updated: 2026-03-09
sources: ["一个模型，搞定所有音频生成任务！多项基准sota-iclr'26.md"]
---

# IF-caps

IF-caps (Instruction-Following Captions) 是由香港科技大学团队为训练 [[AudioX]] 模型而构建的大规模细粒度标注音频数据集。

## 数据集规模
该数据集总计包含超过 **700 万** 个样本，具体分为：
- 约 130 万条音效数据。
- 约 570 万条音乐数据。

## 核心特点
与现有的仅提供粗粒度标注（如简短描述）的数据集不同，IF-caps 提供了多维度的结构化标注，包括：
- 声音事件分类与计数。
- 事件时间戳（SED）。
- 事件时序关系。
- 音乐属性（曲风、情绪、乐器、节奏等）。

## 构建方法
团队设计了一套两阶段数据标注流水线：
1. **结构化标注**：使用 [[Gemini 2.5 Pro]] 对音频轨道进行精细化分析，生成结构化标签。
2. **数据增强**：利用 [[Qwen2-Audio]] 模型基于结构化标签进行大规模改写和生成，提升数据多样性。

## 应用
该数据集支持 [[细粒度可控生成]]，使得 [[AudioX]] 能够根据具体的指令（如时间戳、事件顺序）精准生成音频。