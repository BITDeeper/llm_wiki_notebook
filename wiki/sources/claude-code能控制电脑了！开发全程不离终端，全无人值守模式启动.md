---
type: source
title: "Claude Code能控制电脑了！开发全程不离终端，全无人值守模式启动"
tags: [ai-agent, computer-use, claude-code, development-tools]
related: [claude-code, anthropic, computer-use, 无人值守模式, ai-subscription-crisis]
created: 2026-03-31
updated: 2026-03-31
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/OpblYhgUHrQ27eC-xwsprg"
venue: "量子位"
---

# Claude Code能控制电脑了！开发全程不离终端，全无人值守模式启动

## 概述

本文报道了 [[anthropic]] 在其 [[claude-code]] 工具中引入 **Computer Use** 功能的重大更新。这是 Anthropic 在 60 天内的第 76 个更新，标志着 AI 编程代理从单纯的代码生成进化为能够直接操作图形用户界面（GUI）的智能体。

## 核心功能：CLI 端 Computer Use

与此前更新的桌面端不同，本次更新将 Computer Use 能力集成到了命令行界面（CLI）中，旨在实现“全程不离终端”的开发体验。

### 支持的应用场景

1.  **原生应用构建验证**：编写完代码（如 Swift）后，Claude 可自动编译并启动应用，模拟点击每个控件以验证功能，无需人工干预。
2.  **端到端 UI 测试**：能够自动执行 Electron 应用的注册流程等复杂操作序列，并自动截图留证。
3.  **调试视觉布局问题**：通过自然语言指令（如“模态框在小窗口下被截断了”），AI 可自动调整窗口大小复现 Bug，截图后直接修复 CSS。
4.  **驱动 GUI 工具**：可以操作那些原本没有命令行接口的软件，如设计工具、硬件控制面板和 iOS 模拟器。

## 安全机制

为了应对 AI 控制电脑带来的安全风险，Anthropic 设计了多层防护机制：

-   **全局单会话锁**：同一时间只允许一个 Claude 会话控制电脑，避免操作冲突。
-   **应用级授权**：每次操作新软件时都会弹窗请求用户批准。
-   **权限分级**：
    -   浏览器和交易平台：只读权限。
    -   终端和 IDE：只能点击，不能输入文字。
    -   其他应用：完全控制权。
-   **紧急停止**：按下 `Esc` 键可立即停止所有操作，`Ctrl+C` 亦可终止。
-   **隐私保护**：终端窗口会被排除在截图之外，防止 AI 看到敏感输入或受到屏幕上的 Prompt 注入攻击。
-   **工作流保护**：Claude 工作时会自动隐藏其他应用，只保留已批准的软件，任务完成后自动恢复原窗口布局。

## 无人值守模式与 Auto 模式

结合此前发布的 **Auto 模式**（Claude 代表用户做出权限决定），Computer Use 有潜力实现完全无人值守的开发闭环：提出需求后，AI 自动完成代码编写、测试和修复，全过程无需人工干预。

## 行业背景与争议

-   **迭代速度**：Anthropic 正处于高强度冲刺状态，60 天内发布了 76 个更新。
-   **平台限制**：目前该功能为 **Mac 独占**，引发了 Windows 和 Linux 用户的不满。
-   **成本焦虑**：用户反馈该功能“一看就更烧 Token”，加剧了 [[ai-subscription-crisis]] 中关于 Pro 订阅固定额度不足以支撑 Agent 高消耗的矛盾。

## 相关条目

-   [[computer-use]] — AI 控制计算机的技术概念。
-   [[无人值守模式]] — AI 自主决策执行的开发模式。
-   [[claude-code]] — 本功能的载体工具。