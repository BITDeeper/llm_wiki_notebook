---
type: entity
title: LobsterAI
created: 2026-04-07
updated: 2026-05-08
tags: [agent, open-source, desktop-automation, netease-youdao, ai-agent, claws, netease]
related: [netease-youdao, openclaw, zhou-feng, action-oriented-ai, claws, nanoclaw]
sources: ["「openclaw之父点赞」终结百虾大战？一场升级版的ai原生革命上演.md", "卡帕西看好的nanoclaw，核心代码只有4000行.md"]
---

# LobsterAI

**LobsterAI**（有道龙虾）是 [[网易有道]] 发布的全量开源桌面 Agent 产品，定位为 7×24 小时待命的“数字员工”。它属于 [[Claws]] 范式的具体实现，旨在通过降低技术门槛，将原本属于极客专属的桌面操控能力转化为普通大众的生产力工具。

## 核心特性

### 1. 开箱即用与交互革新
与 [[openclaw]] 等偏向 Linux/Mac 开发者生态的工具不同，LobsterAI 专门针对中国庞大的 Windows 用户群体进行了优化。
- **环境封装**：将复杂的 Python 运行环境与各类依赖包进行了深度预置。
- **零配置**：用户无需懂终端命令行或环境变量配置，下载安装即可使用。
- **GUI 交互**：融合了 [[OpenClaw]] 的自主跨应用执行能力，同时借鉴了 Claude Cowork 的直观 GUI（图形用户界面），彻底摒弃了复杂的命令行操作。

### 2. 100% 全量开源
为了解决企业用户对 Agent 拥有至高权限（读取文件、操作浏览器）的安全顾虑，LobsterAI 选择了全量开源策略。
- **透明可审计**：所有代码逻辑、数据流向均公开，支持私有化部署和二次开发。
- **信任构建**：通过代码透明度建立用户信任，被视为可信赖的“安全底座”。

### 3. 行动与结果导向
LobsterAI 的设计理念是“替用户干活”，是 [[网易有道]] “行动的 AI”战略在桌面端的体现。
- **任务执行**：能够接管桌面操作，执行多步骤任务。
- **结果交付**：主打直接为用户交付结果，能自动完成制作 PPT、数据分析等复杂办公任务。

## 开发背景
该产品诞生于 [[网易有道]] 内部的“AI 原生智能体大赛”，是公司向 [[ai 原生矩阵]] 转型的重要组成部分。

## 市场反响
LobsterAI 意外获得了 [[openclaw]] 之父 [[peter-steinberger]] 的公开点赞，这在 2026 年初的“百虾大战”中被视为对其技术含金量和产品路径的肯定。