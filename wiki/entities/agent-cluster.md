---
type: entity
title: Agent 集群
tags: [multi-agent, system-architecture, moonshot-ai]
related: [kimi-k2-6, multi-agent-collaboration, ai-coordinator]
created: 2026-04-21
updated: 2026-04-21
sources: ["单agent时代结束，ai们开始组团上班.md"]
---

# Agent 集群

[[agent-cluster]] 是指由多个具有不同专长的 AI 智能体组成的协作系统，旨在通过分工合作完成单个模型难以处理的复杂任务。这一概念由 [[moonshot-ai]] 在 Kimi K2.5/2.6 模型中重点推广。

## 技术特征

- **大规模并行**：支持数百个子 Agent 同时工作（如 K2.6 支持 300 个子 Agent）。
- **多步骤协作**：能够处理数千个逻辑步骤的复杂任务流。
- **动态调度**：系统作为 [[ai-coordinator]]，能够根据任务需求动态分配资源。

## 工作原理

1. **任务拆解**：将复杂的用户指令（如“生成行业报告”）拆解为多个维度或子任务。
2. **专家分配**：调用具有特定专长的 Agent（如搜索专家、文档撰写专家、图表制作专家）并行处理。
3. **进度监控**：实时追踪各个子任务的进度和阶段性成果。
4. **结果合成**：将各子任务的产出整合为最终交付物。

## 应用价值

Agent 集群解决了单体模型在处理多格式、高密度或跨领域任务时的局限性，实现了从“单点智能”到“集体智能”的跨越。