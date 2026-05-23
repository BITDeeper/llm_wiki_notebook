---
type: source
title: "无需构造偏好对：TGO用标量反馈对齐视觉生成模型｜ICML'26"
created: 2026-05-17
updated: 2026-05-17
tags: [ai-alignment, visual-generation, preference-optimization, icml-2026, scalar-feedback]
related: [tgo-threshold-guided-optimization, 标量反馈对齐, dpo-direct-preference-optimization, 量子位]
sources: ["无需构造偏好对：tgo用标量反馈对齐视觉生成模型｜icml'26.md"]
authors: [允中]
year: 2026
url: "https://mp.weixin.qq.com/s/eM-Q7WV7c25mzi1krmLZsA"
venue: 量子位
---
# 无需构造偏好对：TGO用标量反馈对齐视觉生成模型｜ICML'26

量子位报道的新加坡国立大学团队论文，介绍 [[tgo-threshold-guided-optimization|TGO（Threshold-Guided Optimization）]] 方法，一种不依赖成对偏好数据、直接利用独立样本标量评分进行视觉生成模型对齐的新范式。

## 核心内容

文章系统梳理了偏好优化从成对比较（pairwise）向标量反馈（scalar feedback）演进的技术脉络：

- **[[dpo-direct-preference-optimization|DPO]]** 的优雅来自成对数据——两个输出相减时，不可计算的配分函数自然抵消。但这也限制了其适用范围。
- **PMPO**（Google DeepMind）允许正负样本不成对出现，基于EM-style policy improvement。
- **QRPO** 将原始奖励转为分位数奖励，使配分函数具有解析形式。
- **TGO** 用数据驱动的全局阈值近似不可计算的oracle baseline，结合置信度加权，将标量分数转化为有效的对齐信号。

## 关键发现

- TGO 在 Pick-a-Pic、PartiPrompts、HPSv2 等图像生成基准上优于 SFT、DPO、Diffusion-KTO、DSPO 等基线。
- 同时适用于扩散模型（Stable Diffusion v1.5、FLUX、Wan 1.3B）和掩码生成模型（Meissonic）。
- 在视频生成（Wan 1.3B + VideoReward）上也展示了有效性。
- 多个奖励模型上均有提升，表明并非单纯的奖励作弊。

## 核心论点

TGO 并非替代 DPO，而是补上另一种反馈接口。生成模型越往产品里走，反馈形态越复杂——评分、点击、收藏、编辑等 pointwise 信号将成为下一阶段 post-training 的主要数据来源。