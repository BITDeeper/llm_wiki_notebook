---
type: entity
title: MiniMax Code
created: 2026-06-01
updated: 2026-06-04
tags: [agent, 编程工具, ai编程, vibe-coding, 工具, minimax]
related: [minimax-m3, minimax, 1-n-agent调度, claude-code, vibe-coding, agent-team, codex]
sources: ["minimax-m3来了！.md", "minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md", "硅谷ceo深夜站台！minimax-m3冲上开源第一，中文社区却吵翻了？.md"]
origin_date: 2026-06-01
---
# MiniMax Code

MiniMax Code 是 [[minimax]] 推出的系统级工具箱，是 [[minimax-m3]] 模型的官方运行环境与专为该模型设计并同步训练的 Harness/编程客户端。对标 [[claude-code]] 与 [[codex]]，定位为 [[vibe-coding|Vibe Coding]] 客户端赛道的新入局者。

## 设计理念

MiniMax Code 与 M3 模型同步训练，而非事后适配。训练采用"交互式用户模拟器框架"，让模型在训练阶段就接触接近真实生产环境的协作场景：持续澄清需求、根据反馈调整方案、跨任务切换。

MiniMax Code 将模型能力与 Agent 团队架构深度绑定，强调"一个负责想，一个负责干"的协作模式。

## 核心功能

### Agent Team 工作流

Agent Team 是 [[1-n-agent调度]] 概念的具体产品化实现，采用 Leader-Worker-Verifier 三角色对抗循环，底层由状态机引擎管理：

- **Leader**：负责任务拆解与调度
- **Worker**：负责并行执行子任务
- **Verifier**：负责产出校验与自我修正

大型任务被拆解为多阶段、可并发、可动态调整的子任务，通过 Producer + Verifier 对抗式循环持续产出和自我修正，理论上可无人干预运行数天。用户角色从对话者转变为任务调度者。

### 系统级工具调用

支持 ffmpeg 等外部工具的自主调用，实现视频压缩、切段等系统级操作。

### 并行执行与中途追加

- 用户发一条消息后，多个 Worker 可并行启动任务
- 支持在任务执行过程中追加新需求，Leader 当场响应

### 完整开发工作流

- 支持长程 Coding 任务、多轮协作开发、图文混合的复杂文档处理
- 支持项目目录设置、视频处理、网页生成等完整开发工作流

## 实测场景

在量子位等媒体的一手实测中，MiniMax Code 配合 M3 完成了以下任务：

- 独立复现学术论文（自主运行近 12 小时）
- 从 PPT 图片识别 74 个企业 Logo 并生成交互式网页
- 理解 1.3G 视频并复现解题过程
- 根据提示词搜集信息并制作可交互地图
- 调用 ffmpeg 完成 1.15GB GTC 演讲视频的压缩和切段，12 段全部处理后 40 分钟出 3500 字初稿
- 12 个模型 benchmark 截图自动识别、归一化、联网补全数据，生成 Bloomberg Terminal 风格交互大屏

## 竞争格局

MiniMax Code 进入由 [[claude-code]] 主导的 Vibe Coding 客户端赛道，与 [[codex]] 形成竞争关系，差异在于将模型能力与 Agent 团队架构深度绑定。MiniMax Code 是国产 AI 编程工具向国际第一梯队发起挑战的标志性产品。