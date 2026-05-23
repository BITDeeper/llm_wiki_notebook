---
type: source
title: "别让模型烧Token了！GitHub 20k星神作：把全网变成命令行"
created: 2026-05-16
updated: 2026-05-16
tags: [opencli, cli, agent基础设施, token优化, 开源项目]
related: [opencli, 浏览器命令行化, token作为生产资料, 量子位]
sources: ["别让模型烧token了！github-20k星神作：把全网变成命令行.md"]
authors: [闻乐, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/QvvriYIJrulyLMb0xHfWvQ"
venue: 量子位公众号
---
# 别让模型烧Token了！GitHub 20k星神作：把全网变成命令行

量子位发布的关于开源项目 [[opencli]] 的产品体验报道。文章核心介绍 OpenCLI 如何将全网网站和私域应用转化为命令行接口，实现 Agent 自动化操作的零 Token 消耗。

## 核心内容

- **项目定位：** OpenCLI 将浏览器操作从 GUI 转化为确定性 CLI 命令，绕过大模型推理，实现零 Token 消耗的自动化操作。
- **技术机制：** Chrome 扩展复用登录态 → CLI 命令本地执行 → 结构化输出（JSON/CSV/Markdown）→ 可管道化、可脚本化。
- **私域数据打通：** 通过 [[wx-cli]] 等工具统一接管微信、Telegram、Discord 等封闭聊天平台数据，使其可搜索、可导出、可自动化。
- **CDP 协议扩展：** 通过 Chrome DevTools Protocol 直接操控 Electron 桌面应用界面（Cursor、ChatGPT 桌面端、Notion 等）。
- **生态机制：** 提供 `opencli-adapter-author` skill 让 Agent 自动编写适配器，社区通过 `opencli plugin install` 共享。

## 关键数据

- GitHub 20k+ Star
- 100+ 内置站点适配器
- 覆盖公域（知乎、B站、Reddit 等）和私域（微信、Telegram、Discord）
- 飞书 200+ 命令覆盖

## 关联概念

文章呼应了 [[token作为生产资料]] 的现实紧迫性，与 [[办公技能框架]] 的模块化思路有相似之处，[[vibe-coding]] 在适配器自动编写中得到具体应用。