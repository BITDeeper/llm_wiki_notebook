---
type: concept
title: 分片Muon优化器
created: 2026-05-19
updated: 2026-05-19
tags: [优化器, 分布式训练, 工程优化]
related: [composer-2-5, cursor, 双网格hsdp]
sources: ["编程新王composer-2.5来了，逼近opus-4.7！成本仅为110.md"]
---
# 分片Muon优化器

一种带分布式正交化的优化器，由 [[cursor]] 在 [[composer-2-5]] 的持续预训练中使用。

## 核心挑战

对庞大专家权重进行正交化是最大的计算开销。

## 解决方案

Cursor 设计了异步传输机制，将正交化计算与模型训练解耦。

## 性能

在高达1T参数规模的模型上，优化器每一步的耗时被压缩到仅0.2秒以内。

## 意义

这一底层工程突破是 Cursor 能够将推理和训练成本打到极低水平的关键因素之一，与[[双网格hsdp]]共同构成了 Composer 2.5 的工程基础。