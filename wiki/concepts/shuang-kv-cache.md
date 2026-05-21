---
type: concept
title: 双 KV-Cache
tags: [optimization, engineering, vlm, cache]
related: [tays, jie-ou-shi-wei-zhi-bian-ma]
created: 2026-03-18
updated: 2026-03-18
sources: ["打破视频推理「先看后想」惯性，实现真正的「边看边想」丨cvpr'26.md"]
---

# 双 KV-Cache

**双 KV-Cache**（Dual KV-Cache）是 [[TaYS]] 框架中的一项核心工程优化技术，旨在解决流式视频推理中“编码”与“推理”争抢计算资源的问题。

## 工作原理
在标准的 Transformer 推理中，键值缓存通常是统一管理的。TaYS 将其拆分为两个独立的缓存：
1.  **视觉 KV-Cache**：专门用于存储和更新视觉特征，作为“生产者”持续写入新到达的视频帧编码。
2.  **推理 KV-Cache**：专门用于存储文本生成的历史状态，作为“消费者”持续生成思维链和答案。

## 优势
这种物理分离使得视觉编码和文本推理可以**并行执行**，打破了传统架构中“推理时无法编码新帧”的死锁。实验表明，移除双 KV-Cache 会导致延迟显著反弹，是降低首字生成时间（TTFT）的关键。