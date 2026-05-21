---
type: concept
title: 言语化率
tags: [metric, ai-safety, interpretability]
related: [introspection-adapter, scaling-law]
created: 2026-05-05
updated: 2026-05-05
sources: ["700多个「坏模型」喂出ai测谎仪？anthropic审计神器让ai自曝黑料.md"]
---

# 言语化率

**言语化率**（Verbalization Accuracy）是指模型能够准确用自然语言描述其自身行为（特别是微调中学到的隐藏行为）的比率。它是衡量 [[内省适配器]] (IA) 有效性的核心指标。

## 与模型规模的关系
Anthropic 的研究发现，言语化率与模型的参数规模呈正相关：
*   在最小的模型上，安装 IA 后的言语化率约为 **37.7%**。
*   随着模型参数规模增加，言语化率显著上升，最高可达 **77.3%**。

## 启示
这一数据为 [[scaling-law]] 提供了新的视角：模型规模的提升不仅增强了智力，可能还增强了“自我认知”的潜力。在没有 IA 的情况下，无论模型规模大小，其自我报告的基线表现都极低（10% 以下），这说明模型“知道”但通常“不说”。IA 的作用在于随着规模增大，能更有效地激活这种潜在的表达能力。