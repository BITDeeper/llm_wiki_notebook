---
type: concept
title: Channels
tags: [功能, 远程控制, mcp]
related: [claude-code, mcp, 龙虾化, telegram, discord]
created: 2026-03-20
updated: 2026-03-20
sources: ["claude-code也要龙虾化！凌晨床上发条消息，mac-mini瞬间亮屏狂敲代码.md"]
---

# Channels

**Channels** 是 [[Claude Code]] 推出的远程控制功能，允许用户通过 Telegram 或 Discord 等外部消息通道控制本地编程会话。

## 功能特性
- **远程控制**：通过 Telegram/Discord 发送指令，控制本地 Mac Mini 上的 Claude Code 会话。
- **附件支持**：支持附件回传，图片会直接内联预览，单个文件最大 50MB。
- **消息编辑**：长文本会自动分段，任务未完成时可先回“处理中…”，再编辑消息补充结果，避免刷屏。
- **安全机制**：采用白名单机制，只响应配对过的用户 ID，忽略群组其他人的消息。

## 技术实现
本质上是一个 [[MCP (模型上下文协议)]] server，将外部事件推送到 Claude Code 会话中，让 Claude 对终端之外发生的事情作出反应。

## 使用流程
1. 用 `/plugin install telegram@claude-plugins-official` 安装官方插件。
2. 配置 bot，做一次安全配对（白名单机制）。
3. 启动命令加 `--channels plugin:telegram@claude-plugins-official`。

## 局限性
- 依赖本地活跃会话，电脑休眠或会话关闭后功能即失效。
- 目前仅支持 claude.ai 账号登录，企业和团队版默认关闭。

## 参见
- [[龙虾化]]
- [[Dispatch]]
- [[MCP (模型上下文协议)]]