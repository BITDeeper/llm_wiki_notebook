---
type: concept
title: CXL 内存池化
tags: [hardware, infrastructure, engineering]
related: [engram, cxl]
created: 2026-05-03
updated: 2026-05-03
sources: ["deepseek-v4最大的遗憾.md"]
---

# CXL 内存池化

[[CXL 内存池化]]（CXL Memory Pooling）是指使用 Compute Express Link (CXL) 技术在多台服务器之间共享内存池的技术方案。在 [[engram]] 等需要大容量嵌入表（如 1000 亿参数）的场景中，这一技术解决了单机显存（HBM）和内存（DRAM） 容量不足的问题。

## 应用场景

对于像 Engram 这样的原生知识查表模块，其巨大的参数量对存储系统提出了挑战。CXL 内存池化提供了一种分层存储架构：
1. **GPU HBM**：存放计算权重。
2. **本地 DRAM**：作为二级缓存。
3. **CXL 池**：作为三级存储，通过交换芯片（如 XConn XC50256）连接多台服务器，提供高带宽（512GB/s）的共享内存空间。

## 优势

由于 Engram 的索引具有确定性，非常适合 CXL 的预取机制。实验表明，通过 SGLang 集成并优化预取-计算重叠后，端到端的吞吐损失可以控制在 5% 以内，使得在多机环境下部署超大模型成为可能。