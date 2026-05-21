---
type: entity
title: Pretext
tags: [前端工程, 排版引擎, typescript, canvas, 开源项目, 前端工具, 排版, 开源, 数学计算, 前端, 性能优化, JavaScript]
related: [cheng-lou, dom-reflow, canvas-measuretext, 用户态排版, claude-code, html-in-canvas, dom-渲染, chenglou, 布局回流, 虚拟列表, 文字绕排, pi-presentation-intelligence]
created: 2026-03-30
updated: 2026-05-08
sources: ["前端圈沸腾！claude造出15kb引擎，渲染狂飙1200倍：文字里能跑马里奥.md", "html-in-canvas引爆前端！ai时代互联网视觉效果完全不一样了.md", "哈利波特《预言家日报》被麻瓜做出来了！github开源神器两天狂揽12k星.md"]
---

# Pretext

[[Pretext]] 是一个专为 AI 时代设计的高性能文本测量与布局库，由前 React 核心成员、现任 [[Midjourney]] 前端工程师 [[Cheng Lou]] 开发。它完全绕过了传统的 DOM 测量 API，通过纯数学计算实现文本布局，旨在解决 Web 前端长期存在的复杂排版性能瓶颈。

## 核心特性

### 两阶段架构
[[Pretext]] 将文本处理逻辑拆分为“预处理”和“布局计算”两个阶段，以实现极致性能：

-   **`prepare()` (预处理)**：
    -   对文本进行分词和排版规则处理。
    -   使用 [[Canvas MeasureText]] 获取词宽数据并缓存。
    -   此过程不触发布局回流，仅作为数据源。
    -   典型耗时：约 17ms（一次性）。
-   **`layout()` (布局计算)**：
    -   基于缓存数据，在给定容器宽度下进行纯数学的换行运算。
    -   不涉及任何 DOM 读取、Canvas 调用或字符串分配。
    -   典型耗时：约 0.10ms（可反复调用）。

### 极致性能
- **渲染速度**：相比传统 DOM 测量方式（如 `getBoundingClientRect`），Pretext 在处理 500 条文本时性能提升 **300 到 600 倍**；在 Chrome 上快 483 倍，在 Safari 上快 1242 倍（基于 `layout()` 耗时对比）。
- **轻量级**：引擎核心大小仅为 15KB。
- **高帧率**：支持以 120fps 处理数十万个文本框的滚动与缩放。

### 渲染无关性
[[Pretext]] 只负责计算布局数据，不负责具体的渲染绘制。计算结果可以输出到：
-   DOM
-   Canvas
-   SVG
-   未来的服务端渲染方案

### 高级排版能力
- **多行文本收缩包裹**：实现了 Web 标准缺失 30 年的功能，容器能自动收缩至文本内容的最紧凑宽度。
- **动态图文混排**：支持文本绕过不规则形状（如动态移动的插画）进行排列，甚至用于游戏开发（如在文字中运行马里奥）。
- **复杂排版支持**：支持流体排版、跨栏布局、形状内文字流动等高级 UI 效果。
- **全语言支持**：完美处理中文、英文、阿拉伯语（双向文本/RTL）及复杂的 Emoji 组合。

## 技术原理

Pretext 的核心在于绕过了浏览器昂贵的 [[DOM Reflow]] 机制，主张将排版逻辑从浏览器内核（内核态）移至应用代码（用户态），通过纯数学计算来确定文字布局。

1.  **[[Canvas MeasureText]]**：利用 HTML5 Canvas API 的 `measureText()` 方法。由于 Canvas 与 DOM 共享底层字体引擎，但运行在布局树之外，因此可以在不触发 Reflow 的情况下精确测量文本尺寸。
2.  **用户态计算**：一旦测量完成，后续的布局计算（如窗口拉伸、断行）仅为简单的数学运算。

## 开发与验证

### 架构渊源
Pretext 的架构骨架源自 React 核心团队成员 [[Sebastian Markbage]] 在十年前开发的实验项目 `text-layout`。

### AI 辅助测试
在开发过程中，[[Cheng Lou]] 使用 [[Claude Code]] 和 Codex 进行了大规模的自动化验证。
- **测试规模**：针对 Chrome、Safari、Firefox 三大浏览器进行了 7680 项穷举测试。
- **验证目标**：确保 Pretext 的渲染结果与浏览器原生渲染像素级一致。
- **结果**：所有测试满分通过，证明了其作为底层基础设施的可靠性。

## 应用场景

由于其高性能和灵活性，Pretext 可用于：
- **高性能虚拟列表**：在处理海量数据（如社交媒体信息流）时，提前精确计算高度，消除滚动卡顿。
- **自适应 UI 组件**：实现类似聊天软件的自适应气泡宽度，无需挂载 DOM 即可计算尺寸。
- **杂志级排版**：实现多栏布局、首字下沉等复杂的印刷级排版效果。
- **创意交互**：如 Bad Apple 文字影绘、动态文字避让等高难度视觉效果。

## 行业影响

Pretext 曾在 GitHub 上迅速获得 4 万+ 星标，引发了前端社区对于“接管排版权”的讨论。在 [[html-in-canvas]] 的相关讨论中，Pretext 被视为前奏——如果说 Pretext 拿走了“文字排版权”，那么 HTML-in-Canvas 则进一步拿走了“整个界面渲染权”。

## 技术哲学

[[Pretext]] 代表了一种工程范式的转变：**从“查询黑盒 API”转向“确定性数学计算”**。它不仅是工具，更是 [[用户态排版]] 范式的体现。它主张开发者不应受限于缓慢的 CSS 标准迭代，而应通过掌握底层渲染能力来释放 UI 的创造力。这与追求 [[批次不变性]] 的工程哲学有异曲同工之妙。

## 安装与使用

```bash
npm install @chenglou/pretext
```

基础用法：
```typescript
import { prepare, layout } from "@chenglou/pretext";

// 1. 预处理文本
const handle = prepare("你的文本内容...");

// 2. 在任何需要的地方进行布局计算
const result = layout(handle, { containerWidth: 500, lineHeight: 24 });
```

## 外部链接
- [GitHub 仓库](https://github.com/chenglou/pretext)