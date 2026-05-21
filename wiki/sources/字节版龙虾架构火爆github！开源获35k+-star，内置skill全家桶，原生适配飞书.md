---
type: source
title: "字节版龙虾架构火爆GitHub！开源获35k+ Star，内置Skill全家桶，原生适配飞书"
tags: [ai-agent, 开源项目, 字节跳动, 架构设计]
related: [deer-flow2, 龙虾架构, aio-sandbox, 字节跳动]
created: 2026-03-23
updated: 2026-03-23
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/qIE-o08TF1rFTizJz3EpCw"
venue: 量子位
sources: ["字节版龙虾架构火爆github！开源获35k+-star，内置skill全家桶，原生适配飞书.md"]
---

# 字节版龙虾架构火爆GitHub！开源获35k+ Star，内置Skill全家桶，原生适配飞书

## 摘要
本文详细介绍了字节跳动开源的超级智能体管理框架 [[deer-flow2]]。该框架采用被称为“[[龙虾架构]]”的模块化多智能体架构，在 GitHub 上获得了 35.3k Star 并登上了 Trending 榜首。文章分析了其从 1.0 到 2.0 的架构重构，重点阐述了其可插拔 Skill 体系、[[沙箱隔离执行]]环境以及原生适配 [[飞书]] 等 IM 渠道的能力。

## 核心观点

### 架构演进：从固定到灵活
- **1.0 版本**：采用固定 5 节点架构，主要聚焦于“深度研究”场景。
- **2.0 版本**：重构为“单一主智能体 + 11 层中间件链 + 动态子智能体”架构。
- **核心差异**：将核心能力收敛到工具集与中间件，新增能力无需改动底层框架，只需添加新 Skill。

### 关键技术特性
1.  **可插拔 Skill 体系**：出厂内置深度研究、数据分析等十余种技能，支持渐进式加载以控制 Token 消耗。用户可使用 `skill-creator` 工具自定义技能，甚至可接入 [[claude-code]]。
2.  **隔离沙箱执行**：每个任务在独立沙箱中运行，拥有完整文件系统与 Bash 权限。支持本地、Docker、Kubernetes 三种模式，其中 Docker 模式采用字节开源的 [[aio-sandbox]]。
3.  **子智能体调度**：主智能体拆解任务后，可调度最多 3 个并行子智能体（通用型或专家型），各子智能体拥有独立上下文，互不干扰。
4.  **IM 原生适配**：原生支持 [[飞书]]、Telegram、Slack，无需公网 IP 即可交互。

### 部署与生态
- 提供一键 Docker 部署和本地开发模式。
- 内置 Tavily、Brave Search、Jina 等搜索与爬虫工具。
- 核心开发者包括北京大学的 Tao He 和南京大学的 Henry Li。

## 相关条目
- [[deer-flow2]]：本文介绍的核心实体。
- [[龙虾架构]]：Deer-Flow2 采用的独特架构模式。
- [[runtime-agent-os]]：Deer-Flow2 是该架构理念的具体实现案例。
- [[字节跳动]]：开发方。