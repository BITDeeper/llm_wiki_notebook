---
type: entity
title: Deer-Flow2
tags: [ai-agent, 开源框架, 字节跳动, 多智能体]
related: [龙虾架构, aio-sandbox, 字节跳动, 飞书, runtime-agent-os]
created: 2026-03-23
updated: 2026-03-23
sources: ["字节版龙虾架构火爆github！开源获35k+-star，内置skill全家桶，原生适配飞书.md"]
---

# Deer-Flow2

[[deer-flow2]] 是由 [[字节跳动]] 开源并维护的超级智能体管理框架。因其项目 Logo 为龙虾，其采用的“单一主智能体 + 11 层中间件链 + 动态子智能体”架构也被形象地称为 [[龙虾架构]]。该项目在 GitHub 上发布后迅速登顶 Trending 榜首，收获超过 35k Star。

## 核心特性

### 1. 模块化架构
Deer-Flow2 摒弃了 1.0 版本固定的 5 节点结构，转而采用高度灵活的 [[龙虾架构]]。这种架构将核心能力收敛到工具集与中间件链中，使得系统扩展无需改动底层框架，仅需添加新的 Skill。

### 2. 可插拔 Skill 体系
为了解决 AI Agent 上下文臃肿和效率低下的问题，Deer-Flow2 引入了 [[可插拔-skill-体系]]。
- **内置技能**：出厂自带深度研究、数据分析、图表生成、音视频创作等十余种常用技能。
- **渐进式加载**：系统根据任务需求动态加载技能，有效控制 Token 消耗。
- **自定义扩展**：用户可使用官方 `skill-creator` 工具封装专属技能，或通过 MCP/Python 接口深度集成自定义工具（如接入 [[claude-code]]）。

### 3. 沙箱隔离执行
安全性是 Deer-Flow2 的重点考量。框架配备了 [[沙箱隔离执行]] 环境，每个任务都在专属沙箱中运行，拥有独立的文件系统和 Bash 执行权限。
- **运行模式**：支持本地、Docker、Kubernetes 三种模式。
- **底层支持**：Docker 模式下采用字节开源的 [[aio-sandbox]]，提供更高级别的隔离和稳定性。

### 4. 子智能体调度
面对复杂长时任务，Deer-Flow2 通过 [[子智能体调度]] 机制进行处理。主智能体负责结构化拆解任务，并按需调度最多 3 个并行子智能体（通用型或命令行专家型）执行。每个子智能体拥有独立上下文，避免了信息污染。

### 5. IM 原生适配
Deer-Flow2 原生适配 [[飞书]]、Telegram 和 Slack。用户无需公网 IP，即可在即时通讯软件中直接与智能体交互，极大地降低了使用门槛。

## 部署方式
- **Docker 部署**：推荐方式，通过 `make config` 和 `make docker-init` 等命令快速启动。
- **本地部署**：需要 Python 3.12+、Node.js 22+、pnpm、uv 等前置环境，适合深度定制和二次开发。

## 开发团队
核心开发者包括北京大学的 Tao He 和南京大学的 Henry Li。

## 外部链接
- GitHub: https://github.com/bytedance/deer-flow
- 官网: https://deerflow.tech