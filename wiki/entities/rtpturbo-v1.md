---
type: entity
title: RTPurbo V1
created: 2026-06-08
updated: 2026-06-08
tags: [稀疏注意力, transformer优化, 阿里, 注意力压缩]
related: [rtpturbo-v2, rtp-llm, dsa-稀疏注意力, 滑动窗口注意力]
sources: ["rss/阿里rtpurbov2：原生transformer再次崛起，百步训练实现10倍稀疏注意.md"]
---
# RTPurbo V1

阿里巴巴智能引擎团队（RTP团队）推出的第一代 Attention 压缩技术，是 [[rtpturbo-v2|RTPurboV2]] 的前代工作。

## 核心贡献

发现 Full Attention 模型中约85%的注意力头可以安全替换为[[滑动窗口注意力]]（SWA），提出 **15% Full Attention + 85% SWA** 的混合架构，实现5倍 KV 和 Attention 压缩，精度几乎无损。

## 关键发现

- Full Attention 模型中存在[[召回头与流式头]]的功能分工
- 约15%为"召回头"（长距离稀疏匹配），85%为"流式头"（局部上下文关注）
- 这种分工模式在不同输入、不同序列长度下高度稳定

## 行业影响

SWA+Full Attention 混合架构的设计思路被多个开源系统采纳，包括 MIMO、Gemma4、GPT-OSS 等，体现了"大道至简"的设计哲学。

## 局限

替换了85%的 Full Attention 后，剩余15%的 Full Attention 在超长序列（1M token）下仍会成为性能瓶颈，这直接催生了 [[rtpturbo-v2|RTPurboV2]] 的研发。