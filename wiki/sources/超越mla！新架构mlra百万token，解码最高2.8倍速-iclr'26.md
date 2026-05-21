---
type: source
title: "超越MLA！新架构MLRA百万Token，解码最高2.8倍速 | ICLR'26"
authors: [新智元, LRST]
year: 2026
url: "https://mp.weixin.qq.com/s/S9HcapV-v89wV_vnf-_r6A"
venue: "新智元"
tags: [llm, architecture, attention-mechanism, inference-optimization, deepseek]
related: [mlra, mla, kv-cache, tensor-parallelism, deepseek-v4]
created: 2026-04-29
updated: 2026-04-29
sources: ["超越mla！新架构mlra百万token，解码最高2.8倍速-iclr'26.md"]
---

# 源：超越MLA！新架构MLRA百万Token，解码最高2.8倍速

## 概述
本文报道了宾夕法尼亚州立大学等高校团队提出的新架构 [[MLRA]]（Multi-Head Low-Rank Attention）。该架构旨在解决 [[DeepSeek-V2]] 提出的 [[MLA]]（Multi-Head Latent Attention）在张量并行（TP）和扩展性上的缺陷。实验表明，MLRA 在保持模型质量（更低困惑度）的同时，通过支持 4 路 TP，实现了比 MLA 最高快 **2.8 倍**的解码速度，并将单设备 KV Cache 读取量降低了三分之二。

## 核心内容

### MLA 的局限性
- **张量并行受阻**：MLA 采用单一潜在向量架构，导致 KV Cache 无法在多个设备间切分，迫使推理框架（如 [[SGLang]]）只能使用低效的数据并行（DP）。
- **扩展受限**：矩阵吸收后，MLA 等效于超大维度的 MQA，受限于 GPU 片上资源（SRAM），难以扩展 Latent Dimension。

### MLRA 的解决方案
- **块分解视角**：将原本的大矩阵运算拆解为四个独立的小块运算。
- **求和顺序外移**：将求和操作移出注意力核心，先对每个子块独立进行投影和注意力计算，最后再聚合。这一数学变换实现了彻底的解耦。
- **工程优势**：
    - 完美适配 4 路 [[张量并行]]（TP），每张卡仅需处理 1/4 的数据。
    - 显著降低单卡 KV Cache 压力（降至 MLA 的 1/3）。
    - 消除计算等待时间，提升吞吐量。

### 实验结果
- **模型质量**：在 7 个数据集上，[[MLRA-4]] 的平均困惑度（13.672）优于 MLA（13.727）及其他基准（MHA, MQA, GQA）。
- **解码速度**：在 128K 到 2M 上下文长度下，基于 [[FlashAttention-3]] 的 MLRA-4 相比 MLA（使用 FlashMLA）稳定保持 2.8 倍加速。
- **吞吐量**：在 8 卡 [[NVIDIA H100]] 测试中，MLRA-4 (TP=4) 在长短文本下均实现了最高吞吐量。

## 意义
MLRA 证明了为了极致的工程效率，可以通过精细的数学拆解找回因极致压缩（MLA）而损失的性能和并行能力。这对于长文本推理（如 RAG、CoT）和本地部署具有重要的工程价值。

## 相关链接
- 论文: https://arxiv.org/pdf/2603.02188
- 博客: https://SongtaoLiu0823.github.io/mlra
- 代码: https://github.com/SongtaoLiu0823/MLRA