---
type: concept
title: 万物 CLI 化
tags: [concept, agent, automation, philosophy]
related: [turix, turix-superpower, cua-computer-use-agent, 工业级-agent]
created: 2026-04-15
updated: 2026-04-15
sources: ["全球最年轻00后团队「掀桌子」：gpt做不到的物理执行，被这群少年跑通了.md"]
---

# 万物 CLI 化

“万物 CLI 化”是 [[TuriX]] 团队提出的一种产品理念和技术路径。其核心思想是将复杂的图形用户界面（GUI）操作转化为类似命令行（CLI）的确定性指令执行逻辑。

## 背景与动机
传统的 AI Agent 往往局限于“语义交互”层面，难以介入本地办公环境进行复杂操作。而传统的自动化工具（RPA）通常依赖底层 API 或坐标定位，脆弱且难以维护。万物 CLI 化旨在打通决策与执行的壁垒，让 AI 能够像执行命令一样精准地操作计算机。

## 实现方式
这一理念通常通过 [[CUA (Computer Use Agent)]] 技术实现。Agent 不再直接调用软件接口，而是通过视觉模型识别屏幕上的元素（按钮、输入框等），模拟人类的点击和输入行为，从而实现对任何软件（包括没有 API 的旧软件）的操作。

## 意义
万物 CLI 化标志着 AI 从“辅助交互”向“自动驾驶”的跃迁，使得 AI 能够真正成为具备物理执行能力的生产力工具，而不仅仅是聊天机器人。