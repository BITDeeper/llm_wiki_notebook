---
type: concept
title: AGENTS.md
tags: [configuration, synchronization, agent-engineering]
related: [magicskills, agent-skills, skill-复用]
sources: ["龙虾的应用商店挂牌了！北大开源magicskills，让agent-skill可自由安装组合同步.md"]
created: 2026-03-19
updated: 2026-03-19
---

# AGENTS.md

[[AGENTS.md]] 是一种用于向 AI Agent 同步技能列表的元数据配置文件机制。

## 作用

在 [[MagicSkills]] 的工作流中，[[AGENTS.md]] 充当了 Agent 与技能库之间的桥梁。当开发者通过 MagicSkills 选中一组技能组合后，系统会将这些技能的列表同步写入 [[AGENTS.md]] 文件。

## 工作流程

1. **组合**：开发者从共享技能池中挑选出某个 Agent 需要的技能子集。
2. **同步**：MagicSkills 将这些技能的引用或配置写入 [[AGENTS.md]]。
3. **发现**：Agent 应用启动时读取 [[AGENTS.md]]，从而自动发现并加载其可用的技能，无需手动配置。

## 意义

这一机制类似于 `package.json` 在 npm 中的作用，它使得 Agent 的能力配置变得透明、可追踪且易于版本控制。它是实现“通用 Agent 运行时按需加载技能”这一架构范式的重要接口。