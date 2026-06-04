---
type: concept
title: 操作系统级Agent安全沙箱
created: 2026-06-03
updated: 2026-06-03
tags: [安全, agent, 操作系统, 沙箱]
related: [mxc, openclaw, scout, 操作系统agent, runtime-agent-os]
sources: ["很好！和openai分手后微软彻底疯了.md"]
origin_date: 2026-06-01
---
# 操作系统级Agent安全沙箱

操作系统级Agent安全沙箱是在操作系统底层为AI Agent提供安全隔离运行环境的技术架构。微软的 [[mxc|MXC]] 是这一概念的首次大规模产品化实现。

## 核心原则

- **安全不依赖Agent自身**：即使Agent的安全层被绕过或关闭，操作系统层面的隔离仍能生效
- **最小权限原则**：Agent只能执行被允许的操作，危险指令在操作系统层面被拦截
- **透明隔离**：Agent正常运行不受影响，但越界行为被硬性阻止

## 解决的问题

AI Agent在本地运行时面临核心安全顾虑：Agent可能执行危险操作（如删除文件、修改系统配置）。传统的Agent自身安全层存在被绕过的风险（如 [[openclaw|OpenClaw]] 曾发生删除用户收件箱的安全事故）。操作系统级沙箱从底层解决这个问题。

## 与相关概念的区别

- **与 [[runtime-agent-os]]**：runtime-agent-os是支撑Agent运行的三层架构，关注的是Agent如何运行；操作系统级沙箱关注的是Agent运行时的安全边界
- **与 [[操作系统agent]]**：操作系统Agent指Agent直接在OS底层运行；沙箱是为这类Agent提供安全隔离的配套基础设施