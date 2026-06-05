---
type: source
title: "CVPR 2026 Highlight | 慕尼黑工业大学&英伟达等提出 VideoCUPS：利用运动与深度线索,首个无监督视频全景分割框架，性能刷新 SOTA"
created: 2026-06-05
updated: 2026-06-05
tags: [计算机视觉, 视频全景分割, 无监督学习, CVPR-2026, 伪标签]
related: [videocups, 无监督视频全景分割, cvpr-2026, 慕尼黑工业大学, 英伟达]
sources: ["cvpr-2026-highlight-慕尼黑工业大学&英伟达等提出-videocups：利用运动与深度线索,首个无监督视频全景分割框架，性能刷新-sota.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/ZAI3_QVi_70Y4AJiGLuxLQ"
venue: 我爱计算机视觉
---
# CVPR 2026 Highlight | 慕尼黑工业大学&英伟达等提出 VideoCUPS

本文由 [[我爱计算机视觉]] 发布，报道了 [[慕尼黑工业大学]]、[[英伟达]]、[[达姆施塔特工业大学]]、[[牛津大学]] 等机构联合提出的 [[videocups|VideoCUPS]] 框架——首个完全无监督的视频全景分割（VPS）框架。

## 核心内容

- **问题**：视频全景分割标注成本极高，现有无监督方法多局限于静态图像或单物体视频。
- **方法**：利用运动一致性和深度线索从单目视频自动生成伪标签，包含实例标注、语义标注和时序一致性处理三个模块。
- **训练策略**：提出 [[video-droploss|Video DropLoss]] 和自增强视频 Copy-Paste 数据增强。
- **关键结果**：
  - Cityscapes-VPS 验证集 STQ 达 22.2%，大幅领先所有无监督基线。
  - 在 KITTI-STEP、Waymo、MOTS 上展现强跨域泛化能力。
  - 仅用 10% 标注微调即达 STQ 32.5%，远超 DINO 初始化全量微调效果。

## 技术亮点

- 基于格式塔心理学 [[共同命运原则]]，利用"一起运动的像素属于同一物体"的先验知识。
- 从 CUPS 的双目相机降级为单目视频输入，降低硬件门槛。
- 论文被 [[cvpr-2026|CVPR 2026]] 接收为 Highlight。

## 链接

- 论文：https://arxiv.org/abs/2606.04925
- 项目主页：https://visinf.github.io/videocups
- 代码仓库：https://github.com/visinf/cups/tree/main/videocups