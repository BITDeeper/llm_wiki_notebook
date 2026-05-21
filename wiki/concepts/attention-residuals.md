---
type: concept
title: Attention Residuals
created: 2026-03-17
updated: 2026-03-17
tags: [deep-learning, architecture, attention-mechanism]
related: [time-depth-duality, block-attnres, prenorm-dilution-problem, kimi-linear-48b]
sources: ["kimi新架构让马斯克叹服！17岁高中生作者一战成名.md"]
---

# Attention Residuals

**Attention Residuals**（注意力残差）是一种由 [[月之暗面]] 团队（包括 [[陈广宇]]、[[苏剑林]] 等）提出的新型网络连接机制。它基于 [[时间-深度对偶性]] 理论，将通常用于序列处理的“注意力机制”引入到神经网络的“深度维度”，以替代或增强传统的残差连接。

## 核心原理

### 动机：解决 PreNorm 稀释问题
在主流的 PreNorm 架构中，残差连接将所有层的输出进行等权累加（$y_l = x_l + f(x_{l-1})$）。这导致两个主要问题：
1. **信息稀释**：早期层的信息被后续层逐步稀释，难以被检索。
2. **范数无界增长**：隐藏状态的范数随深度增加而无限增长，导致训练不稳定。

### 机制：选择性回忆
Attention Residuals 借鉴了 Transformer 处理序列时间维度的思路，让当前层能够“选择性”地回顾之前的层：
- **Query**：当前层的可学习伪查询向量。
- **Key/Value**：之前所有层的输出。
- **操作**：通过注意力计算加权聚合之前层的信息。

这使得网络可以学会哪些层的信息对当前计算最重要，而非像传统残差那样无差别累加。

## 工程优化：Block AttnRes

原始的 Attention Residuals 需要让每一层关注之前所有层，导致计算复杂度为 $O(L^2)$，这在深层网络中不可行。

**[[Block AttnRes]]** 是其优化版本：
1. **分块**：将连续的若干层打包成一个 Block。
2. **压缩**：对 Block 内部的输出进行压缩，生成一个“摘要向量”。
3. **降维**：后续层只需关注 Block 摘要和实时层输出，将复杂度降至 $O(L \cdot B)$（其中 B 是 Block 数量，通常设为 8-16）。

## 实验效果
在 [[Kimi Linear 48B]] 模型上的验证表明：
- **训练效率**：提升 1.25 倍（计算量减少 20%）。
- **推理开销**：延迟增加不到 2%。
- **即插即用**：无需修改网络其他部分，可直接替换残差连接。

## 理论背景
该概念受 [[Ilya Sutskever]] 关于 LSTM 与 ResNet 对偶性预言的启发：如果将 LSTM 的时间轴换成深度轴，就变成了 ResNet；而既然 Attention 在时间维度上取代了 LSTM，那么在深度维度上，Attention 理应也能取代 ResNet。