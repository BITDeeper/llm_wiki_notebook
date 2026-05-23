---
type: source
title: "刚刚，OpenAI Codex登陆ChatGPT手机App，所有用户都能用"
created: 2026-05-15
updated: 2026-05-21
tags: [ai编程, codex, openai, 移动端, agent]
related: [codex, openai, chatgpt-app, codex移动端上线-20260515]
sources: ["刚刚，openai-codex登陆chatgpt手机app，所有用户都能用.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/BDEjgBgTbSsaOY0_QXbT1w"
venue: 机器之心
---
# 刚刚，OpenAI Codex登陆ChatGPT手机App，所有用户都能用

## 摘要

2026年5月15日，[[openai]] 宣布 [[codex]] 编程智能体功能正式集成到 ChatGPT 移动应用中，iOS 和 Android 平台同步开启预览，面向所有套餐用户（含免费版和 Go 版）开放。此次更新标志着 AI 编程工具从桌面端向全场景、全时段协作的演进。

## 核心内容

### 移动端协作能力
- 用户可通过手机处理所有线程、查看输出结果、批准命令、更改模型、启动新项目
- 文件、凭据、权限和本地设置保留在运行 Codex 的电脑上
- 更新内容（屏幕截图、终端输出、差异、测试结果、批准信息）实时传输到手机
- 底层采用[[安全中继层]]，确保跨设备安全访问，不暴露于公共互联网

### 远程 SSH 正式发布
- 桌面应用自动检测 SSH 配置主机，支持在远程计算机上创建项目和运行线程
- 通过同一安全中继基础设施在已授权的 ChatGPT 设备上访问远程环境

### 企业级功能更新
- [[程序化访问令牌]]：可从 ChatGPT 工作区设置中颁发的作用域凭据，用于 CI 管道、发布工作流和内部自动化
- [[hooks-codex]]：普遍可用，支持扫描秘密信息、运行验证器、记录对话、创建记忆、自定义行为
- HIPAA 合规模式：支持在本地环境中以符合 HIPAA 标准的方式使用 Codex 运行 ChatGPT Enterprise 工作区

### 关键数据
- 每周超过 400 万人使用 Codex

### 待发布
- Windows 版 Codex 应用的手机连接功能稍后推出

## 关联概念
- [[1-n-agent调度]]：移动端使"随时随地向 AI 派活"成为现实
- [[tokenmaxxing]]：移动端接入将进一步推高 Token 消耗量
- [[agent-view]]：与 Claude Code 的多会话调度界面形成直接竞争