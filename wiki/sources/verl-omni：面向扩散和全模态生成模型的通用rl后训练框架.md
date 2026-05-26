---
type: source
title: "VeRL-Omni：面向扩散和全模态生成模型的通用RL后训练框架"
created: 2026-05-25
updated: 2026-05-25
tags: [强化学习, 多模态生成, 扩散模型, RL后训练, 开源框架]
related: [verl-omni, flowgrpo, 多模态生成rl后训练, 机器之心]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/dyiz9nerbvdmk1mLQu8sDw"
venue: 机器之心
---
# VeRL-Omni：面向扩散和全模态生成模型的通用RL后训练框架

本文由 [[机器之心]] 于2026年5月25日发布，介绍了 [[verl-omni]] —— 一个面向多模态生成模型的通用强化学习后训练框架。

## 核心内容

框架由 VeRL-Omni 团队在 [[verl]] 与 [[vllm-omni]] 之上构建，旨在填补 LLM RL 训练栈与多模态生成模型之间的关键缺口：

1. **扩散与全模态扩展**：将 RL 训练能力延伸到非自回归的多模态生成世界
2. **异构 Rollout 流水线**：在连续 latent 空间中进行去噪轨迹 rollout，而非 token 序列
3. **复杂负载调度**：编排多模态奖励函数（VLM judge、OCR scorer 等）与高显存占用的生成 rollout

## 关键演示

- **Qwen-Image OCR FlowGRPO Demo**：使用 [[flowgrpo]] 算法训练 Qwen-Image，仅120步后文字渲染质量显著提升
- **性能数据**：LoRA 微调下奖励模型与策略训练 overlap，每步 wall-clock 时间降低约14%；全模型微调在4×H200上达0.510 images/GPU/s

## 支持的架构

覆盖扩散 Transformer（Qwen-Image）、混合 AR-DiT（Qwen-Omni）、统一理解+生成（BAGEL、HunyuanImage-3.0）等架构。

## 关键特性

- 高效多模态 rollout（集成 vLLM-Omni 异步高吞吐 serving）
- 灵活奖励引擎（规则奖励 + 模型奖励，支持 [[vlm-as-judge]]）
- 模块化训练后端（DiffusersFSDP / Megatron / VeOmni）
- 广泛硬件兼容（NVIDIA GPU + 昇腾 NPU）