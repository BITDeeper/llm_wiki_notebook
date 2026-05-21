---
type: concept
title: AI Agent 技能生态
tags: [agent-ecosystem, plugin-system, ai-apps]
related: [openclaw, clawhub, 任务执行范式]
created: 2026-03-04
updated: 2026-03-04
sources: ["龙虾部署不求人，还附5个openclaw必备技能.md"]
---

# AI Agent 技能生态

[[ai-agent-技能生态]] 指围绕 AI 智能体构建的、可插拔的功能扩展体系。类似于智能手机的 App Store，通过插件赋予 AI 基础模型之外的具体执行能力。

## 核心特征
- **模块化**：功能被封装为独立的技能包，按需加载。
- **可组合**：用户可以根据具体场景组合不同技能，形成定制化的解决方案。
- **第三方开发**：允许社区开发者贡献技能，丰富应用场景。

## 意义
这一生态标志着 AI 竞争从单纯的“模型能力比拼”（如谁的逻辑更强）转向“应用生态与工具链整合”（如谁能更好地调用 API、操作本地软件）。[[openclaw]] 的 [[ClawHub]] 即是这一概念的具象化体现。

## 典型技能分类
- **外部工具调用**：如 [[n8n]]、[[Tavily]]。
- **本地系统集成**：如读写 [[Obsidian]]、操作文件系统。
- **SaaS 服务对接**：如 Google Workspace (GOG)。