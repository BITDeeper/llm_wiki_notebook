---
type: source
title: "MIA 2026 | 福州大学提出CFR-SAM：医学影像分割领域的参数高效微调新方案"
authors: [福州大学AI-XPM-group]
year: 2026
url: https://mp.weixin.qq.com/s/_4JmAiheNQr5MQgA9SzeZA
venue: Medical Image Analysis (MIA)
tags: [医学影像分割, 参数高效微调, SAM, 病理图像, 细胞核分割]
related: [cfr-sam, 参数高效微调, meta, sam-3d]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/mia-2026-福州大学提出cfr-sam：医学影像分割领域的参数高效微调新方案.md"]
---
# MIA 2026 | 福州大学提出CFR-SAM：医学影像分割领域的参数高效微调新方案

## 摘要

福州大学研究团队在医学图像分析顶级期刊《Medical Image Analysis》（MIA 2026）上发表CFR-SAM框架，提出面向医学影像分割的参数高效微调方案。该框架冻结SAM主干网络，通过三个精心设计的适配器模块（MALA、HMFM、BGMR）补偿SAM在局部细节感知、多层特征融合和边界精度方面的短板，仅用10.6%的可训练参数即在全量微调模型CellViT-H上取得显著提升。

## 核心贡献

1. **多尺度自适应局部感知适配器（MALA）**：在低秩空间引入多尺度自适应卷积，动态生成像素级深度卷积权重，补偿SAM对局部细节的感知不足
2. **分层调制融合模块（HMFM）**：通过通道注意力动态聚合不同编码器层级特征，解决多层特征间语义失配
3. **边界引导掩膜细化（BGMR）**：通过显式边界监督解决SAM解码器输出分辨率低导致的边界模糊问题
4. **索引匹配解耦分类**：将分类与分割解耦，第一阶段预测类别，第二阶段仅做二值分割，通过点提示顺序索引直接赋值类别标签

## 关键实验结果

- **PanNuke数据集**：CFR-SAM-H（74.2M可训练参数）实现bPQ 0.6955、mPQ 0.5114，超越CellViT-H（699.7M参数，bPQ 0.6793、mPQ 0.4980）
- **CPM-17数据集**：AJI 0.725，PQ 0.719，超越此前最优PointNu-Net
- **MoNuSeg数据集**：AJI 0.668，PQ 0.662
- **硬件需求**：单张NVIDIA RTX 3090即可运行

## 核心洞察

将视觉大模型迁移到医疗等垂直领域时，全量微调并非最优解。冻结主干保留全局先验，通过针对性适配器补偿局部短板，能以极低算力成本刷新SOTA并保留泛化底座。

## 来源信息

- 论文地址：https://doi.org/10.1016/j.media.2026.104144
- 代码仓库：https://github.com/AI-XPM-group/CFR-SAM（已开源）
- 报道媒体：[[我爱计算机视觉]]