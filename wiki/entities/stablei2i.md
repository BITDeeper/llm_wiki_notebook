---
type: entity
title: StableI2I
created: 2026-05-12
updated: 2026-05-12
tags: [图像评估模型, 多模态大模型, ICML-2026, 开源模型]
related: [stablei2i-bench, 图像保真度评估, 上海ailab, 北京大学, vlm质检闭环]
sources: ["icml-2026-上海ailab-&-北大提出图像保真度测评模型stablei2i.md"]
origin_date: 2026-05-12
---
# StableI2I

**StableI2I** 是由 [[上海ailab|上海AILab]] 与 [[北京大学]] 联合提出的图像保真度测评模型，基于 Qwen3VL-8B-Instruct 进行多阶段训练，专门用于评估图像到图像（I2I）任务中非编辑区域的内容一致性。论文被 ICML 2026 接收。

## 核心功能

StableI2I 从三个维度评估 I2I 任务的保真度：
1. **语义级（Semantic-level）**：检测语义信息上的内容错误
2. **结构级（Structure Level）**：检测像素级的内容重绘或纹理结构错位
3. **低层外观（Low-level Appearance）**：评估处理后图像相对原图的质量退化

## 训练策略

采用四阶段训练流程：
1. **SFT（监督微调）**：基于 Qwen3VL-8B-Instruct，使用 Free-form Descriptive、Multiple-choice QA 和 Binary & Type QA 数据，建立基础视觉感知和保真度错误判断能力
2. **GRPO（强化学习）**：根据选择题正确性和错误类型一致性计算奖励，优化模型泛化能力
3. **自动标注扩展**：使用强化学习后的模型对大规模未标注 I2I 数据进行自动标注，借助 GPT-5 过滤错误样本，并将部分数据转化为开放式 QA
4. **全量微调**：合并原始标注数据与新构建数据，对 Qwen3VL-8B-Instruct 进行最终全量微调

## 性能表现

在 [[stablei2i-bench|StableI2I-Bench]] 上的表现：
- **Binary Accuracy**：89.10%（GPT-5 为 80.57%）
- **Strict Accuracy**：83.00%（GPT-5 为 55.27%，Claude-Sonnet-4.5 为 63.37%）

## 应用场景

- 作为 I2I 生成流程中的评价指标
- 作为多图一致性评测基准
- 作为 reward model 帮助提升图像编辑和恢复模型的保真度
- 可嵌入 [[vlm质检闭环]] 实现自动化质量保障

## 开源资源

- 代码：https://github.com/Henry-Lee-real/StableI2I
- 模型权重与数据集：https://huggingface.co/collections/lijiayangCS/stablei2i
- 论文：https://arxiv.org/pdf/2605.04453