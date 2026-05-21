---
type: entity
title: EgoAVU-Bench
created: 2026-02-28
updated: 2026-02-28
tags: [基准测试, 评测, 音视频理解]
related: [egoavu, egoavu-instruct, 第一视角音视频理解]
sources: ["第一次，多模态大模型学会边看边听，meta新作性能暴涨113%.md"]
---

# EgoAVU-Bench

[[egoavu-bench]] 是首个专门用于评测第一视角音视频理解能力的基准测试集。

## 规模与构成
- 包含 **3000 条**经过人工严格验证的问题。
- 旨在全面评估模型在真实场景中结合视觉和听觉信息进行理解的能力。

## 评测结果
在 EgoAVU-Bench 上的实验结果显示，使用 [[egoavu-instruct]] 数据微调后的模型，其性能相比基线模型最高提升了 **113%**。这一显著的提升幅度揭示了当前主流多模态模型在处理音视频跨模态信息时的不足，同时也验证了该基准的有效性。