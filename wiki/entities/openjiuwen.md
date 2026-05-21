---
type: entity
title: openJiuwen
tags: ["open-source", "community", "multi-agent", "huawei", "organization", "华为"]
related: [coordination-engineering, jiuwenclaw, agent-team-engine, team-skills, 华为, 华为2012实验室, team-skills-hub, teamskill-creator, agentteam, harness-engineering]
created: 2026-04-30
updated: 2026-05-07
sources: ["华为携手中科大发布灵境造物，openjiuwen首发coordination-engineering全栈支撑.md", "coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md", "继harness之后，“龙虾”jiuwenclaw率先开启“coordination-engineering”时代.md"]
---

# openJiuwen

**openJiuwen** 是由 [[华为]] 支持的开源社区与技术生态，致力于推动多智能体协同技术的发展。该社区联合了华为2012实验室、华为云 AgentArts 以及外部社区开发者，旨在让 AI 从“单兵作战”升级为“体系作战”。

openJiuwen 定位于连接企业级研发力量与开源社区创新。通过在 GitCode 和 GitHub 上托管代码，并发布标准化的协作规范，该社区试图构建一个跨平台、跨框架的通用 AI Agent 协作生态。

## 核心贡献

openJiuwen 社区构建了 [[coordination-engineering]]（协同工程）全栈技术体系，并发布了一套完整的多智能体协作解法。

该体系在底层构建了 [[agentteam]] 协同层——一套多智能体编排基础设施。该框架不仅支持单智能体的 [[harness-engineering]] 能力（如提示词工程、工具编排等），还进一步实现了团队级的协同工程，涵盖团队编排、任务调度、通信协议、隔离机制、故障恢复及可观测性。

其核心组件包括：

1.  **[[agent-team-engine]]**：多智能体协作引擎，模拟真实团队分工。
2.  **[[team-skills]]**：业界首个面向多 Agent 协作的标准化能力包规范，旨在解决协作经验的沉淀与复用问题。
3.  **[[Team-Skills-Hub]]**：团队技能的共享与分发平台。
4.  **[[team-skills-自演进]]**：让团队技能在实战中自动迭代优化。
5.  **[[teamskill-creator]]**：技能生成工具。

## 技术架构细节

在 [[agentteam]] 协同层的具体实现中，包含以下关键机制：

- **协同模式**：基于共享任务列表的一致性协同，以及消息和任务双驱动模式。
- **RolePolicy**：定义 Leader 和 Teammate 在团队中的行为规范和决策边界。
- **TeamTools**：赋予团队成员具体的协调操作能力。

## 关键产品

- **[[jiuwenclaw]]**：基于 openJiuwen 开发的企业级高可靠 Agent 框架（代号“龙虾”），具备自主演进能力，已在华为云 OfficeClaw 中实现落地。

## 生态资源

- 官网：https://www.openjiuwen.com/
- GitHub：https://github.com/openJiuwen-ai/
- GitCode：https://gitcode.com/openJiuwen
- Team Skills Hub：https://teamskills.openjiuwen.com/