---
type: source
title: "前端圈沸腾！Claude造出15KB引擎，渲染狂飙1200倍：文字里能跑马里奥"
tags: [前端工程, 性能优化, 排版引擎, ai辅助开发]
related: [pretext, cheng-lou, dom-reflow, claude-code]
created: 2026-03-30
updated: 2026-03-30
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/vInXHKIjVQGpZbc9z5yAmA"
venue: "新智元"
sources: ["前端圈沸腾！claude造出15kb引擎，渲染狂飙1200倍：文字里能跑马里奥.md"]
---

# 前端圈沸腾！Claude造出15KB引擎，渲染狂飙1200倍：文字里能跑马里奥

## 概述
本文报道了由 Midjourney 前端工程师 [[Cheng Lou]] 开源的高性能文本排版引擎 [[Pretext]]。该引擎通过抛弃 DOM，利用纯 TypeScript 和 Canvas API 在用户态重建排版逻辑，实现了比传统浏览器渲染快数百倍的性能飞跃，并解决了困扰 Web 开发 30 年的多行文本“收缩包裹”等难题。

## 核心要点

### 技术突破
- **性能提升**：在 Chrome 上比传统 DOM 测量快 483 倍，在 Safari 上快 1242 倍。
- **体积精简**：引擎核心仅 15KB，支持多语言（包括阿拉伯语等 RTL 语言）。
- **无副作用测量**：利用 `canvas.measureText()` 避开了 [[DOM Reflow]] 这一性能杀手。

### 开发过程
- **架构来源**：基于 React 核心成员 [[Sebastian Markbage]] 十年前的实验项目 `text-layout`。
- **AI 辅助验证**：使用 [[Claude Code]] 和 Codex 进行了数周的自动化测试，通过三大浏览器 7680 项像素级穷举测试，确保了引擎的高精度。

### 应用演示
- 实现了 120fps 的丝滑滚动。
- 支持文字内嵌游戏（马里奥、毁灭战士）、流体排版、物理模拟等“不可能”的 UI 效果。
- 完美实现了 Web 缺失 30 年的“多行文本收缩包裹”功能。

## 行业意义
[[Cheng Lou]] 认为，Pretext 代表了从依赖浏览器标准（CSS）向 [[用户态排版]] 的范式转移。通过将排版能力交还给开发者，预示着网页 UI 将迈向更具想象力的 Canvas/GPU 渲染时代。

## 原文链接
[新智元报道](https://mp.weixin.qq.com/s/vInXHKIjVQGpZbc9z5yAmA)