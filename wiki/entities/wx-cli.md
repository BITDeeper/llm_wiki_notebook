---
type: entity
title: wx-cli
created: 2026-05-16
updated: 2026-05-16
tags: [开源工具, 微信, cli, 私域数据]
related: [opencli, jackwener, 私域数据cli化]
sources: ["别让模型烧token了！github-20k星神作：把全网变成命令行.md"]
---
# wx-cli

[[opencli]] 生态下的独立工具，由 [[jackwener]] 开发，用于读取微信聊天记录。安装命令为 `npm install -g @jackwener/wx-cli`。

## 工作原理

1. `wx init` 初始化，自动检测微信数据目录
2. 从微信进程内存中扫描数据库密钥
3. 解密本地微信数据库，提取聊天记录

## 使用方式

- `wx session` — 拉取会话列表
- `wx history` — 查找某个联系人的历史会话，支持关键词搜索
- 输出格式支持 JSON 和 CSV

## 技术要求

- 需要 root 权限（macOS 上需 `sudo wx init`）
- 微信必须处于登录状态
- 仅通过内存密钥扫描访问本地数据，不涉及网络拦截

## 合规提醒

微信聊天记录读取属于灰色地带，实际访问和部署属于个人行为，使用前需仔细评估合规风险和隐私边界。