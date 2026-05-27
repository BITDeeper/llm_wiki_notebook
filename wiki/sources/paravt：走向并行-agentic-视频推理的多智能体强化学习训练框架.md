---
type: source
title: "ParaVT：走向并行 Agentic 视频推理的多智能体强化学习训练框架"
created: 2026-05-26
updated: 2026-05-26
tags: [视频理解, 强化学习, 多智能体, 工具调用, 开源模型]
related: [paravt, para-grpo, tool-prior-paradox, evolvinglmms-lab, paravt-8b]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
authors: [EvolvingLMMs-Lab]
year: 2026
url: "https://mp.weixin.qq.com/s/oRBjfnFJuVBs3jeihsjLlg"
venue: "我爱计算机视觉"
---
# ParaVT：走向并行 Agentic 视频推理的多智能体强化学习训练框架

## 概述

本文介绍了 [[paravt]]，首个面向并行视频工具调用的多智能体端到端强化学习训练框架。该框架将长视频推理从传统的串行逐轮回看推进到同轮并行的多窗印证范式。

## 核心贡献

1. **并行视频工具调用范式**：将 N 次串行工具调用压缩到 1 个 turn 内并行 dispatch，解决串行回看的三大痛点——无同行纠偏、上下文污染、成本线性增长。
2. **[[tool-prior-paradox]] 的发现**：揭示工具先验越强、RL 越能探索工具但也越容易摧毁 SFT 结构格式的深层耦合问题。
3. **[[para-grpo]] 算法**：通过 Exploration Anchoring 和 nFrames Gating 两个轻量组件拆解耦合，将 format compliance 从 0.13 提升至 0.64 峰值。

## 实验结果

[[paravt-8b]] 在 7 项长视频理解基准中取得 6 项开源 7-8B 规模 SOTA，平均比 Qwen3-VL-8B base 提升 +7.9%。

## 关键链接

- 论文：https://arxiv.org/abs/2605.20342
- 代码：https://github.com/EvolvingLMMs-Lab/ParaVT
- 模型：https://huggingface.co/ParaVT/ParaVT-8B
- 数据：https://huggingface.co/datasets/ParaVT/ParaVT-Parquet
- 主页：https://evolvinglmms-lab.github.io/ParaVT

## 来源信息

- 发布渠道：[[我爱计算机视觉]]
- 发布日期：2026-05-26