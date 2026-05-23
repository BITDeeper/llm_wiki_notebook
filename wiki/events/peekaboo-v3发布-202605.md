---
type: event
title: Peekaboo v3 密集更新发布
created: 2026-05-12
updated: 2026-05-12
tags: [openclaw, computer-use, agent, release]
related: [peekaboo-v3, openclaw, peter-steinberger, computer-use, mcp]
sources: ["openclaw低调更新重磅版本，龙虾长手长脚了.md"]
origin_date: 2026-05-10
time_span:
  start: 2025-11-01
  end: null
participants: [peter-steinberger, openclaw]
causes: [openclaw]
effects: [peekaboo-v3]
significance: medium
---
# Peekaboo v3 密集更新发布

## 概述

2026 年 5 月中旬，[[peter-steinberger]] 为 [[openclaw]] 生态开发的 [[computer-use|计算机操控]] 工具 [[peekaboo-v3]] 进入密集更新期，连续发布 v3.1.0、v3.1.1、v3.1.2 三个版本。这标志着开源 Agent 首次具备与闭源 Computer Use 方案对等的 Mac 桌面操控能力。

## 时间线

- **2025 年 11 月**：Peter 开始开发 Peekaboo，陆续发布 v3.0.0-beta1 至 beta4。
- **2026 年 5 月上旬**：开启"狂更模式"，连续发布 v3.1.0、v3.1.1、v3.1.2。
- **2026 年 5 月 12 日**：量子位报道，引发社区关注。

## 背景

开源 Computer Use 替代方案大量涌现，包括 Anthropic 的 Computer Use、OpenAI 的 Operator 以及各种 browser-use 工具。Peter 加速发布以保持先发优势，同时为自身在 OpenAI 的 Agent 工作提供本地验证平台。

## 影响

- Agent 能力从"对话+工具调用"向"完整桌面操控"迈出关键一步。
- 通过 [[mcp|MCP]] 协议集成，[[cursor]]、[[claude-code]] 等 AI 编程工具获得了自主截图、查看 UI、修改代码的闭环能力。
- 开源社区首次拥有与闭源方案对等的 Computer Use 工具。

## 开放问题

- 完整桌面操控权限下的安全边界如何界定？结合此前 [[openclaw]] 删除用户收件箱事故，风险管控机制尚不明确。
- Peter 在 OpenAI 和开源 OpenClaw 之间的双重角色长期如何演化。