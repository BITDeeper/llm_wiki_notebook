---
type: concept
title: Quorum-fast
tags: [optimization, latency, distributed-systems]
related: [aegean, agentic-consensus, barrier-synchronization]
created: 2026-02-07
updated: 2026-02-07
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# Quorum-fast

[[quorum-fast]]（法定人数快速通过）是一种优化多智能体系统延迟的机制。

## 定义
系统不再等待所有 agent 完成推理，只要达到法定人数即可推进决策。

## 作用
该机制消除了传统 [[barrier-synchronization]]（屏障同步）中“最慢 agent 决定整体延迟”的瓶颈。通过不等待 outliers（异常慢的 agent），系统显著降低了 P99 尾延迟。在 [[aegean]] 系统的测试中，这一机制配合其他共识优化，实现了最高 **20×** 的平均延迟下降。