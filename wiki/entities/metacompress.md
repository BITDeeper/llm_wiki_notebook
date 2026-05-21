---
type: entity
title: MetaCompress
tags: [algorithm, lvlm, efficiency, token-compression, cvpr-2026]
related: [token-compression, multi-turn-vqa, meta-generator, zhejiang-university, alibaba-group]
created: 2026-05-07
updated: 2026-05-07
sources: ["只看图片就能学会压缩token！浙大&阿里新框架多轮vqa压缩率90%，精度不掉｜cvpr-2026.md"]
---

# MetaCompress

**MetaCompress** 是由 [[浙江大学]] 与 [[阿里巴巴集团]] 联合提出的面向 [[多轮视觉问答]] 的学习式 [[Token压缩]] 框架，发表于 CVPR 2026。

## 核心特性
MetaCompress 旨在解决大型视觉语言模型（LVLM）在多轮交互中面临的视觉 Token 算力爆炸问题。与传统的基于规则或启发式的方法不同，MetaCompress 采用数据驱动的方式，通过一个轻量级的 **[[元生成器]]** 来自适应地生成压缩策略。

## 技术架构
1.  **元生成器**：
    *   仅根据输入图像（无需文本 Prompt）生成最优的压缩映射矩阵。
    *   通过自适应下采样适配不同分辨率的输入，兼容 LLaVA-NeXT 等多尺度架构。
    *   结构轻量化，几乎不增加额外推理开销。
2.  **统一范式**：
    *   将 Token 剪枝和合并统一为“可学习的压缩映射优化问题”。
    *   目标是找到最优压缩矩阵 $P$，使得压缩前后模型对文本输入的响应分布差异最小。

## 性能表现
*   **压缩率**：在 70% 和 90% 的极高压缩率下，仍能保持模型精度，显著优于 [[FastV]] 和 [[PruMerge]] 等基线方法。
*   **效率**：推理延迟和显存占用与简单的下采样方法持平。
*   **泛化性**：在跨数据集和视频问答任务中展现出良好的零样本迁移能力。

## 关键发现
通过实验分析，MetaCompress 团队发现了一个反直觉的现象：在多轮场景下，被最优策略保留的 Token 中，仅有 **1.71%** 具有高注意力分数。这有力地证明了传统的 [[启发式注意力准则]] 在多轮视觉问答中本质上是次优的。

## 来源
*   论文：*MetaCompress: Learning to Compress Visual Tokens for Multi-turn Visual Question Answering* (CVPR 2026)
*   相关报道：[只看图片就能学会压缩token！浙大&阿里新框架多轮vqa压缩率90%，精度不掉｜cvpr-2026](只看图片就能学会压缩token！浙大&阿里新框架多轮vqa压缩率90%，精度不掉｜cvpr-2026.md)