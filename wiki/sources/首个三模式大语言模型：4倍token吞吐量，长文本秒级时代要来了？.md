---
type: source
title: "首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？"
created: 2026-05-22
updated: 2026-05-22
tags: [nvidia, 扩散语言模型, 三模式解码, token吞吐量, 模型架构]
related: [nemotron-labs-diffusion, 三模式解码, 扩散语言模型, 自推测解码, tokenmaxxing]
sources: ["首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/vkc7opJg3ItYR8AuaeqHIQ"
venue: 机器之心
---
# 首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？

本文由机器之心于2026年5月22日发布，报道了英伟达提出的全球首个三模式大语言模型系列 [[nemotron-labs-diffusion|Nemotron Labs Diffusion (NLD)]]。

## 核心内容

英伟达提出了单一模型即可在自回归（AR）、扩散和自推测解码三种模式间切换的架构，无需额外草稿模型或架构变更。最快模式可实现4倍 [[tokenmaxxing|token吞吐量]] 提升。

## 关键发现

- **准确率**：在已有开源dLLM（LLaDA、Dream、SDAR）上实现9%-22.4%的准确率提升，匹配Qwen3-8B基线AR准确率
- **速度**：GB200配合自定义CUDA内核最高提速4倍（850 tok/s）
- **推测接受率**：线性自推测平均接受长度8.7，远超Qwen3.5-9B-MTP的4.7和Qwen3-8B-Eagle3的2.81
- **理论潜力**：更完美的扩散采样器可将性能上限再提升76.5%

## 技术要点

- [[三模式解码]]：通过切换注意力模式/掩码实现三种解码模式
- [[联合ar-diffusion训练]]：同时优化AR Loss和Diffusion Loss
- [[全局损失平均]]：解决扩散模型训练中梯度激增问题
- [[自推测解码]]：利用模型自身扩散模式起草token，AR模式验证

## 模型规格

提供3B、8B、14B三个尺寸，基于Ministral3基座，经1T token AR预训练 + 300B token联合训练 + SFT/VLM对齐。模型已在HuggingFace开源。