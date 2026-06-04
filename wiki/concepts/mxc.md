---
type: concept
title: MXC操作系统级Agent安全沙箱
created: 2026-06-03
updated: 2026-06-03
tags: [安全沙箱, agent, 操作系统, 微软, windows]
related: [微软, openclaw, scout, runtime-agent-os, 操作系统agent]
sources: ["很好！和openai分手后微软彻底疯了.md"]
origin_date: 2026-06-01
---
# MXC操作系统级Agent安全沙箱

MXC是微软在Build 2026大会上发布的操作系统级Agent安全沙箱，可以理解为给AI Agent准备的Windows原生安全隔离舱。其核心理念是：Agent该干活干活，但别想在用户电脑里乱来，安全由操作系统底层硬兜底。

## 技术特点

- **操作系统级隔离**：安全防护不依赖Agent自身的安全层，而是由Windows操作系统底层提供
- **独立于Agent安全机制**：即使关闭Agent自身的安全层，MXC仍能拦截危险操作
- **支持OpenClaw运行**：使 [[openclaw|OpenClaw]] 能够在Windows上安全运行node和gateway

## 现场演示

Build 2026大会上，微软团队现场让OpenClaw执行危险指令——删除桌面上的所有文件。即使将OpenClaw自身的安全层全部关闭，MXC沙箱仍然成功拦截了该操作。[[peter-steinberger|Peter Steinberger]] 对此评论："我还挺高兴它没能删除桌面文件，因为六个月前这绝对能成功。"

## 与相关概念的关系

MXC与 [[runtime-agent-os]] 关注同一问题域但层面不同：runtime-agent-os是支撑Agent运行的三层架构（实体、交互、记忆），而MXC专注于操作系统层面的安全隔离。MXC也不同于 [[操作系统agent]] 概念——后者指Agent直接在OS底层运行，MXC则是为这类Agent提供安全边界的基础设施。

## 战略意义

MXC解决了AI Agent本地部署的核心安全顾虑，是企业敢于在办公环境中部署Agent的关键基础设施。没有这类安全沙箱，像 [[scout|Scout]] 这样的企业级Agent很难获得企业IT部门的信任。