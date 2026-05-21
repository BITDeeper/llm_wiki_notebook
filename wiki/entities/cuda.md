---
type: entity
title: CUDA
created: 2026-04-19
updated: 2026-04-19
tags: [platform, software-stack, gpu-computing]
related: [英伟达, tpu, 加速计算, 总拥有成本]
sources: ["黄仁勋都被问毛了：顶级ai厂商在去cuda？“你的前提就是错的”.md"]
---

# CUDA

CUDA（Compute Unified Device Architecture）是 [[英伟达]] 推出的并行计算平台和编程模型，被视为英伟达最核心的护城河。

## 核心价值
CUDA 不仅仅是一个驱动或接口，而是一个庞大的生态系统，包括编译器、库（cuBLAS, cuDNN）、工具和开发框架。

### 1. 可编程性与灵活性
与 [[TPU]] 等 ASIC 不同，CUDA 是通用可编程架构。这意味着：
-   **支持新算法发明**：从 [[Hopper]] 到 [[Blackwell]] 架构的 30-50 倍性能提升，主要得益于 CUDA 支持下的算法创新（如 MoE、SSM）。
-   **全生命周期覆盖**：不仅用于 AI 训练和推理，还涵盖数据处理、计算光刻、流体力学等科学计算任务。

### 2. 安装基础
全球部署了数亿台支持 CUDA 的设备，覆盖所有主流云平台（AWS, Azure, GCP, OCI）。这种广泛的安装基础意味着开发者开发的软件可以在任何地方运行，极大地降低了迁移成本。

### 3. 生态系统丰富性
CUDA 支持几乎所有主流 AI 框架（PyTorch, TensorFlow 等）和新兴工具（Triton, vLLM）。对于开发者而言，基于 CUDA 开发是最“靠谱”的选择，因为底层系统的健壮性经过了长期验证。

## 竞争与挑战
尽管 [[Anthropic]] 和 [[谷歌]] 等巨头尝试自研内核或使用 [[TPU]]，黄仁勋认为这并非行业趋势。他指出，自研系统的维护成本极高，且 [[总拥有成本]] (TCO) 并不一定比使用 CUDA 更低。CUDA 的优势在于其庞大的社区支持和英伟达持续的性能优化。