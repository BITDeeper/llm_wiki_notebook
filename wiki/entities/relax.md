---
type: entity
title: Relax
tags: [rl, 训练引擎, 开源项目, 小红书, 系统架构]
related: [小红书, 全模态-agentic-协同设计, r3-rollout-routing-replay, transferqueue, 分布式checkpoint服务-dcs, micro-batch-流水线, 服务化隔离, 全异步流水线, sglang, megatron, ray-serve]
created: 2026-04-15
updated: 2026-04-15
sources: ["吞吐提升76%！小红书开源rl训练引擎relax.md"]
---

# Relax

[[Relax]] 是由 [[小红书]] AI 平台团队开源的现代强化学习（RL）训练引擎。它专为全模态数据、Agentic 工作流和大规模异步训练协同设计，旨在解决现有 RL 框架在处理多模态数据和复杂智能体任务时面临的性能与稳定性瓶颈。

## 核心特性

### 全模态 Agentic 协同设计
[[Relax]] 的核心设计理念是 [[全模态-agentic-协同设计]]，认为数据异构、系统脆弱和角色耦合是三个环环相扣的问题，必须通过协同设计一并解决。

### 全异步流水线
通过 [[全异步流水线]] 架构，[[Relax]] 将 Rollout（推理生成）和 Train（梯度更新）拆分为独立服务，利用 [[transferqueue]] 数据总线连接，实现并行执行。这解决了传统方案中 Trainer 等待 Rollout 完成的资源浪费问题。

### Micro Batch 流水线
[[Relax]] 引入了 [[micro-batch-流水线]] 技术，将全局 Batch 切分为更小的 Micro Batch。不同 Micro Batch 在不同处理阶段（生成、计算优势、训练）形成流水线并行，消除了长尾样本对整个训练步骤的拖累。

### 服务化隔离
系统采用 [[服务化隔离]] 架构，将 RL 训练的各个角色（Actor, Ref, Rollout, Reward）拆分为独立的微服务（基于 [[Ray Serve]]）。每个服务拥有独立的故障域，单一组件故障不会导致全局重启。

### R3 技术
针对 MoE 模型训练中的路由不匹配问题，[[Relax]] 实现了 [[r3-rollout-routing-replay]] 技术。该技术在 Rollout 时记录路由决策，在 Training 时原样回放，显著降低了 Off-Policy 训练中的 Mismatch（约 38%）。

### 分布式 Checkpoint 服务 (DCS)
[[Relax]] 内置了 [[分布式checkpoint服务-dcs]]，这是一个带拓扑感知的分布式权重传输系统，支持跨异构并行和跨集群传输，实现了分钟级的故障恢复和弹性伸缩。

## 性能表现
根据官方测试数据（基于 Qwen3-4B 模型和 NVIDIA H800 集群）：
-   **吞吐量**：全异步 Off-Policy 模式相比共卡 On-Policy 吞吐提升 **76%**，相比 veRL 的全异步实现提升 **20%**。
-   **收敛速度**：达到同等 Reward 水平的 Wall-clock 时间缩短了 **43%**。
-   **MoE 训练**：R3 技术将路由不匹配降低了约 38%，且额外开销仅 +1.9%。

## 技术栈
-   **Rollout 服务**：基于 [[SGLang]] 引擎构建。
-   **Train 服务**：使用 [[Megatron]] 后端。
-   **服务编排**：使用 [[Ray Serve]] 进行服务化拆分。
-   **数据总线**：基于 [[华为昇腾]] 开源的 TransferQueue 实现。

## 开源信息
-   **GitHub**：https://github.com/redai-infra/Relax
-   **License**：Apache 2.0