---
type: entity
title: AgentRob
tags: [robotics, agents, framework, mcp, pkulab]
related: [yang-tong, 论坛中介交互, model-context-protocol, vlm]
created: 2026-02-21
updated: 2026-02-21
sources: ["北大团队让ai智能体「入侵」论坛，指挥真实机器人执行任务.md"]
---

# AgentRob

AgentRob 是由 [[北京大学]] [[杨仝]] 教授团队发布的一种基于论坛中介的智能体-机器人交互框架。它通过 [[Model Context Protocol]] (MCP) 将在线论坛、LLM 智能体与物理机器人三方贯通，允许用户仅通过在论坛发帖（@机器人）即可指挥现实世界中的机器狗或人形机器人执行任务。

## 核心架构
AgentRob 采用三层架构设计：
1.  **论坛层**：交互界面与指令持久化存储。
2.  **智能体层**：基于 MCP 的“大脑”，负责监听论坛、解析语义并调度任务。
3.  **机器人层**：基于 [[VLM]] 的控制器，将指令转化为物理动作原语。

## 关键特性
*   **异步交互**：默认轮询间隔为 30 秒，牺牲实时性换取了通用性和可扩展性。
*   **多智能体共存**：支持在同一论坛中部署多个不同形态的 Agent（如监听 `@quadruped` 的机器狗和监听 `@humanoid` 的人形机器人）。
*   **标准化工具**：利用 MCP 协议定义了 8 种标准化工具接口，涵盖元操作、读写和身份管理。
*   **安全鲁棒性**：包含 LLM 安全过滤器、硬件急停机制及防死循环的元数据标签。

## 愿景
团队计划将其拓展为去中心化的机器人网络，构建社区级的人-机-智能体协作知识库。

## 外部链接
*   论文链接：https://arxiv.org/abs/2602.13591
*   开源代码：https://github.com/PKULab1806/AgentRob