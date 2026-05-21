---
type: concept
title: Headless 架构
created: 2026-05-06
updated: 2026-05-06
tags: [架构, api, 软件工程]
related: [headless-360, agentforce-360]
sources: ["老黄爆改英伟达，salesforce一次招千人！智能体时代应届生机会来了.md"]
---

# Headless 架构

Headless 架构是一种软件设计理念，指将软件的功能和逻辑通过 API、工具（如 MCP）或命令行（CLI）暴露出来，去除对传统图形用户界面（GUI）的依赖。

## 在 Agent 时代的意义

在 AI 智能体时代，Headless 架构变得至关重要。因为 AI Agent 无法像人类一样“看”和“点”屏幕，它们需要通过程序接口直接调用数据和逻辑。

- **传统模式**：人 -> GUI -> 软件功能。
- **Agent 模式**：Agent -> API/CLI -> 软件功能。

## 案例

Salesforce 的 [[Headless 360]] 是这一架构的典型代表，它使得 Claude、ChatGPT 等外部 AI 能直接操作 CRM 数据，无需登录网页。