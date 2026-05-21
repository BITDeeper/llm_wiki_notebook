---
type: entity
title: JiuwenClaw
tags: ["agent-framework", "enterprise", "multi-agent", "ai-agent", "huawei", "open-source", "coordination-engineering", "华为"]
related: ["openjiuwen", "coordination-engineering", "team-skills", "华为云", "华为2012实验室", "agent-team", "agent-team-engine", "Team-Skills-Hub", "华为", "agentteam", "harness-engineering", "openclaw"]
created: 2026-04-30
updated: 2026-05-07
sources: ["华为携手中科大发布灵境造物，openjiuwen首发coordination-engineering全栈支撑.md", "coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md", "继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md"]
---

# JiuwenClaw

**JiuwenClaw**（内部代号“龙虾”，昵称“小龙虾”）是一个由华为2012实验室、华为云 AgentArts 与社区开发者联合在 [[openjiuwen]] 开源社区共建的 AI Agent 项目。它结合了华为云 AI 基础设施能力与 AgentArts 智能体开发平台，主打“懂你所想，自主演进”，致力于推动 AI 工程范式从单智能体的“驾驭与治理”向多智能体的“协同与进化”转变。

作为实现 [[Coordination Engineering]]（协同工程）的核心载体，JiuwenClaw 已在华为云 OfficeClaw 场景中实现企业级落地。

## 核心架构与演进

JiuwenClaw 的架构演进主要包含两个阶段，旨在解决多智能体协作中的编排与复用难题：

1.  **Agent Team（智能体团队）**
    *   **解决问题**：解决多智能体“当下怎么协作”的问题。
    *   **技术实现**：实现了 [[agent-team-engine]] 架构，包含 **Leader**（统筹与智能编排）和 **Teammate**（执行与自主行动）角色。
    *   **协同机制**：通过 [[team-workspace]]（团队共享工作区）实现高效协同，并支持全生命周期管控，让多智能体像精锐团队一样完成复杂目标。

2.  **Team Skills（团队技能）**
    *   **解决问题**：解决“协作能力如何沉淀与复用”的问题。
    *   **标准化规范**：业界首个面向多 Agent 协作的标准化能力包规范。它将协作流程、任务范式、沟通策略等封装为标准化的文件结构（如 `SKILL.md`, `workflow.md`），使得优秀的协作模式可复制、可分发。
    *   **标准扩展**：该规范扩展了 Anthropic 提出的 Agent Skills 标准，支持在 Claude Code、Cursor 等支持多智能体协同的平台上运行，不依赖特定框架。

## 核心特性

### 多智能体协同与任务管理
- **分级自主协同**：引入 [[agentteam]] 机制，模拟真实团队协作方式。Leader 负责战略规划，Teammate 负责独立执行，支持动态组建团队及任务双驱动（任务+消息）模式。
- **任务自主管理**：具备任务规划模式，相当于给 AI 配了一个待办事项列表。用户可以随时对任务进行动态打断、追加和修改，系统会实时重新规划与更新任务列表。

### 自演进与优化
- **Skills 自主演进**：基于 openJiuwen 自演进框架，支持 [[team-skills-自演进]]。系统能主动记录工具调用失败或用户反馈（如“不对”、“换个方式”），分析根因并生成改进建议，由用户审批后自动更新。
- **企业级高可靠**：针对复杂业务场景设计，强调稳定性与可控性。

### 交互与性能优化
- **上下文压缩与卸载**：通过 [[上下文卸载]]（Context Offload）机制有效节省成本，并实时展示上下文状态（压缩前后长度及压缩比）。
- **浏览器操控**：支持无缝接管用户浏览器环境（Cookie、历史记录等），自动获取已登录状态，减少人机验证干扰。

## 实测表现

根据 2026 年 4 月的实测报告，JiuwenClaw 表现出极高的多智能体协作稳定性：

- **装修设计**：自主组建包含硬装、软装及艺术家的团队，完成全屋设计方案。
- **并行提效**：在 20 分钟内生成一份 200 页、逻辑严密的技术 PPT（针对 [[openclaw]] 的深度调研）。
- **博弈对抗**：自主搭建五子棋对弈环境，实时展示攻防逻辑。

## 生态系统与工具链

JiuwenClaw 配套了完整的工具链与生态平台，以支持技能的全生命周期管理：

- **[[teamskill-creator]]**：被称为“团队技能自动生成专家”，是一个辅助用户自动生成或转换团队技能的元智能体。
- **[[Team Skills Hub]]**：用于分享、检索和下载团队技能的市场平台，涵盖开发、办公、医疗等多个领域。

## 开源资源

项目由 openJiuwen 社区维护，代表了华为系在 AI Agent 领域的开源探索，试图通过标准化解决多智能体协作中的工程化难题。

- **官网**: https://www.openjiuwen.com/
- **GitHub**: https://github.com/openJiuwen-ai/jiuwenclaw
- **GitCode**: https://gitcode.com/openJiuwen/jiuwenclaw
- **AtomGit**: https://atomgit.com/openJiuwen/jiuwenclaw