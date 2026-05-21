---
type: entity
title: ClawGUI
created: 2026-04-19
updated: 2026-04-19
tags: [framework, open-source, gui-agent, rl]
related: [zju-real, clawgui-2b, openclaw-gui, clawgui-rl, clawgui-eval, online-rl, prm]
sources: ["教龙虾玩手机！打通gui智能体训练-评测-部署全流程，训练、真机、评测一站解决.md"]
---

# ClawGUI

ClawGUI 是由 [[zju-real]] 团队开发的开源 GUI 智能体全流程框架。它打通了训练、评测和部署三个环节，形成了一条完整的流水线。

## 核心架构

ClawGUI 包含三个主要子系统：

### 1. ClawGUI-RL
负责在线强化学习训练。
- **环境抽象**：统一管理 Docker 虚拟机和物理手机，支持真机训练。
- **稳定性机制**：引入 [[spare-server]]（备用服务器轮转）和周期性重启，确保长时间训练不中断。
- **奖励机制**：结合二元结果奖励与 [[prm]]（过程奖励模型），提供稠密的逐步反馈。

### 2. ClawGUI-Eval
负责标准化评测。
- **高复现率**：在 48 个官方基准格子中达到 95.8% 的复现率。
- **广泛支持**：覆盖 ScreenSpot-Pro、AndroidControl 等 6 大基准及多种主流模型。
- **工程经验**：总结了坐标系统、Prompt 格式等关键复现细节。

### 3. OpenClaw-GUI
负责真机部署与控制。
- **跨平台**：支持 Android、鸿蒙、iOS。
- **自然语言交互**：用户可通过聊天软件（如飞书、Telegram）发送指令控制手机。
- **自动化评测**：集成了评测功能，可通过指令自动跑分。

## 性能表现

基于该框架训练的 [[clawgui-2b]] 模型在 [[mobileworld]] 基准上取得了 17.1 SR 的成绩，显著优于基线模型。

## 项目地址

- GitHub: https://github.com/ZJU-REAL/ClawGUI
- 项目主页: https://zju-real.github.io/ClawGUI-Page/