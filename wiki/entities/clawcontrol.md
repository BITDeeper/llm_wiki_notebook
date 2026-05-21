---
type: entity
title: ClawControl
tags: [ui, openclaw, component]
related: [openclaw, peter-steinberger]
created: 2026-03-24
updated: 2026-03-24
sources: ["openclaw-3.23紧急修复！peter忘记打包控制台文件，海量龙虾崩溃.md"]
---

# ClawControl

ClawControl 是 [[openclaw]] 的 Web 控制台（UI），是用户管理 AI、配置频道及查看运行状态的核心入口。

## 技术实现
ClawControl 的 UI 资源是独立打包的，并作为 npm 发布产物的一部分进行分发。

## 3.22 事故详情
在 OpenClaw 3.22 版本发布期间，由于 [[Peter Steinberger]] 的疏忽，ClawControl 的静态资源文件未被包含在 npm 包中。这导致用户升级后访问控制台时出现白屏（页面加载失败），完全无法使用管理功能。该问题在 3.23 版本中通过重新打包并加强 CI 检查得到修复。