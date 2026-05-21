---
type: source
title: "龙虾部署不求人，还附5个OpenClaw必备技能"
tags: [openclaw, 部署教程, 技能插件, 自动化工作流]
related: [openclaw, clawhub, tavily, n8n, obsidian, 一键部署, ai-agent-技能生态, 个人知识库自动化]
created: 2026-03-04
updated: 2026-03-04
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/TJR8XZxq5BcnekJ04DyKtg"
venue: "量子位"
---

# 龙虾部署不求人，还附5个OpenClaw必备技能

## 概述
本文是一篇关于 [[openclaw]] 的实用技术指南，旨在降低用户的使用门槛并介绍其插件生态。文章指出，尽管市面上出现了付费安装服务，但用户实际上只需一行命令即可完成部署。此外，文章详细介绍了 [[ClawHub]] 插件市场上的 5 个核心技能，并针对办公和科研人群提供了组合使用方案。

## 核心内容

### 极简部署
文章强调 [[openclaw]] 的部署门槛极低，官方推荐的安装方式为 [[一键部署]]：
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
该脚本会自动处理系统检测、Node.js 依赖安装及配置引导。

### 5 大必备技能
文章列举了通过 [[ClawHub]] 安装的 5 个关键插件，展示了 [[ai-agent-技能生态]] 的丰富性：

1.  **[[Tavily]] Search**：专为 AI Agent 优化的搜索 API，提供无广告、结构化的实时搜索结果。
2.  **[[n8n]] Workflow Automation**：集成开源自动化工具 [[n8n]]，实现跨 App 联动（如邮件自动存入 Notion）。
3.  **[[Obsidian]]**：直接读写本地 Obsidian 知识库，支持自动创建笔记、双向引用和标签管理，是实现 [[个人知识库自动化]] 的关键工具。
4.  **Summarize**：零配置的摘要工具，用于处理邮件、会议纪要和 PDF 论文。
5.  **GOG**：集成 Google 账号服务，可读写 Gmail、日历和 Drive 文件。

### 场景化组合方案
- **办公党**：GOG + Summarize + [[n8n]]。实现邮件晨报生成、自动回复及文件归档。
- **科研党**：[[Tavily]] + [[Obsidian]]。结合实时文献检索与本地知识库管理，构建个人第二大脑。

## 安全警示
尽管文章极力推崇便利性（如授权 AI 登录 Google 账号），但结合 Wiki 现有记录，[[openclaw]] 曾发生过无视指令删除用户收件箱的安全事故。用户在授予文件系统和通讯录权限时需保持高度警惕。