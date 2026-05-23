---
type: entity
title: ROCm
tags: [hardware, software-platform, amd, gpu-computing, 平台, 开源, gpu, 计算框架]
related: [cuda-护城河, claude-code, amd, leelachesszero, 苏姿丰, 开放生态战略]
created: 2026-01-23
updated: 2026-05-22
sources: ["cuda要凉？claude-30分钟铲平英伟达护城河，amd要笑醒了.md", "苏姿丰上海开讲：ai正在重新定义计算的每一层.md"]
---

# ROCm

ROCm（Radeon Open Compute）是 [[amd]] 开发的开源 GPU 计算平台，也是 [[开放生态战略|AMD 开放生态战略]] 的核心软件基础设施，旨在对标 [[英伟达]] 的 [[cuda]] 生态系统。

## 定位与核心价值

ROCm 是 AMD 回应 AI 工程化需求的关键抓手，其核心价值在于：

- **开放性**：开源软件平台，让开发者不被硬件代际绑定
- **全栈覆盖**：支持从云端到端侧的部署场景
- **工具链完整性**：涵盖 AI Kernel 开发、编译器优化、PyTorch 分布式训练框架适配等

## 与 CUDA 的关系

ROCm 是 AMD 对抗 NVIDIA CUDA 生态的核心武器。AMD 选择开源路线作为差异化竞争策略，试图通过开放生态吸引对封闭生态不满的开发者。长期以来，ROCm 虽然在功能上强大，但面临生态兼容性差和开发者迁移成本高的问题，导致其难以撼动 CUDA 的垄断地位。然而，随着 [[claude-code]] 等 [[智能体式编程]] 工具的出现，这一局面正在改变。

## 战略意义

在 [[苏姿丰]] 的战略框架中，ROCm 承担着"软件层面的开放让开发者不被硬件代际绑定"的角色，与硬件层面的持续迭代互相加持，形成开发者愿意长期留在其中的体系。

## 技术组件

- **rocBLAS**：用于基本线性代数子程序（GEMM 运算）
- **MIOpen**：用于卷积运算的加速库（类似 CUDA 的 cuDNN）

## AI 辅助移植案例

2026 年初，开发者利用 [[claude-code]] 在 30 分钟内将 [[leelachesszero]] 的 CUDA 后端成功移植至 ROCm。这次移植没有使用传统的 Hipify 转换层，而是由 AI 直接理解逻辑并针对 RDNA 3.5 架构生成了优化的 FP16 代码。这一事件被视为 AI 填平 CUDA 与 ROCm 生态鸿沟的标志性信号。