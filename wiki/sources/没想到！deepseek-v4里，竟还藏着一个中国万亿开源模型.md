---
type: source
title: "没想到！DeepSeek V4里，竟还藏着一个中国万亿开源模型"
tags: [deepseek, kimi, 开源模型, 技术互鉴, 万亿参数]
related: [deepseek-v4, kimi-k2-6, moonshot-ai, muon-优化器, mla, 技术互鉴]
created: 2026-04-24
updated: 2026-04-24
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/CZWNnF-bS1ELq9GPIHDu3A"
venue: "新智元"
sources: ["没想到！deepseek-v4里，竟还藏着一个中国万亿开源模型.md"]
---

# 没想到！DeepSeek V4里，竟还藏着一个中国万亿开源模型

## 概述
本文报道了 [[DeepSeek V4]] 与 [[Kimi K2.6]] 两个万亿参数开源模型在同一周发布的现象，并深入分析了两家公司在底层技术上的深度交融与互鉴。文章指出，中国开源模型已成为全球 AI 生态的重要基准，并在工程优化（如 KV 缓存压缩）和硬件适配（如华为 NPU）方面取得了突破性进展。

## 核心要点

### 双雄并立的格局
- **同步发布**：[[DeepSeek V4]] 与 [[Kimi K2.6]] 均为万亿参数级别的 MoE 模型，且在同一周内开源。
- **历史重演**：回顾过去 15 个月，两家公司在推理模型（DeepSeek-R1 vs Kimi K1.5）、注意力机制改造（NSA vs MoBA）、数学推理（Prover 系列）及网络连接优化（mHC vs 注意力残差）等多个关键技术节点上多次“撞车”或前后脚发布。

### 底层技术的深度互鉴
- **DeepSeek 影响力**：[[Kimi K2.6]] 采用了 DeepSeek 首创的 [[MLA (Multi-head Latent Attention)]] 机制，通过低秩压缩大幅缩减 KV 缓存。
- **Kimi 影响力**：[[DeepSeek V4]] 采用了 [[Moonshot AI]] 团队验证的 [[Muon 优化器]]。该优化器通过 Newton-Schulz 正交化处理梯度矩阵，在相同算力下效率约为 AdamW 的两倍，且训练稳定性更高。
- **KV 缓存压缩**：双方都在致力于解决长上下文的成本问题。DeepSeek V4 通过 CSA（压缩稀疏注意力）和 HCA（重压缩注意力）将 KV 缓存降至前代的 1/10；Kimi 则通过 Mooncake 体系进行分离式存储调度。

### 行业地位与生态影响
- **国际认可**：NVIDIA GTC 和 Meta 官方博客分别将 DeepSeek 和 Kimi 列为性能基准。
- **产品底座**：Cursor Composer 2 被曝光基于 Kimi K2.5，日本乐天 Rakuten AI 3.0 被曝光基于 DeepSeek V3。
- **调用量**：在 OpenRouter 排行榜上，Kimi K2.6 和 DeepSeek V3.2 分列第一和第四。

### 国产芯片适配
- [[DeepSeek V4]] 的细粒度专家并行方案同时在 NVIDIA GPU 和华为 Ascend NPU 上完成了验证。
- [[Moonshot AI]] 提出的“Prefill-as-a-Service”架构推进了国产芯片的混合推理方案。

## 结论
文章认为，DeepSeek 和 Kimi 之间形成了一种“竞争是表面，加速是结果”的独特关系。通过互相引用论文、复用代码，两家公司打破了闭源模型之间的猜忌，利用开源的复利效应共同推动了技术边界的拓展。