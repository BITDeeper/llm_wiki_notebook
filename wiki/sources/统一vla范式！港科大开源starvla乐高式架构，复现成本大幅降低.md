---
type: source
title: "统一VLA范式！港科大开源StarVLA乐高式架构，复现成本大幅降低"
tags: [vla, embodied-ai, open-source, robotics, hkust]
related: [starvla, vla-视觉-语言-动作, 双向模块化, 策略中心公式, 跨形态混合训练]
created: 2026-04-13
updated: 2026-04-13
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/2f8_Fs3cxZ4XtkApxR1gVA"
venue: "新智元"
sources: ["统一vla范式！港科大开源starvla乐高式架构，复现成本大幅降低.md"]
---

# 统一VLA范式！港科大开源StarVLA乐高式架构，复现成本大幅降低

## 概述
本文报道了香港科技大学（HKUST）开源的 [[starvla]] 项目。该项目针对当前具身智能 [[vla-视觉-语言-动作]] 领域面临的“碎片化”困境（架构割裂、管线强耦合、评测标准不一），提出了一套基于 [[策略中心公式]] 的“乐高式”统一架构。

## 核心洞察
StarVLA 的核心理论贡献在于消解了 VLM-based（基于语言模型）与 World-Model-based（基于世界模型）两种范式的对立。通过统一的数学公式 $L = L_{action} + L_{aux}$，证明了这两种范式本质上是同一策略框架下不同辅助学习信号（$L_{aux}$）的变体。

## 关键技术特性
- **双向模块化**：实现了 Backbone（主干网络）和 Action Head（动作头）的完全可插拔。支持 [[qwen3-vl]]、[[InternVL]]、[[Cosmos-Predict2]] 等多种主干网络，以及 FAST、OFT、π、GR00T 等四种主流动作解码范式。
- **多目标协同训练**：通过双数据流机制，在训练动作的同时保留 VLM 的语言建模能力，防止灾难性遗忘，显著提升空间 grounding 能力。
- **跨形态混合训练**：利用 [[LeRobotMixtureDataLoader]]，在单一模型中联合训练不同形态（如不同机器人）的数据集，实现通用具身智能。
- **Server-Client评测抽象**：采用 WebSocket 架构将模型服务与评测环境解耦，实现了从仿真到真机（Sim2Real）的零代码修改部署。

## 性能表现
- 在无需复杂数据工程（如 DAgger）的情况下，仅靠公开权重微调即达到 SOTA 水平。
- 更换 Backbone（从 Qwen3-VL 到 Cosmos-Predict2）几乎不损失性能，验证了架构的泛化鲁棒性。
- 跨基准联合训练（Generalist）显著优于单一基准训练，例如 RoboCasa 平均成功率从 48.8% 提升至 57.3%。

## 行业意义
StarVLA 为具身智能社区提供了一套可复现、可对比、可组合的基础设施标准，终结了 VLA 研究的“巴别塔”时代，降低了复现成本，推动了标准化评测的发展。