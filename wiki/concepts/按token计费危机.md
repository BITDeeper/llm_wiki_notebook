---
type: concept
title: 按Token计费危机
created: 2026-05-22
updated: 2026-05-22
tags: [ai定价, token, 成本控制, 企业ai]
related: [ai-subscription-crisis, tokenmaxxing, claude-code, anthropic, openai]
sources: ["微软：claude-code的token，我也烧不起了.md"]
---
# 按Token计费危机

指 AI 模型基于 token 消耗的定价模式在大规模企业部署时导致成本失控的现象，是 [[ai-subscription-crisis]] 从个人订阅层面向企业采购层面的升级版。

## 背景

AI 行业长期以低于成本的固定费率补贴用户获取，企业基于"AI成本会持续下降"的乐观假设大规模建设 AI 工作流。然而过去半年，Anthropic、OpenAI 和 Google 悄悄提价20%-37%，真实账单到来后企业年度预算在数月内被烧光。

## 典型案例

- **[[microsoft]]**：2026年5月取消内部 [[claude-code]] 授权，因按 token 计费成本过高，即使对拥有近乎无限云资源的公司也难以承受
- **[[uber]]**：2026年4月CTO发布内部备忘录，称四个月烧光全年AI预算，主因 Claude Code 大规模采用
- **[[github]]**：在所有产品中取消固定费率，全面转向按用量计费

## 行业困境

企业面临二选一：
1. **削减AI使用**以控制预算 → 拖慢实验室收入增长，影响高估值和 IPO 计划
2. **实验室继续补贴**降价 → 恶化单位经济性

无论哪条路，最终都导致盈利能力下降，总有人要承担减值损失。

## 应对措施

- [[claude-code]] 新增 /usage 命令，支持 token 消耗精确归因到 Skills、Agents、MCPs 和插件
- 企业开始建立 token 用量追踪和成本归因基础设施
- 行业从 [[tokenmaxxing]]（最大化消耗）转向精细化成本管控