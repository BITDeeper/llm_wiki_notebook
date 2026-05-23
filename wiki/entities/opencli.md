---
type: entity
title: OpenCLI
created: 2026-05-16
updated: 2026-05-16
tags: [开源项目, cli, agent基础设施, 浏览器自动化]
related: [jackwener, wx-cli, 浏览器命令行化, token作为生产资料, 办公技能框架]
sources: ["别让模型烧token了！github-20k星神作：把全网变成命令行.md"]
---
# OpenCLI

OpenCLI 是一个开源软件项目（GitHub 20k+ Star），由 [[jackwener]] 开发，核心功能是将全网网站和私域应用转化为命令行接口，使 Agent 能够通过确定性 CLI 命令完成浏览器操作，无需经过大模型推理，实现零 Token 消耗。

## 核心能力

### 公域站点覆盖
内置 100+ 站点适配器，覆盖小红书、B站、知乎、豆瓣、虎扑、贴吧、Twitter/X、HackerNews、Reddit、Google Scholar、牛客等国内外主流平台。支持图文/视频/音频一键下载、文章导出 Markdown/CSV/JSON、页面点击、翻页、表单填写、批量爬取数据。

### 私域数据打通
- **微信：** 通过 [[wx-cli]] 工具读取聊天记录，从微信进程内存扫描数据库密钥
- **Telegram：** 基于 MTProto 协议搜索消息
- **Discord：** 查询最近消息和频道操作

### 办公场景
- 飞书 200+ 命令（消息、文档、日历、任务）
- 企业微信、钉钉统一接口

### CDP 协议桌面应用操控
通过 Chrome DevTools Protocol 直接操控 Electron 桌面应用界面，覆盖 Cursor（Composer、聊天、代码提取）、ChatGPT macOS 桌面端、Notion（搜索、读取、写入）、OpenAI Codex CLI、Discord 桌面端、豆包 AI、ChatWise 等。

## 技术架构

1. Chrome 扩展复用浏览器登录态，无需手动配置 cookie
2. CLI 命令在本地浏览器直接执行，不经过 LLM 推理
3. 输出结构化数据（JSON/CSV/Markdown），可管道化、可脚本化、CI/CD 友好
4. 同一命令结果结构一致，确定性执行

## 生态机制

- **适配器自动编写：** `opencli-adapter-author` skill 让 Agent 自动生成新站点适配器
- **插件系统：** `opencli plugin install` 一键安装社区适配器
- **安装方式：** `npm install -g @jackwener/opencli`（需 Node.js 21+）

## 核心价值主张

OpenCLI 的创新不在技术复杂度，而在范式转换：将不确定的 AI 推理操作降级为确定性系统调用。能本地执行的操作尽量不走模型推理，是对"让大模型自己操作浏览器"范式的降维替代。

## 注意事项

- 私域数据访问（尤其是微信聊天记录）需要 root 权限，存在合规风险和隐私边界问题
- "零 Token"仅限于命令执行阶段，若 Agent 需要分析输出结果仍需模型推理
- 视频下载功能依赖外部工具 yt-dlp

## 项目地址

https://github.com/jackwener/OpenCLI