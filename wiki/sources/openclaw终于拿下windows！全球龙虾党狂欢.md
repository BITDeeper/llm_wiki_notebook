---
type: source
title: "OpenClaw终于拿下Windows！全球龙虾党狂欢"
created: 2026-06-04
updated: 2026-06-04
tags: [openclaw, windows, agent, 开源, 技能工坊, 工作板]
related: [openclaw, peter-steinberger, clawhub, 技能工坊, 工作板]
sources: ["openclaw终于拿下windows！全球龙虾党狂欢.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/XuplUZwcf_g5qPYxI25f8Q"
venue: 新智元
---
# OpenClaw终于拿下Windows！全球龙虾党狂欢

新智元2026年6月4日报道，[[openclaw]] 发布2026.6.1版本，实现Windows原生节点接入，并推出[[技能工坊]]和[[工作板]]两大核心功能。

## 核心内容

### Windows原生节点接入
- 基于[[build-2026|Build 2026]]大会公布的全新MXC，OpenClaw可原生运行在Windows上
- Windows设备作为"一等公民"加入分布式节点网络，无需Docker/WSL中间层
- 解决了WSL跨文件系统I/O惩罚（可达10倍）、插件安装报错等长期痛点
- 覆盖16亿台Windows设备的存量市场，潜在托管节点数量直接翻倍

### 技能工坊（Skill Workshop）
- Agent可自主发现能力缺口，通过专用skill_workshop工具发起技能提议
- 人类审批机制：批准、驳回、隔离，支持带版本号就地修订
- 配备扫描器、哈希校验和回滚保护，一键回滚
- Agent成长曲线脱离人类发版节奏，实现7×24h自我迭代

### 工作板（Workboard）
- 多智能体协调看板，支持任务拆解、分发、追踪、汇总
- 编排原语和智能体协调工具，任务驱动的面板流转
- 配合Code mode内部命名空间和精确工具分发机制

### 其他更新
- [[minimax-m3|MiniMax M3]]全面接入
- GitHub Copilot Claude 1M长上下文能力打通
- 底层大量引入SQLite替代文件系统扫描
- 178个commit砸进主线

## 关键人物
[[peter-steinberger]]（"龙虾之父"）在Build 2026大会上亲自官宣Windows原生支持。