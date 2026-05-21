---
type: concept
title: Skills 机制
tags: [technical-feature, claude-code, extensibility]
related: [claude-code, caveman, anthropic]
created: 2026-04-06
updated: 2026-04-06
sources: ["逼ai当山顶洞人！claude防话痨插件爆火，网友：受够了ai废话.md"]
---

# Skills 机制

[[Skills 机制]] 是 [[Anthropic]] 为 [[Claude Code]] 提供的一种扩展功能，允许用户通过简单的文件定义来改变模型的行为。

## 工作原理
开发者只需在项目目录下创建一个 `SKILL.md` 文件。Claude 会自动识别该文件，并根据其中的 `description` 决定何时自动加载，或通过 `name` 触发斜杠命令（如 `/caveman`）。

## 应用价值
这一机制使得像 [[caveman]] 这样的“仅靠提示词”插件成为可能。用户无需修改底层模型或编写复杂代码，即可通过定义系统提示词来定制 AI 的输出风格（例如启用 [[超压缩通信模式]]）。

## 生态意义
它类似于早期 VS Code 的扩展生态，鼓励社区开发轻量级、细分的工作流工具，丰富了 Claude Code 的可用性。