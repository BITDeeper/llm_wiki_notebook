---
type: entity
title: Claudeonomics
tags: [leaderboard, internal-tool, metric-gaming, case-study, meta, token追踪, 内部工具, tokenmaxxing]
related: ["meta", "tokenmaxxing", "checkpoint", "ai-insights", "meshclaw", "goodhart-定律", "andrew-bosworth", "古德哈特定律"]
created: 2026-04-26
updated: 2026-05-25
sources: ["刷token走火入魔！meta员工写外挂作弊冲榜，1个月烧掉200万美元.md", "30天烧掉60万亿，扎克伯格没进前250：大厂ai沦为kpi游戏.md"]
---

# Claudeonomics

Claudeonomics（"Claude经济学"）是 Meta 员工 Ash Bhat 独立搭建的内部 AI Token 使用追踪仪表盘，覆盖约 8.5 万名员工的 Token 消耗量，以排行榜形式展示前 250 名。该系统设有游戏化的段位体系（如铜牌、银牌、金牌、翡翠、永恒会话，最高为"Token 传奇"）。

## 关键数据

- **30 天累计消耗**：60 万亿 Token（约等于人类历史上所有出版书籍 Token 量的 3 倍）
- **顶级用户**：单个用户最高消耗达 2810 亿至 3285 亿 Token，按 Anthropic 公开定价估算成本接近 200 万美元
- **扎克伯格排名**：未进入前 250 名
- **CTO Andrew Bosworth 排名**：同样未进入前 250 名

## 引发的行为

该排行榜直接催生了 [[tokenmaxxing]] 现象。为了冲榜，员工采取了各种手段：

1.  **无意义生成**：让 AI 生成大量细小改动，虽然对功能帮助有限，但能增加 Commit 次数和 Token 消耗。
2.  **挂机脚本**：开发转录机器人挂在会议中自动运行，鼓励同事使用以增加自己的 Token 计数。
3.  **系统级作弊**：类似亚马逊电商部门的案例，修改代码使每次 AI 对话显示的消耗量翻倍。

## 后续发展

- **下线**：在 2026 年 4 月被 The Information 等媒体报道曝光后，作者 Ash Bhat 主动将该排行榜从 Meta 内网撤下。
- **官方态度**：Meta CTO [[andrew-bosworth|Bosworth]] 随即在 Forbes 上公开站台，称公司最优秀的工程师花掉相当于自己一年工资的 Token，效率却提升了 5 到 10 倍，并表示"继续刷，不设上限"。

## 深层影响

尽管排行榜被撤，但它暴露了 Meta 在 AI 绩效评估上的深层矛盾。公司声称看"实际交付影响"，但内部的 [[checkpoint]] 系统仍将 Token 使用量列为数据点，且 [[ai-insights]] 仪表盘依然展示消耗数据。这一事件成为了 [[古德哈特定律]] 在 AI 时代的经典案例：当一个指标（Token 消耗）成为目标，它就失去了作为指标的价值。