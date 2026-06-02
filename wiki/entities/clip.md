---
type: entity
title: CLIP
created: 2026-05-31
updated: 2026-06-01
tags: [模型, OpenAI, 视觉-语言, 对抗样本, 多模态, 表示学习]
related: [对抗样本, 转移攻击, ai-权威清洗, openai, 音视频智能-avi, imagebind, 离散token化]
sources: ["ai权威清洗：-一张肉眼难辨的图片，就能让gpt-5.4、claude-opus-4.6集体造谣.md", "2026最新综述-新国立&牛津等发布大模型时代的音视频智能（avi）全景指南.md"]
origin_date: 2021-01-05
---

# CLIP

[[openai|OpenAI]] 于2021年发布的对比语言-图像预训练模型（Contrastive Language-Image Pre-training），通过对比学习将文本和图像映射到同一语义嵌入空间。

## 在音视频智能（AVI）中的角色

在 [[音视频智能-avi]] 综述中，CLIP 被定位为"连续嵌入"路径的核心技术之一，用于将不同模态映射到统一的语义空间。STG-CMA 模型利用 CLIP 预训练权重在 AVE 数据集上达到了 83.3% 的准确率。

## 在AI权威清洗中的角色

在 [[ai-权威清洗论文发布-202605|AI权威清洗论文]] 中，攻击者利用公开的 CLIP 模型集成生成[[对抗样本]]，再通过[[转移攻击]]将这些对抗样本迁移到 GPT-5.4、Claude Opus 4.6 等商业黑盒模型上。CLIP 的公开可用性使得攻击者无需访问目标模型即可实施有效攻击。