---
type: entity
title: TiDB Cloud
created: 2026-05-14
updated: 2026-05-14
tags: [database, serverless, distributed, agent-infrastructure]
related: [tidb, kimi-k2-6, dify, agent原生基础设施, 每用户独立数据库]
sources: ["人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# TiDB Cloud

TiDB Cloud 是 PingCAP 推出的 Serverless 分布式数据库服务，定位为[[agent原生基础设施|Agent原生应用]]的数据底座。在AI Agent时代，TiDB Cloud 承载了从独立数据库实例供给到Agent运行时基础设施的完整产品线。

## 核心技术特性

### 虚拟数据库界面
不为每个租户分配真实数据库实例，而是通过DB Session Gateway维持连接、资源弹性供给。长尾租户不真实分配实例，只在请求瞬间激活资源，使"百万独立数据库"的单位经济跑得通。

### 统一技术栈（Vector+SQL+JSON）
在单一数据库中同时支持向量搜索、关系查询和JSON半结构化数据。核心价值不是性能，而是降低LLM写代码的错误率——Agent可以在一条SQL中完成过滤、筛选、排序等多重操作，无需协调多个client。

### Warm Pool + Scale-to-zero
预热池预先维护已准备好的Starter实例，实现秒级分配；闲置实例计算成本压至极低。Agent可在1秒内拿到fully prepared instance。

## 行业数据

- 新建集群中**超过90%由AI Agent直接创建**（非人类工程师），此比例一年前远低于此
- [[dify]] 迁移至TiDB Cloud后基础设施成本降80%、运维负担降90%
- [[kimi-k2-6]]、Dify、Plaud等多个Agent团队独立评估后不约而同选择同类架构

## Agent原生产品线

TiDB正在沿Agent运行时基础设施路线布局：

- **mem9**：已落地的第一个组件，为Agent提供持久、跨session可检索的memory层
- **drive9**：第二个组件，为Agent Sandbox提供持久、共享、可挂载的workspace
- 后续还有更多组件规划中

## 与竞品的对比

文章将TiDB Cloud的多租户架构与以Supabase为代表的典型Serverless PostgreSQL进行了对比。传统方案（单实例多Schema隔离、每用户一个RDS实例）在百万级租户场景下均无法承接——前者在万级规模即扛不住，后者的基础月费不可接受。

## 注意事项

本文信息来源为TiDB品牌内容营销文章，对TiDB的技术优势描述可能存在选择性呈现，未充分讨论Neon、PlanetScale、CockroachDB等竞品方案。