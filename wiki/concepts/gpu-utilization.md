---
type: concept
title: GPU 利用率
tags: [engineering, metrics, infrastructure, ai-ops]
related: [colossus-1, xai, deepseek-v4, ai-subscription-crisis]
created: 2026-05-08
updated: 2026-05-08
sources: ["xai解散，但grok还没死！马斯克声称新模型正在训练.md"]
---

# GPU 利用率

**GPU 利用率**（或 Model FLOPS Utilization, MFU）是衡量 AI 算力集群实际计算效率的关键指标。它反映了 GPU 在训练过程中实际执行有效运算的时间比例。

## 行业基准
-   **Meta**：约 43%
-   **Google**：约 46%
-   **xAI**：仅 11%（据 The Information 2026 年 4 月披露）

## 利用率低的影响
极低的利用率意味着巨额的硬件投资被浪费。例如，xAI 虽然囤积了约 55 万张 GPU，但由于利用率仅为 11%，实际在工作的 GPU 仅约 6 万张。这直接导致了公司财务状况的恶化（月烧 10 亿美元）。

## 虚假利用率
在 xAI 的案例中，曝光了一种名为“虚假利用率”的现象：研究员为了防止闲置 GPU 配额被管理层收回，会故意重复运行同一个训练实验。这种行为虽然在数据上拉高了 MFU，但实际上并未产生有效的模型训练收益，是组织管理失效的体现。

## 提升难度
提升利用率不仅仅是堆硬件的问题，更依赖于网络协议、调度系统、训练框架等底层工程能力的优化。[[DeepSeek V4]] 为了追求确定性和效率而自研算子库的案例，也从侧面印证了工程优化的重要性。