---
type: entity
title: Wafer Scale Engine 3
tags: [硬件, 芯片, 低延迟, cerebras]
related: [cerebras, gpt-5-3-codex-spark]
created: 2026-02-13
updated: 2026-02-13
sources: ["openai史上最快模型降临，每秒1000token！代码从此「炸出来」.md"]
---

# Wafer Scale Engine 3

[[Wafer Scale Engine 3]] (WSE-3) 是由 [[Cerebras]] 公司开发的顶级 AI 推理芯片。它是 [[GPT-5.3-Codex-Spark]] 实现每秒 1000 token 极速生成能力的物理基础。

## 技术特点

- **晶圆级集成**：不同于传统的芯片切割和封装，WSE-3 直接在整块晶圆上构建计算单元，极大地减少了数据在芯片间的传输延迟。
- **非 GPU 架构**：它不是基于传统的 GPU 图形处理架构，而是专门为 AI 矩阵运算和低延迟推理设计的专用架构（ASIC）。
- **极致低延迟**：专为实时处理设计，能够支撑 [[实时编程]] 所需的瞬时响应需求。

## 应用场景

在 Spark 模型的应用中，WSE-3 负责处理海量的并发推理请求。其强大的算力使得模型在保持高性能（如通过 [[SWE-Bench Pro]] 测试）的同时，将生成时间压缩到了极致。这种硬件能力使得“边写边改”、“随时打断”的交互模式成为可能。

## 评价

WSE-3 的应用体现了 AI 领域的[[暴力美学]]：通过极致的硬件堆叠和专用化设计，单纯以速度压倒技术瓶颈。这代表了 AI 基础设施发展的一个重要方向。