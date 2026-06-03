---
type: concept
title: Mobile GUI Agent（手机图形界面智能体）
created: 2026-06-02
updated: 2026-06-02
tags: [agent, mobile, gui, 智能体]
related: [操作系统agent, mobilegym, mobilegym-bench, 具身智能数据困境]
sources: ["浏览器秒变手机！中科院开源agent训练场，微信、原神都能跑.md"]
---
# Mobile GUI Agent（手机图形界面智能体）

Mobile GUI Agent 是指只看屏幕截图即可像真人一样操作手机的AI智能体。其目标是填表单、回消息、预订车票、刷社交媒体等日常手机操作任务。

## 与相关概念的关系

- 与 [[操作系统agent]] 的关系：Mobile GUI Agent 是 OS Agent 在手机端的具象化，但更强调通过GUI截图感知而非API调用
- 与 [[具身智能数据困境]] 的关系：Mobile Agent 面临类似的环境困境——真实环境不可控、模拟环境不够真、训练数据获取成本高

## 行业现状

Mobile GUI Agent 被描述为2025-2026年"最火的赛道之一"，但面临严重的训练与评测基础设施瓶颈：

1. **模拟器路线**：被App风控识别，轻则闪退，重则封号；资源消耗大（单实例4.5GB+内存）
2. **真机路线**：成本高、吞吐低、无法并行rollout、不可逆操作无法复位
3. **评测困境**：只能依赖VLM看截图当裁判，误判率高达10.2%

[[MobileGym]] 通过浏览器仿真 + [[结构化状态仿真]] 提供了一种新的破局方案。