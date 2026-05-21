---
type: concept
title: TAU-bench
tags: [benchmark, tool-use, enterprise-ai, evaluation]
related: [swe-bench, claude-code, 企业级市场信任]
created: 2026-01-08
updated: 2026-01-08
sources: ["谁说老实人赚不到钱？claude用一张3500亿的支票打脸openai.md"]
---

# TAU-bench

TAU-bench 是一个针对工具使用能力的评估基准，特别关注零售、航空等对逻辑确定性有极高要求的行业场景。它用于测试 AI 智能体在复杂、多步骤任务中的可靠性和准确性。

## 应用场景
与通用的代码或对话基准不同，TAU-bench 模拟了真实商业环境中的高容错率场景，例如：
- **零售**：处理复杂的订单修改、库存查询和客户服务流程。
- **航空**：处理航班改签、复杂的票价计算和异常情况应对。

## 评测意义
在 TAU-bench 上的表现被视为 AI 模型能否进入企业级生产环境的关键指标。根据 Vellum AI 的报告，[[Claude]] 在该基准测试中表现出统治级的优势，这证明了其在逻辑一致性和可控性上优于竞争对手，从而赢得了企业客户的信任。

## 相关概念
- [[SWE-bench]]：侧重于软件工程代码修复能力的基准。
- [[企业级市场信任]]：企业客户对 AI 系统稳定性和可预测性的需求。