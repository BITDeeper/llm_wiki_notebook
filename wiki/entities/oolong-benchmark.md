---
type: entity
title: OOLONG benchmark
tags: [benchmark, evaluation, agent, coding]
related: [lossless-claw, claude-code]
created: 2026-03-09
updated: 2026-03-09
sources: ["龙虾最大痛点被官方插件升级！对话永不忘记，gpt和gemini最强模型都可接入.md"]
---

# OOLONG benchmark

## 概述
[[OOLONG benchmark]] 是一个用于评估 AI Agent 代码能力或长上下文处理能力的评测基准。

## 测试结果
在 [[openclaw]] 相关的测试中，使用 [[lossless-claw]] 插件（配合同一模型）在该基准上的得分达到了 **74.8**，高于 [[claude-code]] 的 **70.3**。

## 关键发现
测试数据表明，随着上下文长度的增加，[[lossless-claw]] 相比 [[claude-code]] 的性能优势呈扩大趋势。这证明了无损上下文管理策略在长任务场景下的有效性。