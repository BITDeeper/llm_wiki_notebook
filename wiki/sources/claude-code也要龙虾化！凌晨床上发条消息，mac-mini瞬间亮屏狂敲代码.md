---
type: source
title: "Claude Code也要龙虾化！凌晨床上发条消息，Mac Mini瞬间亮屏狂敲代码"
tags: [ai-agent, claude-code, 远程控制, 交互范式, 人工智能]
related: [claude-code, anthropic, 龙虾化, openclaw, mcp, channels, dispatch]
created: 2026-03-20
updated: 2026-03-20
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.qq.com/s/6voldVUBJH6M9Oi6K63XVQ"
venue: "新智元"
sources: ["claude-code也要龙虾化！凌晨床上发条消息，mac-mini瞬间亮屏狂敲代码.md"]
---

# Claude Code也要龙虾化！凌晨床上发条消息，Mac Mini瞬间亮屏狂敲代码

## 摘要
本文报道了 [[claude-code]] 推出的 [[channels]] 功能，允许用户通过 Telegram 或 Discord 等即时通讯软件远程控制本地编程会话。这一更新标志着 [[anthropic]] 正在推动其 AI 编程工具向“[[龙虾化]]”方向发展，即从被动工具转变为 7×24 小时待命的智能体搭档。

## 核心内容

### Channels 功能特性
- **远程控制**：通过 Telegram/Discord 发送指令，控制本地 Mac Mini 上的 [[claude-code]] 会话。
- **技术实现**：本质上是一个 [[MCP (模型上下文协议)]] server，将外部事件推送到会话中。
- **安全机制**：采用白名单机制，只响应配对过的用户 ID，忽略群组其他人的消息。
- **交互体验**：支持附件回传（最大 50MB）、图片预览、消息编辑更新（避免刷屏）。

### 局限性
- **依赖活跃会话**：目前仍依赖本地终端保持活跃（电脑不能睡、会话不能关），尚未像 [[openclaw]] 那样实现完全的守护进程化。
- **版本限制**：需 v2.1.80 以上，且目前仅支持 claude.ai 账号（企业版默认关闭）。

### 行业趋势
AI 交互方式正从“打开 App 写 Prompt”转向“给搭档发条消息”。[[openclaw]] 被视为这一模式的先行者，而 [[claude-code]] 的 [[channels]] 结合此前发布的 [[dispatch]] 功能，构成了完整的“远程+异步”能力。

## 关键引述
> "Dispatch 已能满足 [[openclaw]] 的 90% 的需求。" —— [[Ethan Mollick]]，沃顿商学院教授

> "它要把 Claude 从一个「坐下来才能用的工具」改造成「随时能找到的搭档」。"

## 相关条目
- [[龙虾化]]：指 AI 助手像“赛博忠犬”一样具备全天候待命能力的概念。
- [[氛围编程]]：在非正式场景（如凌晨窝在沙发上）通过移动设备进行编程指令下达的行为。