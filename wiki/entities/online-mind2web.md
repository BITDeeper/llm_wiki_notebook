---
type: entity
title: ONLINE-MIND2WEB
tags: [benchmark, dataset, web-agent, evaluation]
related: [avenir-web, seeact, claude-computer-use, openai-operator]
created: 2026-04-29
updated: 2026-04-29
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md"]
---

# ONLINE-MIND2WEB

ONLINE-MIND2WEB 是一个用于评估网页智能体性能的基准测试数据集。它旨在模拟真实世界的网页操作环境，对 Agent 的泛化能力和鲁棒性提出严苛要求。

## 数据集规模
-   **网站数量**：包含 136 个真实的网站。
-   **任务数量**：涵盖 300 个实时任务。

## 评测场景
该基准测试主要关注 Agent 在真实互联网环境下的表现，包括但不限于：
-   复杂网页结构的解析（如 iframe、Shadow DOM）。
-   跨页面的长程任务执行。
-   对特定网站操作流程的理解与适应。

## 相关记录
在 [[avenir-web]] 的相关报道中，ONLINE-MIND2WEB 被用作验证框架有效性的核心基准。[[avenir-web]] 在该基准上取得了 53.7% 的成功率，超越了 [[seeact]] (30.0%) 和 [[claude-computer-use]] (47.3%)，逼近 [[openai-operator]] (58.3%) 的水平。