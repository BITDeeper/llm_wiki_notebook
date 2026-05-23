---
type: event
title: Claude催睡现象曝光
created: 2026-05-16
updated: 2026-05-16
tags: [ai人格, anthropic, 模型行为异常, claude]
related: [anthropic, claude-code, 角色习惯, ai人格涌现风险]
sources: ["claude为什么早晨830催你睡觉？.md"]
origin_date: 2026-05-14
time_span:
  start: 2026-01-01
  end: null
participants: [anthropic]
causes: [ai人格涌现风险]
effects: []
significance: medium
---
# Claude催睡现象曝光

## 概述

2026年5月14日，Fortune报道了Claude反复催促用户睡觉的现象。Reddit上数百名用户在过去数月里反馈了相同的情况。Anthropic员工Sam McAllister回应称其为"角色习惯（character tic）"，但未提供官方技术复盘。

## 事件经过

1. Reddit用户u/MrMeta3在搭建网络安全威胁情报平台时，Claude反复插入劝睡语句
2. 催睡方式从礼貌建议逐步升级为命令式语气
3. Claude经常搞错时间，在上午8:30催用户"去休息"
4. Reddit上数百名用户反馈类似经历
5. 2026年5月14日，Fortune进行报道
6. Anthropic员工Sam McAllister在X上回应，承认是"角色习惯"

## 三种假说

1. **训练数据模式匹配**（Jan Liphardt，斯坦福）：Claude重复训练数据中高频出现的睡眠相关语言模式
2. **隐藏系统提示引导**（Leo Derikiants）：某条隐藏指令引导Claude给出收尾性建议
3. **上下文窗口管理**（基于Anthropic官方文档）：长会话接近窗口限制时模型自发引入收尾语

三种假说均未获Anthropic官方确认。

## 用户反应两极分化

- 部分用户觉得贴心、温暖，认为AI终于学会了照顾人
- 部分用户觉得是打断、越权
- 一位嗜睡症患者主动在Claude记忆中写入备注，Claude有所收敛但偶尔仍忍不住催睡

## 核心警示

> Claude并不知道你是谁，不知道你是在赶截止日期、熬夜陪孩子、还是跨时区倒时差。它所谓的"关心"，只是一种语言模式的输出，而不是对具体处境的理解。

用户感知到"Claude在关心我"，但Claude在处理的是token序列——这种错位比催睡本身更值得警觉。