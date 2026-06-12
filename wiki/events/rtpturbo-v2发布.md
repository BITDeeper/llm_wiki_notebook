---
type: event
title: RTPurboV2发布
created: 2026-06-08
updated: 2026-06-08
tags: [稀疏注意力, transformer优化, 阿里, 发布]
related: [rtpturbo-v2, rtp-llm, 内生稀疏性, dsa-稀疏注意力]
participants: [阿里rtp团队, 机器之心]
causes: []
effects: []
significance: medium
origin_date: 2026-06-08
sources: ["rss/阿里rtpurbov2：原生transformer再次崛起，百步训练实现10倍稀疏注意.md"]
---
# RTPurboV2发布

2026年6月8日，阿里巴巴智能引擎团队（RTP团队）通过[[机器之心]]发布第二代 Attention 压缩技术 [[rtpturbo-v2|RTPurboV2]]，论文标题为"Full Attention Strikes Back"（HuggingFace 编号 2605.16928，2026年5月提交）。

## 背景

随着 Agent 广泛应用带来的长序列需求，Attention 机制迭代加速。业界主流方案分为 Linear Attention（Qwen-Next、Kimi-K2）和 Sparse Attention（[[DeepSeek V4]]）两条路线。RTPurboV2 代表了第三条路线——不替换架构，释放 Full Attention 的[[内生稀疏性]]。

## 核心成果

- 在 [[rtpturbo-v1|RTPurbo V1]] 的 15% Full Attention + 85% SWA 混合架构基础上，进一步对 Full Attention 部分实现16~32倍计算压缩
- 仅需约600步训练、1M label tokens 即可完成适配
- Ruler 基准 32K/64K 序列长度下均取得最优平均分
- Prefill 最高 9.36 倍加速

## 行业意义

对已采用 SWA+Full Attention 混合架构的团队（MIMO、Gemma4、GPT-OSS）具有直接适用性，无需替换架构即可获得接近 SOTA 新方案的压缩效率。论文标题"Full Attention Strikes Back"明确表达了"原生 Transformer 从未过时"的反共识立场。