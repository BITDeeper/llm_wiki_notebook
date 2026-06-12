---
type: source
title: "刚刚，Claude最强模型Fable 5发布：性能爆炸，价格翻倍"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/BQbWcPzPKv7gn1sGbR3ixw"
venue: 机器之心
tags: [anthropic, claude, fable-5, mythos-5, ai模型发布, 定价, 安全机制]
related: [claude-fable-5, mythos-5, anthropic, claude-opus-4-8, project-glasswing]
created: 2026-06-10
updated: 2026-06-10
sources: ["rss/刚刚，claude最强模型fable-5发布：性能爆炸，价格翻倍.md"]
---
# 刚刚，Claude最强模型Fable 5发布：性能爆炸，价格翻倍

**来源**：机器之心 | **日期**：2026-06-10

## 摘要

Anthropic 于 2026 年 6 月 10 日正式发布 Claude Fable 5 及 Claude Mythos 5。Fable 5 是 Anthropic 有史以来最强大的公开发布模型，在几乎所有 AI 性能基准中处于领先水平，覆盖软件工程、知识工作、视觉、科学研究等领域。两款模型同底座但安全策略不同：Fable 5 面向全渠道开放，配备安全降级机制；Mythos 5 去除部分安全限制，仅限 [[project-glasswing|Project Glasswing]] 合作伙伴使用。

## 关键信息

### 性能亮点
- 5000 万行 Ruby 代码库一天完成全库迁移（人工需两个多月）
- Cognition [[frontiercode|FrontierCode]] 评测最高分（中等 effort 设置）
- [[hebbia-finance-benchmark|Hebbia Finance Benchmark]] 最高分
- 视觉任务新 SOTA，仅凭截图还原 Web 源代码
- 极简辅助下通关《宝可梦：火红》
- 《杀戮尖塔》性能比 [[claude-opus-4-8|Opus 4.8]] 提升 3 倍（借助持久性文件级内存）
- Mythos 5 药物设计效率提升约 10 倍
- 分子生物学盲测 80% 胜出，一个大肠杆菌蛋白质假说已被独立实验室证实

### 定价
- 输入：$10/百万 Token，输出：$50/百万 Token
- 比 Opus 4.8 贵一倍，比 GPT-5.5 输入贵一倍、输出贵 2/3
- 不到 Mythos Preview 价格的一半

### 安全机制
- 查询敏感问题或检测到蒸馏行为时，由 [[claude-opus-4-8|Opus 4.8]] 替代响应
- 约 95% 对话不触发降级
- 明确禁止用 Fable 5 开发新的大模型

### 订阅窗口
- 2026 年 6 月 10 日至 22 日：Pro、Max、Team 及按席位计费企业版免费使用
- 6 月 23 日起从订阅方案移除，需消耗额度

### 重要评价
- [[andrej-karpathy|Andrej Karpathy]]："非常令人兴奋"的版本，属于"大版本升级"级别
- [[claude-code|Claude Code]] 团队给出正面评价

### 竞争背景
- 文末暗示 OpenAI GPT-5.6 将于同周发布

## 叙事矛盾
- Anthropic 于 6 月 4 日联合呼吁全球暂停 AI 研发，6 月 10 日即发布史上最强模型，间隔仅 6 天，构成极端叙事矛盾。参见 [[anthropic暂停研发提案-20260604]]。