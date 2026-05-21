---
type: concept
title: Layer-Adaptive Expert Pruning (LAEP)
tags: [model-optimization, moe, training-efficiency]
related: [yuan3-0-ultra, functional-specialization, yuanlab-ai]
created: 2026-03-05
updated: 2026-03-05
sources: ["企业级openclaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布.md"]
---

# Layer-Adaptive Expert Pruning (LAEP)

[[Layer-Adaptive Expert Pruning (LAEP)]]（层自适应专家裁剪）是由 [[YuanLab.ai]] 提出的一种针对预训练混合专家（MoE）模型的优化算法。该算法旨在解决 MoE 模型训练中专家负载极不均衡的问题，通过剔除冗余专家来提升训练效率和推理性能。

## 背景与原理

在 MoE 模型的预训练过程中，专家负载的演化通常分为两个阶段：
1.  **初始过渡阶段**：专家负载波动剧烈，受随机初始化影响明显。
2.  **稳定阶段**：专家负载趋于稳定，但极不均衡。研究发现，在稳定阶段，最高负载专家与最低负载专家的负载差异近 500 倍。

这种不均衡实际上反映了 [[Functional Specialization]]（功能专一化）现象，即模型内部自发形成了类似大脑功能区的专业化分工。部分专家长期处于低负载状态，成为了算力资源的浪费。

## 算法机制

LAEP 算法利用预训练过程中形成的专家负载统计信息，动态识别那些贡献度低、负载少的专家。通过对模型结构进行自适应裁剪与专家重排，算法将计算资源集中于真正发挥作用的专家身上。

从神经科学视角看，这一过程类似于大脑在长期学习过程中对神经连接进行优化与重组：保留高效的信息处理通路，削弱低效连接。

## 效果

在 [[Yuan3.0 Ultra]] 模型的应用中，LAEP 取得了显著效果：
-   **参数规模**：从 1515B 优化至 1010B（减少 33.3%）。
-   **训练效率**：整体预训练算力效率提升 49%。

这一成果表明，大模型的发展不应仅追求参数规模的堆砌，更应关注结构分工与专业化能力的优化。