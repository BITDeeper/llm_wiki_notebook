---
type: concept
title: Harness (马具架构)
tags: [ai-architecture, agent, control-system]
related: [群体智能, openclaw, 任务执行范式, managed-agents]
created: 2026-04-15
updated: 2026-04-15
sources: ["最新风口harness，李开复、陆奇已重金入场.md"]
---

# Harness (马具架构)

**Harness**（马具）是指连接“模型（马匹）”和“人类需求（骑手）”的**控制框架**。它不直接参与任务执行，而是决定模型往哪里跑、跑多快、何时停。

## 核心逻辑
- **用约束换自主**：通过给高智商的模型套上合理的约束（马具），使其在长程任务中不至于跑偏或失控，从而能够跑得更远、更稳。
- **分层架构**：除去 Agent 的“大脑”（如 Claude Opus 4.6），其余负责调度、记忆、检查和干预的部分都属于 Harness。

## 行业背景
随着 [[openclaw]] 等单体 Agent 在长程任务中频繁暴露出失控风险（如清空用户邮箱、泄露数据），行业共识正从单纯的 Prompt Engineering 转向 **Harness Engineering**。
- **OpenAI**：于 2026 年 2 月发布官方博客《Harness Engineering》，强调通过外层框架释放 Agent 潜力。
- **Anthropic**：推出 Managed Agents 架构，并在文档中反复强调 Agent Harness 的重要性。

## 应用场景
Harness 主要用于解决以下问题：
1. **长程任务稳定性**：防止任务在长时间执行中因某一步的偏差而彻底失败。
2. **资源控制**：管理 Token 消耗和算力分配，避免成本失控。
3. **安全性**：在关键操作节点设置人工或自动检查点，防止灾难性操作。