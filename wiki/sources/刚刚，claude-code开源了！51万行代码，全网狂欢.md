---
type: source
title: "刚刚，Claude Code开源了！51万行代码，全网狂欢"
tags: [anthropic, claude-code, security, leak, source-map]
related: [claude-code, anthropic, chaofan-shou, source-map-leaks, kairos, undercover-mode]
created: 2026-03-31
updated: 2026-03-31
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/ghy8vsqy7Kdq5QgPG9mpWw"
venue: "新智元"
sources: ["刚刚，claude-code开源了！51万行代码，全网狂欢.md"]
---

# 刚刚，Claude Code开源了！51万行代码，全网狂欢

## 概述

本文报道了 [[anthropic]] 旗下产品 [[claude-code]] 发生的一起重大源码泄露事故。由于 npm 包配置错误，保留了 Source Map 文件，导致包含 1,900 多个文件、总计 51.2 万行 TypeScript 代码的核心资产完全暴露。

## 关键事件

- **发现者**：安全研究员 [[chaofan-shou]]。
- **泄露媒介**：npm 包 `@anthropic-ai/claude-code` 中未删除的 `cli.js.map` 文件（59.8 MB）。
- **泄露规模**：51.2 万行代码，涉及核心架构、未发布功能及内部工具。

## 技术架构细节

泄露代码揭示了 [[claude-code]] 的内部技术栈：
- **前端**：基于 [[React]] 和 [[Ink]]（终端 UI 框架）。
- **运行时**：[[Bun]]。
- **核心逻辑**：`QueryEngine.ts`（约 4.6 万行），负责推理、Token 计数和思维链循环。
- **工具系统**：包含 40 多个独立模块（文件读写、Bash 执行、LSP 协议集成等）。
- **协同系统**：包含 `coordinator`（多智能体协调器）和 `bridge`（IDE 连接桥）。

## 暴露的隐藏功能

- **[[kairos]]**：代号为“Kairos”的未发布模式，是一个具备“持久生命”的自主守护进程，支持后台会话和记忆整合，旨在实现“永不离线”的 AI 智能体。
- **[[undercover-mode]]**（卧底模式）：一种特殊功能，当 Anthropic 员工在公共仓库操作时，自动抹除提交记录中的 AI 痕迹。
- **Buddy System**：代码中内置的一个完整的电子宠物系统，包含 18 个物种、稀有度等级及属性统计。
- **Auto Mode**：自动审批工具权限的 AI 分类器，旨在减少交互确认环节。

## 社区反应

- 泄露代码在 GitHub 上被迅速镜像备份，半小时内星标破 5k。
- 引发了关于 [[source-map-leaks]] 安全风险、AI 透明度以及“双重标准”的广泛讨论。
- 被戏称为“戏剧性的开源”或“Claude 觉醒”。

## 相关概念

- [[source-map-leaks]]：此次事故的根本原因。
- [[runtime-agent-os]]：泄露架构展示了复杂的智能体运行时特征。
- [[ai-subscription-crisis]]：泄露的“Auto Mode”侧面印证了提升效率以应对成本危机的需求。