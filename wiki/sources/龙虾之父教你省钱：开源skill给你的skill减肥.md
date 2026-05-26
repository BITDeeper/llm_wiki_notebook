---
type: source
title: "龙虾之父教你省钱：开源Skill给你的Skill减肥"
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/l-6ub0r8g0ppKXSv-VD4QQ"
venue: 量子位
created: 2026-05-26
updated: 2026-05-26
tags: [skill优化, token预算, 开源工具, agent工程, peter-steinberger]
related: [skill-cleaner, peter-steinberger, codex, token作为生产资料, tokenmaxxing, skill提示词预算管理]
sources: ["龙虾之父教你省钱：开源skill给你的skill减肥.md"]
---
# 龙虾之父教你省钱：开源Skill给你的Skill减肥

量子位（QbitAI）记者梦晨撰文，报道 [[peter-steinberger]]（龙虾之父）开源的 [[skill-cleaner]] 工具。该工具旨在解决 AI Agent 系统中 Skill 提示词过长导致的 token 成本增加、延迟上升和选择噪声增大的问题。

## 核心观点

Peter 主张 Skill 描述应像"路标"而非"说明书"——目的是让 Agent 找到路，不该把整本说明挂在路标上。skill-cleaner 本身即践行此理念：Skill.md 仅 56 行提示词，调用脚本近千行代码。

## 社区验证

有网友反馈将 90 词描述砍到 40 词以内后，Agent 从"不能好好调用"变为"一次选对"，验证了精简描述反而能提升技能调用准确率。

## 工程细节

- 采用 [[codex]] 官方源码同款提示词预算核算逻辑（UTF8 字节数/4 向上取整）
- 以 [[gpt-5.5]] 的 272k token 上下文窗口为参考，以 2% 为默认技能预算基数
- 遵循四级技能优先级排序：系统技能 > 内置技能 > 插件技能 > 仓库自定义技能

## 与现有知识的关联

本文是 [[openclaw-130万月度账单事件-202605]] 的后续——从揭示 token 成本问题到提供工程化解决方案，构成清晰的"问题-响应"序列。与 [[tokenmaxxing]] 形成 token 经济学中"开源"与"节流"的对照。