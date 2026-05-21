---
type: entity
title: n8n
tags: [automation, workflow, open-source]
related: [openclaw, clawhub, zapier]
created: 2026-03-04
updated: 2026-03-04
sources: ["龙虾部署不求人，还附5个openclaw必备技能.md"]
---

# n8n

[[n8n]] 是一个开源的工作流自动化平台，类似于 Zapier，但支持自托管和更高的定制性。

## 功能定位
n8n 允许用户通过节点化的方式连接不同的应用程序和服务，实现自动化任务流转。

## 与 OpenClaw 的集成
通过 [[openclaw]] 的插件生态，n8n 可以被 AI 智能体直接调用。这意味着 [[openclaw]] 不仅能处理对话，还能作为触发器，执行复杂的跨应用操作。

## 典型用例
- **邮件处理**：当收到重要邮件时，自动触发 n8n 流程，将内容存档到 Notion 并发送 Slack 通知。
- **日程管理**：根据邮件内容自动更新日历事件或 Trello 卡片。
- **数据同步**：在不同 SaaS 工具之间同步数据，打破信息孤岛。