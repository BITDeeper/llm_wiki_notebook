---
type: entity
title: CM-GRPO
created: 2026-05-22
updated: 2026-05-22
tags: [强化学习, 偏好对齐, 一致性模型, 视频生成, GRPO]
related: [raven, 一致性采样, 跨数据集奖励归一化]
origin_date: 2026-05-01
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
---
# CM-GRPO

**CM-GRPO**（Consistency-model Group Relative Policy Optimization）是由帝国理工学院团队提出的强化学习算法，首次原生支持对一致性模型进行在线偏好对齐。该算法是 [[raven|RAVEN]] 框架的配套组件，与 [[跨数据集奖励归一化]] 中提到的 MedGRPO 同属 GRPO 算法家族。

## 核心创新

CM-GRPO 的关键洞察是：[[一致性采样]] 本身已经天然定义了一个条件高斯转移过程——当前 noisy latent 经过模型预测 clean endpoint，再按照下一噪声水平采样得到下一个 latent。因此，无需额外引入 SDE 或 Euler-Maruyama 离散化，直接将一致性采样步骤视为策略核（policy kernel），在这个核上计算 group-relative advantage，并用 stop-gradient regression 实现策略更新。

## 解决的问题

此前 Flow-GRPO 等方法在扩散/flow 模型上做 RL 对齐时面临 train-test mismatch：RL 优化的是一个辅助随机过程（SDE），推理时真正运行的却是确定性 ODE sampler。CM-GRPO 消除了这一不一致性，使 RL 的 policy interface 与推理时的采样器完全一致。

## 对自回归视频的特殊意义

对自回归视频生成尤为关键，因为每一步生成都会改变后续 chunk 所依赖的历史。policy kernel 必须尽量贴近真实生成链路，否则 RL 优化的过程与实际推理过程脱节。

## 实验表现

消融实验显示，CM-GRPO 相比 Euler-Maruyama policy interface 取得更好的总分、质量和动态表现。与 [[raven|RAVEN]] 结合后，在 VBench 上达到 Total Score 85.46、Quality 86.54、Semantic 81.17、Dynamic Degree 2.962。

## 设计哲学

CM-GRPO 体现了"直接在推理采样器上优化"的设计哲学：既然推理时使用的是 consistency sampler，对齐时就应该优化这个采样器本身，而非构造一个辅助过程。这与 [[raven|RAVEN]] "让训练面对推理时会依赖的历史"的思路形成互补——一个对齐历史上下文，一个对齐采样策略接口。