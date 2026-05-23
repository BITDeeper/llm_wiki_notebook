---
type: event
title: Cohere Command A+ 开源发布
created: 2026-05-22
updated: 2026-05-22
tags: [开源, 大模型发布, 企业ai, moe]
related: [cohere, command-a-plus, aidan-gomez, nick-frosst, apache-2-0-开源许可, moe-混合专家架构, w4a4-量化, 原生引用]
sources: ["20岁写出transformer的人，真开源了2180亿大模型.md"]
origin_date: 2026-05-20
significance: high
participants: [cohere, aidan-gomez, nick-frosst]
causes: [cohere]
effects: [command-a-plus]
time_span:
  start: 2026-05-20
  end: null
---

# Cohere Command A+ 开源发布

2026 年 5 月 20 日，[[aidan-gomez]] 在 X 上宣布推出 [[command-a-plus]]，这是 Cohere 首个采用 [[apache-2-0-开源许可]] 的完全开源旗舰模型。

## 事件背景

Cohere 此前的模型（Command R / R+）采用 CC-BY-NC 4.0 许可证，禁止商用。在联合创始人 [[nick-frosst]] 的力主推动下，Cohere 将旗舰模型许可证转向完全开放的 Apache 2.0，标志着 Transformer 论文作者首次以真开源方式发布旗舰模型。

## 核心亮点

- **首个 MoE 架构旗舰**：2180 亿总参数 / 250 亿激活参数
- **真开源**：Apache 2.0 许可证，允许任意商用
- **单卡部署**：W4A4 量化版本可运行在单张 B200 或两张 H100 上
- **原生引用**：将可追溯性做成模型原生能力
- **Command A 家族终章**：官方表示这是 Command A 家族最后一个模型

## 行业意义

此次发布标志着开源大模型竞争进入下半场：上半场比的是参数规模，下半场比的是谁能让企业把模型真正搬进自己的机房。Cohere 与 [[aleph-alpha]] 的合并进一步强化了这一企业私有化部署的战略定位。

## 性能定位

据 VentureBeat 第三方评价，Command A+ 以 250 亿激活参数的体量在纯推理和数学上可媲美体量大出许多的模型，但在深度智能体编码和综合智能广度上仍落后于 [[DeepSeek V4]] 等中国头部开源模型。