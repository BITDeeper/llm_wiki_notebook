---
type: event
title: 英伟达发布首个三模式LLM
created: 2026-05-22
updated: 2026-05-22
tags: [英伟达, 三模式解码, 扩散语言模型, 模型发布, 里程碑]
related: [nemotron-labs-diffusion, 三模式解码, 扩散语言模型, 自推测解码, tokenmaxxing]
sources: ["首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？.md"]
origin_date: 2026-05-22
participants: [英伟达]
causes: []
effects: [三模式解码, 扩散语言模型]
significance: high
---
# 英伟达发布首个三模式LLM

2026年5月，英伟达发布全球首个三模式大语言模型系列 [[nemotron-labs-diffusion|Nemotron Labs Diffusion (NLD)]]，提供3B、8B、14B三个尺寸，模型已在HuggingFace开源。

## 事件概述

英伟达提出了单一架构即可在自回归（AR）、扩散和自推测解码三种模式间自由切换的大语言模型。这是LLM架构从"AR vs 扩散"二元对立走向统一融合的标志性事件。

## 核心成果

- 首次实现[[三模式解码]]：一个模型、三种模式、无需额外模型或架构变更
- 最快模式实现4倍[[tokenmaxxing|token吞吐量]]提升（GB200 + 自定义CUDA内核，850 tok/s）
- 在已有开源dLLM上实现9%-22.4%的准确率提升，确立新SOTA dLLM
- 匹配Qwen3-8B基线AR准确率，证明扩散路线可兼顾质量
- 线性自推测平均接受长度8.7，远超竞品

## 技术突破

- [[联合ar-diffusion训练]]：同时优化AR Loss和Diffusion Loss
- [[全局损失平均]]：解决扩散训练中的梯度激增
- [[自推测解码]]：无需额外草稿模型的推理加速
- [[分块去噪]] + [[双流注意力机制]]：扩散模式的核心生成策略

## 影响与意义

该发布标志着LLM架构演进的重要方向：不再在自回归和扩散之间做非此即彼的选择，而是将它们统一在同一Transformer体系内。论文还指出扩散模式理论上有76.5%的额外提升空间，预示长文本"秒级生成"时代的到来。

## 关联人物

英伟达研究员 Pavlo Molchanov 在X平台发布了相关内容。