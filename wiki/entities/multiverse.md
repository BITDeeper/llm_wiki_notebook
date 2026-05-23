---
type: entity
title: Multiverse
created: 2026-05-19
updated: 2026-05-19
tags: [ai模型, 并行推理, neurips-2025, 基线方法]
related: [native-parallel-reasoner, 原生并行推理, 链式思维]
sources: ["icml-2026｜告别「单线程」思维，智能体进化出了原生的并行推理大脑.md"]
---
# Multiverse

Multiverse 是一种并行语言模型生成方法，发表于 NeurIPS 2025（Yang et al.），全称 "Your Language Models Secretly Decide How to Parallelize and Merge Generation"。

## 核心思路

Multiverse 尝试让语言模型在生成过程中自动决定如何并行化和合并结果，属于将并行思路引入语言模型推理的早期探索。

## 局限性

根据 [[native-parallel-reasoner|NPR]] 论文的分析，Multiverse 存在以下关键局限：

1. **依赖强教师蒸馏**：高度依赖强教师模型提供高质量并行轨迹，学生模型更多是在模仿教师的串行拓扑再「塞进并行格式」，继承了教师的局限
2. **并行触发率不稳定**：在不同数据集上并行率差异显著，对领域特征非常敏感（如在 ZebraLogic 等逻辑密集型任务上表现明显低于数学竞赛数据集）
3. **智能瓶颈**：难以自举式扩展智能边界，无法涌现出模型自身固有的并行策略

## 与 NPR 的关系

Multiverse 作为 [[native-parallel-reasoner|NPR]] 的主要对比基线。NPR 在 8 个推理基准上平均得分 59.0 vs Multiverse 的 50.1（使用各自训练数据），且 NPR 在所有数据集上实现 100% 并行触发率。
