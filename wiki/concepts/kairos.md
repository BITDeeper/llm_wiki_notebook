---
type: concept
title: KAIROS
tags: [anthropic, leak, history, code-name, memory, agent, feature]
related: ["routine", "claude-code", "anthropic", "runtime-agent-os"]
created: 2026-04-15
updated: 2026-05-08
sources: ["claude-opus-4.7刚刚曝光！claude-code一夜重构，7x24小时替你打工.md", "claude-code源码泄露7小时：8大新功能26个隐藏指令6级安全架构，全被扒光了.md"]
---

# KAIROS

KAIROS 是 [[Anthropic]] [[claude-code]] 功能在正式发布前的泄露代号。它代表了该公司在 **AI 长期记忆**与**持久化助手模式**方向的技术探索。

## 背景
2026年3月底，Claude Code 源码意外泄露。网友从 .map 文件中发现了代号为 KAIROS 的功能描述。根据泄露信息，KAIROS 被描述为一个“持久化的后台 Agent”，能够周期性自行修复错误、运行任务，并在无需人类输入的情况下发送 Push 通知。

## 核心功能
KAIROS 赋予 Claude **跨会话的长期记忆**能力。其独特之处在于，它不仅存储信息，还能在用户不活跃时自动工作。

### 四阶段记忆整合
Kairos 实现了一个自动化的记忆处理流程，包含以下四个阶段：

1.  **定向**: 识别和定位有价值的信息片段。
2.  **收集**: 汇集分散在不同会话中的数据。
3.  **整合**: 将碎片化信息合成为结构化知识。
4.  **修剪**: 去除冗余或过时的内容，优化记忆库。

### 应用场景
该功能旨在解决 AI 智能体“记性不好”的问题。例如，当用户休息时，AI 可以自动将之前多天对话中零散的讨论整理成连贯的笔记或文档。

## 与 Routine 的对应关系
2026年4月15日，随着 [[routine]] 功能的正式上线，外界确认 KAIROS 即为 Routine 的开发代号。两者的技术特征高度吻合：

| KAIROS (泄露描述) | Routine (正式功能) |
| :--- | :--- |
| **持久化后台 Agent** | 云端托管模式 |
| **周期性自行修复** | 定时触发器 |
| **无需人类输入** | API 触发器 |
| **Push 通知** | 返回的 Session URL |

这是过去一年中，泄露信息与产品路线图之间最准确的一次重合。