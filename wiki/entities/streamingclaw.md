---
type: entity
title: StreamingClaw
tags: [agent-framework, embodied-ai, multimodal, real-time]
related: [理想汽车, openclaw, streamingreasoning, streamingmemory, streamingproactivity]
created: 2026-04-05
updated: 2026-04-05
sources: ["具身龙虾，上车理想.md"]
---

# StreamingClaw

StreamingClaw 是 [[理想汽车]] 发布的流式视频理解与具身智能统一的 Agent 框架。它在保持与 [[OpenClaw]] 框架完全兼容的基础上，原生支持实时的多模态流式交互。

## 核心特性
- **实时流式交互**：不再将视觉输入视为死板的离线视频文件，而是像人类感知世界一样，实时捕获流数据并进行即时推理。
- **极低延迟闭环**：在具身智能、AI 硬件及智能座舱等场景下，实现毫秒级的 [[感知-决策-执行闭环]]。
- **主动交互**：从传统的被动问答转变为主动预警和交互，例如监控驾驶员状态并实时提醒。

## 系统架构
StreamingClaw 采用 [[多代理架构]]，主要包含以下组件：

### 1. [[StreamingReasoning]] (主代理)
负责实时感知与规划。通过 [[增量计算]] 和优化的 [[流式KV-Cache]] 机制，在极低延迟约束下处理连续视频流输入。

### 2. [[StreamingMemory]] (从代理)
提供长效记忆支撑。利用 [[层级记忆演化]] (HME) 机制，将碎片化的多模态信息转化为结构化的“行动”和“事件”经验，支持高效的长时序检索。

### 3. [[StreamingProactivity]] (从代理)
负责主动交互决策。支持面向未来事件的预测与推理，能够将用户指令转化为持续在线的监控任务，并在满足触发条件时即时生成响应。

## 技术细节
- **输入处理**：通过 [[时间戳对齐]] 和 [[共享流式缓存]] 打通不同硬件（如智能眼镜、自动驾驶芯片）的数据壁垒。
- **工具集成**：深度集成工具箱与技能库，支持从简单的视频剪切到复杂的具身动作序列执行。

## 局限性
当前版本仍以“视觉+文本”为核心输入范式，对音频输入、精细时序对齐及跨模态联合推理的支持仍有限。

## 参考资源
- [项目主页](https://jackyu6.github.io/StreamingClaw-Page/)
- [arXiv 论文](https://arxiv.org/pdf/2603.22120)