---
type: source
title: "Claude深夜长出「双手」，接管电脑狂飙代码！额度光速耗尽，全网哀嚎"
tags: [claude-code, anthropic, 计算机使用, ai-subscription-crisis, 编程代理]
related: [claude-code, anthropic, boris-cherny, 计算机使用, ai-subscription-crisis, token刺客]
created: 2026-03-31
updated: 2026-03-31
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/w3dvnGs_1D3MaH3uHiCOUA"
venue: "新智元"
sources: ["claude深夜长出「双手」，接管电脑狂飙代码！额度光速耗尽，全网哀嚎.md"]
---

# 源文档摘要

本文报道了 [[anthropic]] 为 [[claude-code]] 接入「计算机使用」能力的重大更新，以及随之而来的严重计费危机。

## 核心内容

### 功能更新：从「建议者」到「操作者」
Claude Code 正式上线了 [[计算机使用]] 能力，使其能够直接操控 macOS 的 CLI、鼠标、键盘和屏幕。这标志着 AI 编程助手从单纯的代码生成工具进化为能够自主完成「写代码 -> 编译 -> 启动 App -> UI 点击测试 -> 发现 Bug -> 修复」全闭环的智能体。用户仅需输入 `/mcp` 即可开启这种「自动驾驶」模式。

### 重大事故：Token 刺客
新功能上线后，全球大量 Pro 和 Max 用户遭遇了「额度光速耗尽」的问题。开发者 [[felixrieseberg]] 通过逆向工程发现，系统底层存在两个严重的 Bug（Bun 运行时字符串替换 Bug 和 `--resume` 缓存崩溃 Bug），导致缓存失效，Token 消耗成本暴涨 10-20 倍。这一事件成为了 [[ai-subscription-crisis]] 的典型案例。

### 最佳实践
Claude Code 之父 [[boris-cherny]] 分享了 15 个实战技巧，包括 `/teleport`（跨设备会话转移）、`/loop`（自动化循环任务）、`/voice`（语音编程）等，展示了如何将 Claude Code 打造为一个全天候待命的工程团队。

## 关键论点
- **能力质变**：Claude Code 现在能像真人程序员一样处理跨应用、端到端的开发任务，不再受限于终端文本世界。
- **成本危机**：强大的 Agent 能力伴随着惊人的资源消耗，底层 Bug 更是加剧了这一矛盾，导致固定订阅制模式面临严峻挑战。
- **工程化演进**：通过 Hooks、Dispatch、Loop 等功能，Claude Code 正在构建一个类似 [[runtime-agent-os]] 的复杂运行时环境。