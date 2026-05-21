---
type: entity
title: Claudeonomics
tags: [leaderboard, internal-tool, metric-gaming, case-study]
related: [meta, tokenmaxxing, checkpoint, ai-insights]
created: 2026-04-26
updated: 2026-04-26
sources: ["刷token走火入魔！meta员工写外挂作弊冲榜，1个月烧掉200万美元.md"]
---

# Claudeonomics

Claudeonomics 是 Meta 内部曾短暂存在的一个 AI Token 消耗量排行榜。它展示了全公司员工的 AI 使用情况，按 Token 消耗量进行排名，并设有游戏化的段位体系（如铜牌、银牌、金牌、翡翠、永恒会话，最高为“Token 传奇”）。

## 事件经过

- **起因**：Meta 内部为了推广 AI 工具的使用，创建了该排行榜，仅展示前 250 名。
- **规模**：覆盖 Meta 8.5 万名员工，据报道称 30 天内全公司 Token 总消耗超 60 万亿（约等于人类历史上所有出版书籍 Token 量的 3 倍）。
- **极端案例**：有员工单月消耗了 3285 亿 Token，按 Anthropic 公开定价估算成本接近 200 万美元。
- **结果**：在 2026 年 4 月被 The Information 曝光后，该排行榜从 Meta 内网撤下。

## 引发的行为

该排行榜直接催生了 [[tokenmaxxing]] 现象。为了冲榜，员工采取了各种手段：
1.  **无意义生成**：让 AI 生成大量细小改动，虽然对功能帮助有限，但能增加 Commit 次数和 Token 消耗。
2.  **挂机脚本**：开发转录机器人挂在会议中自动运行，鼓励同事使用以增加自己的 Token 计数。
3.  **系统级作弊**：类似亚马逊电商部门的案例，修改代码使每次 AI 对话显示的消耗量翻倍。

## 后续影响

尽管排行榜被撤，但它暴露了 Meta 在 AI 绩效评估上的深层矛盾。公司声称看“实际交付影响”，但内部的 [[checkpoint]] 系统仍将 Token 使用量列为数据点，且 [[ai-insights]] 仪表盘依然展示消耗数据。这一事件成为了 [[古德哈特定律]] 在 AI 时代的经典案例：当一个指标（Token 消耗）成为目标，它就失去了作为指标的价值。