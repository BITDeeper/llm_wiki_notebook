---
type: source
title: "GPT-5.4意外泄露！OpenAI最新模型瞄准这2大能力突围"
authors: [西风]
year: 2026
url: "https://mp.weixin.qq.com/s/1s41YMIUsbTVWrzyL6a5OA"
venue: 量子位
tags: [openai, gpt-5.4, leak, context-window, vision]
related: [openai, gpt-5.4, codex, 200万tokens上下文窗口, needle-in-a-haystack测试]
created: 2026-05-04
updated: 2026-05-04
sources: ["gpt-5.4意外泄露！openai最新模型瞄准这2大能力突围.md"]
---

# GPT-5.4意外泄露！OpenAI最新模型瞄准这2大能力突围

## 概述
本文报道了 OpenAI 下一代模型 [[GPT-5.4]] 的意外泄露事件。通过 [[Codex]] 助手的代码提交记录和界面截图，外界发现了该模型的存在及其可能具备的两大核心能力：超长上下文窗口和原生高分辨率视觉支持。

## 核心发现

### 1. 泄露证据
- **代码提交记录**：在 GitHub 的代码拉取请求中，出现了 `gpt-5.4` 的字样，特别是在 `view_image_original_resolution` 功能开关的判断条件中。
- **Codex 界面**：OpenAI 编码助手 Codex 的模型下拉选项中曾短暂出现 GPT-5.4。
- **版本回撤**：相关代码随后被迅速修改，将 `gpt-5.4` 改为 `gpt-5.3-codex`，引发了关于这是否是营销炒作的猜测。

### 2. 技术突围点
文章指出 GPT-5.4 可能瞄准以下两个方向进行突围：
1.  **200万 Tokens 上下文窗口**：传闻称该模型将支持 200 万 Tokens 的上下文长度，旨在解决大模型“持久记忆”的难题。
2.  **原生高分辨率视觉**：代码显示新增了绕过图像压缩、直接处理原始图像字节数据的功能开关。这意味着模型可能具备像素级精准的视觉分析能力，能处理复杂工程图或高精度 UI 原型，从而减少因图像压缩导致的 [[模型幻觉]]。

## 行业观点
- **质疑炒作**：鉴于 [[Sam Altman]] 的过往风格，部分网友认为这可能是一场精心策划的营销炒作。
- **准确率优先**：技术界普遍认为，单纯扩大上下文窗口容量意义不大，关键在于模型在长上下文中的**准确率（召回率）**。如果在 [[Needle-in-a-Haystack测试]] 中能保持高准确率（如 >90%），才是真正的突破。
- **竞争背景**：此次泄露发生在大众目光聚焦于 [[DeepSeek V4]] 发布的背景下，被视为 OpenAI 应对竞争压力的一种反应。

## 相关链接
- [原文链接](https://mp.weixin.qq.com/s/1s41YMIUsbTVWrzyL6a5OA)