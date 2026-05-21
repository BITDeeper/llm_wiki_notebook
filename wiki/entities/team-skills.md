---
type: entity
title: Team Skills
tags: [standard, multi-agent, specification, collaboration, jiuwenclaw]
related: [jiuwenclaw, coordination-engineering, teamskill-creator, team-skills-hub, agent-skills]
created: 2026-04-24
updated: 2026-04-24
sources: ["coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md"]
---

# Team Skills

**Team Skills** 是由 openJiuwen 社区发布的业界首个面向多 Agent 协作的标准化能力包规范。它旨在解决多智能体协作中经验无法沉淀、每次任务需从零开始规划的问题，将复杂的团队协作逻辑转化为可复用、可分发的标准化资产。

## 核心概念

如果说 Anthropic 提出的 **Agent Skills** 解决的是“单个 Agent 怎么做事”，那么 **Team Skills** 解决的是“一个 Agent 团队怎么配合做事”。它将多智能体团队的协作流程、任务范式、沟通策略和执行规范沉淀为标准作业程序（SOP）。

## 文件结构规范

一个 Team Skill 本质上是一个标准化的文件夹目录结构，包含以下核心文件：

- **`SKILL.md`**：定义团队的名称、功能描述及成员构成。
- **`roles/`**：目录，包含各成员角色的职责定义（如 `role-a.md`）。
- **`workflow.md`**：定义成员间的配合方式、执行顺序及交互逻辑。
- **`bind.md`**：定义处理边界、异常情况及冲突解决策略。
- **`dependencies.yaml`**：列出依赖的外部工具或库。
- **`examples/ | templates/ | assets/`**：可选目录，用于存放示例、模板或资源。

这种结构设计简单，门槛低，既支持简单任务的快速定义，也允许复杂任务通过增加角色和流程细节来逐步演进。

## 功能与价值

1.  **协作经验资产化**：将 Leader 智能体在任务中的编排决策（如选人、分工、并行策略）固化为显式知识，使得“一次成功的协作”可以变成“一套可复制的团队能力”。
2.  **跨框架兼容性**：Team Skills 扩展了 Agent Skills 开放标准，不依赖特定平台。理论上，任何支持 Agent Skills 标准的平台（如 Claude Code, Cursor）都可以零适配运行 Team Skills。
3.  **全流程可见性**：基于 Team Skills 执行的任务，其协作过程（角色创建、并行分析、意见汇总）是可见、可追踪、可复盘的，有助于调试和优化。

## 应用案例

- **医疗专家会诊**：通过 Team Skills 定义了包含 23 位专科医生的团队。系统根据用户病情描述，先由分诊角色判断科室方向，再按需动态创建对应的专科专家进行并行分析，最后由主任医生汇总报告。
- **研究与 PPT 撰写**：在 Claude Code 上验证了跨平台能力，展示了不同角色（如研究员、文案、排版）之间的协作流程。

## 生产与分发

- **创建工具**：[[teamskill-creator]]（团队技能自动生成专家）是一个元技能，可以辅助用户将单 Agent Skill 转化为 Team Skill，或修改现有技能。
- **共享平台**：[[Team Skills Hub]] 是官方市场，提供八大类别的开箱即用技能，支持用户上传和分享自定义技能。
