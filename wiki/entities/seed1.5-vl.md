---
type: entity
title: Seed1.5-VL
tags: [模型, 视觉语言模型, 教师模型]
related: [onethinker, onethinker-sft-340k]
created: 2025-12-12
updated: 2025-12-12
sources: ["港中文联手美团开源“视觉推理通才”！图像视频10类任务一网打尽.md"]
---

# Seed1.5-VL

[[Seed1.5-VL]] 是一个基础视觉语言模型，在 [[onethinker]] 的研发过程中扮演了“教师”模型的角色。

## 在 OneThinker 中的应用

研究团队利用 Seed1.5-VL 对 [[onethinker-600k]] 数据集中的样本进行处理，生成高质量的思维链数据。这些合成数据经过过滤后，构成了 [[onethinker-sft-340k]] 数据集，用于 OneThinker 的 SFT 冷启动训练。