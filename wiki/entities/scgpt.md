---
type: entity
title: scGPT
created: 2026-05-03
updated: 2026-05-03
tags: [foundation-model, bioinformatics, single-cell]
related: [scLong, geneformer]
sources: ["当ai第一次读完整本基因之书，十亿参数单细胞大模型能干什么？.md"]
---

# scGPT

[[scGPT]] 是一个基于生成式预训练变换器（GPT）架构的单细胞基础模型。

作为 [[scLong]] 的对比基准之一，[[scGPT]] 在多项任务（如遗传扰动预测、化学扰动预测）上的表现被 [[scLong]] 超越。分析指出，这主要是因为 [[scGPT]] 等现有模型为了节省计算资源，往往只对约 1500-2000 个高表达基因进行建模，忽略了大量低表达基因和零表达基因中包含的关键调控信息。