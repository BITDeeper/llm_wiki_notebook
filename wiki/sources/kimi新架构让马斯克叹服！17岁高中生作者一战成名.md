---
type: source
title: "Kimi新架构让马斯克叹服！17岁高中生作者一战成名"
created: 2026-03-17
updated: 2026-03-17
tags: [ai-architecture, moonshot-ai, attention-residuals, deep-learning]
related: [moonshot-ai, kimi-linear-48b, chen-guangyu, attention-residuals, time-depth-duality]
authors: [量子位, 克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/grWJ9EH_4RdeLymRetAT4w"
venue: 量子位
sources: ["kimi新架构让马斯克叹服！17岁高中生作者一战成名.md"]
---

# Kimi新架构让马斯克叹服！17岁高中生作者一战成名

## 摘要
本文报道了 [[月之暗面]]（Moonshot AI）发布的一项新架构技术 [[Attention Residuals]]（注意力残差），该技术由 [[苏剑林]]、[[张宇]] 和 17 岁高中生 [[陈广宇]] 共同提出。该机制基于 [[时间-深度对偶性]] 理论，将注意力机制引入深度维度，替代传统的残差连接。在 [[Kimi Linear 48B]] 模型上的验证显示，该技术使训练效率提升了 25%（即计算量减少约 20%），而推理延迟仅增加不到 2%。该成果获得了 [[Elon Musk]] 和 [[Andrej Karpathy]] 等业界领袖的高度评价。

## 核心观点

### 技术突破：从“无差别累加”到“选择性回忆”
- **问题背景**：传统的 PreNorm 架构中，残差连接对所有层的输出进行等权累加，导致早期信息被稀释（PreNorm Dilution Problem），且隐藏状态范数会随深度无限增长，影响训练稳定性。
- **解决方案**：受 Ilya Sutskever 关于 LSTM 与 ResNet 对偶性的启发，团队提出 [[Attention Residuals]]。通过让当前层生成可学习的伪查询向量，去“查询”并加权聚合之前所有层的输出，实现了对历史层信息的“选择性回忆”。
- **工程优化**：为了解决全连接带来的 O(L²) 计算复杂度问题，团队提出了 [[Block AttnRes]]（分块注意力残差），将连续层打包成 Block 并进行压缩，将复杂度降至 O(L·B)。

### 实验验证与数据
- **模型规模**：在总参数 48B（激活参数 3B）的 [[Kimi Linear 48B]] 模型上进行验证。
- **效率提升**：达到相同性能所需的训练计算量减少了约 **20%**（效率提升 **1.25 倍**）。
- **推理成本**：推理延迟增加不到 **2%**。
- **任务表现**：在数学推理（MATH, GSM8K）、代码生成（HumanEval, MBPP）及多语言理解任务上表现持平或更优。

### 关键人物：17 岁高中生一作
- [[陈广宇]]（Nathan）：17 岁，论文共同一作。一年前才开始接触大模型，从黑客松项目起步，曾在硅谷初创公司实习，后因关注 [[Flash Linear Attention]]（FLA）项目而加入 [[月之暗面]]。
- [[苏剑林]]：论文共同一作，RoPE（旋转位置编码）提出者，Kimi 关键技术人物。
- [[张宇]]：论文共同一作，Kimi Linear 第一作者。

## 业界反响
- [[Elon Musk]]：在 X 平台上表示该论文令人印象深刻。
- [[Andrej Karpathy]]：评论称我们对 Transformer 开山之作《Attention is All You Need》的理解仍不够深入。
- [[Ilya Sutskever]]：其关于 LSTM 与 ResNet 关系的预言成为了该论文的理论基石。

## 相关概念
- [[时间-深度对偶性]]：深度神经网络的“层”和循环神经网络的“时间步”本质同构，都是对信息的迭代处理。
- [[Flash Linear Attention]]：[[月之暗面]] 正在进行的高效注意力机制研究，也是吸引 [[陈广宇]] 加入的关键项目。