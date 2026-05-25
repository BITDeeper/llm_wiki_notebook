---
type: concept
title: Claude Dreams（梦境）
created: 2026-05-25
updated: 2026-05-25
tags: [claude, 记忆整合, dreams, anthropic, rem睡眠]
related: [claude-conway, claude-memory-files, anthropic, 自进化架构, claude-code]
sources: ["claude「永久大脑」，真的来了！.md"]
origin_date: 2026-05-01
---
# Claude Dreams（梦境）

Dreams 是 Anthropic 推出的异步后台记忆整合机制，灵感直接来自人类神经科学中的 REM（快速眼动）睡眠。如果说 [[claude-memory-files|文件记忆]] 是 Claude 的「海马体」，Dreams 就是它的 REM 睡眠。

## 灵感来源

人类在 REM 睡眠阶段，大脑会回放白天经历、强化重要记忆连接、丢弃无用噪声信息，并将短期记忆整合为长期记忆。不经历 REM 睡眠的人记忆力显著下降。Anthropic 将同样的逻辑搬到 Claude 身上。

## 工作机制

当 Claude 智能体在两次工作会话之间「闲下来」时，Dreams 自动启动，对积累的记忆文件进行深度整合：

- **合并重复项**：把分散在不同文件里的同一话题信息归拢到一起
- **替换过时条目**：将「昨天我们决定用 Redis」自动转换为「2026年5月15日我们决定用 Redis」
- **解决逻辑矛盾**：两条记忆冲突时保留更新、更可靠的那一条
- **挖掘隐藏模式**：发现实时对话中人类和 AI 都没注意到的规律

## 触发条件

在 [[claude-code|Claude Code]] 中以「Auto Dream」形式率先落地，触发条件为：

- 至少累积 5 次对话
- 距离上次整合超过 24 小时
- 手动输入 `/dream` 命令触发

## 首批企业数据

Netflix、Rakuten、Wisedocs 等首批接入企业报告：

- 首次处理错误率暴降 97%
- 文档验证提速 30%

> 注：以上数据来源单一，缺乏独立验证。

## 发布时间线

- **2026年5月初**：Code with Claude 旧金山开发者大会首次公布
- **2026年5月**：在 Claude 主界面侧边栏灰度测试中现身

## 战略意义

Dreams 是 [[自进化架构]] 在记忆维度的具体体现——AI 系统能够自主整合、优化自身记忆，无需人工干预。它与文件记忆共同为 [[claude-conway|Conway]] 永不下线智能体提供底层基座：文件记忆提供存储，Dreams 提供维护。