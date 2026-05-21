---
type: concept
title: CLI 与 GUI 的关系
created: 2026-04-19
updated: 2026-04-19
tags: [paradigm, agent, interface]
related: [gui-agent, claude-code, clawgui]
sources: ["教龙虾玩手机！打通gui智能体训练-评测-部署全流程，训练、真机、评测一站解决.md"]
---

# CLI 与 GUI 的关系

在 AI 智能体时代，命令行界面（CLI）与图形用户界面（GUI）呈现出互补而非替代的关系。

## CLI Agent

- **代表**：[[claude-code]]、Gemini CLI。
- **特点**：高效、直接，适合代码生成、文件操作等计算密集型任务。
- **局限**：通常依赖 API，对于没有 API 的应用（如微信、银行 App）无能为力；执行过程对用户不可见（黑盒）。

## GUI Agent

- **代表**：[[clawgui]]、AutoGLM。
- **特点**：直接操作屏幕，通用性强，无需 API 支持。
- **优势**：
  - **可见性**：用户可以看到屏幕上的操作过程，提供了一种独特的信任机制（特别是在支付等敏感操作时）。
  - **兼容性**：能够操作人类使用的任何现有应用。

## 融合趋势

未来的通用 Agent 可能会结合两者优势：利用 CLI 高效处理后台计算和逻辑，利用 GUI 处理人机交互、视觉验证以及无接口应用的自动化操作。