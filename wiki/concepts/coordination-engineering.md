---
type: concept
title: 协同工程
tags: [multi-agent, framework, system-design, paradigm, system-architecture, ai-engineering, paradigm-shift, agent, 多智能体, 工程范式, 协同]
related: [agent-team-engine, team-skills, team-skills-自演进, openjiuwen, jiuwenclaw, agent-team, 任务执行范式, harness-engineering, agentteam, 分级自主协同, team-workspace, jiuwenswarm, swarm-skills, hots-hits, 多agent协作架构]
created: 2026-04-30
updated: 2026-05-22
sources: ["华为携手中科大发布灵境造物，openjiuwen首发coordination-engineering全栈支撑.md", "coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md", "继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md", "「虾马」之后，openjiuwen社区发布jiuwenswarm，引领蜂群智能体新架构，开启「养蜂」时代.md"]
---

# 协同工程（Coordination Engineering）

**协同工程**（Coordination Engineering）是围绕多智能体（Multi-Agent）系统进行编排、调度和管理的工程范式。它由 [[openjiuwen]] 社区及 [[JiuwenClaw]] 团队率先提出（2026年5月由 openJiuwen 正式发布），旨在解决多智能体如何自主分工、动态协商、沉淀经验并持续演进的系统性问题。

协同工程标志着 AI 工程焦点从单智能体的"驾驭与治理"向多智能体的"协同与进化"演进，让 AI 从"单兵作战"升级为一支能打硬仗的"精锐团队"，通过体系化协作解决复杂业务场景（如跨领域深度调研、大型软件项目交付、多角色协同决策、复杂业务流程编排）中的难题。

## 范式演进链

协同工程是 AI Agent 工程范式演进的最新阶段：

1. **Prompt Engineering**：调试提示词，让模型理解任务
2. **Context Engineering**：组织 Agent 的上下文、记忆、工具、状态
3. **[[harness-engineering|Harness Engineering]]**：围绕单 Agent 的工程化，涵盖轨迹管理、错误恢复、长程执行
4. **Coordination Engineering**：围绕多 Agent 协同的工程化范式

## 背景与定义

随着 AI 应用从单智能体向多智能体团队演进，传统的针对单个 Agent 的优化手段（如提示词工程、工具编排）已不足以支撑复杂的团队协作需求。行业焦点正从"驯服单个智能体"转向"管理智能体团队"。

在协同工程体系下，每个团队成员（Teammate）内部仍然是一个完整的 Harness SDK Agent，拥有全部的单智能体工程能力；而 TeamAgent 在此之上增加了协调层，使得多个优秀的个体能组成一个高效的团队。

## 核心命题

真实世界中真正复杂的任务从来都不是"一个人"能搞定的，而是需要一支团队。协同工程要解决的核心问题是：**如何让多个 Agent 像一支精锐团队一样协同作战？**

## 四个递进问题

协同工程围绕以下四个递进问题展开：

1. 多个 Agent 怎么**自主分工、动态协商**？
2. 协同跑通的最佳实践和角色搭配，怎么**沉淀成可复用的资产**？
3. 沉淀下来的能力，怎么在开发者之间**流通、复用、二次创作**？
4. 整套系统怎么**越用越强**，而不是越跑越僵？

## 核心要素

协同工程主要关注以下六个方面的系统化构建：

1. **团队编排**：如何根据任务目标动态组建和调整团队结构。
2. **任务调度**：任务的拆解、分配、依赖管理及优先级协商。
3. **通信协议**：Agent 之间的信息交换机制，包括结构化任务流转和非结构化消息沟通。
4. **隔离机制**：确保各 Agent 在独立工作空间运行，同时通过 [[team-workspace]] 共享产出。
5. **故障恢复**：处理单点故障、任务超时及隐性停滞，保证系统韧性。
6. **可观测性**：对团队状态、任务进度和事件流的实时监控与审计。

## 核心组件与演进

协同工程构建了一个从协作到进化的完整闭环，主要包含两个层级和四个关键部分：

### 1. 运行时协同

解决"当下怎么协作"的问题，模拟真实团队实现多智能体的自主分工与高效协同。

- **[[agent-team-engine]]**：解决"如何组队"的问题。通过 Leader 统筹和 Teammate 执行，实现多智能体的即时协作。
- **机制**：包含 Leader 智能编排、成员自主执行、共享工作区协同等。
- **局限**：单纯的运行时协作经验往往随会话结束而消失，难以复用。

### 2. 知识资产化

解决"协作能力如何沉淀与复用"的问题，将成功的协作模式转化为可复制的资产。

- **[[team-skills]]**：解决"经验沉淀"的问题。将成功的协作全链路（需求拆解、团队组建、任务分配、通信机制、冲突处理等）封装为标准化的 SOP，使团队能力可复制。
- **Team Skills Hub**：解决"经验共享"的问题。建立社区平台，让团队技能在生态中流通。
- **[[team-skills-自演进]]**：解决"持续优化"的问题。在实战中自动捕捉经验并迭代技能，让团队越用越强。

## 关键特征

- **标准化**：通过统一的文件结构规范（如 SKILL.md, workflow.md），将隐性的协作逻辑显性化。
- **可复用性**：优秀的协作模式可以被保存、分发并在不同任务中重复调用，实现从"一次性组队"到"团队化作战"的跨越。
- **跨平台兼容**：基于开放标准（如 Agent Skills 的扩展），支持在不同 Agent 框架间无缝迁移。

## 路线主张

协同工程范式明确否定"无所不能的超级个体"路线，主张**群体智能**——一群各有所长、彼此协同、不断进化的智能体团队。这与强调单模型能力（如 GPT-5.5、Claude Code）的"超级个体"叙事形成路线分歧。

## 实践案例

- **[[agentteam]]**：[[JiuwenClaw]] 的 agentteam 是协同工程的典型落地实践，通过 [[分级自主协同]] 和事件驱动机制，实现了无需人工干预的自动化团队协作。
- **[[jiuwenswarm]]**：协同工程范式的首个完整开源工程交付，通过 Agent Swarm、[[swarm-skills]]、Swarm Skills Hub、自演进四大组件实现了四个递进问题的全栈技术解答。

## 范式意义

协同工程标志着 AI 应用开发从关注"单点优化"（如 Prompt Engineering 或单点模型能力）转向关注"系统工程"和系统级协作效率。

它不仅提升了单次任务的执行效率，更重要的是实现了协作经验的资产化和系统化，为构建长期演进的 AI 组织和大规模、高复杂度的 AI 系统提供了工程化方法论。