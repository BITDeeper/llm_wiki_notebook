---
type: entity
title: LoongForge
created: 2026-05-21
updated: 2026-05-21
tags: [训练框架, 开源, 多模态, 百度, AI基础设施]
related: [百度百舸, 昆仑芯, 全模态训练框架, cct-通算传并行, 自适应-fp8, 模型异构并行]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
origin_date: 2026-05-21
---
# LoongForge

LoongForge 是 [[百度百舸]] 开源的全模态训练框架，属于百度百舸 Loong 开源系列。该框架以 Megatron 为核心引擎，针对多模态训练场景进行了原生重构，旨在解决多模态时代训练基础设施与模型形态之间的结构性错位问题。

## 核心定位

LoongForge 提供统一、高效、易用的训练加速解决方案：

- **统一**：一套框架覆盖 LLM、VLM、VLA、Diffusion 等场景，内置 20+ 模型族标准组件，兼容 NVIDIA GPU 与 [[昆仑芯]] XPU
- **高效**：主流模型 15%~45% 端到端训练加速，DeepSeek V3.2 上约 5 倍提升
- **易用**：YAML 配置驱动，适配周期从数周压缩至天级

## 架构设计

LoongForge 由三层构成：

1. **模型层**：统一抽象，将多模态模型拆解为感知编码层（Encoder）、生成主干层（Foundation）、组合调度层（OmniCombinationModel）
2. **系统层**：端到端优化，包含 [[cct-通算传并行|CCT 通算传并行]]、[[chunkpipe-流水线并行|ChunkPipe]]、[[dp-负载均衡|DP 负载均衡]]、[[模型异构并行]]、[[自适应-fp8|自适应 FP8]]、[[dsa-算子融合|DSA 算子融合]] 等核心技术
3. **硬件层**：通过插件化 XPU_Plugin 封装底层接口差异，实现一套代码多平台运行

## 支持的模型

原生兼容 DeepSeek、Qwen、InternVL、LLaVA-OV、ERNIE、MiniMax、MIMO、Pi0.5、WAN 等主流模型。

## 生产验证

- [[llava-onevision|LLaVA-OneVision]] 1.5/2.0 全帧率多模态视觉语言模型
- [[千帆-vl|千帆 VL 系列]]（3B/8B/70B）在昆仑芯 5000+ 卡集群上完成训练

## 开源信息

- **协议**：Apache 2.0
- **GitHub**：https://github.com/baidu-baige/LoongForge