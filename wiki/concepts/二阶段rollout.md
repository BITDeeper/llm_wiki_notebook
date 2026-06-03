---
type: concept
title: 二阶段Rollout（Two-phase Rollout）
created: 2026-06-02
updated: 2026-06-02
tags: [部署策略, 在线服务, lora, 基础设施]
related: [mint-lora-infra, mind-lab]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
---
# 二阶段Rollout（Two-phase Rollout）

二阶段Rollout是[[mint-lora-infra|MinT]]中引入的部署机制，用于消除新增LoRA的冷加载对在线用户流量的干扰。

## 工作流程

1. **第一阶段（预热）**：新增LoRA在admission控制下完成预热，此时不对用户流量可见
2. **第二阶段（上线）**：LoRA仅在完全就绪后才对用户流量可见

## 性能效果

- 用户可见的LoRA加载p95降至0
- 首请求TTFT（Time To First Token）p95缩短2.3倍

## 设计理念

与[[vlm质检闭环]]理念相通，都强调在确认就绪后才对外可见，避免未就绪的组件影响用户体验。