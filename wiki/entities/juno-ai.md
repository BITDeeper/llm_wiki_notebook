---
type: entity
title: Juno AI
tags: [internal-project, apple, customer-service]
related: [apple, claude-code, anthropic]
created: 2026-05-02
updated: 2026-05-02
sources: ["苹果官方app惊现claude.md，24小时秒删！4万亿帝国ai底裤被扒光.md"]
---

# Juno AI

Juno AI 是 Apple 内部大模型平台的代号。该平台主要用于支持 Apple 的客服系统（Apple Support），旨在通过 AI 辅助真人客服或直接处理用户咨询。

## 系统架构

根据泄露的 `CLAUDE.md` 文件，Juno AI 采用了模块化的设计：
- **Client（用户）**：发起咨询的终端用户。
- **Agent（客服）**：Apple 的真人客服人员，AI 辅助其决策。
- **Assistant（AI助手）**：基于 Claude 的智能体，负责生成回复和建议。
- **SupportAssistantAPIProvider**：连接前端聊天界面与后端 AI 模型的 API 接口。
- **ChatKit**：Apple 内部用于处理真人客服交互的平台。

## 技术实现

- **开发工具**：系统核心代码主要由 [[Claude Code]] 生成。
- **编译标志**：代码中包含 `JUNO_ENABLED` 和 `DEV_BUILD` 等条件编译标志，表明该系统处于活跃开发状态。
- **Bug 追踪**：文件引用了 Apple 内部的 Bug 追踪系统条目，显示了规范的工程管理流程。

## 泄露事件

Juno AI 的存在因 2026 年 4 月 30 日 Apple Support App 的更新失误而公之于众。这是首个证实 Apple 将 Claude 深度整合进核心业务流程的直接证据。