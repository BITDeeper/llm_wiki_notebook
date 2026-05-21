---
type: source
title: "今天起，DeepSeek V4成OpenClaw默认模型！"
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/0FaIoY1HBqKO0R_vGTxbcA"
venue: "新智元"
tags: [openclaw, deepseek-v4, agent-framework, google-meet, voice-ai]
related: [openclaw, deepseek-v4, google-meet, 实时语音循环, 默认模型]
created: 2026-04-26
updated: 2026-04-26
sources: ["今天起，deepseek-v4成openclaw默认模型！.md"]
---

# 今天起，DeepSeek V4成OpenClaw默认模型！

## 摘要
OpenClaw 在 2026.4.24 版本更新中，宣布将 [[DeepSeek V4]] Flash 设为默认大模型，标志着中国开源模型在全球顶级 Agent 框架中的核心地位提升。此次更新还深度集成了 [[Google Meet]]，增强了实时语音交互能力，并对浏览器自动化和插件架构进行了工程优化。

## 核心要点

### 模型更新
- **默认模型变更**：[[DeepSeek V4]] Flash 正式成为 OpenClaw 的默认“大脑”，用户首次启动即自动选用。
- **双版本接入**：同时上线 DeepSeek V4 Pro（1.6T 参数）和 Flash（284B 参数），均支持 100 万 token 上下文及 MIT 协议。
- **工程修复**：修复了 DeepSeek 在多轮工具调用中的 `thinking` 和 `replay` 行为，补齐了相关占位逻辑，提升了长链路任务的稳定性。

### 交互与集成
- **Google Meet 集成**：作为内置插件加入，支持个人账号授权、显式 URL 加入及实时传输。系统可处理会议记录、转写、智能笔记及历史回查，将会议转变为可被 Agent 调用的工作节点。
- **实时语音循环**：通过 `openclaw_agent_consult`，电话或会议中的语音可触发后台 Agent 逻辑（查上下文、调工具、组织答案）。
- **Gemini Live**：新增 Google 提供的实时语音接口，支持双向音频和函数调用。

### 工程与架构
- **浏览器自动化**：新增视口坐标点击（`viewport coordinate clicks`）作为兜底方案；延长默认 action budget 至 60 秒；支持 Profile 级别的 headless 设置。
- **插件轻量化**：模型列表改用静态目录，插件信息从 manifest 暴露，实现懒加载，减少启动负担。
- **SDK 破坏性变更**：移除了 `api.registerEmbeddedExtensionFactory` 兼容路径，强制迁移至 `api.registerAgentToolResultMiddleware`，旨在清理技术债务。

## 意义
此次更新表明 OpenClaw 正从单纯的聊天产品演变为全功能的**工作流系统**。[[DeepSeek V4]] 的接入解决了核心模型能力问题，而会议与语音的强化则拓展了其协作入口，底层的工程优化则支撑了复杂任务的稳定运行。
