---
type: concept
title: Skills (技能)
tags: [agent, 工具调用, 飞书]
related: [飞书-aily, 飞书, runtime-agent-os]
created: 2026-03-19
updated: 2026-03-19
sources: ["同事群里催催催，龙虾自动回回回！刚发布的「飞书龙虾」把我解脱了.md"]
---

# Skills (技能)

在 AI 智能体（Agent）架构中，Skills 指赋予 Agent 调用特定工具或执行特定动作的能力模块。

## 作用
Skills 是 Agent 实现从“对话”到“行动”跨越的关键。通过加载不同的 Skills，Agent 可以突破纯语言模型的限制，直接操作外部软件和数据。

## 实例
在 [[飞书-aily]] 中，Skills 表现为具体的飞书应用接口，例如：
- `feishu-bitable`：允许 Agent 读取和写入多维表格数据。
- `feishu-docs`：允许 Agent 创建和编辑文档。
- `feishu-messenger`：允许 Agent 发送和接收消息。

## 配置方式
用户通常可以通过简单的勾选或自然语言描述，为 Agent 配置所需的 Skills。Agent 会根据任务目标自动判断何时调用哪个 Skill。