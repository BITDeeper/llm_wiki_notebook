---
type: entity
title: Autogenesis System (AGS)
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 多智能体系统, 自进化, 基准测试]
related: [autogenesis-protocol-agp, 多agent协作架构, 自进化架构, gaia-基准测试]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
origin_date: 2026-04-01
---
# Autogenesis System (AGS)

Autogenesis System（AGS）是基于 [[autogenesis-protocol-agp|AGP 协议]]构建的**自进化多智能体系统**，由南洋理工大学、斯坦福大学、普林斯顿大学联合团队开发。

## 系统架构

AGS 采用 [[多agent协作架构|多智能体协作]]模式，核心组件包括：

- **Planning Agent**：主控智能体，负责任务规划和调度
- **Deep Researcher Agent**：深度研究智能体
- **Browser-use Agent**：浏览器操作智能体
- **Deep Analyzer Agent**：深度分析智能体
- **Vibe Coding Agent**：编程智能体

所有智能体作为一等参与者注册到 AGP 的资源管理系统中，通过标准化消息通信，支持替换、更新和进化。

## 工作流程

1. 先规划，再并行执行
2. 边执行，边记录轨迹
3. 发现失败后触发自进化
4. 进化成功后，新能力进入资源注册表，被后续任务复用

## 性能表现

### GAIA 基准测试
- **Validation**：93.33% 平均准确率
- **Test**：89.04%，较 Vanilla baseline（79.07%）提升 12.61%
- **Level 3 难题**：从 61.22% 提升到 81.63%，相对提升 33.34%

### HLE（Humanity's Last Exam）
- 59.6%，排名第二（仅次于 Claude Mythos Preview）

### LeetCode Benchmark
- 100 道近期问题，Python3、C++、Java、Go、Kotlin 五种语言
- C++ 和 Java 接近满分
- 自进化不仅提高通过率，还显著减少编译错误、运行错误和超时

### 科学与数学推理
- 在 GPQA-Diamond、AIME24、AIME25 上验证了自进化的普适性

## 核心意义

AGS 证明了协议化自进化治理的可行性：智能体不仅能"想得更好"，也能"写得更稳、更快"。