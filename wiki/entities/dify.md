---
type: entity
title: Dify
created: 2026-05-14
updated: 2026-05-14
tags: [llmops, low-code, ai-platform]
related: [tidb-cloud, agent原生基础设施]
sources: ["人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# Dify

Dify 是一家做 LLMOps 的低代码平台公司，为开发者提供构建AI应用的基础设施。在数据库架构选型上，Dify是[[agent原生基础设施|Agent原生基础设施]]趋势的重要验证案例。

## 基础设施迁移

Dify过去为每个开发者租户分配独立数据库容器，规模扩大后运维扛不住，最终将所有租户合并到一套[[tidb-cloud]]上：

- **基础设施成本降低80%**
- **运维负担降低90%**

这一案例证明了Serverless多租户数据库架构在AI应用平台场景下的经济性优势，也为后续[[kimi-k2-6]]等团队的选型提供了参考。