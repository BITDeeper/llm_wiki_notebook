---
type: concept
title: DOM Reflow
tags: [浏览器原理, 性能优化, 前端开发]
related: [pretext, canvas-measuretext, 用户态排版]
created: 2026-03-30
updated: 2026-03-30
sources: ["前端圈沸腾！claude造出15kb引擎，渲染狂飙1200倍：文字里能跑马里奥.md"]
---

# DOM Reflow

[[DOM Reflow]]（重排）是指浏览器为了重新渲染页面的一部分或全部，而重新计算页面中元素的位置和几何结构的过程。

## 机制与代价

### 触发条件
当页面的布局发生变化时，例如：
- 调整浏览器窗口大小。
- 修改 DOM 元素的几何属性（如宽度、高度、字体大小）。
- 添加或删除可见的 DOM 元素。

### 性能瓶颈
Reflow 是网页性能的主要杀手之一，原因如下：
1.  **强制同步布局**：在传统的 Web 开发中，若要获取文本尺寸（如通过 `getBoundingClientRect()`），必须强制浏览器先进行一次 Reflow。
2.  **无法并行**：测量操作往往无法并行处理，容易导致读写交错，引发性能崩盘。
3.  **连锁反应**：一个元素的变化往往会触发其后代元素、兄弟元素甚至父元素的一系列 Reflow。

## 解决方案

### 传统优化
开发者通常通过批量读写、使用 `requestAnimationFrame` 或避免逐条修改样式来减少 Reflow 次数。

### 根本性突破：Pretext
[[Pretext]] 引擎通过彻底避开 DOM 来解决这一问题。它利用 [[Canvas MeasureText]] 在布局树之外进行测量，使得排版计算不再触发昂贵的 Reflow，从而实现了数量级的性能提升。