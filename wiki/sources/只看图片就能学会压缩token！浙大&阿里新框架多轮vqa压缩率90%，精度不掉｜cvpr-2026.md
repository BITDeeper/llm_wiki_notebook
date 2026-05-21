---
type: source
title: "只看图片就能学会压缩Token！浙大&阿里新框架多轮VQA压缩率90%，精度不掉｜CVPR 2026"
tags: [vqa, token-compression, lvlm, efficiency, zhejiang-university, alibaba, cvpr-2026]
related: [metacompress, zhejiang-university, alibaba-group, song-mingli, wang-yi, token-compression, multi-turn-vqa]
created: 2026-05-07
updated: 2026-05-07
authors: [王毅, 宋明黎, 汪维, 金炫]
year: 2026
url: "https://mp.weixin.qq.com/s/uvLpXd_A2IUVAe7ynWwVYA"
venue: "CVPR 2026"
sources: ["只看图片就能学会压缩token！浙大&阿里新框架多轮vqa压缩率90%，精度不掉｜cvpr-2026.md"]
---

# 只看图片就能学会压缩Token！浙大&阿里新框架多轮VQA压缩率90%，精度不掉｜CVPR 2026

## 概述
本文介绍了由浙江大学宋明黎教授团队与阿里巴巴集团安全部联合提出的 **[[MetaCompress]]** 框架。该框架是一种面向 [[多轮视觉问答]] 的学习式 [[Token压缩]] 方案，旨在解决大型视觉语言模型（LVLM）在多轮交互中因视觉 Token 爆炸导致的算力与显存瓶颈。

## 核心问题
现有的 Token 压缩方法（如 [[FastV]] 和 [[PruMerge]]）主要针对单轮问答设计，在多轮场景下会失效：
1.  **Prompt 依赖型方法**（如 FastV）：仅根据首轮问题筛选 Token，容易丢失后续轮次所需的背景或细节信息。
2.  **Prompt 无关型方法**（如 PruMerge）：依赖人工设计的 [[启发式注意力准则]]（如注意力分数），但研究发现这些准则与 Token 的实际重要性相关性极低（仅 1.71%）。

## 解决方案：MetaCompress
MetaCompress 的核心创新在于将 Token 压缩统一为“可学习的压缩映射优化问题”，并引入了 **[[元生成器]]**：
*   **仅看图学习**：元生成器无需依赖文本 Prompt，仅根据输入图像本身即可生成最优压缩映射。
*   **多尺度适配**：通过自适应下采样，兼容 LLaVA-NeXT 等主流多尺度 LVLM 架构。
*   **数据驱动**：摒弃了人工预设的剪枝规则，通过数据自主学习 Token 的重要程度。

## 实验结果
*   **精度保持**：在 70% 和 90% 的高压缩率下，精度显著优于现有方法。
*   **效率提升**：推理延迟和显存占用与下采样方法持平，几乎无额外开销。
*   **泛化能力**：在跨数据集和视频问答任务中，无需微调即可表现优异。

## 关键人物
*   **第一作者**：[[王毅]]（浙江大学博士生）
*   **通讯作者**：[[宋明黎]]（浙江大学教授）
*   **合作者**：[[阿里巴巴集团]] 安全部（汪维、金炫）

## 链接
*   论文：[arXiv:2603.21701](https://arxiv.org/abs/2603.21701)
*   代码：[GitHub: MetaCompress](https://github.com/MArSha1147/MetaCompress)