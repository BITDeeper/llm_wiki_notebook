---
type: entity
title: Jason Liu
created: 2026-05-23
updated: 2026-05-23
tags: [人物, openai, codex, 开源]
related: [codex, codex-maxxing, openai, instructor-lib]
sources: ["openai大神教你如何榨干codex.md"]
---
# Jason Liu

OpenAI Codex 团队成员，13k 星开源库 Instructor 的作者。2026 年加入 OpenAI 后不久，在社交平台公开发布《Codex-maxxing》使用指南，毫无保留地分享了自己将 [[codex]] 改造为持续运行工作系统的全套方法论。

## 核心贡献

- **[[codex-maxxing]] 方法论**：提出将 Codex 使用效率推到极致的完整体系，涵盖长线程管理、Heartbeats 定时调度、本地记忆、验证机制等
- **"AI 员工"范式**：通过 Heartbeats + @computer 组合，让 Codex 从被动工具变为主动巡检、自动执行的数字员工
- **本地文件记忆策略**：以 Obsidian vault 为核心记忆基础设施，强调数据主权和可迁移性

## 方法论要点

- 开设跨月存活的巨型线程，不随意终止，让 Agent 积累连续性
- 下任务主要靠口述而非打字，保留原始思路的模糊性和跳跃性
- 最强调验证机制——"没有验证机制的野心，顶多算个愿望"
- 喜欢用带 JS 和 CSS 的单文件 index.html 作为交付形式

## 实践案例

- 让 Codex 每 30 分钟扫描 Slack 和 Gmail，起草回复草稿但不发送
- 做动画项目时每 15 分钟检查审阅线程，自动重新渲染并上传
- 洗澡前让 Codex 盯着亚马逊客服排队，洗完退款已到账
- 让 Codex 将 Python 的 Rich 库完整迁移到 Rust，硬性要求通过所有单元测试