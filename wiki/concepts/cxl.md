---
type: concept
title: CXL (Compute Express Link)
tags: [互连协议, 内存, 架构]
related: [内存墙, pim, ai-硬件危机]
created: 2026-01-20
updated: 2026-01-20
sources: ["100根内存条换一套房！ai疯狂吞噬全球内存，普通人电脑快买不起了.md"]
---

# CXL (Compute Express Link)

CXL (Compute Express Link，计算高速互连协议) 是一种旨在解决内存容量和带宽瓶颈的新型互连标准。

## 工作原理
CXL 的核心思路是实现“内存池化”。在传统架构中，CPU 和 GPU 的内存是各管各的，无法共享。CXL 打破了这种隔离，允许建立一个巨大的共享“内存池”。

## 优势
- **资源利用率最大化**：CPU 用不完的内存，GPU 可以拿去用，打破了单机的容量限制。
- **突破内存墙**：通过灵活调度内存资源，缓解 [[内存墙]] 带来的性能瓶颈。

## 与 PIM 的区别
CXL 侧重于资源的共享与连接，而 [[PIM]] (Processing-in-Memory) 则更激进，试图通过改变计算发生的位置来彻底消灭数据搬运。