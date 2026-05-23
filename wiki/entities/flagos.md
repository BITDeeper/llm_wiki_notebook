---
type: entity
title: FlagOS
created: 2026-05-14
updated: 2026-05-14
tags: [开源项目, AI编译器, 算子库, 智源研究院]
related: [摩尔线程, musa架构, deepseek-v4, triton]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
---
# FlagOS

FlagOS 是由北京智源人工智能研究院（BAAI）开发的 AI 编译器生态，基于 Triton 构建。其核心理念是「一套算子，多家芯片」，通过统一编译器实现[[跨芯片统一抽象]]。

## 核心组件

- **FlagGems：** 算子库，已涵盖超 497 个算子。
- **FlagTree：** 统一编译器，与 Triton-TLE 语言扩展配合，实现跨芯片高性能算子生成。
- **FlagTune：** 调优工具，将调优结果做成可下载的社区资产。

## 性能优化

- 通过融化、量化等方式，FusedMoE 和 FP8 GEMM 等算子性能加速了四倍。
- 在 [[deepseek-v4]] Day0 适配中，通过摩尔线程专用张量加速引擎与 FlagOSTune 调优方案，TTFT 时延降低 56.7%，吞吐量提升 65.7%。

## 与摩尔线程的合作

FlagOS 与 [[摩尔线程]] 联调，通过环境变量启用 [[musa架构]] 的 TMA 向量加速引擎，实现 [[跨芯片统一抽象]] 的落地。

## 核心开发者

- **肖航：** 北京智源人工智能研究院 AI 编译器研究员，负责 FlagOS 生态的 Triton 相关工作。