---
type: entity
title: TensorRT-LLM
tags: [software, library, inference, optimization]
related: [英伟达, gb200-nvl72, moe, 程序化依赖启动]
created: 2026-04-27
updated: 2026-04-27
sources: ["不换gpu，性能飙升2.8倍！英伟达用软件暴打摩尔定律.md"]
---
# TensorRT-LLM

TensorRT-LLM 是 [[英伟达]] 开发的开源推理加速库，是英伟达软件生态的核心组件。

## 核心功能
它为大语言模型的推理提供了高级 API 和底层优化，旨在最大化 [[英伟达]] GPU 的吞吐量并降低延迟。

## 关键优化技术
为了应对 [[MoE]]（混合专家模型）的推理挑战，TensorRT-LLM 引入了多项创新：
1.  **[[程序化依赖启动]] (PDL)**：通过减少内核启动延迟，显著降低 GPU 在低交互性场景下的“空转”损耗。
2.  **底层内核优化**：针对 Blackwell Tensor Core 的微架构特性重构计算流水线。
3.  **通信原语革新**：优化全对全通信，消除接收端中间缓冲区，减少数据传输的“绕路成本”。

## 性能表现
在 2026 年初的更新中，TensorRT-LLM 帮助 [[GB200 NVL72]] 在运行 [[DeepSeek-R1]] 时，实现了单 GPU 吞吐量 2.8 倍的提升。