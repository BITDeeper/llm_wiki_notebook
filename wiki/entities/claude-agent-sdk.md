---
type: entity
title: Claude Agent SDK
tags: [anthropic, sdk, open-source, agent-framework, 智能体, 框架, 代码生成]
related: [claude-code, claude-cowork, anthropic, opus-4-5, 双智能体架构, 上下文压缩, puppeteer-mcp]
created: 2026-01-14
updated: 2026-05-07
sources: ["claude自己写出claude！2小时干完两月活，人类在工位上多余了？.md", "ai也能换岗了！anthropic教智能体交接班，不怕长任务断片.md"]
---

# Claude Agent SDK

**Claude Agent SDK** 是 [[anthropic]] 提供的通用智能体框架与软件开发工具包，旨在支持 AI 模型（特别是 [[claude]]）执行复杂、多步骤的任务，广泛应用于编码和全栈开发领域。

## 核心能力
该 SDK 允许开发者构建自主 Agent 应用，具备以下关键特性：
- **多功能集成**：不仅擅长编码，还能查资料、调用工具、规划步骤和执行任务。
- **上下文管理**：内置 [[上下文压缩]]（Compaction）功能，允许智能体在不耗尽上下文窗口的前提下继续工作，延长单次会话的有效时长。

## 架构设计
为了解决长时运行任务中的记忆缺失问题，该 SDK 引入了 [[双智能体架构]]：
1. **初始化智能体**：负责搭建初始环境（脚本、日志、Git 提交）。
2. **编码智能体**：负责渐进式推进和功能实现。

尽管具备上下文压缩能力，但仅靠模型内部上下文仍难以跨越数小时的复杂任务。因此，SDK 强调结合外部状态管理（如 Git、JSON 文件）来模拟长期记忆。

## 应用与影响
在 [[claude-cowork]] 发布后，开发者社区利用 Claude Agent SDK 复刻了类似的功能。有开发者表示，基于该 SDK 开发的应用“做得挺好”，并计划将其开源。

这一现象表明：
1.  **Agent 形态的普及**：类似 [[claude-cowork]] 的通用任务执行 Agent 正成为 2026 年 AI 应用层的主流趋势。
2.  **生态系统的开放性**：[[anthropic]] 通过 SDK 赋能开发者，使其能够快速构建定制化的 Agent 解决方案，而非仅限于官方产品。

## 参见
- [[claude-code]]：底层技术支持。
- [[claude-cowork]]：由 Claude Code 构建的官方 Agent 应用，其功能可被 SDK 复刻。
- [[opus-4-5]]：在该框架中被测试的顶级编码模型。
- [[puppeteer-mcp]]：常与该 SDK 结合使用，用于端到端测试。