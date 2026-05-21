---
type: entity
title: Redis
tags: [database, open-source, c-programming, in-memory]
related: [antirez, claude-code]
created: 2026-01-25
updated: 2026-01-25
sources: ["redis之父：手写代码？醒醒吧除非你图一乐.md"]
---

# Redis

Redis（Remote Dictionary Server）是一个开源的内存数据结构存储系统，常用作数据库、缓存和消息代理。它由 [[antirez]] (Salvatore Sanfilippo) 开发，以高性能、丰富的数据类型和原子性操作著称。

## 技术特点
-   **纯 C 语言实现**：Redis 的核心代码由 Antirez 用 C 语言编写，追求极致的性能和代码简洁性，被视为系统编程的典范。
-   **内存存储**：数据主要存储在内存中，支持极高的读写速度。
-   **数据结构**：支持字符串、哈希、列表、集合、有序集合等复杂数据结构。

## 在 AI 编程测试中的角色
在 Antirez 关于 [[claude-code]] 的测试中，Redis 被用作验证 AI 编程和调试能力的复杂基准：
1.  **内核调试**：Claude Code 成功定位并修复了 Redis 中涉及 TCP 死锁和微妙时序的极难复现的瞬态故障。
2.  **功能重构**：Claude Code 在 20 分钟内复刻了 Antirez 花费数周修改的 Redis Streams 内部实现。

这些案例证明了 AI 工具不仅能处理简单的脚本任务，也能胜任高性能、复杂的系统级编程工作。