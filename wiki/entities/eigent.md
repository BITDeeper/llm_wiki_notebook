---
type: entity
title: Eigent
tags: [agent, 开源, 分布式系统, 全栈本地]
related: [guohao-li, camel-ai, claude-cowork, 分布式多智能体, actor-模型, seta-scaling-environments-for-terminal-agents, 本地推理]
created: 2026-01-16
updated: 2026-01-16
sources: ["真没招了！claude撞碎创业梦，华人博士开源逆袭.md"]
---

# Eigent

**Eigent** 是一个全栈本地 [[分布式多智能体]] 框架，由华人学者 [[guohao-li]] 团队基于 [[camel-ai]] 框架开发。该项目原计划作为商业产品推出，但在 [[anthropic]] 发布 [[claude-cowork]] 功能后，团队决定将其以 Apache 2.0 协议彻底开源。

## 核心特性

### 分布式架构
Eigent 区别于传统的“单体 Agent”或简单的角色扮演对话（Cosplay Agent），它引入了分布式系统的设计理念：
- 将多个 AI 视为一个计算集群。
- 基于 [[actor-模型]] 构建消息总线，实现容错、重启和扩容。
- 支持大规模（数百级）智能体的任务并行协作。

### 终端控制
通过集成 [[seta-scaling-environments-for-terminal-agents]] 项目，Eigent 实现了对终端的直接控制：
- Agent 不再仅输出文本代码块，而是直接接管命令行。
- 能够执行 `git clone`、`npm install` 等操作，并读取报错日志进行自我修正。
- 被谷歌开发者博客誉为“Next Generation Agents”（下一代智能体）。

### 全栈本地化
Eigent 强调数据所有权和本地算力利用：
- 从底层模型推理、UI、沙盒运行时到分布式调度全链路开源。
- 支持消费级显卡运行企业级数据任务。
- 兼容 Llama3、Mistral、Qwen、DeepSeek 等多种模型。

## 历史背景
- **前身**：[[camel-ai]] 框架。
- **转折点**：2026年，[[claude-cowork]] 的发布导致 Eigent 原有的商业模式失效。
- **现状**：转为开源项目，旨在对抗黑盒 SaaS 订阅制，构建社区壁垒。

## 社区反响
- Hugging Face 联合创始人 [[thomas-wolf]] 对其开源行为表示赞赏。
- 被视为 [[代码朋克]] 精神的体现，即反封装、崇尚开源和硬核编程。