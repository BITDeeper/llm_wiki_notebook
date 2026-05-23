---
type: concept
title: CDP协议操控桌面应用
created: 2026-05-16
updated: 2026-05-16
tags: [cdp, electron, 桌面自动化, 浏览器协议]
related: [opencli, 浏览器命令行化]
sources: ["别让模型烧token了！github-20k星神作：把全网变成命令行.md"]
---
# CDP协议操控桌面应用

通过 Chrome DevTools Protocol（CDP）直接操控基于 Electron 框架的桌面应用界面，无需手动鼠标操作。这是 [[浏览器命令行化]] 范式从网页向桌面应用延伸的关键技术。

## 原理

Electron 桌面应用本质上内嵌了 Chromium 渲染引擎，因此暴露了 CDP 调试接口。通过该接口可以程序化地控制应用界面的元素操作、数据读取和功能调用。

## 已覆盖应用

- **Cursor** — Composer、聊天、代码提取
- **ChatGPT macOS 桌面端** — 自动化操作
- **Notion** — 搜索、读取、写入页面
- **OpenAI Codex CLI** — 无头驱动
- **Discord 桌面端** — 消息、频道、服务器操作
- **豆包 AI** — 界面操控
- **ChatWise** — 多模型客户端操作

## 意义

CDP 协议操控将 CLI 自动化的边界从网页扩展到桌面应用，进一步减少了需要人工介入的操作场景，强化了"能本地执行的操作尽量不走模型推理"的理念。