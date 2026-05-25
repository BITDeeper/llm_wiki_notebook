---
type: entity
title: ERA（经验性研究助手）
created: 2026-05-23
updated: 2026-05-23
tags: [ai-for-science, google, 科学工具, nature论文]
related: [google-deepmind, co-scientist, alphaevolve, gemini-for-science, ai-for-science]
sources: ["谷歌gemini杀入科学界！一日两登nature，alphafold只是开胃菜.md"]
origin_date: 2026-05-19
---
# ERA（经验性研究助手）

ERA（Empirical Research Assistance，经验性研究助手）是 [[google-deepmind|Google DeepMind]] 开发的科学实验软件自动生成系统，底层由大语言模型加树搜索驱动，目标是让AI自动写出用于计算实验的专家级科学软件。

## 核心机制

- 基于大语言模型 + 树搜索架构，将质量指标最优化
- 能吸收外部研究思路，组合出专家水准的解法
- 不只是运行代码，而是独立设计和优化实验方法

## 关键成果（Nature论文背书）

- **生物信息学**：独立发现40种新的单细胞数据分析方法，在公开榜单上跑赢所有人类提交的方法
- **流行病学**：在传染病住院数预测任务上产出14个独立模型，全部超过CDC的集成模型
- **其他领域**：覆盖地理空间分析、斑马鱼神经活动预测、数值积分，均为可复现实验

## 在 Gemini for Science 中的定位

ERA是 [[gemini-for-science]] 工具集中「计算发现」模块的核心组件之一，与 [[alphaevolve]] 协同工作，驱动并行代码变体生成和自动评分。

## 参考链接

Nature论文：https://www.nature.com/articles/s41586-026-10658-6