---
type: entity
title: Nemotron Labs Diffusion (NLD)
created: 2026-05-22
updated: 2026-05-22
tags: [nvidia, 大语言模型, 扩散模型, 三模式解码, 开源模型]
related: [三模式解码, 扩散语言模型, 自推测解码, 英伟达, tokenmaxxing]
sources: ["首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？.md"]
origin_date: 2026-05-22
---
# Nemotron Labs Diffusion (NLD)

英伟达提出的全球首个[[三模式解码|三模式]]大语言模型系列，提供3B、8B、14B三个尺寸的基座模型。模型已在HuggingFace开源。

## 核心创新

NLD的核心突破在于单一架构无需额外草稿模型或架构变更，即可在三种解码模式间自由切换：

1. **自回归模式（AR）**：传统从左到右逐字生成，适合高并发、计算密集型云端服务
2. **扩散模式（Diffusion）**：采用[[分块去噪]]和[[双流注意力机制]]进行大规模并行token推测，配有轻量化训练采样器
3. **自推测模式（Self-Speculation）**：利用模型自身扩散模式起草多个token，再用AR模式验证，实现"单模型自我博弈"

## 性能数据

### 准确率
- 在LLaDA、Dream、SDAR等已有开源dLLM上实现9%-22.4%的准确率提升
- 匹配Qwen3-8B基线AR准确率
- 前向传播中达到5.9个token（TPF）

### 速度（8B模型，单用户场景）
- DGX Spark：FP8精度下提速3.14倍；INT4精度下提速2.7倍（112 token/s vs 41.8 AR）
- RTX 6000 Pro：FP8精度下提速3.4倍
- GB200：提速3.3倍（850 tok/s）；配合自定义CUDA内核最高提速4倍

### 推测接受率
- 线性自推测平均接受长度8.7
- 对比：Qwen3.5-9B-MTP为4.7，Qwen3-8B-Eagle3为2.81

## 训练配方

基于Ministral3基座（3B/8B/14B）：
1. 1T token的AR-only持续预训练
2. 300B token的[[联合ar-diffusion训练]]
3. SFT和VLM对齐

关键技术：[[全局损失平均]] + DP-rank变化掩码、严格因果干净流（防止标签泄漏）、LoRA增强起草器

## 理论潜力

论文分析指出，若开发出更完美的扩散采样器，扩散模式的理论性能上限比现有自推测模式还高76.5%，意味着[[扩散语言模型]]仍有巨大未兑现潜能。

## 关联链接

- HuggingFace：https://huggingface.co/collections/nvidia/nemotron-labs-diffusion
- 项目页面：https://research.nvidia.com/publication/2026-05_nemotron-labs-diffusion-tri-mode-language-model-unifying-autoregressive