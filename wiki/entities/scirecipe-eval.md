---
type: entity
title: SciRecipe-Eval
created: 2026-05-15
updated: 2026-05-15
tags: [评测基准, 生物实验, ai-for-science]
related: [thoth, scirecipe, score-reward]
sources: ["8b模型做生物实验：实验步骤顺序不乱、剂量无幻觉｜iclr-2026.md"]
origin_date: 2025-10-01
---
# SciRecipe-Eval

SciRecipe-Eval 是用于评估生物实验 protocol 生成质量的评测基准，与 [[scirecipe]] 数据集配套使用。

## 评估维度

SciRecipe-Eval 从实验可执行性的角度出发，重点衡量以下方面：

- **步骤对齐（Step-MATCH）**：生成步骤与参考步骤的匹配程度
- **逻辑顺序（Order-S）**：动作顺序是否符合实验逻辑依赖
- **语义保真（Semantic-Alignment）**：动作、对象和参数是否正确匹配

## 与传统评估的区别

传统文本指标（BLEU、ROUGE、BERTScore）主要看词面相似度，难以判断 protocol 是否真的逻辑正确、语义忠实、可在实验中执行。SciRecipe-Eval 直接对齐实验可执行性，与 [[score-reward]] 的设计理念一致。

## 使用场景

[[thoth]] 模型在 SciRecipe-Eval 上进行了全面评估，并与闭源模型（ChatGPT-4o）、开源模型（DeepSeek-V3）、推理模型和科学大模型进行了对比，取得 SOTA 表现。