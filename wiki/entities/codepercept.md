---
type: entity
title: CodePercept
tags: [模型, 多模态, 代码, cvpr, 2026]
related: [视觉感知瓶颈, 描述性失语, 代码驱动的视觉感知, icc-1m, stem2code-eval, grpo]
created: 2026-05-11
updated: 2026-05-11
sources: ["cvpr-2026-别卷推理了！当前大模型-stem-短板在于「视觉感知」，代码才是破局关键.md"]
---

# CodePercept

**CodePercept** 是由 [[上海交通大学]] 和 [[Qwen]] 团队提出的一种全新的多模态大模型范式，旨在解决 STEM 领域的视觉感知问题。相关论文已被 CVPR 2026 接收。

## 核心理念
CodePercept 的核心在于利用可执行的 Python 代码作为视觉感知的媒介，通过“代码驱动的描述生成”和“图像到代码转录”两个任务，消除自然语言在描述复杂几何和数值时的[[描述性失语]]，从而突破[[视觉感知瓶颈]]。

## 技术架构
基于 [[Qwen]]3-VL 架构，采用两阶段训练策略：
1.  **SFT (CodePercept-S1)**：监督微调，联合优化 Image2Caption 与 Image2Code 任务。
2.  **RL (CodePercept-R1)**：引入 [[GRPO]] 强化学习，通过格式奖励、内容执行奖励和图码相似度奖励优化代码生成。

## 性能表现
*   在解题任务中，8B 参数的 CodePercept-S1 超越了 72B 参数的 Qwen2.5-VL。
*   在 [[STEM2Code-Eval]] 基准中，CodePercept-8B-R1 展现了优异的图像重建能力。

## 关键资源
*   **数据集**：基于 [[ICC-1M]] 百万级三元组数据集训练。
*   **开源地址**：https://github.com/TongkunGuan/Qwen-CodePercept