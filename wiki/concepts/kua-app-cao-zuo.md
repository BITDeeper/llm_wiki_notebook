---
type: concept
title: 跨 App 操作
tags: [mobile-agent, automation, ui-interaction]
related: [redclaw, openclaw, ren-wu-ru-kou]
created: 2026-03-17
updated: 2026-03-17
sources: ["百度龙虾全家桶火速上桌！出手就是全球最大搜索skill.md"]
---

# 跨 App 操作

跨 App 操作是指移动端 AI 智能体能够跨越不同的移动应用程序执行任务的能力。

## 技术挑战
不同于 PC 端的 API 调用，移动端应用通常是一个个“孤岛”，缺乏标准化的互操作接口。实现跨 App 操作通常需要结合：
- **UI 自动化**：模拟人类点击、滑动等操作。
- **语义理解**：理解屏幕内容和用户意图。
- **系统权限**：获取辅助功能或无障碍服务权限。

## 应用场景
- **生活服务**：一句话完成打车、订餐、购票等操作。
- **任务流转**：将信息从一个 App（如微信）提取并处理到另一个 App（如邮件或笔记）。

## 案例
百度的 [[redclaw]] 是支持跨 App 操作的手机端 [[openclaw]] 应用，用户可以通过语音指令指挥其在不同 App 间完成任务。