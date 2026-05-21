---
type: concept
title: Canvas MeasureText
tags: [html5, canvas, 前端优化, api]
related: [pretext, dom-reflow]
created: 2026-03-30
updated: 2026-03-30
sources: ["前端圈沸腾！claude造出15kb引擎，渲染狂飙1200倍：文字里能跑马里奥.md"]
---

# Canvas MeasureText

[[Canvas MeasureText]] 是指利用 HTML5 Canvas API 提供的 `measureText()` 方法来获取文本度量信息的技术。

## 原理

### 共享底层引擎
Canvas 的 2D 渲染上下文与 DOM 的文本渲染底层通常共享同一套字体引擎。这意味着，通过 Canvas 测量得到的文本宽度、高度等数据，与 DOM 渲染的结果在理论上是高度一致的。

### 无副作用测量
与 DOM 操作不同，Canvas 的绘图操作是在一个位图或离屏缓冲区上进行的，它不属于页面的布局树。
- **关键优势**：调用 `ctx.measureText('some text')` 不会触发页面的 [[DOM Reflow]]。
- **结果**：这使得开发者可以在不干扰当前页面布局的情况下，进行大规模、高频次的文本尺寸计算。

## 应用场景

### Pretext 引擎
[[Pretext]] 是利用这一技术的典型代表。它通过 Canvas 预先测量所有文本片段的宽度并缓存，后续的排版布局（如断行、对齐）完全基于这些缓存数据进行纯数学计算，从而实现了极高的性能。

### 局限性
虽然 `measureText` 提供了宽度信息，但处理复杂的文本换行、双向文本（如阿拉伯语）或垂直排版时，仍需在上层构建额外的逻辑（如 Pretext 所做的）。