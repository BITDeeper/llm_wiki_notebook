---
type: concept
title: GCUA（通用计算机使用智能体）
created: 2026-06-12
updated: 2026-06-12
tags: [智能体, 概念, agent, 计算机使用]
related: [ale-智能体的最后考试, claude-code, codex, 任务执行范式]
sources: ["rss/claude-fable-5最难档零分！智能体的最后考试来了.md"]
---
# GCUA（通用计算机使用智能体）

GCUA（Generalist Computer-Use Agent，通用计算机使用智能体）是指能在单一行动循环中结合视觉感知、代码执行、工具使用和长周期规划的AI智能体。

## 典型代表

- [[claude-code|Claude Code]]（[[anthropic|Anthropic]]）
- [[codex|Codex]]（[[openai|OpenAI]]）

## 能力要求

GCUA需要在同一个行动循环中整合多种能力：
- **视觉感知**：识别屏幕内容、GUI元素
- **代码执行**：编写和运行脚本
- **工具使用**：调用网页搜索、文件系统、终端等
- **长周期规划**：跨多步骤维持任务上下文和目标

## 与评测基准的关系

GCUA是[[ale-智能体的最后考试|ALE]]基准的目标测试对象。ALE的任务形态覆盖范围大于仅测试GUI的基准（如OSWorld），也大于仅测试CLI的基准（如Terminal-Bench），因为GCUA需要同时具备GUI和CLI交互能力。

GCUA代表了[[任务执行范式]]从「对话能力」向「真实世界任务执行能力」转移的核心方向。