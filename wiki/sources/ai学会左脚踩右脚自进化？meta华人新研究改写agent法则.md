---
type: source
title: "AI学会左脚踩右脚自进化？Meta华人新研究改写Agent法则"
tags: [meta, self-improvement, agent, hyperagents, jenny-zhang, darwin-godel-machine]
related: [hyperagents, darwin-godel-machine, jenny-zhang, 元认知自我修改, 自进化架构, ai-takeoff]
created: 2026-04-06
updated: 2026-04-06
authors: ["新智元", "元宇"]
year: 2026
url: "https://mp.weixin.qq.com/s/TA4U9_nH1qzZqFS8DGQ0vQ"
venue: "新智元"
sources: ["ai学会左脚踩右脚自进化？meta华人新研究改写agent法则.md"]
---

# AI学会左脚踩右脚自进化？Meta华人新研究改写Agent法则

## 概述
本文报道了 Meta 华人学者 Jenny Zhang 提出的 [[hyperagents]] 框架（DGM-H）。该研究突破了上一代 [[darwin-godel-machine]] (DGM) 依赖任务与自修改能力对齐的局限，实现了 [[元认知自我修改]]。AI 不仅改进任务逻辑，还能修改生成改进方案的机制本身，并展现出跨域迁移能力和自主涌现基础设施（如持久化记忆）的迹象。

## 核心发现

### 1. 元认知自我修改
- **定义**：系统不仅修改任务求解逻辑，还修改未来生成改进方案的机制本身。
- **突破点**：取消了“上层机制永远不变”的默认前提，将 Task Agent 和 Meta Agent 合并为同一个可编辑程序。

### 2. 打破“对齐依赖”
- **旧范式 (DGM)**：依赖任务能力（如写代码）与自修改能力（改代码）的对齐，限制了在编程以外的领域应用。
- **新范式 (DGM-H)**：不再需要这种对齐，使得自我进化能扩展到论文评审、机器人奖励设计等非 Coding 任务。

### 3. 跨域迁移能力
- 在 Paper Review 上训练的 HyperAgents，迁移到 Math Grading 任务时，能迅速将性能从 0 提升至 0.630。
- **意义**：证明系统学到的是通用的“改进方法”而非特定的任务策略。

### 4. 基础设施的涌现
- 系统自动生成了性能追踪器、持久化记忆、评估分析等组件。
- **证据**：论文展示了自动生成的代码，记录了跨代策略的有效性分析，表明 Agent 正从“输出结果”转向“维护系统”。

## 实验数据
- **Polyglot (Coding)**：50-task 子集从 0.140 提升至 0.340。
- **Paper Review**：从 0.0 提升至 0.710。
- **Robotics Reward Design**：从 0.060 提升至 0.372。

## 行业影响
- **竞争逻辑转变**：从比拼“谁更会干活”转向“谁更会变强”。
- **护城河重构**：未来的壁垒可能在于拥有一套能跨任务累积经验、持续变好的自我改进系统。
- **开发者角色**：从写功能的人，转变为设计 AI 自我设计边界条件的人。

## 风险与局限
- 实验在沙箱和人工监督下完成，外层循环（如任务分布）仍未开放。
- 随着系统自我修改能力增强，演化速度可能超过人类审计速度，带来安全挑战。

## 相关人物
- [[Jenny Zhang]]：Meta 实习生，UBC 博士生，论文第一作者。