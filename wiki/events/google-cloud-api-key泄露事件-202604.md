---
type: event
title: Google Cloud API Key 泄露账单事件
created: 2026-06-01
updated: 2026-06-01
tags: [api安全, 云计算, 账单异常]
related: [jesse-davies, ai-subscription-crisis]
sources: ["claude刷爆5亿！一夜涨60倍，你的token账单还撑得住？.md"]
origin_date: 2026-04-01
participants: [jesse-davies]
causes: []
effects: []
significance: low
---
# Google Cloud API Key 泄露账单事件

2026年4月，澳大利亚AI顾问、Agentic Labs创始人[[jesse-davies]]因公开服务中遗留的API key被滥用，原本只有7美元预算的Google Cloud账户一夜收到1.8万美元账单。

## 事件经过

Davies为账户设了两道保险：一个10澳元（约7美元）的预算预警，一个1400美元的硬性消费上限。攻击者发现了他几个月前从AI Studio发布的一个Cloud Run服务，发了6万多个请求。

两道保险都没拦住：账单计算有延迟，等系统反应过来，金额已经飙到了1.8万美元。

## 暴露的问题

此案例暴露了云平台预算上限机制在应对突发滥用时的结构性缺陷——当账单计算存在延迟时，预设的消费上限可能完全失效。