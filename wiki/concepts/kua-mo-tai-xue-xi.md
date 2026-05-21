---
type: concept
title: 跨模态学习
tags: [machine-learning, ai-methodology, medical-ai]
related: [gigatime, ai-for-science]
created: 2025-12-13
updated: 2025-12-13
sources: ["微软gigatime登上《cell》：5美元切片变成免疫图谱.md"]
---

# 跨模态学习

## 概述
[[跨模态学习]]（Cross-modal Learning）是指利用一种模态（Modality，如图像、文本、语音）的信息来预测、生成或增强另一种模态数据的技术。

## 在 GigaTIME 中的应用
在 [[GigaTIME]] 模型中，跨模态学习体现为将 [[H&E 切片]]（形态学/光学图像模态）“翻译”成 [[多重免疫荧光 (mIF)]]（蛋白质组学/荧光图像模态）。模型并非进行简单的图像风格迁移，而是学习从细胞形态到蛋白表达的深层生物学映射关系。

## 价值
跨模态学习打破了“高价值数据必然来自高成本实验”的传统假设。它证明了高维信息可能隐藏在低维、低成本的数据中，只需正确的 AI 解码器即可提取。这为解决科学研究中数据稀缺性问题提供了新的方法论路径。