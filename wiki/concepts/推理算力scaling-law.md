---
type: concept
title: 推理算力 Scaling Law
created: 2026-05-13
updated: 2026-05-13
tags: [scaling-law, 推理, 算力, 编程, openai]
related: [scaling-law, noam-brown, gpt-5.5, programbench, ai-takeoff]
sources: ["gpt-5.5全球首破！0源码盲写程序，编程ai进入新纪元.md"]
---
# 推理算力 Scaling Law

推理算力 Scaling Law 是 [[noam-brown]] 提出的理论观点：同一模型底座在不同推理算力级别下表现呈质的飞跃。智能不再是固定值，而是算力的函数。

## 核心主张

- 同一模型，不同推理深度，能力差异巨大
- 推理算力是编程AI能力的核心变量
- 不是模型不够聪明，而是之前给它"思考"的时间不够

## 实证验证

在 [[programbench]] 的 cmatrix 任务上，同一 [[gpt-5.5]] 底座的表现：

| 推理级别 | cmatrix结果 | 说明 |
|---------|------------|------|
| medium | 未通过 | 成绩勉强比 Claude Sonnet 4.6 好一点 |
| high | 满分通过（C语言） | 10轮探索+5次微调 |
| xhigh | 满分通过（Python） | 27步探索，彻底摸清每条CLI路径 |

## 与训练侧 Scaling Law 的关系

Wiki 已有的 [[scaling-law]] 侧重训练侧（算力→数据→参数规模→性能），而推理算力 Scaling Law 聚焦推理侧（同一模型，更多推理算力→质的飞跃）。两者互补，共同构成 AI 能力扩展的完整图景。

## 推理级别分层

GPT-5.5 支持不同推理深度模式：
- **medium** — 默认推理模式
- **high** — 高推理模式
- **xhigh** — 最高推理模式，性能断层领先

## 开放问题

- 推理算力 Scaling Law 的上限在哪里？xhigh 之上是否还有空间？
- 推理算力扩展是否适用于所有任务类型，还是仅在特定编程任务上有效？
- 从 cmatrix 到 SQLite、Linux 内核的跳跃是否可以通过推理算力扩展实现？