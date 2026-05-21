---
type: concept
title: Multi-Player Computer-Use Agent
tags: [agent-os, human-computer-interaction, concurrency]
related: [cuabot, hairpin-communication, sandbox, openclaw]
created: 2026-02-06
updated: 2026-02-06
sources: ["openclaw全球首聚，千人挤爆旧金山！龙虾头机器人现场乱逛太炸裂.md"]
---

# Multi-Player Computer-Use Agent (多人联机电脑使用智能体)

多人联机电脑使用智能体是指一种打破传统操作系统“单鼠标、单焦点”限制的技术范式。它允许多个 AI Agent 同时在同一台物理电脑上拥有各自独立的桌面环境、窗口焦点和文件系统，并能协同工作。

## 背景与挑战
传统的电脑交互模式（源自 Xerox PARC 时代）假设只有一个用户（人类）在操作。随着 AI Agent 开始接管电脑任务（如写代码、操作 GUI），这种“单人模式”导致了资源冲突：Agent 会抢占人类的鼠标焦点，或者多个 Agent 之间互相干扰。

## 解决方案
通过 [[CuaBot]] 等工具，利用 Docker 容器和虚拟化技术，为每个 Agent 分配独立的运行环境（沙箱）。这使得：
-   **人类与 Agent 共存**：人类可以在自己的桌面上工作，而 Agent 在后台的独立桌面上运行任务。
-   **Agent 间协作**：可以同时运行多个 Agent（如 Claude 和 Gemini），它们互不干扰，甚至可以互相通信。

## 意义
这一范式是实现 **[[Runtime Agent OS]]** 和大规模 Agent 协作的基础设施，标志着 AI 从单一工具向系统级协作伙伴的转变。

## 相关条目
- [[cuabot]]：该概念的首个实现工具。
- [[hairpin-communication]]：支撑该概念的关键通信架构。