---
type: entity
title: NemoClaw
tags: [nvidia, open-source, agent, deployment, security]
related: [nvidia, openclaw, dgx-station-gb300, openshell]
created: 2026-03-19
updated: 2026-03-19
sources: ["英伟达首台dgx-gb300，老黄亲自登门送给他.md"]
---

# NemoClaw

## 概述
NemoClaw 是英伟达（[[nvidia]]）发布的一个开源智能体部署堆栈。它被贡献给 [[openclaw]] 项目，旨在简化 AI 智能体的部署流程并解决其安全问题。

## 核心功能
- **一键部署**：允许开发者使用一条命令将一个“随时在线”的 AI 助手部署起来。
- **运行时环境**：内置了 [[openshell]]，这是英伟达面向 AI 智能体设计的运行时环境。
- **安全沙箱**：通过沙箱机制保证智能体执行过程的安全可控，防止恶意操作或意外破坏（如此前 [[openclaw]] 发生的删除邮件事件）。

## 战略意义
NemoClaw 的发布标志着英伟达在软件层面的补强。配合 [[dgx-station-gb300]] 硬件，英伟达试图建立一套从硬件到软件的完整智能体基础设施标准。它试图将早期狂野发展的智能体工具（如 OpenClaw）纳入企业级、工程化的轨道，解决安全性与稳定性痛点。