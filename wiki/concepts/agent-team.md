---
type: concept
title: Agent Team
created: 2026-06-04
updated: 2026-06-04
tags: [agent, 多智能体, 编程, minimax, 架构]
related: [minimax-code, minimax-m3, 多agent协作架构, agentic-engineering]
sources: ["硅谷ceo深夜站台！minimax-m3冲上开源第一，中文社区却吵翻了？.md"]
origin_date: 2026-06-01
---
# Agent Team

[[minimax-code]] 提出的多智能体协作架构，采用Leader-Worker-Verifier三角色对抗循环模式，是 [[多agent协作架构]] 概念的具体工程实现。

## 三角色架构

- **Leader（调度者）**：理解目标、拆任务、调度Worker，响应中途追加需求
- **Worker（执行者）**：具体干活，不同Worker有不同的工具和上下文，支持并行执行
- **Verifier（验收者）**：专门和Worker唱反调，挑毛病、打回重做

## 对抗循环机制

Worker完成后，Verifier开始挑毛病；挑出问题则打回重做；Verifier检查通过后，Worker拿着修改意见重新来过。这个循环不靠模型自己判断何时停止，底层由**状态机引擎**管理。

## 用户体验

- 用户发一条消息，M3秒回确认，同时后台多个Worker并行启动
- 中途可追加新需求，Leader当场响应，后台任务不停
- 类比："像极了一个能秒回你微信、同时还在帮你干活的同事"

## 与其他方案的对比

- **vs [[agent-view]]**：Claude Code的Agent View是多会话调度界面（1:N调度），Agent Team则是角色分工的对抗式协作
- **vs [[codex]]**：Codex支持大规模并行实例运行，Agent Team强调角色间的制衡与验证

## 解决的痛点

- Agent做完3件事就停下来汇报，不敢继续
- 跑着跑着风格突变，前面靠谱后面说胡话
- 缺乏独立的质量验收环节