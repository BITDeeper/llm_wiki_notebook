---
type: entity
title: ARC-AGI
tags: [benchmark, agi, evaluation, 评测基准, 推理能力, 基准测试]
related: [gpt-5.4, ai-推理效率, francois-chollet, 性能-推理计算量曲线, 推理预算, 测试时计算扩展, noam-brown]
created: 2026-03-17
updated: 2026-06-09
sources: ["gpt-5.4一周狂赚10亿美元arr！一句嗨烧掉80刀，效率却飙升32倍.md", "rss/openai科学家noam-brown：ai的真正上限，可能根本没人测得起.md"]
---

# ARC-AGI

[[ARC-AGI]]（Abstraction and Reasoning Corpus for AGI）是一个用于衡量通用人工智能（AGI）能力的基准测试。它包含两个主要版本：ARC-AGI-1 和 ARC-AGI-2。

## 评测方法

ARC-AGI 已尝试衡量模型分数与运行成本之间的关系，而非只发布单一成绩。被 [[noam-brown|Noam Brown]] 引用为行业内在 [[性能-推理计算量曲线]] 方向上的早期实践案例。

## 在 GPT-5.4 评测中的表现

该基准被用于量化 [[AI 推理效率]] 的提升：

- **ARC-AGI-1**：[[GPT-5.4]] (High) 达到 90% 准确率，每项任务成本为 0.37 美元。相比之下，3 个月前的 GPT-5.2 Pro (xhigh) 达到 90.5% 准确率的成本为 11.64 美元。这表明在 3 个月内，达到同等性能的成本降低了 32 倍。
- **ARC-AGI-2**：GPT-5.4 得分 74.0%（成本 $1.52），GPT-5.4 Pro 得分 83.3%（成本 $16.41）。

## 意义

ARC-AGI 数据揭示了 AI 行业正在经历"摩尔定律"式的效率提升：尽管模型单价和消耗量在增加，但单位智能的成本正在呈指数级下降。