---
type: concept
title: Schema动态生成
created: 2026-05-14
updated: 2026-05-14
tags: [database, llm, agent, schema, automation]
related: [每用户独立数据库, agent原生基础设施, kimi-k2-6]
sources: ["人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# Schema动态生成

Schema动态生成是指LLM根据自然语言描述实时创建和修改数据库模式（Schema），取代传统DBA人工设计流程的技术范式。这是[[agent原生基础设施|Agent原生应用]]时代数据库面临的新挑战。

## 传统流程 vs Agent时代

| 维度 | 传统流程 | Agent时代 |
|------|---------|----------|
| 设计者 | DBA（数据库管理员） | LLM |
| 周期 | 需要审核、版本管理的慢决策 | 瞬间生成 |
| 变更频率 | 低频、可控 | 高频、随对话持续变更 |
| 风险 | 可预览、可回滚 | 改错可导致数据不可恢复 |

## 核心风险

用户持续对话会触发表结构变更（如"帮我加一个收藏功能"），而数据库中已有真实用户数据。Schema一旦改错：

- **轻则**：查询失败、用户报错
- **重则**：写入紊乱、数据不可恢复

## 技术应对

[[tidb-cloud]]的统一技术栈（Vector+SQL+JSON）通过减少LLM需要协调的组件数量来降低Schema生成和操作的错误率——Agent在一条SQL中即可完成多重操作，无需协调多个client。