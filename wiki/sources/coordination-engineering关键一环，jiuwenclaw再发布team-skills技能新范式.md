---
type: source
title: "Coordination Engineering关键一环：JiuwenClaw再发布Team Skills技能新范式"
tags: [multi-agent, coordination-engineering, jiuwenclaw, team-skills, 华为, open-source]
related: [jiuwenclaw, team-skills, coordination-engineering, openjiuwen, teamskill-creator]
authors: [允中]
year: 2026
venue: 量子位
url: "https://mp.weixin.qq.com/s/H-E3lZta82swqJoeLb4-vg"
created: 2026-04-24
updated: 2026-04-24
sources: ["coordination-engineering关键一环，jiuwenclaw再发布team-skills技能新范式.md"]
---

# 摘要

本文报道了由华为支持的 openJiuwen 社区发布的 **JiuwenClaw Team Skills**，这是业界首个面向多 Agent 协作的标准化能力包规范。该规范旨在解决多智能体协作经验无法沉淀、复用的问题，将协作流程、任务范式和执行规范固化为标准化文件结构（SOP），标志着 AI 工程范式从单智能体治理迈向多智能体协同工程的新阶段。

## 核心内容

### 从 Agent Team 到 Team Skills
- **背景**：JiuwenClaw 此前提出的 Agent Team 解决了多智能体“当下怎么协作”的问题（如自主分工、高效沟通），但协作经验随会话结束而消失。
- **升级**：Team Skills 解决了“协作能力如何沉淀与复用”的问题，将成功的协作全链路（需求拆解、团队组建、任务分配、通信机制等）封装为标准化的“团队技能”。

### Team Skills 规范详解
- **定义**：扩展自 Anthropic 的 Agent Skills 标准，从单 Agent 能力描述升级为多 Agent 团队协作规范。
- **文件结构**：一个 Team Skill 本质上是一个文件夹目录结构，包含：
  - `SKILL.md`：团队名称、功能描述及成员构成。
  - `roles/`：定义各成员角色的职责（如 `<role-a>.md`）。
  - `workflow.md`：定义成员间的配合方式与执行顺序。
  - `bind.md`：定义处理边界与冲突解决策略。
  - `dependencies.yaml`：外部工具依赖。
- **特点**：结构简单，低门槛，支持从简单任务到复杂任务的渐进式演进。

### 工具链与生态
- **teamskill-creator**：一个用于自动生成团队技能的元技能，支持将单 Agent Skill 转化为 Team Skill，或修改现有技能。
- **Team Skills Hub**：官方共享平台，支持技能的上传、检索与下载，涵盖开发、办公、创作等八大类别。

### 实战案例与验证
- **医疗分诊**：演示了如何动态创建 23 位专科医生进行会诊。系统先由分诊角色判断科室方向，再按需动态创建专科专家并行分析，最后由主任医生汇总。
- **跨框架兼容**：在 Claude Code 上验证了“研究与 PPT 撰写”技能，证明 Team Skills 不依赖特定平台，可在支持 Agent Skills 标准的环境（如 Claude Code, Cursor）中零适配运行。

## 意义

Team Skills 的发布完善了 **Coordination Engineering**（协同工程）的架构体系，实现了从“单智能体好用”到“多智能体协同”再到“团队能力沉淀”的闭环，让 Agent 团队协作从“一次性组队”走向“团队化作战”。
