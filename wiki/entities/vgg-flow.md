---
type: entity
title: VGG-Flow
created: 2026-03-09
updated: 2026-03-09
tags: [algorithm, flow-matching, alignment, optimal-control]
related: [流匹配, hjb方程, 可微奖励微调, stable-diffusion-3, 港中深, 微软研究院]
sources: ["可微奖励就该直接微调！用hjb方程颠覆流匹配对齐｜neurips'25.md"]
---

# VGG-Flow

VGG-Flow 是一种基于 [[连续时间最优控制]] 理论的 [[流匹配]] 模型微调框架，由 [[港中深]] 与 [[微软研究院]] 合作开发，并被 [[NeurIPS 2025]] 接收。

## 核心机制

该方法的核心在于利用 [[HJB方程]] 证明，最优的微调方向（即对速度场的修正）等价于 [[价值梯度]]。这使得模型可以直接利用奖励函数的梯度信息进行更新，避免了传统强化学习（如 PPO）中高方差的采样过程。

### 关键技术

- **价值梯度对齐**：通过求解 HJB 方程，直接计算使未来预期收益最大化的局部梯度方向。
- **[[Forward-looking 参数化]]**：一种工程化技巧，通过一步前推预估终点，利用奖励梯度来引导价值梯度的估计，从而降低计算成本并加速收敛。

## 应用与效果

VGG-Flow 已在 [[Stable Diffusion 3]] 上得到验证。实验显示，相比 [[ReFL]] 和 [[Flow-GRPO]] 等方法，VGG-Flow 在 Aesthetic Score 和 PickScore 等指标上具有更快的收敛速度和更好的多样性保持能力。

## 项目链接

- 论文：[arXiv:2512.05116](https://arxiv.org/abs/2512.05116)
- 项目主页：[vggflow25.github.io](https://vggflow25.github.io)
- 代码：[github.com/lzzcd001/vggflow](https://github.com/lzzcd001/vggflow)