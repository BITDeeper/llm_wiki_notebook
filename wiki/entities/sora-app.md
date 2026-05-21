---
type: entity
title: Sora APP
tags: [openai, product, video-generation, mobile-app]
related: [openai, codex, vibe-engineering]
created: 2025-12-15
updated: 2025-12-15
sources: ["仅4人28天！openai首曝sora内幕：85%代码竟由ai完成.md"]
---

# Sora APP

Sora APP 是 OpenAI 推出的首个 AI 视频生成应用。其安卓版本由 4 名工程师在 28 天内开发完成，上线即登顶 Google Play 榜首，是 [[vibe-engineering]] 和 [[codex]] 工具能力的典型展示案例。

## 开发奇迹

- **时间线**：2025 年 10 月 8 日启动，11 月 5 日发布。
- **团队规模**：4 名人类工程师。
- **AI 参与度**：约 85% 的代码由 [[Codex]] 生成。
- **质量指标**：上线后实现 99.9% 无崩溃率，24 小时内生成超 100 万条视频。

## 技术亮点

### 跨平台逻辑移植
不同于传统的 React Native 或 Flutter 等跨平台框架，Sora 安卓版利用 Codex 实现了“逻辑可移植，代码重写”。Codex 阅读了 iOS 版本的 Swift 代码，理解其业务逻辑和数据流，然后生成了原生的 Kotlin 代码。

### 人类把控的关键地基
尽管代码主要由 AI 生成，但人类工程师负责了所有关键的基础设施搭建，包括：
- App 架构与模块化设计
- 依赖注入和导航逻辑
- 身份验证和基础网络流程
- 用户体验（UX）的最终打磨

这一策略避免了昂贵的返工，证明了在 AI 时代，“立规矩”比“写代码”更重要。