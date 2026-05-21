---
type: source
title: 别养龙虾了，硅谷Agent新潮流是「爱马仕」
tags: [agent, hermes-agent, open-source, nous-research]
related: [hermes-agent, nous-research, openclaw, 学习闭环, 技能市场]
created: 2026-04-13
updated: 2026-04-13
authors: [鱼羊]
year: 2026
url: "https://mp.weixin.qq.com/s/YfJUaqRVfetZYj_ZGP7Lpg"
venue: 量子位
sources: ["别养龙虾了，硅谷agent新潮流是「爱马仕」.md"]
---

# 别养龙虾了，硅谷Agent新潮流是「爱马仕」

## 概述
本文介绍了由 [[nous-research]] 开发的开源 AI 智能体 [[hermes-agent]]。文章将其定位为 [[openclaw]] 的强力替代品，强调了其“持续学习和自我进化”的能力，并详细记录了其安装配置流程、核心功能特性（如学习闭环、多层级记忆系统）以及社区反馈。

## 核心要点

### 功能特性
- **学习闭环**：在完成复杂任务后，自动从中提炼可复用的 Skills，保存为独立文档，并在后续使用中根据反馈自我改进。
- **多层级记忆系统**：结合 FTS5 会话搜索和 LLM 摘要生成，加强跨会话回忆和长期项目追踪。
- **原生微信支持**：支持扫码连接个人微信，可处理图片、视频、文件和语音消息。
- **低成本运行**：空闲时几乎不消耗 Token，官方声称 $5/月的服务器即可 7x24 小时运行。

### 安装与配置
- 提供一键安装脚本，支持 Linux、macOS、Windows 及 Android (Termux)。
- 自动检测并支持导入 [[openclaw]] 的配置、记忆和技能。
- 支持多种模型 API（GPT, Claude, DeepSeek 等），要求上下文窗口至少 64K。

### 社区反响
- 上线一个月 GitHub 标星数达 6.66 万+，霸榜 GitHub Trending。
- 用户实测在深度研究项目中表现优于 [[openclaw]]。
- 目前缺乏类似 [[openclaw]] 的 [[技能市场]]，被认为是构建生态“飞轮”的缺失部分。

## 关键人物
- [[tekium]]：Nous Research 联合创始人兼后训练负责人，Hermes 在 X 上最活跃的贡献者。

## 相关工具
- [[manim]]：著名数学频道 3Blue1Brown 使用的动画引擎，被 Hermes 提炼为自带技能的示例。