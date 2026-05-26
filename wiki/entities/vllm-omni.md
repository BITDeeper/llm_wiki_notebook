---
type: entity
title: vLLM-Omni
created: 2026-05-25
updated: 2026-05-25
tags: [推理引擎, 多模态, 开源框架]
related: [verl-omni, verl]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# vLLM-Omni

vLLM-Omni 是一个多模态推理与服务引擎，为 [[verl-omni]] 提供异步高吞吐的多模态生成 serving 能力。两者协同通过 step-wise continuous batching、embedding caching 等技术持续优化 rollout 效率，精度与 diffusers 持平。

在 VeRL-Omni 架构中，vLLM-Omni 负责多模态 rollout 的高效生成，同时 vLLM 引擎也被用于 VLM/LLM 奖励模型的高效推理。后续路线图计划通过更紧密的集成（并行、量化、batching、调度优化等）进一步加速多模态 rollout。