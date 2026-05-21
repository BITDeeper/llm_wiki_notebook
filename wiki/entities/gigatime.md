---
type: entity
title: GigaTIME
tags: [ai-model, microsoft, pathology, spatial-transcriptomics, medical-ai]
related: [ha-e-qie-pian, duo-chong-mian-yu-ying-guang-mif, ai-for-science, microsoft, gigapath]
created: 2025-12-13
updated: 2025-12-13
sources: ["微软gigatime登上《cell》：5美元切片变成免疫图谱.md"]
---

# GigaTIME

## 概述
[[GigaTIME]] 是由 [[微软]] 研究院开发的一种跨模态人工智能模型。它能够将常规且廉价的 [[H&E 切片]]（苏木精-伊红染色切片）转化为高维的 [[多重免疫荧光 (mIF)]] 图像，从而在人群尺度上重建 [[肿瘤免疫微环境 (TIME)]]。该研究成果发表于 2025 年的顶级期刊《Cell》。

## 核心功能
GigaTIME 的核心功能是“翻译”：它不只是在生成图像，而是在学习 H&E 切片中的形态特征（如细胞核、细胞质、结构纹理）与 mIF 图像中 21 个蛋白通道表达之间的深层语言关系。这使得原本成本高昂（数千美元/张）且难以规模化的免疫分析，可以基于成本极低（5-10 美元/张）的常规切片进行。

## 技术特点
- **跨模态学习**：利用 [[跨模态学习]] 技术，从 4000 万个细胞级别的逐一对应数据中学习形态与蛋白表达的关系。
- **高保真度**：在结构一致性和信号一致性上均优于传统的 CycleGAN 等图像转换方法。
- **强泛化能力**：在 Providence 数据集（14,256 名患者）上训练后，在完全独立的 TCGA 数据集（10,200 名患者）上验证，达到了 r=0.88 的高度一致性。

## 应用与成果
- **虚拟人群构建**：生成了近 30 万张虚拟 mIF 图像，覆盖 24 种癌症和 306 个亚型。
- **生物标志物发现**：识别出 1,234 个统计学显著的关联，包括 MSI-H/TMB-H 与免疫通道的关系，以及 KRAS/KMT2D 突变与免疫活化的新关联。
- **临床预测**：证明虚拟 mIF 特征能有效预测患者生存风险，其表现与真实 mIF 数据高度一致。

## 开源与影响
GigaTIME 已在 Foundry Labs 与 HuggingFace 上全量开源。微软 CEO Satya Nadella 称赞其让以前看不见的免疫信息变得触手可及。该模型被视为 [[ai-for-science]] 的典型案例，展示了 AI 如何通过挖掘廉价数据的高维价值来解决实验科学中的稀缺性问题。

## 相关技术
- [[GigaPath]]：微软此前开发的病理模型，证明了 H&E 切片中包含丰富的结构信号，为 GigaTIME 提供了架构基础。