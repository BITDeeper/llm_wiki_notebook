---
type: source
title: "CVPR 2026 Oral | MagicBokeh：0.1s 实现高倍变焦图像虚化"
authors: [vivo, 中国科学院深圳先进技术研究院, 深圳理工大学]
year: 2026
url: "https://mp.weixin.qq.com/s/9PuVE_j4sAw9_8FKgrE-9Q"
venue: CVPR 2026
tags: [cvpr-2026, 计算摄影, 扩散模型, 图像虚化, 超分辨率, 移动端部署]
related: [magicbokeh, cvpr-2026, 高倍变焦虚化渲染]
created: 2026-06-12
updated: 2026-06-12
sources: ["rss/cvpr-2026-oral-magicbokeh：0.1s-实现高倍变焦图像虚化.md"]
---
# CVPR 2026 Oral | MagicBokeh：0.1s 实现高倍变焦图像虚化

## 概述

本文报道了CVPR 2026 Oral论文MagicBokeh，这是首个专为高倍变焦虚化渲染设计的统一扩散框架。论文由[[vivo]]、[[中国科学院深圳先进技术研究院]]和[[深圳理工大学]]联合完成，入围CVPR 2026 Best Paper决赛圈（16,092篇投稿中15篇）。

## 核心问题

高倍数码变焦导致画质退化（噪声增加、分辨率下降），传统两阶段方案（先超分再虚化）存在效率低和误差累积两大缺陷。MagicBokeh提出单阶段统一框架，将超分与虚化整合进同一个扩散模型。

## 关键技术

1. **块剪枝+LoRA微调**：基于Stable Diffusion 2.1进行U-Net结构瘦身，去除冗余中间模块和交叉注意力层
2. **交替训练策略**：分阶段交替训练超分LoRA和虚化LoRA+ControlNet，解决任务冲突
3. **焦点感知掩码注意力（FAMA）**：利用焦散图生成二值掩码，在自注意力中隔离前景/背景，解决色彩溢出
4. **退化感知深度估计**：通过特征蒸馏使深度估计模块在低质量输入下仍能生成精准焦散图

## 实验结果

- EBB400-LQ基准：PSNR 24.23，SSIM 0.8623，全面超越两阶段组合方案
- L40s GPU上512×512图片推理仅需0.1062秒
- 支持"先拍照后对焦"附加能力

## 代码与论文

- 论文：https://arxiv.org/abs/2605.07429
- 代码：https://github.com/vivoCameraResearch/MagicBokeh（已开源）

## 来源信息

- 媒体：[[我爱计算机视觉]]
- 发布日期：2026-06-12