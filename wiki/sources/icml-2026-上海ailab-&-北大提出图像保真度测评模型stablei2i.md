---
type: source
title: "ICML 2026 上海AILab & 北大提出图像保真度测评模型StableI2I"
created: 2026-05-12
updated: 2026-05-12
tags: [图像保真度, 评测基准, 多模态大模型, ICML-2026, 图像编辑, 图像恢复]
related: [stablei2i, stablei2i-bench, 图像保真度评估, 上海ailab, 北京大学]
sources: ["icml-2026-上海ailab-&-北大提出图像保真度测评模型stablei2i.md"]
authors: [上海AILab, 北京大学]
year: 2026
url: "https://mp.weixin.qq.com/s/LR3sxwTLSk5JcRngswYtBQ"
venue: ICML 2026
---
# ICML 2026 上海AILab & 北大提出图像保真度测评模型StableI2I

## 来源信息
- **媒体**：[[我爱计算机视觉]]
- **发布日期**：2026年5月12日
- **会议**：ICML 2026 接收论文
- **论文链接**：https://arxiv.org/pdf/2605.04453
- **代码仓库**：https://github.com/Henry-Lee-real/StableI2I
- **模型与数据集**：https://huggingface.co/collections/lijiayangCS/stablei2i

## 核心内容

本文介绍了 [[stablei2i]]——一个专门用于图像到图像（I2I）任务保真度评估的模型，以及配套的评测基准 [[stablei2i-bench]]。

### 问题定义
现有图像评估指标（NR指标、ImgEdit-Judge等）要么只关注质量/美学而无法参考输入图像，要么只关注指令跟随而忽略非编辑区域的保真度。StableI2I首次从语义和像素级两个角度系统定义了[[图像保真度评估]]问题。

### 三位一体评价体系
- **Semantic-level**：语义信息上的内容错误
- **Structure Level**：像素级的内容重绘或纹理结构错位
- **Low-level Appearance**：处理后图像相对原图的质量退化

### 关键实验结果
- StableI2I Binary Accuracy达89.10%（GPT-5为80.57%）
- StableI2I Strict Accuracy达83.00%（GPT-5为55.27%，Claude-Sonnet-4.5为63.37%）
- 通用多模态模型偏向高层语义理解，对结构一致性和局部保真度不敏感
- 当前I2I生成模型的主要问题是[[内容重绘]]和结构不一致

### 重要发现
- GPT-Image-1虽然美学质量高，但存在严重的[[内容重绘]]问题
- Bagel和Qwen-Image-Edit系列保真度较好
- Flux.1-dev和GPT-Image-1结构保真度差