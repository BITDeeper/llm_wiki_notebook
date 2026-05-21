---
type: source
title: "吞吐提升76%！小红书开源RL训练引擎Relax"
tags: [rl, 开源, 小红书, 系统架构, 训练引擎]
related: [relax, 小红书, 全模态-agentic-协同设计, r3-rollout-routing-replay, transferqueue, 分布式checkpoint服务-dcs, micro-batch-流水线, 服务化隔离, 全异步流水线]
created: 2026-04-15
updated: 2026-04-15
authors: [Relax团队]
year: 2026
url: "https://mp.weixin.qq.com/s/ikoDal-5emFiR5gc6L6LDg"
venue: 量子位
sources: ["吞吐提升76%！小红书开源rl训练引擎relax.md"]
---

# 吞吐提升76%！小红书开源RL训练引擎Relax

## 概述
本文介绍了小红书 AI 平台团队开源的现代强化学习（RL）训练引擎 [[relax]]。该引擎旨在解决 RL 后训练在全模态数据和 Agentic 工作流场景下面临的数据异构、系统脆弱和角色耦合三重困境。

## 核心论点
现有的 RL 训练框架无法同时应对全模态数据带来的异构性、Agentic 场景的复杂性以及大规模训练的稳定性挑战。[[relax]] 通过 [[全模态-agentic-协同设计]]，将全模态原生支持、服务化容错和全异步流水线结合在一起，实现了显著的性能提升。

## 关键技术
1.  **全异步流水线**：将 Rollout（推理生成）和 Train（梯度更新）拆分为独立服务，通过 [[transferqueue]] 数据总线连接，实现并行执行。
2.  **Micro Batch 流水线**：将全局 Batch 切分为更小的 Micro Batch，不同 Micro Batch 在不同处理阶段形成流水线并行，消除了长尾样本对整个训练步骤的拖累。
3.  **服务化隔离**：将 RL 训练的各个角色（Actor, Ref, Rollout, Reward）拆分为独立的微服务，拥有独立的故障域，提高了系统的容错性。
4.  **R3 (Rollout Routing Replay)**：一种针对 MoE 模型的技术，在 Rollout 时记录路由决策，在 Training 时原样回放，以解决 Log Probs 不匹配问题。
5.  **分布式 Checkpoint 服务 (DCS)**：带拓扑感知的分布式权重传输系统，支持跨异构并行和跨集群传输，实现了分钟级的故障恢复。

## 性能数据
-   **吞吐量**：在 Qwen3-4B 实验中，全异步 Off-Policy 模式相比共卡 On-Policy 吞吐提升 **76%**，相比 veRL 的全异步实现提升 **20%**。
-   **收敛速度**：达到同等 Reward 水平的 Wall-clock 时间缩短了 **43%**。
-   **MoE 训练优化**：通过 R3 技术，将 MoE 模型的路由不匹配降低了约 38%，且额外开销极低（+1.9%）。

## 系统稳定性
通过 [[服务化隔离]] 和两级恢复策略，[[relax]] 实现了分钟级故障恢复和单角色弹性伸缩，避免了“一个节点挂了，全任务重启”的局面。

## 相关实体
-   [[小红书]]：开发方。
-   [[SGLang]]：Rollout 服务基于 SGLang 引擎构建。
-   [[Megatron]]：Train 服务使用 Megatron 后端。
-   [[Ray Serve]]：用于将各角色拆分为独立服务。
-   [[华为昇腾]]：TransferQueue 数据总线的开发方。