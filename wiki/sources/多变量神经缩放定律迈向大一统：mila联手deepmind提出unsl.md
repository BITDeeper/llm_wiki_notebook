---
type: source
title: "多变量神经缩放定律迈向大一统：Mila联手DeepMind提出UNSL"
created: 2026-05-28
updated: 2026-05-28
tags: [scaling-law, 神经缩放定律, 多变量, 论文, mila, deepmind]
related: [unsl-统一神经缩放定律, scaling-law, mila, google-deepmind, ethan-caballero]
sources: ["多变量神经缩放定律迈向大一统：mila联手deepmind提出unsl.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/0cJDupDeUGCo_3YEh68Uvw"
venue: 机器之心
---
# 多变量神经缩放定律迈向大一统：Mila联手DeepMind提出UNSL

本文报道了来自 [[mila]] 和 [[google-deepmind]] 的研究者提出的 [[unsl-统一神经缩放定律]]（Unified Neural Scaling Law，UNSL），一种全新的多变量缩放定律函数形式。

## 核心内容

传统 Scaling Law 通常只回答"参数量、数据量和计算量增加后 loss 如何下降"的问题，但真实训练过程涉及训练步数、batch size、学习率、初始化尺度等多个变量的交互作用。UNSL 将多变量同时变化、拐点、瓶颈、过拟合以及超参数反向作用统一纳入单一框架。

## 关键实验结果

- **视觉任务**：UNSL 在 60.87% 的任务上取得最佳外推表现，次优方法 A3 仅 21.74%。
- **语言任务**：UNSL 在 88.89% 的任务上外推最好，次优方法 A2 仅 11.11%。
- **三变量语言实验**：UNSL 的外推误差约为传统 DC 方法的八分之一。

## 论文信息

- 论文标题：Unified Neural Scaling Laws
- 论文链接：https://arxiv.org/pdf/2605.26248
- 一作：[[ethan-caballero]]

本文是对 [[scaling-law]] 概念的重大理论扩展，为"Scaling Law 仍有丰富结构待发现"提供了具体支撑。