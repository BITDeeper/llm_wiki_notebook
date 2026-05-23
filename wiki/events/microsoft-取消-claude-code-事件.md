---
type: event
title: "微软取消内部Claude Code授权事件"
created: 2026-05-22
updated: 2026-05-22
tags: [ai编程, 微软, anthropic, 成本危机, 产品竞争]
related: [microsoft, claude-code, github-copilot-cli, 按token计费危机, ai补贴时代终结]
sources: ["微软：claude-code的token，我也烧不起了.md"]
origin_date: 2026-05-20
time_span:
  start: 2025-12-01
  end: 2026-06-30
participants: [microsoft, anthropic, github, uber]
causes: [按token计费危机, 内部产品蚕食]
effects: [ai补贴时代终结]
significance: high
---
# 微软取消内部Claude Code授权事件

2026年5月，微软取消内部 [[claude-code]] 授权，表面原因是基于 token 的计费方式导致成本过高，深层原因是 Claude Code 在微软内部严重蚕食了 [[github-copilot-cli]] 的使用率。

## 时间线

- **2025年12月**：微软向数千名内部开发者开放 Claude Code 使用权限，用于基准测试和鼓励非技术人员尝试编程
- **2026年4月**：[[uber]] CTO 发布内部备忘录，称四个月烧光全年AI预算（行业背景事件）
- **2026年5月（本周）**：微软取消内部 Claude Code 授权，消息曝光
- **2026年6月底**：微软计划完全停止内部 Claude Code 使用的截止日期

## 决策背景

微软 Experiences + Devices 集团执行副总裁 [[rajesh-jhu]] 在内部备忘录中表示，同时提供 Copilot CLI 和 Claude Code 的目标是"快速学习和基准测试"。但过去六个月里，Claude Code 在微软内部极受欢迎，此前91%工程团队使用 Copilot 的高频使用率遭到严重蚕食。

## 微软的应对措施

1. 取消内部 Claude Code 授权
2. 要求工程师在6月底前将工作流迁移到 Copilot CLI
3. 督促 GitHub 团队根据内部反馈"疯狂"迭代 Copilot CLI
4. 曾考虑收购 [[cursor]] 补足短板（后因监管顾虑转向其他标的）

## 行业影响

此事件标志着 AI 编程工具从补贴扩张期进入成本约束期，企业客户开始对按 token 计费模式进行实质性抵制。与 Uber 预算烧光事件共同构成 [[按token计费危机]] 和 [[ai补贴时代终结]] 的标志性案例。

## 因果链

微软开放 Claude Code 试用 → 内部工程师大量采用 → Copilot CLI 使用率被严重蚕食 + token 账单飙升 → 微软取消 Claude Code 授权 → 要求 GitHub 团队在6月底前疯狂迭代 Copilot CLI