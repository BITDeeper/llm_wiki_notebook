---
type: concept
title: DSA 算子融合
created: 2026-05-21
updated: 2026-05-21
tags: [算子融合, 稀疏注意力, 训练优化]
related: [loongforge, DeepSeek V4]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
---
# DSA 算子融合

DSA 算子融合是 [[loongforge|LoongForge]] 针对 DeepSeek V3.2 稀疏注意力架构实现的端到端算子融合优化。

## 优化范围

涵盖注意力计算全链路的深度算子融合与优化：
- 索引内核
- 稀疏注意力
- MQA Absorbed KV 布局
- 序列拼接

## 性能提升

相比非 CUDA 融合版本，端到端训练性能提升约 5 倍（480%）。

## 注意事项

该提升针对特定架构（DeepSeek V3.2 稀疏注意力），属于最佳场景数据。LoongForge 在主流模型上的普遍提升为 15%~45%。