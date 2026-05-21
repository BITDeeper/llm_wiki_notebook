---
type: source
title: "一夜之间，AI终获「永久记忆」！最难考试99%刷爆SOTA，全网直呼疯狂"
tags: [ai-memory, supermemory, asmr, agent, rag, benchmark]
related: [supermemory, asmr, longmemeval, rag, 主动推理检索, 多agent并行推理]
created: 2026-03-23
updated: 2026-03-23
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/8tjd9tHtJL5DjVGga21Pjg"
venue: "新智元"
sources: ["一夜之间，ai终获「永久记忆」！最难考试99%刷爆sota，全网直呼疯狂.md"]
---
# 一夜之间，AI终获「永久记忆」！最难考试99%刷爆SOTA，全网直呼疯狂

## 摘要
本文报道了 [[Supermemory]] 团队发布的超级记忆系统 [[ASMR]]。该系统在业界公认的最难 AI 记忆考试 [[LongMemEval]] 中取得了 99% 的准确率，刷新了 SOTA 纪录。ASMR 抛弃了传统的向量数据库和嵌入模式，完全在内存中运行，采用 [[多Agent并行推理]] 架构，通过 3 个观察者 Agent 和 3 个搜索 Agent 的协同工作，实现了精准的长期记忆检索。

## 核心观点
- **AI 记忆难题已基本解决**：ASMR 在 11.5 万 Token 的复杂对话历史中准确提取信息，远超之前的 SOTA（85%）。
- **Agent 推理优于向量搜索**：传统的向量嵌入无法处理复杂的时序逻辑和信息更新，必须用主动的 Agent 推理来替代。
- **记忆与检索是两回事**：Supermemory 不仅是检索系统，更是真正的“记忆引擎”，能识别用户身份、处理信息覆盖并实现 [[自动遗忘]]。

## 关键技术细节
- **观察者 Agent**：3 个并行读取器，由 [[Gemini 2.0 Flash]] 加持，负责从原始会话中提取六大维度信息（个人信息、偏好、事件、时序数据、信息更新、助手信息）。
- **搜索 Agent**：3 个并行搜索器，负责主动推理检索，分别关注直接事实、上下文线索和时间线。
- **决策森林**：使用 8 个或 12 个高度专业化的 Agent 变体（由 [[GPT-4o-mini]] 驱动）独立作答，通过聚合器进行多数投票或冲突解决，准确率分别达到 98.6% 和 97.2%。

## 产品定位
Supermemory 定位为面向所有 AI 应用的记忆与上下文基础设施，提供 50ms 延迟的用户画像 API，支持 Google Drive、Gmail、Notion 等外部数据源集成，并计划于 4 月初开源全部代码。