---
type: entity
title: Peekaboo v3
created: 2026-05-12
updated: 2026-05-12
tags: [openclaw, computer-use, mac, agent-tool, mcp]
related: [openclaw, peter-steinberger, computer-use, mcp, cursor, claude-code]
sources: ["openclaw低调更新重磅版本，龙虾长手长脚了.md"]
origin_date: 2025-11-01
---
# Peekaboo v3

Peekaboo v3（"躲猫猫"）是由 [[peter-steinberger]] 开发的 Mac 平台 [[computer-use|计算机操控]] 工具，隶属于 [[openclaw]] 生态。它为 AI 智能体提供了在 Mac 上"看屏幕"和"操作鼠标键盘"的完整能力。

## 起源与版本演进

- **2025 年 11 月**：Peter 开始开发 Peekaboo，陆续发布 v3.0.0-beta1 至 beta4 测试版。
- **2026 年 5 月**：密集更新 v3.1.0、v3.1.1、v3.1.2，进入"狂更模式"，标志着正式可用。

## 核心能力

### 「看」的能力
- **像素级截图**：支持窗口级、全屏级、菜单栏级的精确截图。
- **UI 元素读取**：读取 macOS 上每个 UI 元素的位置、类型、label 等结构化信息，超越纯视觉截图。

### 「动」的能力
- 点击、输入文字、按快捷键、滚动、拖拽
- 切窗口、切桌面（Space）、戳 Dock、点系统弹窗
- 覆盖一整套真人使用 Mac 的常见操作。

### 能力调用方式
- **自然语言 Agent 模式**：用大白话提示词直接下达任务指令，无需编写代码。
- **[[mcp|MCP Server]]**：将所有能力打包为 MCP 协议，供 [[cursor]]、[[claude-code]]、Codex 等 AI 编程工具直接调用。

## 四种打开方式

1. **Homebrew 安装**：`brew install steipete/tap/peekaboo`，适合脚本自动化。
2. **MCP Server**：`npx -y @steipete/peekaboo mcp`，适合 AI 编程工具集成。
3. **Mac 桌面 App**：GitHub Releases 下载，图形界面，适合普通用户。
4. **Swift Package**：作为库嵌入自有 App，适合 Swift 开发者。

## 在 OpenClaw 中的集成

通过 OpenClaw 的 Skill 机制一键安装，录屏和辅助功能等 Mac 权限由 OpenClaw 统一管理，无需重复授权。

## 竞争背景

Peter 加速更新的直接原因是开源 Computer Use 替代方案大量涌现，包括 Anthropic 的 Computer Use、OpenAI 的 Operator 以及各种 browser-use 工具。Peekaboo v3 的发布标志着开源 Agent 首次具备与闭源方案对等的桌面操控能力。

## 安全考量

[[openclaw]] 此前曾发生无视指令删除用户收件箱的安全事故（见 [[偷改简历删光邮件：ai幻觉进化，你的大脑正在悄悄投降]]）。赋予其完整桌面操控能力后，安全风险显著放大，需关注权限边界和操作审计机制。