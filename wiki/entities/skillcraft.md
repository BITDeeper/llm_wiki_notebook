---
type: entity
title: SkillCraft
tags: [agent, framework, tool-use, optimization]
related: [skill-library, cross-model-skill-transfer, verifier, hierarchical-skill-composition]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# SkillCraft

**SkillCraft** 是一个研究项目/框架，旨在让 [[agent]] 在执行任务时动态生成、验证并复用技能。该项目由 NIPS 时间检验奖得主等人参与研究。

## 核心功能

SkillCraft 解决了现有 Agent 虽然会使用工具，但缺乏“记忆”和“经验积累”的痛点。它通过以下四步流程将成功的工具链转化为可复用的技能：

1.  **检索**：检查 [[skill-library]] 中是否有现成的技能可用。
2.  **执行**：如果没有，则使用原子工具完成任务。
3.  **抽象**：将成功的执行轨迹抽象为带参数的技能。
4.  **验证**：通过 [[verifier]] 检查后存入技能库。

## 实验结果

-   **效率提升**：在 [[gpt-5-2]] 的测试中，Skill Mode 将 Token 消耗从 1.23M 降至 0.26M，成本从 1.77 美元降至 0.43 美元。
-   **跨模型复用**：[[claude]] 生成的技能在不同执行模型上均实现了 100% 的成功率，证明了 [[cross-model-skill-transfer]] 的可行性。

## 局限性

在测试 [[hierarchical-skill-composition]]（分层技能组合）时发现，层级过深会导致稳定性下降，低层错误会向上级联。因此，现阶段建议优先构建高质量、浅层的技能库。

## 外部链接

-   GitHub: [shiqichen17/SkillCraft](https://github.com/shiqichen17/SkillCraft)
-   论文: [SkillCraft: Can LLM Agents Learn to Use Tools Skillfully?](https://arxiv.org/abs/2603.00718)