---
type: entity
title: OpenSquilla
created: 2026-06-03
updated: 2026-06-03
tags: [agent, 开源项目, 智能路由, meta-skill]
related: [meta-skill, 智能模型路由, 王云鹤, 基元律动, skill-2-0, agent-pack, claude-code]
sources: ["刚刚，meta-skill来了.md"]
origin_date: 2026-05-01
---
# OpenSquilla

OpenSquilla 是一个开源 AI Agent 项目，由 [[基元律动]] 公司开发，创始人为 [[王云鹤]]。2026年5月初在 GitHub 发布首个版本，迅速获得2000+ star，被 [[andrej-karpathy|AK大神]] 转发后引发广泛关注。

## 核心特性

### 智能模型路由
内置 [[智能模型路由]]，根据子任务复杂度自动分配不同成本的模型。简单任务使用低成本模型（如 DeepSeek），复杂任务才调用大模型（如 Claude），号称节省 60-80% Token 成本。运行时以"老虎机"动画可视化各环节 Token 消耗和节省量。

### Meta Skill
2026年6月初发布 [[meta-skill|Meta Skill]] 功能，首批包含9个封装好的 Meta Skill，涵盖儿童项目规划、内容创作等场景。Meta Skill 是 Skill 的 Skill，将多个原子 Skill 编排为端到端长程工作流。

### meta-skill-creator
内置用于创建 Meta Skill 的 Meta Skill，降低 Skill 编排门槛。用户可通过与 AI 迭代约30分钟完成一个400行 SKILL.md 的 Meta Skill。

### 「个人×社区」索引协议
基于用户使用信号（常用 Skill、偏好组合、试过不好使的）自动匹配和推荐社区 Skill，解决 Skill 膨胀后的供需匹配问题。

## 安装与使用

- 支持 Mac/Linux 终端安装（通过 uv 工具），Windows 支持压缩包安装
- 支持从 Claude Code（龙虾）一键迁移数据资产和 API Keys
- 入口支持飞书、Discord、QQ 等主流 IM，推荐使用 Web 版以获得完整可视化体验

## 行业定位

与 [[agent-pack]] 类似，OpenSquilla 定位为 Agent 工具包，但更侧重于 Skill 层的编排创新和成本优化。文章认为其代表了从单 Skill 调用到多 Skill 编排的 [[skill-2-0|Skill 2.0]] 范式。