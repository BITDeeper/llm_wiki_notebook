---
type: source
title: "李飞飞造了ImageNet，现在她又带人超越了它"
created: 2026-05-30
updated: 2026-05-30
tags: [计算机视觉, 数据集, 评测基准, 李飞飞, GPIC]
related: [李飞飞, gpic, imagenet, fd-dinov2, 基准饱和, 斯坦福大学]
sources: ["李飞飞造了imagenet，现在她又带人超越了它.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/LbefXcGR2emhHn7YWUBy0A"
venue: 机器之心
---
# 李飞飞造了ImageNet，现在她又带人超越了它

本文报道了斯坦福大学李飞飞团队发布 [[gpic]]（巨型开放图像语料库）的消息。GPIC 包含 1 亿对图像-文本数据、约 28 万亿像素，全量开放且许可合规，旨在成为视觉生成时代的新基准数据集。

## 核心内容

### 旧基准的失效
[[imagenet]] 作为计算机视觉研究的核心基准已彻底[[基准饱和|饱和]]——生成模型的 FID 评分已低于真实图片本身，分数失真，无法有效区分模型优劣。同时，工业级数据集封闭不公开，开放数据集通过 URL 索引分发导致不稳定和不可复现。

### GPIC 的构建
GPIC 经过四个严格阶段构建：①仅采集 CC BY、CC0 等有授权的图片（来自 Flickr 和 Wikimedia）；②使用 [[qwen3-vl-4b]] 过滤低质量与有害内容；③使用 SSCD 模型进行去重；④为每张图片生成四种粒度的高质量描述。

### 新评估协议
GPIC 附带 [[fd-dinov2]] 评估指标，基于 Meta 的 [[dinov2]] 特征提取，替代已过时的 FID。所有主流模型在该指标上仍有余量，且采用独立百万张测试集进行评估，防止记忆训练数据作弊。

### 参考基线
研究团队在 GPIC-Full 上训练了基于 JiT 架构的参考基线模型（1.1B 参数），FD-DINOv2 评分为 76.25，为后续研究提供公平比较起点。