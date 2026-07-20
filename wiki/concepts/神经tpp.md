---
type: concept
title: 神经时序点过程
created: 2026-06-16
updated: 2026-06-16
tags: [深度学习, Transformer, ODE, 时序点过程]
related: [时序点过程, 条件强度函数, intensity-free建模, llm-based-tpp]
sources: ["rss/从贝叶斯到大语言模型：一文详解「时序点过程」近年进展.md"]
---
# 神经时序点过程

**神经时序点过程**（Neural TPP）是利用深度学习模型提升[[时序点过程]]（TPP）表达能力的范式。它用神经网络替代了手工设计的强度函数或条件分布。

## 主流架构分类

1. **递归神经 TPP（Recurrent Neural TPP）**：使用 RNN/LSTM 逐个读取事件并压缩历史状态。在线预测效率高，但难以并行。RWKV、Mamba 等新型序列模型正在改善其可扩展性。
2. **自回归神经 TPP（Autoregressive Neural TPP）**：以 Transformer 为代表，通过 Self-Attention 捕捉长距离依赖并支持并行训练，但面临序列长度的二次复杂度问题。
3. **微分方程 TPP（ODE/SDE-based TPP）**：让隐藏状态在无事件时连续演化，更自然地刻画连续时间动态，但训练和采样较慢。
4. **扩散模型 TPP（Diffusion-based TPP）**：通过迭代去噪生成整段事件序列，为长时域预测提供新视角。

## 核心挑战

随着模型表达能力的提升，Neural TPP 面临着可解释性丧失（动态被编码进高维隐状态）和计算可扩展性（连续时间积分与二次复杂度）的根本性矛盾。