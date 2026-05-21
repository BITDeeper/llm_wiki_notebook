---
type: source
title: "嘘，Claude正在「做梦」！睡一觉疯狂进化，一夜暴涨6倍战力"
tags: [anthropic, agent, dreaming, multi-agent, outcomes]
related: [anthropic, dreaming-功能, outcomes-自动评分, 多智能体编排, runtime-agent-os, ai-subscription-crisis]
created: 2026-05-07
updated: 2026-05-07
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/9xNPYWaUw2teeSjc_kwU7A"
venue: "新智元"
sources: ["嘘，claude正在「做梦」！睡一觉疯狂进化，一夜暴涨6倍战力.md"]
---

# 嘘，Claude正在「做梦」！睡一觉疯狂进化，一夜暴涨6倍战力

## 概述
本文报道了 Anthropic 在 Code with Claude 开发者大会上发布的托管智能体三项重大更新：[[dreaming-功能]]（做梦）、[[outcomes-自动评分]]（自动评分）和 [[多智能体编排]]。这些功能旨在解决 AI Agent 在长期运行中面临的记忆衰退、输出质量不稳定和单点能力不足三大瓶颈。

## 核心内容

### Dreaming (做梦) 功能
- **机制**：AI 在两次工作的间隙，自动回顾历史会话（最多100个）和现有记忆库，生成全新的、经过梳理的记忆库。
- **类比**：灵感来源于人类 REM 睡眠（快速眼动睡眠），通过重放历史经历来强化有价值的连接、丢弃无用信息。
- **操作**：合并重复项、替换过时信息、挖掘宏观规律。
- **控制权**：不修改原始记忆库，生成新库供开发者审查；支持流式订阅实时查看 AI 状态，可随时中断（“叫醒”）。
- **效果**：在月球采矿无人机模拟演示中，经过一夜 Dreaming，任务失败率从 33% 降至 0%。

### Outcomes (自动评分)
- **机制**：使用独立的评估器模型，根据预设标准对 Agent 输出进行打分。
- **优势**：评估器与执行 Agent 隔离，避免了自我验证的盲区。
- **效果**：内部测试显示，任务成功率提升最高 10 个百分点（PPT 任务提升 10.1%）。

### 多智能体编排
- **架构**：主智能体负责任务拆解与统筹，专家子智能体并行执行。
- **协作**：基于共享文件系统工作，主智能体可随时对齐进度。
- **可观测性**：开发者可在控制台追溯每一步细节和决策理由。

## 实际应用案例
- **Harvey (法律 AI 公司)**：使用 Dreaming 后，任务完成率飙升约 6 倍。
- **月球采矿演示**：通过 Commander (主)、Detector (地质)、Navigator (导航) 三个 Agent 协作，配合 Outcomes 评分和 Dreaming 进化，实现了 100% 的着陆成功率。

## 基础设施与成本
- **算力支持**：[[anthropic]] 与 [[SpaceX]] 达成协议，租用 Colossus 1 数据中心的 22 万张 GPU。
- **成本结构**：托管智能体在标准 API token 费率外，额外收取每会话小时 0.08 美元的运行时费用。
- **用户福利**：Claude Code 使用限额翻倍，取消 Pro/MAX 高峰时段限制，Opus API 速率限制上涨。

## 关键意义
这三项功能标志着 AI Agent 从“能跑”向“能用”的质变，通过生物学机制（REM 睡眠）和工程化手段（自动评分、多智能体编排），解决了 Agent 落地的核心痛点。