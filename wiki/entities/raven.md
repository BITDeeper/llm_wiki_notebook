---
type: entity
title: RAVEN
created: 2026-05-22
updated: 2026-05-22
tags: [视频生成, 自回归模型, 扩散模型, 帝国理工学院]
related: [cm-grpo, history-supervision-gap, training-time-test, 自回归视频扩散模型, 因果蒸馏]
origin_date: 2026-05-01
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
---
# RAVEN

**RAVEN**（Real-time Autoregressive Video Extrapolation Network）是由帝国理工学院的 Yanzuo Lu、Ronglai Zuo 和 Jiankang Deng 提出的实时自回归视频外推网络。该框架通过 [[training-time-test]] 解决了 [[自回归视频扩散模型]] 中的 [[history-supervision-gap]]，在质量、语义和动态表现三个维度同时取得提升。

## 核心问题

自回归视频扩散模型在训练时看到的历史上下文（真实数据或加噪数据）与推理时依赖的历史（模型自生成结果）存在分布差异。早期 chunk 的轻微偏差会沿历史缓存不断累积，导致误差传播。更关键的是，即使使用 Self Forcing 方法让模型在训练时看自己的 rollout，历史 cache 通常仍被当作 detached context 使用，后续 chunk 的损失不会反向监督前面历史表示本身。RAVEN 将此问题概括为 [[history-supervision-gap]]。

## 方法论

RAVEN 的核心思想是 [[training-time-test]]：将推理时模型必须依赖的自生成历史搬进训练过程。

具体流程：
1. 让 causal student 进行一次自回归 self rollout
2. 为每个 chunk 产生 clean endpoint（干净 latent）和 noisy denoising states
3. 将这些状态重新组织为交错序列：noisy state 1, clean endpoint 1, noisy state 2, clean endpoint 2, ...
4. 在同一张注意力图中处理这些状态，使后续 chunk 的损失能够监督前面历史表示的形成

辅助技术包括 [[chunk-wise-loss-scaling]]，根据 chunk 在序列中的位置分配不同训练权重，越靠后的 chunk 因条件在更长历史上而赋予更高权重。

## 实验结果

基于 Wan2.1-T2V-1.3B 基础模型，RAVEN + [[cm-grpo|CM-GRPO]] 在 VBench 上取得：

| 指标 | 分数 |
|------|------|
| Total Score | 85.46 |
| Quality Score | 86.54 |
| Semantic Score | 81.17 |
| Dynamic Degree | 2.962 |

RAVEN 挑战了视频生成中"质量、语义和动态程度互相牺牲"的传统 trade-off 认知，在整体上缓解了这一矛盾。

## 用户研究

覆盖100个长提示词的成对比较显示，RAVEN 在所有基线（CausVid、Self Forcing、Reward Forcing、Causal Forcing）和所有维度（Quality、Semantic、Overall）上均获更高偏好，语义维度领先尤为明显。

## 技术定位

RAVEN 建立在 [[因果蒸馏]] 技术路线之上。因果蒸馏解决了速度问题（将双向 teacher 蒸馏为只看过去的 causal student），但暴露了历史分布问题。RAVEN 进一步解决了这一分布问题，配合 [[cm-grpo|CM-GRPO]] 解决采样过程对齐问题，三者构成递进的技术演进链。

## 开源资源

- 论文：arXiv 2605.15190
- 代码：https://github.com/mvp-ai-lab/RAVEN
- 模型权重：https://huggingface.co/mvp-lab/RAVEN