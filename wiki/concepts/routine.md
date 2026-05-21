---
type: concept
title: Routine (Claude Code)
tags: [automation, agent, anthropic, cloud-computing]
related: [claude-code, kairos, ai-subscription-crisis, 任务执行范式]
created: 2026-04-15
updated: 2026-04-15
sources: ["claude-opus-4.7刚刚曝光！claude-code一夜重构，7x24小时替你打工.md"]
---

# Routine (Claude Code)

Routine 是 [[Anthropic]] 在 [[claude-code]] 中推出的云端自动化功能，允许用户配置 Claude 作为“云端员工”自主执行任务。该功能此前在泄露文件中的代号为 [[kairos]]。

## 核心特性

### 云端托管
Routine 任务在 Anthropic 的云端基础设施上运行，完全独立于用户的本地设备状态（如睡眠、断网）。这解决了传统本地自动化（如 cron 任务）依赖本地进程的痛点。

### 三路触发器
Routine 提供了三种启动机制，极大地扩展了 AI Agent 的应用场景：

1.  **定时触发**：
    - 支持按小时、每晚或每周执行。
    - 典型用例：每日凌晨自动拉取 Bug 修复、每周文档更新检查。

2.  **API 触发**：
    - 每个 Routine 拥有独立的 HTTP 端点和 Bearer Token。
    - 通过发送 POST 请求触发，请求体可包含追加的提示词。
    - **集成场景**：可直接接入 Datadog 等告警系统或 CI/CD 流水线，实现“告警即触发”的自动化响应。

3.  **GitHub Webhook**：
    - 订阅 GitHub 事件（如 PR opened、Push、Issue 等）。
    - **一PR一会话**：为每个符合条件的 Pull Request 维护一个独立的持久化会话，持续跟踪该 PR 的代码变更、评论和 CI 状态，直到 PR 合并或关闭。

### 环境隔离
用户可以为 Routine 配置独立的云端环境，包括：
- 网络权限控制
- 环境变量和 API Key
- 初始化脚本（用于安装依赖）

## 商业模式与限制
Routine 的推出反映了 [[ai-subscription-crisis]]。由于 Agent 任务的高算力消耗，Anthropic 实施了严格的每日运行配额：
- **Pro**：5 次/天
- **Max**：15 次/天
- **Team/Enterprise**：25 次/天
- 超出配额需额外付费。

这种限制与“7x24小时替你打工”的营销定位之间存在一定张力，表明云端自动化的成本仍是大规模应用的主要瓶颈。