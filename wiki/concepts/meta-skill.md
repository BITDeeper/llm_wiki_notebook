---
type: concept
title: Meta Skill（元技能）
created: 2026-06-03
updated: 2026-06-03
tags: [agent, skill, 编排, 工作流]
related: [skill-2-0, opensquilla, 办公技能框架, 模型-技能分离架构, 1-n-agent调度, 任务执行范式]
sources: ["刚刚，meta-skill来了.md"]
origin_date: 2026-06-01
---
# Meta Skill（元技能）

Meta Skill 是 Skill 的 Skill——将多个原子 Skill 编排为端到端长程工作流的高级抽象层。一个 Meta Skill 内嵌多个 Skill，拼接到一起形成一套完整的超级白皮书，能端到端打通一整套长程 Workflow。

## 核心机制

- **项目经理模式**：Meta Skill 接管了"调度员"角色，相当于一份项目经理的操作手册——哪些步骤并行、哪些步骤串行、哪个步骤的产出要喂给下一个步骤，全写在 SKILL.md 中
- **心跳机制**：定时查看状态文档，实现完全自动化推进，无需人工介入
- **安全审查**：部分 Meta Skill 内置安全审查环节，如 kid-project-planner 会额外做一轮儿童安全审查

## 实测案例

[[opensquilla]] 首批发布9个封装好的 Meta Skill。其中 kid-project-planner 实测表现：
- 由5个原子 Skill 拼接而成
- 全程无需人介入，自动跑了20多分钟
- 最终交付约3000字的7天项目规划包
- 包含立项、可行性分类、分步计划、材料清单、安全提醒、家长学习目标、最终组装交付等环节

## 创建门槛

创建一个 Meta Skill 需要编写约400行 SKILL.md，即便与 AI 迭代也需约30分钟，且需要脑海中已有清晰的 SOP。为此 OpenSquilla 提供了 meta-skill-creator——一个用于创建 Meta Skill 的 Meta Skill。

## 与现有概念的关系

- Meta Skill 是 [[办公技能框架]] 从1.0到2.0的进化方向
- 本质上是 [[1-n-agent调度]] 在 Skill 层的实现
- 与 [[模型-技能分离架构]] 形成呼应：Meta Skill 负责 Skill 层编排，[[智能模型路由]] 负责模型层分配
- 心跳机制是 [[断点续跑]] 的一种实现方式