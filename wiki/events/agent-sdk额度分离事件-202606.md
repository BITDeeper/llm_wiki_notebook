---
type: event
title: Agent SDK额度分离事件
created: 2026-05-14
updated: 2026-05-14
tags: [anthropic, 定价策略, agent-sdk, 订阅制, 开发者生态]
related: [anthropic, agent-sdk, claude-code, openai, codex-openai, ai-subscription-crisis, asi竞赛]
sources: ["claude新政，抛弃最忠实的agent用户.md"]
origin_date: 2026-05-14
time_span:
  start: 2026-05-14
  end: null
participants: [anthropic, openai, agent-sdk, claude-code, codex-openai, openclaw, hermes-agent]
causes: [ai-subscription-crisis]
effects: [asi竞赛, 开发者生态争夺战]
significance: high
---
# Agent SDK额度分离事件

2026年5月，[[anthropic|Anthropic]] 宣布将 [[agent-sdk|Agent SDK]] 用量从订阅限额中完全剥离，改为按月度Credit额度单独计费。同一周，[[openai|OpenAI]] 推出 [[codex-openai|Codex]] 企业免费迁移方案。此事件被视为 [[asi竞赛|ASI竞赛]] 决赛圈的第一场定价战，标志着 [[ai-subscription-crisis|AI订阅制危机]] 从理论预测变为现实。

## 起因

AI订阅制存在 [[订阅经济模型的结构性漏洞|结构性漏洞]]：Agent SDK的程序化调用打破了"人类速度有限"的经济前提。随着SpaceX 22万块GPU到位、谷歌400亿美元投资、亚马逊250亿美元容量协议，算力充裕即将带来用户量爆发，补贴失血将指数级放大，Anthropic必须修补定价漏洞。

## 时间线

- **2026年5月（本周）**：Anthropic宣布Agent SDK额度分离政策；Claude Code限额连升两次（5小时滚动窗口翻倍 + 每周总额+50%）；OpenAI同周推出Codex免费迁移
- **2026年6月8日**：Anthropic发送Credit申领邮件通知
- **2026年6月15日**：Agent SDK额度分离政策正式生效
- **2026年7月14日**：Claude Code临时限额提升到期

## 各方反应

### Anthropic
- 预料到用户愤怒，通过连续提升Claude Code限额安抚交互式用户
- 官方帮助文档明确建议运行生产级自动化的团队转用API Key按量付费
- 对第三方工具态度180度转变：从视为"薅羊毛"到公告中点名承认合法性

### OpenAI
- 迅速推出Codex两个月免费迁移，内置一键搬家工具
- 不区分交互式和程序化调用，将Anthropic的痛点转化为卖点

### 重度开发者
- Max 20x用户实际可用量缩水近十倍（从2000-5000美元折算额度降至200美元Credit）
- Pro用户20美元Credit仅够约六七百万Token输入，几轮密集Agent循环即见底
- 第三方工具（[[openclaw|OpenClaw]]、[[hermes-agent|Hermes Agent]]）用户受冲击最大

## 未解悬念

- 7月14日临时限额到期后是否转为永久政策？
- OpenAI两个月免费迁移期结束后实际留存率如何？
- 开发者生态天平最终往哪边倾斜？