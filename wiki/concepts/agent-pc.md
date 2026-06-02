---
type: concept
title: Agent PC
created: 2026-06-01
updated: 2026-06-01
tags: [AI硬件, Agent, PC, 范式转变, 端侧AI]
related: [rtx-spark, 英伟达, 微软, nvidia-open-shell, 操作系统agent, 任务执行范式, 本地推理, vibe-coding]
sources: ["刚刚，英伟达重新定义pc！史上最高效cpu来了.md"]
---
# Agent PC

Agent PC（个人 AI 计算机）是由 [[英伟达]] 和 [[微软]] 联合提出的下一代 PC 概念，指具备强 AI 推理能力的本地 PC，可运行端侧 AI Agent，用户通过自然语言交互而非传统 GUI 操作完成任务。

## 核心理念

> 「过去 40 年里，你启动应用，点击，输入。而有了 RTX Spark 和 Windows，你只需要提出需求，PC 就会完成工作。」——[[黄仁勋]]

Agent PC 将 PC 的角色从被动工具转变为主动"队友"：
- **传统 PC**：用户启动应用 → 点击界面 → 输入指令 → 等待结果
- **Agent PC**：用户提出需求 → AI Agent 理解意图 → 自主规划执行 → 返回结果

## 技术基础

- **硬件**：[[rtx-spark|RTX Spark]] 超级芯片提供最高 1 Petaflop AI 算力和 128GB [[统一内存架构|统一内存]]
- **安全**：[[nvidia-open-shell|NVIDIA Open Shell]] 运行时 + Windows 安全原语，确保 Agent 在沙箱中运行且始终受用户控制
- **交互**：自然语言对话替代鼠标键盘操作，与 [[vibe-coding]] 理念高度一致

## 与已有概念的关系

- [[操作系统agent]]：Agent PC 是 OS Agent 概念的硬件实现平台
- [[任务执行范式]]：Agent PC 是 AI 从单纯模型开发转向智能体工程化系统的硬件载体
- [[本地推理]]：Agent PC 的核心价值在于将 AI 推理能力从云端下沉到本地设备
- [[1-n-agent调度]]：Agent PC 支持用户同时管理多个端侧 Agent 任务

## 当前局限

- 真正的 Agent PC 体验仍需软件生态成熟，首批场景集中在影视剪辑、3D 建模和游戏
- 旗舰规格（128GB 统一内存、1 Petaflop 算力）可能仅限高端型号
- Arm 架构游戏兼容性依赖 Prism 模拟器，性能损耗尚待验证