---
type: source
title: "OpenClaw 3.23紧急修复！Peter忘记打包控制台文件，海量龙虾崩溃"
tags: [openclaw, release-management, bugs, ci, devops]
related: [openclaw, peter-steinberger, clawcontrol, ci, npm]
created: 2026-03-24
updated: 2026-03-24
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/okjlp1WvMSDbMjhtFq2CCg"
venue: "新智元"
sources: ["openclaw-3.23紧急修复！peter忘记打包控制台文件，海量龙虾崩溃.md"]
---

# OpenClaw 3.23紧急修复！Peter忘记打包控制台文件，海量龙虾崩溃

## 概述
本文档记录了 OpenClaw 在 3.22 版本发布中发生的重大工程事故及其在 3.23 版本中的紧急修复过程。事故核心原因为主开发者 Peter Steinberger 在发布流程中遗漏了关键资源包（Web 控制台 UI 和插件），导致用户端出现大规模功能失效。

## 核心事件

### 3.22 版本事故
- **直接原因**：发布流程中漏打包了 Web 控制台（ClawControl）的 UI 资源及六个插件（WhatsApp、ACPX 等）。
- **后果**：
  - 用户升级后控制台页面直接白屏，无法访问管理界面。
  - 部分插件失效，且报错信息具有误导性（显示 "stale config entry" 而非插件缺失）。
  - 用户体验极差，被社区批评为“草台班子”行为。

### 3.23 紧急修复
- **核心措施**：重新打包发布，确保包含所有必要的 UI 资源和插件。
- **流程改进**：在 CI（持续集成）流程中增加检查机制，若发布产物中缺失关键资源，将直接阻断发布流程，防止人为失误再次发生。

## 其他关键修复
除了资源打包问题，3.23 版本还修复了多项影响使用的 Bug：
- **浏览器集成**：修复了 Chrome MCP 模式下的握手超时问题及 Headless Linux 环境下的启动失败问题。
- **认证状态**：修复了 macOS 上 ClawHub 登录态莫名丢失的问题。
- **模型集成**：
  - 修复了 OpenRouter Auto 路由的无限递归 Bug。
  - 修复了 Mistral 模型默认 Token 上限过高导致的 422 错误。
- **Agent 行为**：修复了网络搜索提供商配置不生效的问题。
- **安全加固**：为 Canvas 路由和 Agent Session 重置接口增加了权限校验。

## 意义
此次事件暴露了 AI 工具在快速迭代过程中工程成熟度的不足。Peter 承诺将发布流程全面自动化并引入端到端测试，标志着项目从“个人主导的快速迭代”向“规范化工程实践”转型的必要性。