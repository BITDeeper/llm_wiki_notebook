---
type: concept
title: AI Infra
created: 2026-05-04
updated: 2026-05-04
tags: [软件工程, 系统架构, 训练框架]
related: [ai基建层, deepgemm, pytorch]
sources: ["量子位编辑作者招聘.md"]
---
# AI Infra

**AI Infra**（AI Infrastructure，AI 基础设施）通常指连接底层硬件与上层 AI 模型/应用之间的中间层软件、系统与架构。它决定了 AI 模型开发的效率、训练的稳定性以及推理的性能。

## 范畴
虽然有时与 [[ai基建层]]（硬件）混用，但在技术语境下，AI Infra 更侧重于软件与系统层面：

- **训练框架**：如 PyTorch, TensorFlow, JAX。
- **算子库**：如 [[DeepGEMM]]、FlashAttention，针对特定硬件优化底层计算。
- **集群调度**：如 Ray、Slurm，负责管理大规模 GPU 集群的资源分配。
- **推理引擎**：如 TensorRT、ONNX Runtime，负责模型部署与加速。
- **数据处理**：如 Apache Arrow、Ray Data，解决海量数据预处理瓶颈。

## 核心挑战
- **性能优化**：如何榨干硬件性能（如 GPU 利用率），减少通信开销。
- **确定性**：如 [[批次不变性]]，保证分布式训练结果的可复现性。
- **扩展性**：当模型参数量从亿级走向万亿级，系统架构如何线性扩展。

## 行业动态
- **会议关注**：MLSys (Machine Learning Systems) 是该领域的顶级学术会议。
- **技术趋势**：从通用优化向软硬协同设计转变（如 DeepSeek 自研算子库）。

## 与硬件的关系
AI Infra 运行在 AI 基建层（硬件）之上，但两者的界限日益模糊。现代 AI Infra 往往需要深度理解底层硬件架构（如 CUDA 编程），才能实现极致优化。