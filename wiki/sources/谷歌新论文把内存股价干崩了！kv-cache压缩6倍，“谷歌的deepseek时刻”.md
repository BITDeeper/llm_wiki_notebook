---
type: source
title: "谷歌新论文把内存股价干崩了！KV cache压缩6倍，“谷歌的DeepSeek时刻”"
tags: [ai-efficiency, quantization, google, kv-cache, market-impact]
related: [turboquant, kv-cache, polarquant, qjl, google-deepmind, scaling-law]
created: 2026-03-26
updated: 2026-03-26
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/y2R4VSxVaThM36FGUh_9yQ"
venue: "量子位"
---

# 谷歌新论文把内存股价干崩了！KV cache压缩6倍，“谷歌的DeepSeek时刻”

## 摘要
谷歌研究院提出了一种名为 [[turboquant]] 的极致压缩算法，能够在**精度零损失**的前提下，将 AI 推理过程中的 [[kv-cache]] 压缩至少 **6 倍**（降至 3-bit），且无需额外存储量化常数。该成果被视为“谷歌的 DeepSeek 时刻”，引发了市场对 AI 推理内存需求下降的预期，导致存储芯片巨头美光和西部数据股价大跌。

## 核心内容

### 技术背景
AI 大模型在推理时需要将处理过的信息临时存储在 [[kv-cache]] 中。随着上下文窗口越来越长，KV cache 的内存消耗急剧膨胀，成为 AI 推理的核心瓶颈之一。传统的向量量化方法虽然能压缩数据，但往往需要存储额外的“量化常数”，每个数字可能多占 1 到 2 个 bit，抵消了部分压缩收益。

### 技术原理
[[turboquant]] 通过两项核心技术消除了额外开销：
1.  **[[polarquant]]（极坐标量化）**：摒弃传统的 X/Y/Z 坐标描述，转而使用极坐标（距离+角度）。研究发现，转换后角度的分布非常集中且可预测，因此不需要额外存储归一化常数。
2.  **[[qjl]]（量化 JL 变换）**：将高维数据投影后压缩成 +1 或 -1 的符号位，完全不需要额外内存。它被用来消除 [[polarquant]] 压缩后残留的微小误差。

两者结合后，[[polarquant]] 捕捉主要信息，[[qjl]] 进行 1-bit 残差修正，最终实现 3-bit 量化，且无需任何训练或微调。

### 性能表现
-   **精度**：在 Gemma 和 Mistral 等模型的长上下文“大海捞针”测试中满分，其他任务几乎无损。
-   **内存**：KV cache 内存占用缩小至少 6 倍。
-   **速度**：在英伟达 H100 GPU 上，4-bit 版本计算注意力分数的速度比 32-bit 版本快 **8 倍**。

### 市场与行业影响
-   **股价波动**：市场解读为长上下文 AI 推理未来对内存的需求将大幅减少，导致美光和西部数据股价大跌。
-   **行业评价**：Cloudflare CEO 将其称为“谷歌的 DeepSeek 时刻”，意指通过算法优化大幅降低资源消耗，类似于 DeepSeek 在训练端证明的效率提升。
-   **应用前景**：除了用于 Gemini 等大模型，还能大幅提升语义搜索效率，降低万亿级向量索引的查询成本。

### 局限性
目前 [[turboquant]] 仅是实验室成果，尚未大规模部署。此外，它主要解决**推理阶段**的内存问题，对 AI 训练环节的内存压力没有直接影响。

## 相关条目
-   [[turboquant]]：谷歌提出的极致压缩算法。
-   [[kv-cache]]：AI 推理中的核心缓存机制。
-   [[polarquant]]：极坐标量化技术。
-   [[qjl]]：量化 JL 变换。
-   [[scaling-law]]：算法效率优化作为算力增长之外的另一条路径。