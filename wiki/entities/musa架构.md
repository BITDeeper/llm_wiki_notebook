---
type: entity
title: MUSA架构
created: 2026-05-14
updated: 2026-05-22
tags: [GPU架构, 国产GPU, CUDA兼容, 摩尔线程, 国产算力, 计算架构]
related: [摩尔线程, sglang, 三层cuda兼容栈, mtt-s5000, torchada, mate算子库]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md", "国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
origin_date: 2026-01-01
---
# MUSA架构

MUSA（Meta-computing Unified System Architecture）是 [[摩尔线程]] 开发的底层统一GPU计算架构。其核心设计理念是开放、通用与高度统一。

## 设计理念

- **Meta-computing（通用计算）：** 指向通用计算，不限制GPU可计算的领域，不走封闭路线，全面融入现有繁荣生态
- **Unified（全产品线统一）：** 所有产品线遵循同一套统一标准与指令集，确保软件生态在不同硬件代际间持续沉淀，避免不同产品使用不同指令集导致软件生态无法积累
- **低侵入兼容（接口复用）：** 最大程度复用开发者熟悉的GPU编程习惯（尤其是CUDA），实现 [[零学习成本迁移]]，不要求开发者重新学习一套东西，尽量贴近开发者已熟悉的GPU编程方式、API接口和使用习惯

## 三层CUDA兼容栈

1. **torch_musa：** 负责 PyTorch 和 MUSA 的基础能力对接
2. **[[torchada]]：** CUDA 到 MUSA 的接口无缝桥接适配层，实现 CUDA-first 生态兼容，一行 `import torchada` 解决99% CUDA代码迁移（「一次 import，全包搞定」）
3. **mthreads-ml-py：** 暴露设备管理、拓扑、显存、MTLink、P2P等信息给上层框架

## 生态工具链

- **[[mate算子库|MATE]]（MUSA AI Tensor Engine）：** 高性能算子库，提供 Attention 与 GEMM 算子，已对接 FlashAttention、FlashMLA、[[deepgemm|DeepGEMM]] 等主流接口
- **MCCL：** 分布式通信库，作为分布式推理的底座

## 硬件载体

- **[[mtt-s5000]]：** 全功能智算卡，原生支持 FP8 精度，是 MUSA 架构的核心承载硬件

## 原生支持里程碑

2026 年 5 月，MUSA 正式合入 [[sglang]] 主线，成为该全球顶级推理框架的官方原生后端。这是国产 GPU 架构首次获得此类「原生门票」。

## 生态意义

三层兼容栈的设计降低了上游开源项目的PR合入阻力。适配方案低侵入、可维护、可复现，使得摩尔线程能够从"私有分支维护者"转变为"主线生态贡献者"，标志着从"追着生态跑"到"生态共建者"的角色转变。