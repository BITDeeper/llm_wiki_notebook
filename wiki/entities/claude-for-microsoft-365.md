---
type: entity
title: Claude for Microsoft 365
tags: [anthropic, office, plugin, agent, productivity]
related: [anthropic, 任务执行范式, 跨应用上下文保持, 原生对象编辑, 修订模式集成]
created: 2026-05-10
updated: 2026-05-10
sources: ["不怕搞烂excel公式！claude杀入微软全家桶，一段话跑完4个office.md"]
---

# Claude for Microsoft 365

[[Claude for Microsoft 365]] 是 [[Anthropic]] 发布的 Office 深度集成插件套件，包含 Excel、PowerPoint、Word 和 Outlook 四个组件。它旨在将 Claude 从单一的聊天问答工具转变为深度嵌入工作流的智能体。

## 核心特性

### 跨应用上下文保持
这是该套件的核心卖点。在相关文件都已打开且跨应用功能开启的情况下，Claude 可以在不同应用间切换时保留任务上下文。例如，用户从 Outlook 切换到 Word 起草文档，再切换到 Excel 建模，最后回到 Outlook 发送邀请，全程无需重复解释项目背景。

### 原生对象编辑
- **Excel**：支持多 Sheet 建模，能够理解并保留复杂的公式引用关系，在更新假设时不会破坏现有公式结构。
- **PowerPoint**：生成的图表是原生可编辑对象，而非截图，能够完全遵循用户预设的模板样式、色板和占位符规则。
- **Word**：支持 [[修订模式集成]]，所有修改通过 Tracked Changes 呈现，支持回应评论线程，确保改动进入标准的审阅流程。

### 被动式智能体限制
出于安全考虑，Claude 目前只能读写用户当前已打开的文件，不具备主动创建、打开或切换文件的能力。这种 [[被动式智能体]] 的设计限制了全自动化的上限，但有效防止了 AI 越界操作，确保了用户对工作流的最终控制权。

## 部署与权限
- **个人用户**：直接安装即可使用。
- **企业用户**：管理员可通过 Microsoft Admin Center 部署。Outlook 插件需要全局管理员完成 Microsoft Graph 的租户级授权（涉及 Mail.ReadWrite、Calendars.Read 等权限）。
- **路由支持**：支持通过企业现有的 LLM Gateway（如 Amazon Bedrock、Azure AI Foundry）进行路由。

## 适用场景
主要服务于金融、咨询、法务和项目管理等领域，解决知识工作者在多应用间频繁切换导致的信息损耗和重复劳动问题。