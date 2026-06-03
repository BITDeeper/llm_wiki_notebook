---
type: entity
title: MiniMax Code
created: 2026-06-01
updated: 2026-06-02
tags: [agent, 编程工具, ai编程, vibe-coding]
related: [minimax-m3, minimax, 1-n-agent调度, claude-code, vibe-coding]
sources: ["minimax-m3来了！.md", "minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
origin_date: 2026-06-01
---
# MiniMax Code

MiniMax Code 是 [[minimax]] 专为 [[minimax-m3]] 设计并同步训练的 Harness/编程客户端，对标 [[claude-code]]，定位为 [[vibe-coding|Vibe Coding]] 客户端赛道的新入局者。

## 设计理念

MiniMax Code 与 M3 模型同步训练，而非事后适配。训练采用"交互式用户模拟器框架"，让模型在训练阶段就接触接近真实生产环境的协作场景：持续澄清需求、根据反馈调整方案、跨任务切换。

## 核心功能

### Agent Team 工作流

大型任务被拆解为多阶段、可并发、可动态调整的子任务，通过 Producer + Verifier 对抗式循环持续产出和自我修正，理论上可无人干预运行数天。

Agent Team 工作流是 [[1-n-agent调度]] 概念的具体产品化实现，将用户角色从对话者转变为任务调度者。

### 完整开发工作流

- 支持长程 Coding 任务、多轮协作开发、图文混合的复杂文档处理
- 支持项目目录设置、视频处理、网页生成等完整开发工作流

## 实测场景

在量子位的一手实测中，MiniMax Code 配合 M3 完成了以下任务：

- 独立复现学术论文（自主运行近 12 小时）
- 从 PPT 图片识别 74 个企业 Logo 并生成交互式网页
- 理解 1.3G 视频并复现解题过程
- 根据提示词搜集信息并制作可交互地图

## 竞争格局

MiniMax Code 进入由 [[claude-code]] 主导的 Vibe Coding 客户端赛道，是国产 AI 编程工具向国际第一梯队发起挑战的标志性产品。