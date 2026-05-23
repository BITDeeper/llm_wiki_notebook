---
type: source
title: "从图像到视频的任意分割：X2SAM让MLLM真正看懂像素级时空世界"
created: 2026-05-15
updated: 2026-05-15
tags: [多模态大模型, 图像分割, 视频分割, 统一框架, 中山大学, 美团]
related: [x2sam, 统一图像视频分割, mask-memory, v-vgd, 机器之心]
sources: ["从图像到视频的任意分割：x2sam让mllm-真正看懂像素级时空世界.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/ydO3Pa_G3FRr05qY61PD_g"
venue: 机器之心
---
# 从图像到视频的任意分割：X2SAM让MLLM真正看懂像素级时空世界

本文由 [[机器之心]] 报道，介绍了 [[中山大学]] 与 [[美团]] 联合提出的 [[x2sam]]（X2SAM）统一图像与视频分割多模态大模型框架。

## 核心内容

X2SAM 是首个将图像分割、视频分割、语言理解、视觉提示和时序记忆统一在单一多模态大模型框架中的方案，支持7类分割任务：通用分割、开放词汇分割、指代表达分割、推理分割、对话生成分割、视觉定位分割、对象级分割。

论文引入了 [[mask-memory]]（掩码记忆）模块解决视频中目标运动、遮挡、形变导致的分割不一致问题，并提出了新任务 [[v-vgd]]（视频视觉定位分割）。

## 关键实验结果

- 图像开放词汇分割（ADE20K）优于此前 SoTA
- 视频开放词汇分割：60.3 AP
- 视频推理分割：69.9 J&F，较此前 SoTA 提升 14.2 点
- 视频对话生成分割：75.8 mIoU
- 统一训练成本降低 36.5%（从约 5.2K GPU 小时降至约 3.3K GPU 小时）

## 来源信息

- 论文标题：X2SAM: Any Segmentation in Images and Videos
- 论文链接：https://arxiv.org/abs/2605.00891
- 项目主页：https://wanghao9610.github.io/X2SAM
- 项目代码：https://github.com/wanghao9610/X2SAM
- 第一作者：[[王豪]]（中山大学博士研究生）
- 共同通讯作者：[[梁小丹]]（中山大学教授）、[[蓝湘源]]（美团副研究员）