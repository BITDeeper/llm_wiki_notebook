---
type: entity
title: pwiz-ai
tags: [repository, context-engineering, ai-configuration]
related: [brendan-maclean, skyline, claude-code]
created: 2026-04-29
updated: 2026-04-29
sources: ["和anthropic-ceo一起发过nature，他用claude-code复活三年烂尾代码.md"]
---

# pwiz-ai

`pwiz-ai` 是 [[brendan-maclean]] 为 [[skyline]] 项目创建的一个独立代码仓库，专门用于存放给 [[claude-code]] 阅读的上下文信息。

## 设计目的
由于浏览器版的 Claude.ai 每次对话都像从零开始，无法持久记忆项目的复杂逻辑，Brendan 创建了这个独立仓库，作为 AI 的“说明书”或“入职培训材料”。

## 核心内容
该仓库构建了**三层上下文结构**，成为 [[上下文工程]] 的典范：
1. **CLAUDE.md**：位于根目录，充当项目的“地形图”，描述项目结构、编译方式和测试流程。
2. **Skills**：存放专业技能定义。例如 `debugging` skill 会强制 Claude 在排查问题时先进行根因分析，避免“盲猜试错”。
3. **MCP 集成**：通过 Model Context Protocol 让 AI 能够直接读取测试数据、异常报告和用户工单，赋予其“感知”能力。

## 影响
`pwiz-ai` 的建立使得沟通成本断崖式下降，让 Claude 能够像一位熟悉项目的资深开发者一样工作，成功复活了搁置多年的遗留代码。