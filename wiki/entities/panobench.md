---
type: entity
title: "Panobench"
tags: [dataset, medical-ai, ecg, benchmark]
related: [nef-net-v2, 心电全景合成]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# Panobench

**Panobench** 是一个高密度心电数据集，由 [[NEF-NET v2]] 研究团队构建，用于验证心电全景生成能力。

## 数据集特点
- **高密度**：包含密集的导联记录，能够捕捉心脏电活动的空间细节。
- **CT 标注**：数据集中每个视角的位置均由 CT 扫描标注并计算得到对应的角度，提供了精确的空间几何信息。
- **金标准**：为评估模型合成任意视角信号的能力提供了可靠的基准。

## 应用
该数据集被用于验证 [[NEF-NET v2]] 在少导联监督下的高合成精度，证明了模型在处理复杂空间几何关系时的有效性。