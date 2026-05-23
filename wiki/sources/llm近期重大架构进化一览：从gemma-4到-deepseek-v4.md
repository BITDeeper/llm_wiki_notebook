---
type: source
title: "LLM近期重大架构进化一览：从Gemma 4到DeepSeek V4"
created: 2026-05-19
updated: 2026-05-19
tags: [llm架构, 长上下文, 注意力机制, kv-cache, 技术综述]
related: [gemma-4, deepseek-v4, laguna-xs-2, zaya1-8b, sebastian-raschka]
sources: ["llm近期重大架构进化一览：从gemma-4到deepseek-v4.md"]
authors: [机器之心编辑部, Sebastian-Raschka]
year: 2026
url: "https://mp.weixin.qq.com/s/wRtvQK0P0o4cvVTlRq0LXA"
venue: 机器之心
---
# LLM近期重大架构进化一览：从Gemma 4到DeepSeek V4

本文由机器之心编辑部翻译并整理自 Sebastian Raschka 的技术博客，系统梳理了2026年新一代LLM在Transformer架构层面的重大演化。

## 核心内容

文章围绕四个近期发布的模型展开架构分析：

1. **[[gemma-4]]**（Google）— 跨层KV共享 + PLE（逐层嵌入），KV Cache减少约50%
2. **[[laguna-xs-2]]**（Poolside）— 逐层注意力预算分配，将Attention Capacity花在最值得的地方
3. **[[zaya1-8b]]**（Zyphra）— [[压缩卷积注意力-cca|压缩卷积注意力（CCA）]]，直接在压缩latent space中执行Attention计算
4. **[[deepseek-v4]]**（DeepSeek）— [[流形约束超连接-mhc|mHC]] + [[压缩稀疏注意力-csa-hca|CSA/HCA]]，1M Context下推理FLOPs降至V3.2的27%/10%

## 核心论点

2026年新一代LLM的架构演化呈现明确方向性：所有改动都围绕降低长上下文推理的计算和存储成本展开，而非简单缩小模型参数量。Transformer Block仍在持续演化，但复杂度已大幅增加。

## 技术主题

- [[跨层kv共享]]：不同Transformer层复用同一组KV Projection
- [[逐层嵌入-ple]]：通过额外embedding table提升小模型表达能力
- [[逐层注意力预算分配]]：不同层拥有不同数量的Query Head
- [[压缩卷积注意力-cca]]：同时压缩Q、K、V并在latent space中完成Attention
- [[流形约束超连接-mhc]]：多条并行Residual Stream + 双随机矩阵约束
- [[压缩稀疏注意力-csa-hca]]：对Sequence Dimension本身进行压缩

## 局限性

作者指出缺乏完整的消融实验，特别是DeepSeek V4的强结果来自整体训练体系而非单一架构改动。