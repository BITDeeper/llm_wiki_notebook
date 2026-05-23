---
type: event
title: SxS 交错推理论文发表于 ICML 2026
created: 2026-05-18
updated: 2026-05-18
tags: [icml-2026, 学术会议, 推理模型, 论文发表]
related: [并列式交错推理, 沉默税, 内容延迟, 披露策略, jiaqi-wei, 纽约州立大学石溪分校]
sources: ["icml-2026-｜让大模型边想边说：这篇文章把「何时开口」变成可学习策略.md"]
origin_date: 2026-05-18
participants: [jiaqi-wei, 纽约州立大学石溪分校]
causes: []
effects: []
significance: medium
---

# SxS 交错推理论文发表于 ICML 2026

2026 年 5 月，论文《When to Think, When to Speak: Learning Disclosure Policies for LLM Reasoning》发表于 ICML 2026（国际机器学习大会），arXiv 版本同步发布。

## 核心内容

论文由 [[jiaqi-wei|魏嘉琪]] 等人撰写，[[纽约州立大学石溪分校]] 主导，联合浙江大学、威廉玛丽学院、UIUC、UBC、香港中文大学、复旦大学等机构共同完成。

论文提出了 [[并列式交错推理]]（SxS Interleaved Reasoning）方法，核心贡献包括：

1. 识别了 [[沉默税]] 问题——单流自回归接口下状态更新与公开承诺耦合导致的体验矛盾。
2. 定义了 [[内容延迟]] 概念及 AIRW 等评测指标，区分系统层面的 TTFT 与用户真正关心的内容延迟。
3. 将 [[披露策略]] 变为可学习的模型行为，通过蕴含对齐轨迹构造 → SFT → GRPO 三阶段训练实现。

## 实验亮点

在 Qwen3-4B 小模型上效果尤为显著：AIME25 准确率从 73.8% 提升至 80.0%，GPQA-Diamond 准确率从 19.0% 提升至 49.3%，同时内容延迟大幅降低。

## 行业意义

该论文代表了推理型大模型从"追求最终准确率"到"同时优化推理过程用户体验"的演进阶段，将流式交互从工程显示问题推进到模型学习问题。