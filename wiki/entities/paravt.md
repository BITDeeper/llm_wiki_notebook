---
type: entity
title: ParaVT
created: 2026-05-26
updated: 2026-05-26
tags: [框架, 视频理解, 强化学习, 多智能体, 开源]
related: [para-grpo, tool-prior-paradox, paravt-8b, evolvinglmms-lab, 并行视频工具调用, 多agent协作架构]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# ParaVT

ParaVT 是首个面向[[并行视频工具调用]]的多智能体端到端强化学习训练框架，由 [[evolvinglmms-lab]] 开发。该框架将长视频推理从传统的串行逐轮回看推进到同轮并行的多窗印证范式。

## 核心架构

### Weight-sharing 多智能体体系

ParaVT 的核心是同一份模型权重同时扮演两种角色：

- **Main Agent（总指挥）**：接收原始长视频与问题，在第一个 turn 内同时生成多个并行的 `crop_video(start_time, end_time)` 指令，在最终 turn 负责聚合所有 sub-agent 的输出为最终答案。
- **Sub-Agents（并行观察者）**：与 Main Agent 共享同一份权重，每个 sub-agent 独立处理一个被 crop 出的高密采样片段，互不干扰地给出局部结论。
- **Gather & Reason（跨片段印证）**：Main Agent 把所有 sub-agent 的输出合并，做跨片段对照推理。

### 设计优势

- 部署侧不增加模型数量
- 训练侧不依赖外挂模块
- 同一 policy 内实现并行回看能力

## 核心方法

ParaVT 采用 [[para-grpo]]（Parseability-Anchored and Ratio-gAted GRPO）作为训练算法，解决 [[tool-prior-paradox]] 带来的两种失败模式。

## 实验表现

[[paravt-8b]] 在 7 项长视频理解基准中取得 6 项开源 7-8B 规模 SOTA，平均比 Qwen3-VL-8B base 提升 +7.9%。

## 与现有范式的关系

ParaVT 的 weight-sharing 多智能体设计是 [[多agent协作架构]] 在视频推理领域的具体实例，与 [[vla-视觉-语言-动作]] 范式存在概念交叉——并行工具调用可视为一种"动作"生成。