---
type: entity
title: Agent SDK
created: 2026-05-14
updated: 2026-05-14
tags: [anthropic, 开发者工具, sdk, agent]
related: [anthropic, claude-code, ai-subscription-crisis]
sources: ["claude新政，抛弃最忠实的agent用户.md"]
---
# Agent SDK

[[anthropic|Anthropic]] 推出的开发者工具包，支持通过 Python 或 TypeScript 以程序化方式调用 Claude 模型，用于构建自动化智能体工作流。

## 核心功能

- 支持 Python 和 TypeScript 两种语言的 SDK 调用
- 支持非交互模式（claude -p 命令）批量调用
- 集成 GitHub Actions 实现CI/CD自动化
- 允许第三方应用（如 [[openclaw]]、[[hermes-agent]]）通过用户订阅身份验证进行调用

## 2026年6月额度分离事件

Agent SDK 的程序化调用特性打破了AI订阅制"人类速度有限"的经济前提，导致 [[anthropic]] 在2026年6月15日将其用量从订阅限额中完全剥离，改为按月度 Credit 额度单独计费。这一政策调整被视为 [[ai-subscription-crisis|AI订阅制危机]] 的标志性转折点。

## 定价影响

分离后，Agent SDK 使用按 API 零售价从独立 Credit 池扣除，额度按用户分配、每月刷新、不可累积、不可在团队间共享。超出额度后需启用 Extra Usage 按 API 费率继续使用。