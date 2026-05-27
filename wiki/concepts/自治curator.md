---
type: concept
title: 自治Curator
created: 2026-05-26
updated: 2026-05-26
tags: [agent, 自进化, 技能管理, hermes]
related: [hermes-agent, 闭环学习架构, 自进化架构]
sources: ["python逆天改命！开源hermes首次击败openai-codex.md"]
---
# 自治Curator

[[hermes-agent]] v0.12 版本引入的后台自动运行 Agent，负责对技能库进行自动评分、修剪和合并。是 [[闭环学习架构]] 的自我管理组件。

## 功能

- **评分**：对已有技能进行质量评估
- **修剪**：移除低质量或过时的技能
- **合并**：将相似或重叠的技能整合为更高效的版本

## 意义

自治 Curator 使 Hermes 不仅能够学习（提炼技能），还能自主管理学到的知识。这标志着 Agent 从被动工具向自治系统的演进——Agent 不仅能执行任务，还能维护和优化自身的知识体系。

## 关联

- [[hermes-agent]] — 引入该功能的主体
- [[闭环学习架构]] — Curator 所服务的上层架构
- [[自进化架构]] — 更广泛的理念框架