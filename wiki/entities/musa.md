---
type: entity
title: MUSA
tags: [架构, 软件栈, CUDA替代, 软件平台, 摩尔线程, gpu, 软件生态, 计算平台, 国产替代]
related: [摩尔线程, mtt-aibook, mt-aios, pytorch, 全栈底座, MDC-2025, 端云一体, comfyui, cuda护城河, 四级跃迁模型, musacode, automusify-skill, sglang, vllm]
created: 2026-01-21
updated: 2026-05-22
sources: ["摩尔线程aibook一周实测：开箱即训的「ai-native」体验.md", "「国产gpu第一股」首秀！新架构下周揭秘，全栈底座不藏了.md", "老黄喝豆汁「破防」背后，国产gpu正在填上cuda护城河.md"]
---

# MUSA

MUSA (Moore Threads Unified System Architecture，亦称 Meta-computing Unified System Architecture) 是 [[摩尔线程]] 自研的统一系统架构，也是其全栈技术底座的核心软件层。作为对标英伟达 CUDA 的全栈软件生态/计算平台，MUSA 已实现芯片架构、指令集、编程模型、软件运行库、驱动框架和上层应用工具链的全面覆盖。

## 定义与功能

MUSA 旨在连接底层 GPU 硬件与上层应用软件，提供一套完整的编程接口和运行环境，使开发者能够充分利用摩尔线程 GPU 的加速能力。

在 [[摩尔线程]] 的生态战略中，MUSA 扮演着"承上启下"的关键角色：

- **向下**：屏蔽硬件差异，发挥 [[全功能GPU]] 的 AI 计算、图形渲染和科学计算能力。
- **向上**：为 AI 大模型、数字孪生、物理仿真等应用提供高效的算力支持。

## 核心特性

- **兼容性**：支持主流深度学习框架如 PyTorch。实测显示，基于标准 PyTorch 语法编写的代码可以在 MUSA 架构上无缝运行，无需修改。
- **端云一致性**：MUSA 架构保证了本地开发环境与云端训练环境的一致性，支持 [[端云一体]] 的开发流程。
- **底层适配**：摩尔线程提供了针对 MUSA 优化的加速库和算子，使得 [[comfyui]] 等原本深度绑定 CUDA 生态的应用也能在国产 GPU 上运行。

## 四级跃迁

MUSA 生态建设遵循 [[四级跃迁模型]]：

### 兼容层
- MUSA SDK 5.1.0 对标 CUDA 12.8
- 驱动及运行时 API 兼容数 761 个
- 核心数学库（Blas、Sparse、Rand、FFT）100% 功能兼容
- AI 算子库 muDNN 覆盖 55 类核心 AI 算子，额外扩展 230 多个
- PyTorch 全量 3194 个算子 100% 兼容

### 原生层
- MATE 加速库优化 FlashAttention3、Sage Attention、DeepGEMM 等关键算子
- FA3 效率达 95%，热点算子覆盖率突破 90%
- TileLang-MUSA 合入开源主线，GEMM 类算子 95% 以上汇编级性能效率
- Triton-MUSA 升级支持至 Triton 3.6

### 开放层
- [[sglang]] 官方主线合入 MUSA（47 个 PR，合并 41 个），列入 2026 Q2 官方硬件支持矩阵
- [[vllm]] 官方后端身份
- Day-0 适配 [[DeepSeek V4]]、GLM-5.1、Qwen3.5、MiniMax M2.7、Kimi K2.6 等模型

### 自进化层
- [[musacode]]：自研 AI 编程工具，30 天自动生成 12015 个算子
- [[automusify-skill]]：零人工干预 AI Agent，全自动迁移 Top 100 AI/科学计算加速库

## 战略意义

MUSA 是摩尔线程构建国产 GPU 软件生态的护城河，旨在降低开发者从 CUDA 生态迁移到国产算力平台的成本。其核心战略是通过 [[ai-agent自动迁移]] 改变生态建设的成本结构，将"人海战术"变为自动化流水线，从而压缩 CUDA 十五年时间积累形成的 [[cuda护城河]]。

## 相关活动

[[MDC-2025]]（MUSA Developer Conference 2025）即是以此架构命名的开发者大会，旨在围绕 MUSA 构建繁荣的开发者生态。