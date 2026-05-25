---
type: source
title: "OpenAI大神教你如何榨干Codex"
created: 2026-05-23
updated: 2026-05-23
tags: [codex, ai编程, agent, openai, 使用方法论]
related: [codex, jason-liu, codex-maxxing, agentic-engineering, 1-n-agent调度]
sources: ["openai大神教你如何榨干codex.md"]
authors: [闻乐, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/sUdAmzf5ymUMBxWKFVxnwg"
venue: 量子位
---
# OpenAI大神教你如何榨干Codex

量子位发布的深度报道，围绕 OpenAI Codex 团队新成员 [[jason-liu]]（Jason Liu）撰写的《Codex-maxxing》使用指南展开。文章系统拆解了 Jason 将 [[codex]] 从被动工具改造为持续运行工作系统的全套方法论。

## 核心内容

- **跨月存活巨型线程**：不关闭的长期会话线程，积累数月对话历史、偏好和决策，使 Agent 具备连续性
- **Heartbeats + @computer 组合拳**：定时任务调度配合计算机操控能力，让 Codex 从工具变为主动"员工"
- **本地文件记忆策略**：核心工作记忆存储在 Obsidian vault 而非平台内部，体现数据主权理念
- **验证机制**：为 Agent 任务设定明确的完成标准，"没有验证机制的野心，顶多算个愿望"
- **口述 > 打字**：保留原始思路的模糊性和跳跃性，比精心优化 Prompt 更有效

## Codex 最新功能更新（2026年5月）

- Goal 模式从实验版正式转正
- Appshots 截图直喂
- 远程锁屏后继续工作
- 侧边栏渲染升级（Markdown、PDF、PPT）
- Connectors 和 Skills 可复用工作流模版

## 关键数据

- Codex 周活用户 2026 年 4 月底突破 400 万