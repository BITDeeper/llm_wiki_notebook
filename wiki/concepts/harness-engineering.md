---
type: concept
title: Harness Engineering（约束工程）
created: 2026-05-24
updated: 2026-05-24
tags: ["ai-paradigm", "system-design", "infrastructure", "ai", "agent", "engineering", "methodology", "ai-engineering", "prompt-engineering", "single-agent", "工程范式", "单智能体", "工程实践", "纠错", "稳定性", "执行框架"]
related: ["claude-code", "确定性工程基础设施", "martin-fowler", "agent-操作系统", "runtime-agent-os", "coordination-engineering", "jiuwenclaw", "agentteam", "jiuwenswarm", "任务执行范式", "agent生产评估体系", "harness-io"]
sources: ["撕开claude-code真相：让它好用的98.4%，是工程不是ai.md", "claude-code源码「换壳」反杀，全网疯狂克隆！anthropic封杀失败.md", "继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md", "「虾马」之后，openjiuwen社区发布jiuwenswarm，引领蜂群智能体新架构，开启「养蜂」时代.md", "agent-从「优等生」到「好员工」还差什么？.md"]
---
# Harness Engineering（约束工程）

## 定义

由 [[mitchell-hashimoto]] 提出的工程理念，关注运行环境、约束机制和纠错回路。核心目标是让系统更快暴露错误、定位错误并推动修正。

## 核心要素

- **运行环境**：Agent执行任务的基础设施和配置
- **约束机制**：对Agent行为范围的限制和边界条件
- **纠错回路**：错误发现、定位和修复的闭环流程

## 与生产评估体系的关系

约束工程解决的是"Agent如何更稳定地运行"，但它**不等于完整的生产评估**。[[agent生产评估体系|生产评估体系]] 还需要覆盖：
- Agent行为是否被系统性测试
- 执行链路是否被完整记录
- 验证成本是否被组织指标捕捉

[[datadog]]、[[galileo]] 和 [[harness-io]] 的报告分别指向链路观测、行为测试和组织指标，说明执行框架仍需生产评估体系配合。

## 在Agent工程中的定位

约束工程是提升Agent运行稳定性的重要实践，属于从"模型能力"到"生产可用"之间的工程层。但它与评估体系是互补关系而非替代关系——一个解决"如何跑得更稳"，另一个解决"如何证明跑得可靠"。