---
type: concept
title: 潜在扩散 Transformer
created: 2026-05-27
updated: 2026-05-27
tags: [扩散模型, transformer, 架构, 文生图]
related: [lens-t2i, 微软]
sources: ["微软开源-lens-：仅-3.8b-参数文生图模型，训练效率提升约-5-倍，性能不输几十倍参数大模型.md"]
---
# 潜在扩散 Transformer

潜在扩散 Transformer（Latent Diffusion Transformer）是一种结合变分自编码器（VAE）潜空间与 Transformer 架构的扩散模型范式，是 [[lens-t2i]] 的核心架构。

## 架构原理

### MMDiT（Multimodal Diffusion Transformer）
Lens 采用的 MMDiT 架构包含 48 个模块，核心流程为：

1. **文本编码**：通过语言编码器（GPT-OSS）提取多层文本特征
2. **图像编码**：通过 VAE Encoder 将图像转化为潜空间特征
3. **交叉注意力交互**：图像和文本特征在各自分支处理后进行交叉注意力计算
4. **去噪输出**：经过多步去噪后，由 VAE Decoder 还原为高清图像

### 关键组件选择

Lens 团队通过系统性消融研究确定了最优组件：

- **VAE**：选用 FLUX.2 的变分自编码器，在生成任务中表现最稳健，提供更紧凑且语义明确的潜空间
- **语言编码器**：选用 [[gpt-oss]]（20B 参数，激活参数 3B），强大的语言理解能力带来指令遵循准确性和多语言泛化

## 与传统扩散模型的区别

传统扩散模型通常在像素空间进行去噪，计算成本极高。潜在扩散 Transformer 在 VAE 的潜空间中操作，大幅降低了计算量，同时 Transformer 架构提供了更强的全局建模能力和训练收敛速度。