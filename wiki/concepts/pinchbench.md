---
type: concept
title: PinchBench
tags: [benchmark, evaluation, agents, 评测基准, agent, 多步任务, openclaw]
related: [agnes-1-5-pro, agnesclaw, kilo-ai, jiuwenswarm, openclaw, macaron-v1-preview, livingbench, vitabench]
created: 2026-04-01
updated: 2026-06-08
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md", "「虾马」之后，openjiuwen社区发布jiuwenswarm，引领蜂群智能体新架构，开启「养蜂」时代.md", "rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---

# PinchBench

PinchBench 是由 [[kilo-ai|Kilo.ai]] 团队发布的 Agent 综合能力评测基准，也被广泛称为全球权威的"养虾"AI 评测榜单（即针对 AI Agent 部署和运行能力的评测）。该基准特别面向 [[openclaw|OpenClaw]] 个人智能助理场景，集中考验模型处理多步任务的连续性和用户反馈的动态变化。

## 概述

### 任务覆盖领域

PinchBench 的任务覆盖多个领域：

- 代码开发
- 创意写作
- 文档处理
- 会议管理
- 内容转换
- 文件操作

由于其任务设计贴近真实业务场景、评估维度全面（包括准确性等维度），已成为衡量 Agent 模型实际落地能力与执行能力的重要参考。

### 评测重点

- 模型需要理解每一步任务之间的逻辑关系
- 需要处理用户在不同步骤中的偏好与反馈变化
- 验证模型的多轮、多步、多反馈的真实 Agent 能力

## 已知评测结果

### Agnes 系列表现

根据 PinchBench 榜单数据，[[Agnes]] 的 [[Agnes-1.5-Pro]] 模型在准确性维度表现突出，跻身榜单前列，被认为是开发者"最佳养虾模型"的选择之一。

### Macaron 系列表现

[[macaron-v1-preview|Macaron-V1-Preview]] 在 PinchBench 中达到 92.5 分，成为表现最好的开源模型。

### 其他系统表现

| 系统 | 综合得分 | Token 消耗 |
|------|---------|-----------|
| [[jiuwenswarm]] | 94.2%（SOTA） | 基准 |
| [[openclaw]] | 91.6% | 高 34.8% |

## 注意事项

- PinchBench 由 Kilo.ai 发布，非行业通用标准（如 SWE-bench 等）
- JiuwenSwarm 的评测数据为自报数据，缺乏独立第三方验证
- 其是否能成为行业公认的 Agent 评测标准仍有待观察