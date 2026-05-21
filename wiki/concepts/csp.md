---
type: concept
title: CSP (通信顺序进程)
tags: [concurrency, programming-theory, message-passing]
related: [tony-hoare, monitor, dining-philosophers-problem]
created: 2026-03-11
updated: 2026-03-11
sources: ["计算机界痛失泰斗！92岁图灵奖得主去世，打赌赢了老板6便士.md"]
---

# CSP (通信顺序进程)

**CSP (Communicating Sequential Processes，通信顺序进程)** 是一种用于描述并发系统的形式化语言，由 [[tony-hoare]] 于 1978 年在其著作《通信顺序进程》中提出。

## 核心思想
CSP 主张并发进程之间不应通过共享内存进行交互，而应通过 **消息传递** 来通信。
- **进程**：独立的执行单元。
- **通道**：用于连接进程，传递数据的管道。

这一理论模型极大地简化了并发编程的复杂性，避免了共享内存带来的死锁、竞态条件等棘手问题。

## 影响与应用
CSP 理论对现代编程语言和系统设计产生了深远影响：
- **Go 语言**：其核心并发原语 `goroutine` 和 `channel` 直接基于 CSP 理论设计。
- **Erlang**：一种构建高并发、高可用性系统的语言，深受 CSP 启发。
- **Transputer**：一种专为并发计算设计的微处理器架构。

## 历史背景
Hoare 在 Elliott Brothers 公司工作期间，曾因未能成功交付 Mark II 操作系统的“并行处理”功能而深感遗憾。这次失败促使他在牛津大学期间深入研究并发理论，最终诞生了 CSP。它与 Hoare 提出的 [[管程]] 一起，构成了他在并发领域的“双子星”贡献。