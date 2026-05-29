---
type: concept
title: Effort Control（思考力度）
created: 2026-05-29
updated: 2026-05-29
tags: [技术, claude, 推理控制, 用户体验]
related: [claude-opus-4-8, claude-code, ultracode, dynamic-workflows]
sources: ["刚刚，claude-opus-4.8来了！两个史上首次改写历史.md"]
origin_date: 2026-05-29
---
# Effort Control（思考力度）

Effort Control 是 [[claude-opus-4-8]] 在 [[claude-code]] 中引入的五档推理资源控制机制，让用户决定模型在任务上投入多少"思考力度"。

## 五档设置

| 档位 | 适用场景 | 特点 |
|------|---------|------|
| Low | 简单问题 | 秒回，省额度 |
| Medium | 常规任务 | 平衡速度与质量 |
| High | 复杂任务 | 深度推理 |
| xHigh | 硬骨头 | 自动触发 [[ultracode]] 模式 |
| Max | 极限任务 | 往死里想 |

## 与 Ultracode 的联动

当 Effort 达到 xhigh 档位时，模型会自行判断任务是否值得调用整支 Agent 大军。如果判断值得，则自动激活 [[ultracode]] 模式，启动 [[dynamic-workflows]] 进行大规模并行处理。

## 定价影响

Fast mode（低档位）也跟着大降价：2.5 倍速运行，价格砍到三分之一。这体现了按推理资源分层定价的思路，与 [[ai-subscription-crisis]] 中行业转向精细化计费的趋势一致。