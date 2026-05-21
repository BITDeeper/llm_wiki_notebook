---
type: source
title: "教龙虾玩手机！打通GUI智能体训练-评测-部署全流程"
created: 2026-04-19
updated: 2026-04-19
tags: [gui-agent, rl, benchmark, open-source, mobile]
related: [clawgui, zju-real, clawgui-2b, openclaw-gui, mobileworld, gui-agent, online-rl, prm]
sources: ["教龙虾玩手机！打通gui智能体训练-评测-部署全流程，训练、真机、评测一站解决.md"]
authors: ["ClawGUI团队"]
year: 2026
url: "https://mp.weixin.qq.com/s/LYNsue7fuISJjB447D_SxA"
venue: "量子位"
---

# 教龙虾玩手机！打通GUI智能体训练-评测-部署全流程

本文介绍了由 [[zju-real]] 团队开发的 [[clawgui]] 框架，这是一个覆盖 GUI 智能体在线强化学习训练、标准化评测和真机部署全生命周期的开源系统。

## 核心组件

### ClawGUI-RL
一个经过端到端验证的 GUI Agent 在线 RL 解决方案。
- **环境管理**：统一抽象 Docker 虚拟机和物理手机接口，引入 [[spare-server]] 轮转机制保证训练稳定性。
- **奖励设计**：采用二元结果奖励 + [[prm]]（过程奖励模型）逐步奖励的双层设计，解决长序列决策中的奖励稀疏问题。
- **策略优化**：支持 GRPO、GiGPO 等主流强化学习算法。

### ClawGUI-Eval
标准化评测框架，旨在解决不同框架下评测数字难以横向比较的问题。
- **复现率**：在 48 个官方基准格子中成功复现 46 个，复现率达 **95.8%**。
- **覆盖范围**：涵盖 ScreenSpot-Pro、AndroidControl 等 6 大基准及 Qwen3-VL、Gemini 等 11+ 模型。
- **关键经验**：总结了坐标系统匹配、图文输入顺序、System Prompt 对齐等 5 条关键复现经验。

### OpenClaw-GUI
基于 [[nanobot]] 框架构建的真机部署与控制系统。
- **跨平台**：支持 Android (ADB)、鸿蒙 (HDC)、iOS (XCTest)。
- **交互方式**：接入飞书、Telegram 等 12+ 平台，支持通过自然语言控制手机。
- **集成评测**：支持通过自然语言指令自动运行模型评测（如“帮我测一下 qwen3vl”）。

## 实验结果

基于该流程训练的 [[clawgui-2b]] 模型（2B 参数）在 [[mobileworld]] 基准上取得了 **17.1 SR** 的成绩，相比基线 MAI-UI-2B（11.1）提升了 6%，达到了接近 8B 模型的水平。

## 行业观点

文章探讨了 [[cli-vs-gui]] 的关系，认为 CLI Agent（如 [[claude-code]]）与 GUI Agent 是互补而非替代关系。GUI 的“可见性”在涉及支付等敏感操作时提供了独特的信任机制，且对于没有 API 的应用（如微信、银行 App）至关重要。