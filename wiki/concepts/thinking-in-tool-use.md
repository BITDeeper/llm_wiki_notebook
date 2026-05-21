---
type: concept
title: "Thinking in Tool-Use"
tags: [deepseek, agent, reasoning]
related: [交错思维链, deepseek-v3-2]
created: 2025-12-04
updated: 2025-12-04
sources: ["deepseek-v3.2爆火，agentic性能暴涨40%解密.md"]
---

# Thinking in Tool-Use

Thinking in Tool-Use 是 [[DeepSeek V3.2]] 对其核心特性的称呼，本质上与 [[交错思维链]]（Interleaved Thinking）一致。

## 定义
指模型在调用工具时保持思维链的连续性。DeepSeek 的技术文档指出，模型会在调用工具的过程中持续进行推理，直到收到新的用户消息才会重置状态。

## 目的
该特性旨在解决 AI Agent 在执行复杂任务时的 [[状态漂移]] 问题。通过在工具调用的间隙保留显式的思考内容，模型能够更好地对抗环境噪音，确保长程规划的一致性。

## 实现
虽然具体的 API 字段命名可能与其他厂商不同（如 DeepSeek 使用 `reasoning_content`，MiniMax 使用 `reasoning_details`），但其系统设计哲学已与行业主流（如 Anthropic, MiniMax）达成共识：显式的、持久的思考是智能体进化的关键。