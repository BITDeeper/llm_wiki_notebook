---
type: source
title: "ICML 2026｜表格异常检测能否告别「one-for-one」？OFA-TAD迈向通用异常检测新范式"
created: 2026-05-20
updated: 2026-05-20
tags: [异常检测, 表格数据, icml-2026, 通用模型, 零样本迁移]
related: [ofa-tad, one-for-all-异常检测, 邻居距离画像, 机器之心]
sources: ["icml-2026｜表格异常检测能否告别「one-for-one」？ofa-tad迈向one-for-all通用异常检测新范式.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/OKc97-Hvt1a7JEmf8vFEpw"
venue: 机器之心
---
# ICML 2026｜表格异常检测能否告别「one-for-one」？OFA-TAD迈向通用异常检测新范式

本文为 [[机器之心]] 发布的 ICML 2026 论文报道，介绍了来自格里菲斯大学和同济大学团队的 [[ofa-tad]] 模型，提出将表格异常检测从传统的 One-for-One（OFO）范式推进到 [[one-for-all-异常检测|One-for-All（OFA）范式]]。

## 核心内容

论文的核心洞见是：跨领域可迁移的异常信号不依赖具体特征语义，而存在于通用的邻域距离结构中。基于此，OFA-TAD 提出了 [[邻居距离画像]] 技术，将每个样本表示为其 Top-K 近邻距离序列，实现跨领域语义无关的统一表示。

## 关键技术组件

- **多视角距离编码**：通过 Raw、Standardized、MinMax、Quantile 等不同特征变换构建多个度量空间
- **MoE 自适应评分**：混合专家网络通过门控机制动态融合不同距离视角的异常分数
- **多策略伪异常合成**：流形外推、簇间插值、噪声注入、特征遮蔽四类方式生成训练监督信号

## 实验结果

OFA-TAD 在 7 个源数据集上训练一次，在 34 个数据集（14 个领域）上以固定超参数零样本测试，AUROC 和 AUPRC 平均排名均领先于 9 个在目标域分别训练的基线方法。实验还揭示了 [[dataset-specific-scaling]] 现象：源数据集数量增加带来迁移性能的稳定提升。

## 论文信息

- **论文标题**：Towards One-for-All Anomaly Detection for Tabular Data
- **第一作者**：Shiyuan Li
- **论文地址**：https://arxiv.org/abs/2603.14407
- **代码地址**：https://github.com/Shiy-Li/OFA-TAD