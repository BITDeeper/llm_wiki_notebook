---
type: concept
title: FD-DINOv2
created: 2026-06-02
updated: 2026-06-02
tags: [评测指标, 视觉生成, DINOv2, FID替代]
related: [gpic, 指标饱和与古德哈特定律, ji-t2i]
sources: ["百万规模数据集已经不够用了！斯坦福开源-gpic：28-万亿像素、1-亿张合规图像，视觉生成步入"大语料"时代.md"]
---
# FD-DINOv2

**FD-DINOv2** 是基于 DINOv2 特征的 Fréchet Distance 评测指标，由 [[gpic]] 项目推荐作为传统 FID 指标的替代方案。

## FID 失效问题

传统 FID（Fréchet Inception Distance）指标已出现严重的 [[指标饱和与古德哈特定律]] 问题：在 ImageNet-1K 上，许多模型的 FID 分数已经低于真实图像之间的基准线，这意味着 FID 已无法有效区分模型好坏。

## FD-DINOv2 的优势

- 使用 DINOv2 特征替代 Inception 特征，具有更强的语义表征能力
- 在相同测试条件下提供了更有区分度的分数分布
- 提供了 Oracle 参考值（如 Test-50K 与 Test-1M 之间的 FD 距离），用于校准生成质量

## 使用规范

[[gpic]] 作者明确警告：**严禁在训练中显式优化 DINOv2 特征**（如使用 DINOv2 相关的 Loss），因为这会直接导致评测指标失效，属于"作弊"行为。这一警告暗示了学术界为刷榜可能出现"数据泄漏到评测指标"的不良倾向。