---
type: concept
title: NVIDIA Open Shell
created: 2026-06-01
updated: 2026-06-01
tags: [安全, Agent, 运行时, 英伟达, Windows]
related: [英伟达, 微软, rtx-spark, agent-pc, openclaw, hermes-agent, 端侧-agent-安全原语]
sources: ["刚刚，英伟达重新定义pc！史上最高效cpu来了.md"]
---
# NVIDIA Open Shell

NVIDIA Open Shell 是 [[英伟达]] 提供的运行时环境，与 [[微软]] Windows 安全原语协同工作，确保 AI Agent 在 Windows 安全隔离机制下运行，并且始终处于用户的完全控制之下。

## 设计目标

解决端侧 Agent 大规模普及的核心障碍：用户很难在自己的主力 PC 上安全、私密地运行 Agent。Open Shell 提供了一个标准化的安全沙箱，使 Agent 能够：

- 在 Windows 应用中执行任务
- 完成跨应用工作流推理
- 生成图像和视频
- 编写插件和应用
- 对本地文件进行语义搜索

## 生态适配

[[openclaw]] 和 [[hermes-agent]] 等领先的端侧 Agent 开发者已基于 Open Shell 和 Windows 安全原语开发新 Windows 应用，将安全层集成到 Agent 工作流中。

## 战略意义

Open Shell 有潜力成为端侧 Agent 安全运行的事实标准。它解决了 [[agent-pc|Agent PC]] 普及的前提条件——安全与隐私保障，使敏感数据和核心代码无需上传云端即可在本地处理。