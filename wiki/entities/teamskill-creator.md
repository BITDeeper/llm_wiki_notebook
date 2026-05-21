---
type: entity
title: teamskill-creator
tags: [tool, agent, automation, jiuwenclaw]
related: [jiuwenclaw, team-skills, team-skills-hub]
created: 2026-04-24
updated: 2026-04-24
sources: ["coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md"]
---

# teamskill-creator

**teamskill-creator**（团队技能自动生成专家）是 JiuwenClaw 生态中的一个元技能，专门用于辅助用户创建和管理 [[Team Skills]]。

## 功能

作为一个特殊的 Agent，teamskill-creator 能够简化 Team Skills 的开发流程：

1.  **自动生成**：根据用户的自然语言描述（例如“帮我创建一个医疗专家会诊的团队技能”），自动生成符合 Team Skills 规范的文件结构（SKILL.md, roles/, workflow.md 等）。
2.  **格式转换**：支持将现有的单 Agent Skill 转化为 Team Skill，实现从单体能力到团队协作能力的升级。
3.  **迭代修改**：支持对已有的 Team Skill 进行修改，如增减角色、调整执行流程或更新依赖项。

## 使用流程

1.  在 [[Team Skills Hub]] 平台上下载 `teamskill-creator`。
2.  在 [[JiuwenClaw]] 环境中安装该技能。
3.  输入需求指令，teamskill-creator 即可自动构建相应的团队技能包。

## 意义

teamskill-creator 降低了多智能体协作的开发门槛，使得非技术背景的用户也能通过自然语言定义复杂的团队协作流程，促进了 Team Skills 生态的丰富与普及。
