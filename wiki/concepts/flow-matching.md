---
type: concept
title: Flow Matching
tags: [generation-technique, robotics, control, generative-model, audio, diffusion]
related: [pi-0-7, vla-视觉-语言-动作, rt-2, midasheng-audio-generate, diffusion-model]
created: 2026-04-17
updated: 2026-05-08
sources: ["π0.7发布，vla押出了机器人的gpt-3时刻.md", "小米ai语音新框架：人人都能当声音导演.md"]
---

# Flow Matching

## 定义
[[Flow Matching]] 是一种用于生成模型的数学框架，常被视为扩散模型的连续时间对应形式或其泛化。它主要用于生成连续数据，在具身智能领域用于生成机器人的连续动作 chunk，在音频领域则用于将潜在空间的噪声或随机状态转化为高质量的音频波形。

## 应用场景

### 机器人控制
在 [[vla-视觉-语言-动作]] 模型的发展中，第一代模型（如 [[RT-2]]）将机器人动作离散化为 token 并塞进 VLM 的 next-token prediction 流程中。这种方法虽然可行，但存在控制精度不高和自回归生成速度慢的问题，难以满足机器人 50Hz 的高频控制需求。

[[π0.7]] 采用 Flow Matching 技术，通过专门的“动作专家”模块直接生成连续的动作序列。这种方法不仅提高了生成速度，还显著提升了控制精度，使得 VLA 模型能够胜任需要精细操作的任务（如叠衣服、削皮）。

### 音频生成
在 [[小米大模型应用团队]] 发布的 [[Midasheng-audio-generate]] 框架中，Flow Matching 被用作主体生成框架。它接收文本指令，并驱动背后的全能编码器，结合 [[Midasheng tokenizer]]，高效地生成包含语音、音乐和音效的复杂混合音频，支持“一句话造世界”的沉浸式生成需求。

## 优势
相比于传统的扩散模型或离散化 token 预测方法，Flow Matching 通常具有以下优势：
- **更快的推理速度**：能够满足机器人 50Hz 的高频控制需求以及音频的实时生成。
- **更稳定的训练过程**：优化目标更加平滑，易于收敛。
- **更高的控制精度**：直接生成连续数据，避免了离散化带来的精度损失。