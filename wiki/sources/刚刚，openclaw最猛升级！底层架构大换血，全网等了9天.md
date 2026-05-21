---
type: source
title: "刚刚，OpenClaw最猛升级！底层架构大换血，全网等了9天"
tags: [openclaw, ai-agent, security, plugin-system, release-notes]
related: [openclaw, peter-steinberger, clawhub, gpt-5-4, 插件系统重构, 凭证泄露防护]
created: 2026-03-23
updated: 2026-03-23
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/dCHt6w3c_fLaYY6ys_GSxA"
venue: "新智元"
sources: ["刚刚，openclaw最猛升级！底层架构大换血，全网等了9天.md"]
---

# 刚刚，OpenClaw最猛升级！底层架构大换血，全网等了9天

## 概述
本文详细报道了 [[openclaw]] 在停更 9 天后发布的 3.22 版本（2026.3.22-beta.1）。此次更新被视为一次“底层架构大换血”，核心涉及插件系统的彻底重构、安全漏洞的全面封堵以及模型生态的扩张。

## 核心更新内容

### 1. 插件系统重构
- **彻底废弃旧 API**：移除了 `openclaw/extension-api`，没有兼容层，强制迁移至全新的 `openclaw/plugin-sdk`。
- **官方分发渠道 [[ClawHub]]**：确立为插件安装的首选来源，仅在 ClawHub 无结果时回退到 npm，旨在提升生态纯净度和安全性。
- **外部生态兼容**：新增对 Claude、Codex、Cursor 等主流开发工具插件包的发现与安装支持，将其 Skills 映射到 OpenClaw 体系中。

### 2. 安全加固
针对生产环境的严峻挑战，3.22 版本修复了十多个高危漏洞：
- **[[凭证泄露防护]]**：拦截 Windows SMB 协议中的 `file://` 或 UNC 路径，防止自动认证握手导致的用户凭证泄露。
- **执行环境加固**：封锁 JVM (MAVEN_OPTS)、.NET (DOTNET_ADDITIONAL_DEPS) 等环境变量注入路径。
- **[[Unicode 审批伪装]]**：修复利用韩文填充码位隐藏审批命令内容的漏洞，在网关和原生审批界面进行字符转义。
- **Webhook 预认证**：限制未认证调用的资源消耗（64KB/5秒），防止资源耗尽攻击。

### 3. 模型生态扩张
- **[[GPT-5.4]]**：成为默认 OpenAI 模型，预置 `gpt-5.4-mini` 和 `gpt-5.4-nano` 支持。
- **MiniMax M2.7**：默认模型从 M2.5 升级至 M2.7，统一了 API 和 OAuth 插件入口。
- **Anthropic Vertex**：正式接入 Google Vertex AI，支持通过 GCP 认证调用 Claude 模型。

### 4. 体验优化
- **Agent 引擎**：[[长对话压缩]]机制优化，延长截止时间，修复孤立块；默认超时从 600 秒提升至 48 小时。
- **多端体验**：Android 支持深色模式；飞书新增结构化交互卡片和推理流渲染；Telegram 支持话题自动重命名。

## 意义
此次更新标志着 [[openclaw]] 从“极客玩具”向“可信赖的 AI 智能体平台”转型。通过激进的架构重构（一刀切废弃旧 API）和严格的安全治理，团队展示了其进入生产环境的决心。