---
type: concept
title: StableI2I多阶段训练策略
created: 2026-05-12
updated: 2026-05-12
tags: [训练策略, 强化学习, 多阶段训练, 模型训练]
related: [stablei2i, 图像保真度评估]
sources: ["icml-2026-上海ailab-&-北大提出图像保真度测评模型stablei2i.md"]
origin_date: 2026-05-12
---
# StableI2I 多阶段训练策略

[[stablei2i|StableI2I]] 采用四阶段渐进式训练策略，从基础能力建立到泛化优化再到大规模数据扩展，最终实现全面的保真度评估能力。

## 训练流程

### 第一阶段：SFT（监督微调）
- **底座模型**：Qwen3VL-8B-Instruct
- **训练数据**：Free-form Descriptive、Multiple-choice QA、Binary & Type QA
- **目标**：建立基础视觉感知能力、图像描述能力和保真度错误判断能力

### 第二阶段：GRPO（强化学习）
- **算法**：Group Relative Policy Optimization
- **奖励设计**：
  - Multiple-choice QA：根据是否选择正确选项计算奖励
  - Binary & Type QA：同时考虑 Yes/No 判断正确性和预测问题类型与标注的一致性
- **目标**：优化模型泛化能力，使模型更稳定地判断不同类型的保真度错误

### 第三阶段：自动标注扩展
- 使用强化学习后的模型对大规模未标注 I2I 数据进行自动标注
- 借助 GPT-5 对明显错误样本进行过滤
- 将部分 Binary & Type QA 数据转化为 Open-ended QA 数据（包含 think 和 problem 字段）

### 第四阶段：全量微调
- 合并原始标注数据与新构建数据
- 对 Qwen3VL-8B-Instruct 进行最终全量微调
- 同时提升感知理解能力、错误判断能力和开放式分析能力

## 方法论价值

该训练策略体现了"先用小数据建立基础能力，再用强化学习提升泛化，最后用模型自身扩展数据"的自举思路。其中 GRPO 阶段的多维度奖励设计与 [[三位一体评价体系]] 的多维度评估框架形成呼应。