---
type: concept
title: README 即仪表盘
tags: [devops, 运维, 透明化, github]
related: [clawsweeper, github]
created: 2026-04-26
updated: 2026-04-26
sources: ["太狠了！openclaw之父一夜屠光5000-issue，github服务器先跪了.md"]
---

# README 即仪表盘

[[README 即仪表盘]]（README as Dashboard）是一种独特的 DevOps 实践，指利用代码仓库根目录下的 `README.md` 文件来实时展示系统的运行状态、监控指标和处理进度，而非依赖传统的后台监控系统（如 Grafana）。

## 特点
- **透明化**：所有访问仓库的人都能第一时间看到系统的实时状态。
- **可审计**：系统的每一次操作、每一个决策理由都公开记录在文件中。
- **轻量级**：无需搭建额外的监控服务，直接利用版本控制系统。

## 应用案例
[[clawsweeper]] 是这一实践的典型代表。它在运行过程中实时更新 [[openclaw]] 仓库的 README，展示当前处理的 Issue 数量、提议关闭的数量以及 [[github]] API 的限流状态。这让整个 AI 清理过程变得完全公开，任何对结果有疑问的人都可以查看详细的决策日志。

## 适用场景
这种模式特别适合开源项目、自动化 Bot 或任何需要向公众展示内部运行状态的系统。