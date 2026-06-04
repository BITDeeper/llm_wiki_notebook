---
type: event
title: "OpenClaw Windows原生接入 (2026.6.1版本发布)"
created: 2026-06-04
updated: 2026-06-04
tags: [openclaw, windows, 里程碑, agent]
related: [openclaw, windows, peter-steinberger, 技能工坊, 工作板, clawhub, build-2026]
sources: ["openclaw终于拿下windows！全球龙虾党狂欢.md"]
origin_date: 2026-06-04
participants: [openclaw, peter-steinberger, windows]
causes: [build-2026]
effects: [技能工坊, 工作板, 分布式智能网络]
significance: high
---
# OpenClaw Windows原生接入 (2026.6.1版本发布)

2026年6月4日，[[openclaw]] 2026.6.1版本正式上线，实现Windows原生节点接入，并推出[[技能工坊]]和[[工作板]]两大核心功能。这是OpenClaw发展历程中的里程碑级更新。

## 时间线
- **2026-06-03**：[[build-2026|Build 2026]]大会上，[[peter-steinberger]]惊喜现身官宣Windows原生支持
- **2026-06-04**：OpenClaw 2026.6.1版本正式发布

## 三大核心更新

### 1. Windows原生节点接入
[[windows|Windows]]设备作为"一等公民"加入OpenClaw分布式节点网络，无需Docker/WSL中间层。覆盖16亿台设备存量市场，潜在托管节点数量直接翻倍。

### 2. 技能工坊（Skill Workshop）
Agent可自主发现能力缺口、发起技能提议、经人类审批后自动生成技能。配备版本号、哈希校验和回滚保护。标志着Agent从被动工具转向自主进化体。

### 3. 工作板（Workboard）
多智能体协调看板，支持任务拆解、分发、追踪、汇总。配合Code mode内部命名空间和精确工具分发机制，Agent组队协作告别"纸上谈兵"。

## 其他更新
- [[minimax-m3|MiniMax M3]]全面接入
- GitHub Copilot Claude 1M长上下文能力打通
- 底层大量引入SQLite替代文件系统扫描
- 178个commit砸进主线

## 影响
- Agent算力底座从极客设备扩展至全球PC
- Agent进入自主进化阶段（技能工坊）
- 多智能体协作实现工程化落地（工作板）
- [[clawhub|ClawHub]]生态进一步丰富