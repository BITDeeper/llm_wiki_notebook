---
type: entity
title: Penguin-Encoder
tags: [computer-vision, llm, architecture, encoder]
related: [penguin-vl, 双向注意力, 2D-rope, 纯文本llm初始化视觉编码器]
created: 2026-03-19
updated: 2026-03-19
sources: ["腾讯纯文本llm训视觉encoder，拿捏图表长视频，达到开源小模型sota！.md"]
---

# Penguin-Encoder

[[penguin-encoder]] 是腾讯 Penguin-VL 团队提出的视觉编码器架构。其核心创新在于直接从纯文本 LLM 初始化，而非使用传统的 CLIP 或 SigLIP 等对比学习预训练模型。

## 设计原理

传统的视觉编码器通过对比学习将图像压缩进语义空间，虽然利于分类和对齐，但容易过早丢失细粒度的局部结构、空间关系和时序细节。Penguin-Encoder 继承了 LLM 的序列建模能力和成熟的架构模块（如 Attention, FFN, GQA, RMSNorm），使得视觉和语言之间的表示空间更加接近。

## 关键技术

为了将纯文本 LLM 适配为视觉编码器，Penguin-Encoder 进行了两处关键改造：

1.  **[[双向注意力]]**：将 LLM 原生的因果注意力机制修改为双向，以适应非因果的视觉图像/视频建模需求。
2.  **[[2D-RoPE]]**：引入二维旋转位置编码，补充 LLM 原生 1D 位置编码在处理 2D 视觉信息时的不足。

## 性能验证

消融实验表明，在同样的训练流程下，随机初始化的 Encoder 平均分为 31.3，而使用 LLM 初始化并加入完整训练配方后，平均分提升至 34.6。在 Encoder 对比实验中，Penguin-Encoder 达到了 49.3 分，且仅用约 2.4 亿 Stage 1 样本即超越了依赖更大规模对比学习的方案。