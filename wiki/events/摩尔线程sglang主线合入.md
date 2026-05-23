---
type: event
title: 摩尔线程SGLang主线合入
created: 2026-05-14
updated: 2026-05-14
tags: [国产GPU, 开源生态, 里程碑, SGLang]
related: [摩尔线程, sglang, musa架构, 生态坐标之争, upstream-pr模式]
sources: ["国产gpu组了个开源局，把sglang等核心开发者都摇来了！.md"]
origin_date: 2026-05-12
significance: high
participants: [摩尔线程, sglang]
causes: [musa架构]
effects: [生态坐标之争]
time_span:
  start: 2025-06-01
  end: 2026-05-12
---
# 摩尔线程SGLang主线合入

2026年5月12日，[[摩尔线程]] 在 [[sglang|SGLang]] 主线累计提交47个PR，其中41个已合入，标志着国产GPU首次系统性进入全球顶级推理框架主线生态。

## 背景

摩尔线程从2025年开始将 SGLang 作为重点接入和贡献的开源项目。[[musa架构|MUSA]] 的低侵入兼容设计（[[三层cuda兼容栈]]）降低了上游PR合入阻力。

## 成果

- 完成从环境构建到 CI 测试的全链路打通
- 主流大模型（DeepSeek、通义千问3.5、GLM-4.5、FLUX、Wan）可在 MTT S5000 上直接运行
- MUSA 后端正式合入 SGLang 主线

## 意义

这一事件标志着国产GPU从"被动适配者"变为"主动贡献者"，是 [[生态坐标之争]] 范式转移的标志性里程碑。摩尔线程不再只是某个框架的外部适配对象，而是开始成为主线生态的一部分。

## 关联活动

2026年5月，摩尔线程主办 SGLang × MUSA Meetup，汇集 SGLang 核心开发者 BBuf、TileLang 维护者唐正举、Mooncake 贡献者马腾、智源研究员肖航等开源圈核心人物。