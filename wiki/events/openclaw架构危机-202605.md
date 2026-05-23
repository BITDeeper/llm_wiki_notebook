---
type: event
title: OpenClaw架构危机
created: 2026-05-21
updated: 2026-05-21
tags: [openclaw, architecture, crisis, bugfix]
related: [openclaw]
sources: ["20刀月费秒变api！hermes一行命令就能用上claude、chatgpt订阅.md"]
origin_date: 2026-04-28
time_span:
  start: 2026-04-28
  end: 2026-05-18
participants: [openclaw]
causes: []
effects: []
significance: medium
---
# OpenClaw架构危机

2026年4月底至5月初，[[openclaw]]经历了一场严重的架构危机，创始人Peter Steinberger亲自发文"OpenClaw Had a Rough Week"承认问题。

## 危机根源

团队试图执行激进的架构"瘦身"——将Amazon Bedrock、Slack以及OpenShell沙箱等重型内置依赖剥离为按需插件。大方向虽对，但过渡期的阵痛极其惨烈。

## 危机表现

- Gateway降速
- 插件依赖陷入死循环
- Discord等频道集体异常
- 大批用户被迫降级

## 修复过程

- **2026年5月18日**：v5.18发布"补债式"巨型更新，单bugfix就狂飙破百
- 每一条修复都不大，但都是真实用户在GitHub issue里反复报告的痛点
- 正式版发布4小时后，v5.19 beta跟进
- 对于373k star的项目，迭代节奏已接近SaaS产品的hotfix速度

## 教训

- 架构重构的"大方向正确"不等于"执行无风险"
- 大型开源项目的依赖剥离需要更渐进的过渡策略
- 社区驱动的bugfix优先级排序至关重要