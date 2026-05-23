---
type: entity
title: TiDB
tags: [database, open-source, htap, distributed-sql, distributed, infrastructure]
related: [mem9, huang-dongxu, tidb-cloud, agent原生基础设施, drive9]
created: 2026-03-15
updated: 2026-05-22
sources: ["全网爆火的龙虾总失忆？大佬亲自下场手搓解药，终结致命痛点.md", "人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# TiDB

**TiDB** 是 PingCAP 开发的开源分布式关系型数据库产品，兼容 MySQL 协议，同时兼具联机事务处理（OLTP）和联机分析处理（OLAP）能力，即支持混合事务/分析处理（HTAP）。在 AI Agent 时代，TiDB 正从传统数据库产品向 [[agent原生基础设施|Agent 原生应用]] 的完整运行时基础设施演进。

## 技术特点

- **云原生**：深度集成 Kubernetes，支持存算分离。
- **MySQL 兼容**：降低了开发者迁移和使用的门槛。
- **水平扩展**：数据量无上限，适合记忆数据无限增长的场景。
- **HTAP 架构**：允许在同一份数据上同时处理高并发写入和复杂分析查询，无需在 OLTP 和 OLAP 系统间进行数据同步。

## 在 AI Agent 领域的应用

### 支撑 Agent 记忆系统

TiDB 被认为是 AI Agent 时代的理想数据底座，特别是在 [[mem9]] 等记忆服务中发挥了关键作用。其核心优势包括：

1. **多模态处理能力**：
   - **向量检索**：支持语义搜索，用于召回相似的记忆片段。
   - **全文检索**：支持关键词精确匹配。
   - **分析查询**：支持对历史数据进行复杂的模式识别和聚合分析。

   这种能力使得单一数据库即可满足 Agent 记忆系统的多样化需求，无需组合使用多种专用数据库。

2. **HTAP 架构**：
   Agent 的交互流（写入）和记忆检索（分析/读取）往往同时发生。TiDB 的 HTAP 架构允许在同一份数据上同时处理高并发写入和复杂分析查询，无需在 OLTP 和 OLAP 系统间进行数据同步。

3. **弹性伸缩**：
   [[mem9]] 提出的"一虾一库"架构需要为每个 Agent 分配独立的数据库实例。[[tidb-cloud|TiDB Cloud]] 的 Serverless 特性使得实例在空闲时成本极低，并能根据负载自动扩缩容，从而支撑百万级实例的运行。

4. **ACID 事务**：
   在多 Agent 协作场景下，TiDB 提供的事务一致性保证了共享记忆状态的准确性。

### 相关案例

- **[[mem9]]**：基于 TiDB Cloud 构建的 OpenClaw 永续记忆服务。
- **Manus AI**：知名的 AI Agent 创业公司，在生产环境中使用 TiDB 承载多 Agent 协作系统的所有业务请求。

## 产品演进方向

TiDB 团队的目标远不止数据库本身。基于 "One agent, one sandbox; one storage, one database" 的架构理念，TiDB 正在为 Agent 这一代应用补齐一整套通用的运行时基础设施：

- **[[tidb-cloud|TiDB Cloud]]**：Serverless 分布式数据库服务，承载 Agent 的数据层
- **[[mem9]]**：Agent 持久化记忆层，提供跨 session 可检索的 memory
- **[[drive9]]**：Agent 持久化工作空间，为 Sandbox 提供可挂载的 workspace
- 后续组件持续规划中

## 行业定位

TiDB 将自己定位为 Agent-native 基础设施提供商，其产品演进逻辑是：Agent 作为新一代应用的核心计算单位，需要的不仅是数据库，还包括 storage、memory 层等完整运行时环境。这一路线图与 [[runtime-agent-os]] 的三层架构（实体、交互、记忆）高度互补。