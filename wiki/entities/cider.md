---
type: entity
title: Cider
tags: [framework, apple-silicon, mlx, 量化, 推理加速]
related: [apple-mlx, apple-silicon, w8a8, w4a8, mano-p]
created: 2026-05-06
updated: 2026-05-06
sources: ["国产双开源：让mac成为你的私人ai工作站.md"]
---

# Cider

Cider 是由 [[明略科技]] 开源并自研的端侧推理加速框架，专为 macOS 与 [[apple-silicon]] 设计。它构建于苹果的 [[apple-mlx]] 框架之上，旨在解决 MLX 原生量化方案未充分利用 GPU 硬件加速单元的问题。

## 核心技术

### 激活量化
MLX 原生支持的 W4A16/W8A16 仅压缩了模型权重，计算过程仍使用 FP16，导致 GPU 内的 Neural Accelerator（专为 INT8 设计）未被利用。Cider 引入了两种新的量化模式：

- **[[w8a8]]**：权重和激活值同时量化至 INT8，直接利用 Apple GPU 的 TensorOps 完成矩阵乘法。
- **[[w4a8]]**：在 W8A8 基础上将权重进一步压缩至 INT4，内存占用减半。

这两种模式均采用 [[融合算子]] 实现，将量化、矩阵乘法、反量化合并为一次 GPU 调度，减少了显存搬运开销。

### 性能表现
在 Apple M5 Pro 上的实测数据显示：
- **单算子加速**：W8A8 模式相比原生 MLX W8A16 提速约 1.82~1.86 倍。
- **端到端加速**：在 Qwen3-VL-2B 模型上，Prefill 阶段加速约 57%~61%。
- **精度损失**：极小，Qwen3-8B 的 W8A8 PPL 仅比 FP16 高 0.03。

### 硬件门槛与权衡
W8A8 模式需要同时加载原始权重和 INT8 权重，导致内存占用近似翻倍。在 16GB 内存的设备上可能引发换页，反而降低性能。官方建议在 32GB 或更大内存的设备上使用 W8A8 以充分发挥其优势。

### 实验性功能
Cider 包含一个实验性的 [[ane-apple-neural-engine]] (ANE) + GPU 异构并行模块。它尝试将线性层的矩阵运算按输出维度拆分，由 ANE 处理约 65% 通道，GPU 处理剩余 35%。在 M4 芯片上可带来 3%~17% 的额外提升。

## 生态兼容性
Cider 并非专属工具，任何已适配 MLX 的模型（如 Qwen, Llama, Mistral）均可通过一行代码 `convert_model(model)` 接入加速。对于 VLM 模型，Cider 内置了 OpenAI 兼容的推理服务接口。