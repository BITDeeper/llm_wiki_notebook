---
type: event
title: Gemini 3.2 静默上线事件
created: 2026-05-18
updated: 2026-05-18
tags: [谷歌, gemini, 模型发布, 静默上线, io-2026]
related: [gemini-3.2-flash, gemini-3.2-pro, google-deepmind, io-2026, 模型蒸馏与稀疏化]
sources: ["谷歌gemini-3.2偷跑上线！2200行代码一镜到底，claudegpt坐不住了.md"]
origin_date: 2026-05-17
time_span:
  start: 2026-05-17
  end: null
participants: [google-deepmind, gemini-3.2-flash, gemini-3.2-pro]
causes: [google-deepmind]
effects: [gemini-3.2-flash, gemini-3.2-pro, 模型蒸馏与稀疏化]
significance: high
---
# Gemini 3.2 静默上线事件

## 概述

2026年5月17日前后，[[google-deepmind|谷歌 DeepMind]] 在 I/O 2026 大会前夕将 [[gemini-3.2-flash|Gemini 3.2 Flash]] 和 [[gemini-3.2-pro|Gemini 3.2 Pro]] 静默上线至 Gemini 网页端，被全球开发者发现并引发广泛关注。

## 事件经过

### 发现阶段（5月17日）
- 一位 Reddit 网友发现 Gemini Canvas 输出风格突变，与 Google AI Studio 同模型结果截然不同
- 前者输出了大量"GPT化"的高质量 UI 设计 SVG，后者仍为老 Flash 的朴素风格
- 同一 prompt 产生两种截然不同的结果，结论：后台在偷偷换模型

### 技术暴露
- Google Cloud Console 后端暴露 `gemini-3.2-flash-lite-live-preview` 模型条目
- 谷歌开始在网页端静默路由到新模型
- 开发者发现选择 Thinking+Canvas 模式可触发 Gemini 3.2 Flash

### 全网首测
- 物理模拟3D场景：气球透明光影、撞击反馈、水花粒子特效
- 交互式 SVG：PS5 主机细节高度还原
- Three.js 项目：单次生成 2200 行代码
- LM Arena 盲测：Gemini 3.2 Pro 手搓 Windows 98

## 影响与意义

1. **技术突破**：[[模型蒸馏与稀疏化]]技术首次在轻量化模型上实现旗舰级性能
2. **竞争格局**：证实谷歌正在全力追赶 [[openai]] 和 [[anthropic]]，但市场评价仍为"排第三"
3. **发布策略**：静默上线反映了 AI 竞赛中"先上线再官宣"的紧迫感
4. **I/O 2026 预热**：为即将到来的 [[io-2026|I/O 2026]] 大会制造了巨大声量