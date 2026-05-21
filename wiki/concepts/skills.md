---
type: concept
title: Skills
tags: [openai, automation, extension, integration]
related: [codex, agent-指挥中心, automations, 一切皆由代码控制]
created: 2026-02-03
updated: 2026-02-03
sources: ["openai-codex桌面版深夜突袭！一人指挥agent军团，程序员彻底告别996.md"]
---

# Skills

[[Skills]]（技能）是 [[OpenAI]] 在 [[Codex]] 桌面应用中引入的一种核心扩展机制。它将工具、开发规范、API 密钥和指令封装为可复用的单元，使 AI 智能体能够执行超出单纯代码生成的复杂操作。

## 工作原理
Skills 本质上是打包好的指令、资源和脚本。通过调用 Skills，Codex 可以可靠地连接外部工具、运行工作流，并按照团队的习惯完成任务。

## 典型应用场景
- **设计实现**：从 Figma 拉取设计稿并转化为生产级 UI 代码。
- **项目管理**：在 Linear 中自动分类 Bug、追踪发布进度。
- **云端部署**：将构建好的 Web 应用一键部署到 Vercel 或 Cloudflare。
- **文档处理**：自动创建、编辑和排版 PDF 或电子表格。

## 生态意义
Skills 的存在体现了 [[一切皆由代码控制]] 的哲学。只要 AI 能生成代码，它就能通过代码脚本操控计算机的各类功能。OpenAI 内部已构建了数百个 Skills，并开源了部分 Agent Skills 供社区使用。

## 参见
- [[Automations]]
- [[Codex]]