---
type: entity
title: GitHub 宕机事件 (2026)
tags: [outage, github, infrastructure, ai, 2026]
related: [mitchell-hashimoto, ghostty, ai-反噬, github-copilot]
created: 2026-04-29
updated: 2026-04-29
sources: ["ai撑爆github！天天宕机，18年老兵带5万星项目「决裂出逃」.md"]
---

# GitHub 宕机事件 (2026)

**GitHub 宕机事件 (2026)** 指的是 2026 年上半年 GitHub 频繁发生的全球性服务中断事件，特别是 4 月 27 日发生的持续近 18 小时的严重故障。这一系列事件暴露了 GitHub 在 AI 时代基础设施的脆弱性，并直接导致了 [[Mitchell Hashimoto]] 等核心开发者的出走。

## 关键时间点与数据

### 2025 年 10 月
GitHub 新任 CTO Vlad Fedorov 启动了 **10 倍容量扩容计划**，试图应对日益增长的服务需求。

### 2026 年 2 月
官方发现 10 倍扩容远远不足，必须按 **30 倍规模** 重新设计基础设施。此时，Agentic 开发工作流（AI Agent 自动化）已导致流量急剧加速。

### 2026 年 4 月 27 日
发生全球性大宕机，持续近 **18 小时**。根因被确认为 **botnet 攻击叠加流量超载**，导致 ElasticSearch 集群被打满。PR 评审、代码合并和开发流水线全面瘫痪。

## 根本原因分析

### 1. AI 导致的流量激增
[[GitHub Copilot]]、Copilot Agent 等 AI 工具的普及，使得代码提交、PR 创建和 CI 构建的数量呈几何级增长。原本为人类操作设计的基础设施无法承受这种高频、高并发的机器负载。

### 2. 资源分配失衡
母公司微软将巨额资金投入 AI 模型训练（利润中心），而忽视了 Git 托管服务器和 CI/CD 系统（成本中心）的扩容与维护。

## 社会影响
- **开发者信任危机**：[[Mitchell Hashimoto]] 通过日记记录了几乎每天的宕机情况，并宣布将 [[Ghostty]] 项目迁离 GitHub。
- **去 GitHub 化加速**：引发了社区对 GitHub 可靠性的广泛质疑，推动了 [[去github化]] 的讨论。
- **行业反思**：促使整个行业思考 AI 生产力工具带来的系统性副作用（即 [[ai-反噬]]）。