---
type: concept
title: 基于内存的架构（Memory-Based Architecture）
created: 2026-05-27
updated: 2026-05-27
tags: [模型架构, 端侧AI, memory, scaling]
related: [meki, physical-ai, scaling-law, 量化, 本地推理]
sources: ["从foundation-model到physical-ai，三星「杀入」大模型核心战场.md"]
---
# 基于内存的架构（Memory-Based Architecture）

基于内存的架构是一种将模型知识存储从RAM扩展到ROM的模型设计范式，旨在突破端侧设备的容量限制。

## 核心思路

传统Transformer要求大量参数常驻内存（RAM）运行，但端侧设备的RAM、带宽与功耗十分有限。而端侧设备往往拥有远大于RAM的存储空间（ROM）。

Memory-Based Architecture的核心设计：

- **RAM负责实时计算**：处理当前推理所需的计算任务
- **ROM负责知识存储**：通过参数化Memory Bank将大量知识存储在ROM中
- **动态读取**：推理过程中按需从ROM中动态读取知识

## 技术意义

1. 突破端侧容量限制，为端侧AI提供新的Scaling路径
2. 更适合长期运行的端侧AI与Physical AI场景
3. 满足低延迟、实时交互与长期在线运行等要求

## 与其他端侧优化技术的关系

- **[[量化]]**：从精度压缩角度降低资源消耗
- **[[本地推理]]**：从部署位置角度减少云端依赖
- **Memory-Based Architecture**：从架构设计角度重新定义知识存储与计算的关系

三者互补，可组合使用。

## 代表性工作

- [[meki]]：三星提出的Memory-Based大模型架构，是该范式的代表性实现