---
type: entity
title: AppFunctions API
created: 2026-05-13
updated: 2026-05-13
tags: [谷歌, API, 端侧agent, 协议, 开发者]
related: [gemini-intelligence, 端侧agent协议标准之争, 安卓智能系统转型]
sources: ["安卓彻底变了！gemini接管所有屏幕，苹果连影子都没追上.md"]
origin_date: 2026-05-13
---
# AppFunctions API

AppFunctions API 是谷歌自建的端侧Agent协议，让开发者主动暴露自己的服务和数据给 [[gemini-intelligence]] 智能系统调用。其设计思路与Anthropic主推的MCP协议高度相似，但谷歌选择自建而非直接采用MCP。

## 核心功能

- 标准化接口，让AI系统直接调用第三方服务
- 开发者可主动将App功能和数据暴露给Gemini智能系统
- 支持跨设备环境中的本地执行

## 与MCP的关系

AppFunctions API的设计思路与MCP协议高度相似——都是让AI系统直接调用第三方服务的标准化接口。但谷歌没有选择直接采用MCP，而是自建协议。

这一选择本身是一个重要信号：[[端侧agent协议标准之争]]可能成为ASI决赛的第三条战线。

## 开发者路径

谷歌为开发者提供了两条路径：
1. **零代码App自动化**：Gemini直接操作现有App界面，无需开发者额外适配
2. **AppFunctions API**：开发者主动接入，获得更精细的控制和更深的集成

## 当前进展

25个App已在跨设备环境中跑通本地执行用例。

## 关联条目
- [[gemini-intelligence]] — AppFunctions API的服务调用方
- [[端侧agent协议标准之争]] — AppFunctions API vs MCP的竞争