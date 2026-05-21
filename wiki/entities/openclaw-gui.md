---
type: entity
title: OpenClaw-GUI
created: 2026-04-19
updated: 2026-04-19
tags: [deployment, control-system, mobile]
related: [clawgui, nanobot, gui-agent]
sources: ["教龙虾玩手机！打通gui智能体训练-评测-部署全流程，训练、真机、评测一站解决.md"]
---

# OpenClaw-GUI

OpenClaw-GUI 是 [[clawgui]] 框架中的真机部署与控制系统，旨在将 GUI 智能体带入真实应用场景。

## 核心功能

- **跨平台支持**：支持 Android (通过 ADB)、鸿蒙 (通过 HDC) 和 iOS (通过 XCTest)。
- **自然语言控制**：基于 [[nanobot]] 框架构建，允许用户通过飞书、QQ、Telegram 等聊天软件发送自然语言指令来控制手机。
- **自动化评测**：集成了评测功能，用户可以通过自然语言指令（如“帮我测一下 qwen3vl”）自动触发模型评测流程。

## 技术特点

- **个性化记忆**：能够自动学习用户偏好，并在跨任务中持续复用。
- **Episode 记录**：将每次执行过程保存为结构化 Episode，支持回放和数据集构建。
- **Web UI**：基于 Gradio 构建，提供设备管理、任务执行和记忆查看界面。

## 应用场景

除了日常任务自动化，OpenClaw-GUI 还被用于自动化评测本身，展示了 [[cli-vs-gui]] 协作的潜力：计算密集型工作由 CLI 完成，而人机交互和结果呈现依赖 GUI。