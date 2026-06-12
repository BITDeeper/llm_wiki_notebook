---
type: entity
title: RTPurboV2
created: 2026-06-08
updated: 2026-06-08
tags: [稀疏注意力, transformer优化, 阿里, 注意力压缩, 推理加速]
related: [rtpturbo-v1, rtp-llm, dsa-稀疏注意力, 内生稀疏性, 低秩投影压缩, 自适应聚类, 动态top-p策略]
sources: ["rss/阿里rtpurbov2：原生transformer再次崛起，百步训练实现10倍稀疏注意.md"]
origin_date: 2026-05-01
---
# RTPurboV2

阿里巴巴智能引擎团队（RTP团队）推出的第二代 Attention 压缩技术，论文标题为"Full Attention Strikes Back"。核心目标是在保持精度的前提下，对 Full Attention 部分实现16~32倍计算压缩。

## 核心理念

**"释放而非强加稀疏性"**——Full Attention 模型在预训练中已自发形成高度稀疏的注意力结构，RTPurboV2 的工作是将这种隐式稀疏性转化为显式的高效计算。

## 技术架构

基于 [[rtpturbo-v1|RTPurbo V1]] 的 15% Full Attention + 85% SWA 混合架构，RTPurboV2 进一步压缩剩余15% Full Attention 部分：

- **流式头（85%）** → 滑动窗口注意力（SWA，窗口8192）
- **召回头（15%）** → [[低秩投影压缩]] + [[自适应聚类]] + [[动态top-p策略]]

### 低秩投影压缩

将 Key 向量从 D 维压缩至 r=16 维，保留 RoPE 低频语义分量、过滤高频位置噪声。仅16维即可达到90%+的token召回率。

### 自适应聚类

在序列维度将 N 个 token 聚类为 K 个语义簇，构建两级漏斗式计算流程：
1. 粗粒度匹配：Query 与 K 个簇中心做轻量级匹配，复杂度 O(N·K)
2. 细粒度计算：仅在命中的相关簇内执行完整 Attention 计算

低秩投影与自适应聚类形成**乘法协同效应**：特征压缩提纯后的向量让聚类中心更精准，压缩比越激进协同增益越显著。

### 动态 top-p 策略

对每个 query 保留累积注意力得分达到 p 的 token 集合，替代固定 top-k。配合无排序解码核（256-bin 直方图替代排序操作），内存开销压缩至 O(1)。

## 训练方案

两阶段微调训练，仅需约600步、1M label tokens：

1. **阶段1——投影对齐**：冻结模型主体，仅训练各召回头的低秩投影矩阵，最小化投影注意力分布与原始分布之间的 KL 散度
2. **阶段2——端到端自蒸馏**：启用稀疏模式，稀疏模型学习原始稠密模型的 next-token 预测分布

在数十万亿 token 预训练语境下，1M token 几乎可忽略。

## 实验结果

| 基准 | 结果 |
|------|------|
| Ruler 32K | 最优平均分 89.69 |
| Ruler 64K | 最优平均分 85.61 |
| LongBenchV2 | 精度与 Full Attention 持平 |
| CoT 推理 | 近乎无损保留推理能力 |
| Prefill 加速 | 最高 9.36 倍 |

## 行业定位

与 Linear Attention（Qwen-Next、Kimi-K2）和 Sparse Attention（[[DeepSeek V4]]）形成三条并行路线。RTPurboV2 的独特价值在于：对已采用 SWA+Full Attention 混合架构的团队（MIMO、Gemma4、GPT-OSS），无需替换架构即可获得接近 SOTA 新方案的压缩效率。

## 注意事项

- "85/15"分工比例并非普适规律：Qwen3-Coder-30B-A3B 约15%召回头，而 Qwen3.5-35B-A3B 超过70%具有召回特性，不同模型/任务需要不同的稀疏化策略
- 缺乏与 Linear Attention 路线的直接对比数据
- 超长序列（1M token）下的具体性能数据尚未公布