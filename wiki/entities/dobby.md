---
type: entity
title: Dobby (精灵爪)
created: 2026-03-23
updated: 2026-03-23
tags: [smart-home, agent, automation, case-study]
related: [andrej-karpathy, openclaw, 智能体优先]
sources: ["龙虾“黑入”卡帕西家的智能家居系统：本来需要控制六个软件，现在用whatsapp就能操控.md"]
---

# Dobby (精灵爪)

Dobby 是 Andrej Karpathy 基于 [[openclaw]] 架构开发的个人定制智能体，负责全屋智能家居的自动化管理。它是 [[智能体优先]] 设计理念的标志性实践案例。

## 功能与能力

Dobby 能够自主扫描局域网，识别并逆向破解各类智能家居设备。它成功整合了 Karpathy 家中的以下系统：
- Sonos 音响系统
- 全屋灯光控制
- 空调与温控
- 百叶窗
- 泳池设备
- 安防监控系统

## 工作流程

1.  **发现与破解**：Dobby 通过 IP 扫描发现设备，自动搜索相关文档和 API 接口，编写控制代码。
2.  **统一控制**：用户通过 [[WhatsApp]] 发送自然语言指令（如“Dobby，该睡觉啦”）即可控制全屋设备。
3.  **主动通知**：结合门口监控摄像头和 [[Qwen]] 模型，Dobby 能识别画面变动（如快递送达），并通过 WhatsApp 主动发送截图和提醒。

## 意义

Dobby 的出现证明了现有的碎片化智能家居 App 是不必要的。设备只需提供 API 接口，智能体就能通过自然语言指令实现比传统 App 更复杂、更便捷的场景联动。Karpathy 评价其带来的便利“简直太好用了”，彻底取代了之前的 6 个专用控制软件。