---
type: entity
title: autoDream
tags: [feature, claude-code, memory, privacy]
related: [claude-code, 数据裸奔]
created: 2026-04-02
updated: 2026-04-02
sources: ["claude-code源码首爆高危漏洞，偷拍毫无察觉！8100个库连夜封杀.md"]
---

# autoDream

autoDream 是 [[claude-code]] 中一个尚未正式发布的实验性功能，旨在通过后台分析用户历史会话来构建长期记忆。

## 工作机制

1. **后台扫描**：自动扫描所有本地存储的会话记录（JSONL 格式）。
2. **信息提取**：从历史记录中提取关键信息。
3. **记忆写入**：将提取的信息写入 `MEMORY.md` 文件。
4. **上下文注入**：在未来的会话中，将 `MEMORY.md` 的内容注入到系统提示词中。
5. **云端回传**：这些增强的上下文最终会回传至 Anthropic 的 API。

## 隐私争议

虽然 autoDream 提升了 AI 的上下文感知能力，但其激进的数据挖掘引发了严重的隐私担忧：

- 它打破了"单次会话"的隐私边界，将所有历史数据视为可用资源。
- 用户可能并未意识到其历史对话被用于构建永久性记忆并上传云端。
- 这被视为 **[[数据裸奔]]** 的典型表现。
