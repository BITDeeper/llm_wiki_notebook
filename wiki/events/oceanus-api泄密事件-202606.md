---
type: event
title: Oceanus API 泄密事件
created: 2026-06-05
updated: 2026-06-05
tags: [anthropic, 泄密, 红队测试, 安全事故, api倒卖]
related: [oceanus-mythos, anthropic, project-glasswing]
sources: ["anthropic紧急叫停！mythos被内鬼偷卖api.md"]
origin_date: 2026-06-03
time_span:
  start: 2026-06-03
  end: null
participants: [anthropic, oceanus-mythos]
causes: []
effects: [oceanus-mythos]
significance: high
---
# Oceanus API 泄密事件

2026年6月初，[[anthropic]] 为即将发布的超大规模模型 [[oceanus-mythos|Oceanus/Mythos]] 进行红队测试时，遭内部人员将 API 权限打包倒卖给代理商，导致 Anthropic 紧急叫停全部红队测试，模型参数与天价定价随之全面曝光。

## 事件时间线

### 2026年6月3日
- 传闻中被"囚禁"的 Mythos（内部代号 Oceanus）即将发布
- Anthropic 按惯例在发布前7天向红队测试人员开放新模型
- Claude 开发者后台（Console）中出现从未见过的型号：`claude-oceanus-v1-p`

### 泄密发生
- 一名红队测试员在拿到 API 访问权限后，未进行安全漏洞测试，而是将通道转手打包
- API 权限被高价转售给某国 API 代理服务商
- 部分开发者通过神秘渠道发现能跑出从未见过的 Claude 响应

### Anthropic 应急响应
- 异常流量触发 Anthropic 预警系统
- 管理层立即全面叫停红队测试，模型停用
- 漏洞被快速堵住，但代价极高

### 2026年6月5日
- 事件经媒体全面曝光
- Oceanus 的天价账单（80美元/百万 Token）和超高吞吐量（52 Token/s）在 X 上传遍

## 事件影响

### 对红队测试机制的影响
外界担忧此次事件将导致 Anthropic 矫枉过正——下一批红队测试人员规模更小、限制更多、审查更慢，可能影响未来 AI 模型的安全测试效率。

### 对行业竞争格局的影响
- 原本保密工作滴水不漏的 Oceanus 被迫提前曝光
- [[openai]] 被迫考虑加快 GPT-6/GPT-5.6 的发布节奏（原计划秋季）
- [[gemini|Google Gemini 3.5 Pro]] 面临降维打击压力

### 对安全管控的启示
此次事件暴露了红队测试环节的安全脆弱性——即使签署保密协议的高薪测试人员，仍可能出于利益驱动滥用权限。这与此前 [[source-map-leaks|Claude Code 源码泄露]] 事件共同构成了 Anthropic 在安全管控上的双重警示。

## 预计后续
- 外界普遍推测 Oceanus/Mythos 将于2026年6月16日左右全球首秀
- 事件可能加速而非延缓发布进程