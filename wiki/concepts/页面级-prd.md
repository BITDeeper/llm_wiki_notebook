---
type: concept
title: 页面级 PRD（产品需求文档）
created: 2026-06-06
updated: 2026-06-06
tags: [结构化文档, 代码生成, gui设计]
related: [mock-android-app, phoneworld]
sources: ["ai手机时代，mobile-agent最缺是更真实的世界.md"]
---
# 页面级 PRD（产品需求文档）

页面级 PRD（Product Requirements Document）是在 [[phoneworld|PhoneWorld]] 项目中提出的一种结构化文档，用于指导 AI 生成面向 Agent 训练的 [[mock-android-app|Mock Android App]]。

## 作用

PRD 相当于生成 Mock App 的“施工图”。它不仅描述了页面的视觉布局，更关键的是定义了：
- **交互元素**：页面包含哪些按钮、输入框。
- **跳转逻辑**：点击元素后应导航至哪个页面。
- **视觉属性**：界面的外观标准。
- **状态更新**：哪些操作会触发环境状态的改变。

通过生成页面级 PRD，系统确保自动构建的 App 不只是“照截图画界面”，而是真正还原了真实用户的使用逻辑。