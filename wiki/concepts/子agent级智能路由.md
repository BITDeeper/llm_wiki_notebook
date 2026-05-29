---
type: concept
title: 子Agent级智能路由
created: 2026-05-28
updated: 2026-05-28
tags: [agent, 路由, token优化, 成本控制]
related: [pilotdeck, tokenmaxxing, ai-subscription-crisis, kv-cache连续性]
sources: ["小龙虾彻底凉了？清华团队连夜开源agent神器，token成本狂降70%！.md"]
---
# 子Agent级智能路由

子Agent级智能路由是 [[pilotdeck]] 提出的模型调度策略，在子Agent层面（而非request层面）做模型路由，以兼顾成本优化和推理性能。

## 核心原理

传统路由方案按request级别切换模型，每次请求单独判断走哪个模型。问题在于模型频繁切换会打断KV-cache，相当于每次换模型都要重新"读档"，推理效率反而下降。

PilotDeck的路由在子Agent层面执行：复杂任务拆成多个子任务后，整个子Agent分配给一个模型跑到底，子Agent内部的上下文缓存保持连续（[[kv-cache连续性]]）。

## 调度策略

- 支持规则定义路由策略（如"代码相关子任务走Claude Opus，文本处理走便宜模型"）
- 支持自然语言定义路由策略
- Routing面板透明展示每个session的难度判定（complex/simple/medium）、实际花费和节省金额

## 实测效果

| 场景 | 不开路由 | 开路由 | 节省 |
|------|---------|--------|------|
| 程序员人格测试 | $10.97 | $1.42 | 75% |
| 社交媒体内容 | $12.58 | $2.83 | ~70% |
| 复杂任务 | $18.36/69.1分 | $3.15/70.6分 | 83% |

## 行业意义

子Agent级智能路由直接回应了 [[tokenmaxxing]] 竞赛中Token成本飙升的痛点，也为 [[ai-subscription-crisis]] 提供了工程化解决方案。它代表了Agent工具从"全程最强模型"到"精打细算、按需分配"的成熟化转变。