---
type: entity
title: OFA-TAD
created: 2026-05-20
updated: 2026-05-20
tags: [异常检测, 表格数据, 通用模型, icml-2026, 零样本迁移]
related: [one-for-all-异常检测, 邻居距离画像, 多视角距离编码, moe自适应评分, dataset-specific-scaling]
sources: ["icml-2026｜表格异常检测能否告别「one-for-one」？ofa-tad迈向one-for-all通用异常检测新范式.md"]
origin_date: 2026-03-17
---
# OFA-TAD

OFA-TAD（One-for-All Tabular Anomaly Detection）是由格里菲斯大学和同济大学联合提出的面向表格数据的通用异常检测模型，被 ICML 2026 接收。该模型将表格异常检测从传统的 [[one-for-all-异常检测|One-for-One（OFO）范式]] 推进到 One-for-All（OFA）范式：模型只需在多个源数据集上训练一次，便可直接零样本迁移到未见过的目标数据集，无需目标域微调或重新训练。

## 核心洞见

跨领域可迁移的异常信号不依赖具体特征含义，而来自更通用的邻域结构。异常样本的共同特征是相对于正常样本更「孤立」，与局部邻居的距离模式更不寻常。

## 技术架构

1. **[[邻居距离画像]]**：将每个样本表示为其 Top-K 近邻距离序列，实现语义无关的统一表示
2. **[[多视角距离编码]]**：通过 Raw、Standardized、MinMax、Quantile 等不同特征变换构建多个度量空间，捕获互补异常证据
3. **[[moe自适应评分]]**：混合专家网络通过门控机制动态融合不同距离视角的异常分数，抑制噪声视角
4. **多策略伪异常合成**：流形外推、簇间插值、噪声注入、特征遮蔽四类方式生成训练监督信号

## 实验表现

- 在 7 个源数据集上训练一次，在 34 个数据集（14 个领域）上零样本测试
- AUROC 和 AUPRC 平均排名均领先于 9 个在目标域分别训练的基线方法（含 IForest、LOF、KNN、AE、DeepSVDD、LUNAR、MCM、DRL、DisentAD）
- 展现 [[dataset-specific-scaling]] 潜力：源数据集数量增加带来迁移性能稳定提升
- 上下文鲁棒性良好：仅需少量目标域正常样本即可建立邻域结构完成推理

## 局限性

- 论文自述为"初步尝试"，距离工业级通用异常检测器仍有差距
- 零样本迁移仍需目标域正常样本作为上下文（用于近邻检索和距离归一化），并非完全无依赖
- 源数据集仅 7 个，Scaling 潜力尚需更大规模验证

## 资源链接

- 论文地址：https://arxiv.org/abs/2603.14407
- 代码地址：https://github.com/Shiy-Li/OFA-TAD