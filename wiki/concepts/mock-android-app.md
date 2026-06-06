---
type: concept
title: Mock Android App（模拟安卓应用）
created: 2026-06-06
updated: 2026-06-06
tags: [模拟环境, 逆向工程, gui, 测试基础设施]
related: [phoneworld, 页面级-prd, mobile-agent]
sources: ["ai手机时代，mobile-agent最缺是更真实的世界.md"]
---
# Mock Android App（模拟安卓应用）

Mock Android App 是指基于真实 App 截图和操作轨迹，由 AI 自动生成的可运行 Android 应用环境。它是 [[phoneworld|PhoneWorld]] 解决真实 App 难以规模化训练问题的具体技术手段。

## 特性要求

与普通的“原型生成”不同，面向 Agent 训练的 Mock App 必须具备以下特性：
1. **结构保真**：不盲目复刻整个 App，而是基于 [[页面级-prd|页面级 PRD]] 恢复真实用户最常经过的核心路径和页面跳转逻辑。
2. **状态可变**：具备可控的数据层。Agent 执行收藏、发消息、加入购物车等操作后，状态会真实写入本地数据库。
3. **可重置性**：任务执行完毕后，环境状态可以一键恢复初始版本，支持反复训练。
4. **可验证性**：系统可通过查询本地数据库，自动判断 Agent 是否真正完成了状态改变任务。