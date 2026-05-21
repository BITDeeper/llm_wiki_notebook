---
type: concept
title: SQLite-backed 任务账本
tags: [database, architecture, implementation]
related: [ren-wu-kong-zhi-ping-mian, openclaw]
created: 2026-04-01
updated: 2026-04-01
sources: ["104人重写底层，openclaw装上「任务大脑」，连qq机器人都能管.md"]
---

# SQLite-backed 任务账本

SQLite-backed 任务账本是指使用轻量级数据库 SQLite 作为统一后台，来存储和管理 AI Agent 所有后台任务状态的技术实现方案。

## 应用场景

这一概念在 [[openclaw]] v2026.3.31-beta.1 更新中被提出，用于解决此前 ACP、subagent、cron 和后台 CLI 四种执行体分散记账的问题。

## 优势

1.  **统一性**：提供了一个单一的事实来源，消除了不同执行体之间的信息孤岛。
2.  **可靠性**：利用 SQLite 的事务特性，保证任务状态变更的原子性和一致性。
3.  **轻量级**：无需部署重型数据库服务，适合本地部署和边缘计算场景。
4.  **可追溯性**：天然支持审计和历史记录查询，便于故障排查和安全审计。

## 功能支持

基于 SQLite 任务账本，系统可以实现：
- 任务心跳监测与自动恢复。
- 任务流的注册、查看、取消（如 `openclaw flows list|show|cancel`）。
- 父子任务的关联与结果回溯。
- 被阻塞任务的持久化与重试。