---
type: source
title: "OpenClaw 3.8继续炸场！龙虾不睡觉，全球程序员连夜赶工"
tags: [openclaw, release-notes, security, agent-tools]
related: [openclaw, acp, openclaw-backup]
created: 2026-03-09
updated: 2026-03-09
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/oIsilmu5rRleTQeoQZR2Rw"
venue: "新智元"
---

# OpenClaw 3.8继续炸场！龙虾不睡觉，全球程序员连夜赶工

## 摘要
本文报道了 [[openclaw]] 在 3.7 版本发布不到 24 小时后，迅速推出 3.8 稳定版的消息。此次更新重点在于安全性、可维护性和用户体验的提升，标志着该项目从激进的功能迭代转向工程化治理。

## 核心更新点

### 1. ACP 溯源机制
引入 [[ACP]]（Agent Communication Protocol）溯源功能，解决了智能体“盲目信任”所有指令的安全隐患。现在每条指令都附带身份信息（发送者、入口、权限），使得智能体能够识别操作者身份，实现了精细化的权限管控和问题溯源。

### 2. 官方备份工具
推出了 [[openclaw-backup]] 工具，支持 `create` 和 `verify` 命令，并包含 manifest 校验。系统现在会在执行危险操作（如大版本升级）前主动提示用户备份，极大地降低了运维风险。

### 3. 安全修复与 Bug 修补
- 修复了 12+ 项安全漏洞（未公开细节），强烈建议公网部署用户升级。
- 彻底解决了 Telegram 消息重复推送的问题。

### 4. 其他改进
- **TalkMode**：静默超时时间可配置。
- **TUI**：终端自动识别亮色背景。
- **GPT-5.4**：修正了上下文窗口限制（105万 token）。
- **Brave 搜索**：新增 LLM 上下文模式支持。
- **兼容性**：修复了 Podman + SELinux 的兼容问题，并进一步精简了 Docker 镜像。

## 观点
文章指出，OpenClaw 极快的更新节奏（“龙虾不睡觉”）反映了背后活跃的社区燃烧的热情，也表明该赛道正处于热度极高的阶段。