---
type: concept
title: Issue 分诊
tags: [开源, 工作流, 效率]
related: [clawsweeper, ai-自愈, openclaw]
created: 2026-04-26
updated: 2026-04-26
sources: ["太狠了！openclaw之父一夜屠光5000-issue，github服务器先跪了.md"]
---

# Issue 分诊

[[Issue 分诊]]（Issue Triage）指对提交到代码仓库（如 GitHub）的 Issue 进行分类、优先级排序、有效性筛选和状态更新的过程。这是开源项目维护中最耗时且机械的环节之一。

## 痛点
大型开源项目（如 Kubernetes, Linux 内核, [[openclaw]]）往往面临“Issue 坟场”问题：成千上万个 Issue 积压，包含重复提问、已修复未关闭、无意义的灌水等。人工处理这些积压需要耗费大量时间。

## AI 自动化分诊
[[clawsweeper]] 展示了如何利用 AI 进行大规模的 [[Issue 分诊]]。通过 [[gpt-5.5]] 模型理解代码和上下文，AI 可以自动识别出哪些 Issue 是无效的，并安全地关闭它们。

## 价值
将 [[Issue 分诊]] 交给 AI 后，人类维护者可以从繁琐的筛选工作中解放出来，专注于处理真正需要复杂判断和高价值的技术问题。