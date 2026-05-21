---
type: entity
title: Avenir-Web
tags: [web-agent, framework, open-source, ucl, princeton]
related: [agent-harness, online-mind2web, experience-imitation-planning, mixture-of-grounding-experts, gemini-3-pro, seeact, claude-computer-use]
created: 2026-04-29
updated: 2026-04-29
sources: ["龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md"]
---

# Avenir-Web

Avenir-Web 是由伦敦大学学院（UCL）、普林斯顿大学和爱丁堡大学联合推出的开源网页智能体框架。其核心理念是作为一种 [[agent-harness]]（智能体挽具），通过外部模块化组件增强现有多模态大模型在网页操作任务中的能力，而无需对模型本身进行微调或训练。

## 核心架构
Avenir-Web 通过以下四个核心模块解决了 Web Agent 在实际部署中面临的定位、规划和记忆难题：

### 1. 经验模仿规划 (EIP)
模仿人类行为，在任务开始前利用 LLM 检索目标网站的帮助文档或指南，将其转化为高层级的策略路线图。这种“先读攻略再上手”的方法大幅减少了盲目探索。

### 2. 混合定位专家 (MoGE)
采用“视觉优先”原则，将网页视为统一视觉画布进行坐标交互，仅在视觉信息不足时使用语义结构推理作为兜底。这有效解决了 DOM 树方法在处理 iframe、Shadow DOM 等复杂结构时的失效问题。

### 3. 任务跟踪清单
将复杂指令分解为可验证的原子里程碑，并利用轻量级模型实时更新状态，防止 Agent 在执行过程中“跑偏”。

### 4. 自适应记忆
采用分块递归摘要机制，维持固定大小的滑动窗口，将历史操作提炼为抽象记忆状态，并设置“失败反思缓冲区”以从错误中学习。

## 性能表现
在 [[online-mind2web]] 基准测试中，Avenir-Web 展现了 SOTA 级别的性能：
-   使用 [[gemini-3-pro]] 作为内核时，成功率达到 **53.7%**。
-   显著超越了开源标杆 [[seeact]] (30.0%) 和闭源方案 [[claude-computer-use]] (47.3%)。
-   即使使用轻量级的 [[qwen-3-vl-8b]]，也能达到 25.7% 的成功率，证明了框架的普适性。

## 意义
Avenir-Web 证明了通过精巧的系统设计和工程化手段，可以在不改变底层模型参数的情况下显著提升 Agent 的任务执行能力，为构建可靠的通用数字助理提供了新的技术路径。