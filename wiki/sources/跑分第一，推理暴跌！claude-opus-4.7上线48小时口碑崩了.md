---
type: source
title: "跑分第一，推理暴跌！Claude Opus 4.7上线48小时口碑崩了"
tags: [ai-models, anthropic, benchmark, controversy]
related: [anthropic, claude-opus-4-7, ai-subscription-crisis]
created: 2026-04-18
updated: 2026-04-18
authors: ["新智元", "元宇"]
year: 2026
url: "https://mp.weixin.qq.com/s/CVtRB_YkAKqpask0tc8UYQ"
venue: "新智元"
sources: ["跑分第一，推理暴跌！claude-opus-4.7上线48小时口碑崩了.md"]
---

# 跑分第一，推理暴跌！Claude Opus 4.7上线48小时口碑崩了

## 概述
本文报道了 Anthropic 发布的 [[claude-opus-4-7]] 模型在上线48小时内引发的严重口碑两极分化现象。尽管该模型在 Artificial Analysis 的 Intelligence Index 中获得并列全球第一的评分，但在实际用户体验中，特别是在代码生成和逻辑推理任务上，出现了显著的性能倒退。

## 核心争议

### 1. 性能倒退
- **代码能力**：大量开发者反馈从 4.6 升级后，代码补全变迟钝，上下文理解退化，复杂逻辑链推理变弱。
- **逻辑推理**：在 [[nyt-connections-extended]] 基准测试中，得分从 94.7% 暴跌至 41.0%。
- **长上下文**：在 MRCR v2 测试中，得分下跌 46 个百分点。

### 2. 成本与兼容性
- **新分词器**：处理相同文本时，Token 用量增加 0-35%，导致用户成本变相上涨。
- **接口报错**：旧接口参数（如 `budget_tokens`）直接报错，缺乏弃用过渡期。
- **隐藏思考**：思考过程默认隐藏但仍全额收费，被用户称为“付费吃盲盒”。

### 3. 交互模式变化
- **字面理解**：模型从“顺从助手”转向“严谨同事”，严格按照提示词字面意思执行，不再猜测意图。
- **攻击性**：部分用户认为模型变得“带攻击性”或“爱顶嘴”。

## 官方回应与数据
Anthropic 强调 Opus 4.7 在 GDPval-AA（衡量真实知识工作任务）中以 1753 Elo 登顶，幻觉率下降 25%。官方解释称这是 [[能力再分配]] 的结果，旨在优化工作能力而非聊天体验。

## 社区反应
- Reddit 上出现大量批评帖子，有用户称其为“严重倒退”。
- 《Pragmatic Engineer》作者 Gergely Orosz 试用后放弃，换回 4.6。
- 也有创业者（如 Jeremy Howard）认为它是“第一个真正懂工作”的模型。

## 意义
这一事件揭示了 AI 产品从“玩具”转向“生产力工具”时面临的稳定性挑战，以及通用评测指标与垂直领域实际体验之间的脱节。