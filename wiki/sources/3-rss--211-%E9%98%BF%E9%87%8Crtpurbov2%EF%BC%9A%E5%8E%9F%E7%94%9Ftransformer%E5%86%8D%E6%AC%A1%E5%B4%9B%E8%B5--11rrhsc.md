---
type: source
title: "阿里RTPurboV2：原生Transformer再次崛起，百步训练实现10倍稀疏注意"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/cx1Mgkp4RJc-kiUuhPNGIg"
venue: 机器之心
tags: [稀疏注意力, transformer优化, 阿里, rtpurbo, 注意力压缩]
related: [rtpturbo-v2, rtp-llm, dsa-稀疏注意力, 内生稀疏性]
created: 2026-06-08
updated: 2026-06-08
sources: ["rss/阿里rtpurbov2：原生transformer再次崛起，百步训练实现10倍稀疏注意.md"]
---
# 阿里RTPurboV2：原生Transformer再次崛起，百步训练实现10倍稀疏注意

## 摘要

本文报道了阿里巴巴智能引擎团队（RTP团队）发布的第二代 Attention 压缩技术 [[rtpturbo-v2|RTPurboV2]]。该技术的核心论点是：Full Attention 模型自身蕴含巨大的[[内生稀疏性]]效率空间，无需替换架构即可通过极低成本（约600步训练、1M label tokens）释放，实现16~32倍计算压缩。

## 核心发现

1. **85% 注意力头天然适配 SWA**：在 Qwen3 系列中，约15%为"召回头"（长距离稀疏匹配），85%为"流式头"（局部上下文关注），分工高度稳定。
2. **长程检索由低维子空间主导**：召回头的 RoPE 高频分量处于被压制状态，仅利用低频分量，16维[[低秩投影压缩]]即可保留90%+召回率。
3. **序列维度冗余可通过[[自适应聚类]]消除**：低秩投影过滤噪声后语义相似token天然聚拢，两阶段漏斗式计算将复杂度从 O(N²) 降至 O(N·K)。
4. **[[动态top-p策略]]显著优于固定 top-k**：不同 head/序列长度下覆盖90%注意力质量所需token数差异达三个数量级。

## 技术方案

- 流式头（85%）→ SWA（窗口8192）
- 召回头（15%）→ 低秩投影 + 聚类索引 + 动态 top-p
- 两阶段微调训练：阶段1投影对齐（冻结模型主体），阶段2端到端自蒸馏

## 实验结果

- **Ruler 基准**：32K/64K序列长度下均取得最优平均分（89.69/85.61）
- **LongBenchV2**：大幅降低计算开销的同时精度与 Full Attention 持平
- **CoT 推理**：近乎无损保留推理能力
- **Prefill 最高 9.36 倍加速**

## 行业定位

RTPurboV2 代表了与 Linear Attention（Qwen-Next、Kimi-K2）和 Sparse Attention（[[DeepSeek V4|DeepSeek-V4]]）不同的第三条路线——不替换架构，而是释放 Full Attention 的内生稀疏性。对已采用 SWA+Full Attention 混合架构的团队（MIMO、Gemma4、GPT-OSS）具有直接适用性。

## 关联资源

- 论文："Full Attention Strikes Back"（HuggingFace 编号 2605.16928）
- 开源项目：[[rtp-llm|RTP-LLM]]（https://github.com/alibaba/rtp-llm）
- 前代工作：[[rtpturbo-v1|RTPurbo V1]]