---
type: entity
title: VeRL-Omni
created: 2026-05-25
updated: 2026-05-25
tags: [开源框架, 强化学习, 多模态生成, 扩散模型]
related: [verl, vllm-omni, flowgrpo, 多模态生成rl后训练, vlm-as-judge]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
origin_date: 2026-05-25
---
# VeRL-Omni

VeRL-Omni 是一个面向多模态生成模型的通用强化学习（RL）后训练框架，由 VeRL-Omni 团队在 [[verl]] 与 [[vllm-omni]] 之上构建。

## 定位与动机

过去一年 LLM 的 RL 训练栈快速演进，但 [[多模态生成rl后训练|多模态生成 RL]] 仍存在关键缺口：扩散与全模态模型缺乏成熟的 RL 训练支持、异构 rollout 流水线的技术挑战、以及复杂负载调度的编排难题。VeRL-Omni 旨在系统性填补这些缺口。

## 核心架构

- **高效多模态 Rollout**：集成 [[vllm-omni]] 的异步高吞吐多模态生成 serving，精度与 diffusers 持平，通过 step-wise continuous batching、embedding caching 持续优化效率
- **灵活奖励引擎**：同时支持基于规则的奖励与基于模型的奖励（如 [[vlm-as-judge]]），奖励计算与 rollout、训练流程 overlap 以降低端到端延迟
- **模块化训练后端**：提供 DiffusersFSDP / Megatron / VeOmni 等多种 trainer，内置扩散和全模态模型优化，支持 FSDP / USP / TP 等并行策略
- **广泛硬件兼容**：同时支持 NVIDIA GPU 和昇腾 NPU

## 支持的模型架构

| 架构类型 | 代表模型 |
|---------|---------|
| 扩散 Transformer | Qwen-Image |
| 混合 AR-DiT | Qwen-Omni |
| 统一理解+生成 | BAGEL、HunyuanImage-3.0 |

## 关键性能数据

- **LoRA 微调**：将奖励模型放到独立 GPU 与策略训练 overlap，每步 wall-clock 时间降低约14%
- **全模型微调**：non-CFG 全模型 Qwen-Image OCR 训练，在 4×NVIDIA H200 上达 0.510 images/GPU/s，每步约250秒
- **训练效果**：仅120步训练后，生成图像的文字渲染质量显著提升，critic reward 与 validation reward 收敛稳定

## 路线图

框架仍处于活跃迭代的预发布阶段，扩散 RL 核心栈已稳定。后续计划包括：

1. **模型支持扩展**：跟进开源扩散和全模态模型，覆盖图像/视频/音频生成及统一理解+生成任务
2. **算法支持扩展**：持续集成先进 RL 算法（如 DiffusionNFT）
3. **全异步 RL**：在 actor、rollout、reward 之间实现端到端异步流水线
4. **与 vLLM-Omni 协同优化**：通过并行、量化、batching、调度优化加速多模态 rollout
5. **高效全模态 trainer**：基于 Megatron-core 与 VeOmni 的优化 trainer 引擎
6. **更广硬件支持**：继续打磨昇腾 NPU 路径，通过 hardware plugin 系统支持更多后端

## 资源

- 代码：github.com/verl-project/verl-omni
- 文档：verl-omni.readthedocs.io
- vLLM 官方博客：vllm.ai/blog/verl-omni