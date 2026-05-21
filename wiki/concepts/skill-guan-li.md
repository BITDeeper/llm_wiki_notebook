---
type: concept
title: Skill管理
tags: [concept, agent, tools, orchestration]
related: [atlasgraph, san-zhang-tu-jia-gou, tu-mo-rong-he]
created: 2026-03-31
updated: 2026-03-31
sources: ["智能体收入暴增68%！这家港股ai公司靠「关系」驯服企业龙虾.md"]
---

# Skill管理

**Skill管理**是指在企业级 AI 应用中，对智能体可调用的工具、API 或子程序（统称为 Skill）进行标准化定义、依赖关系分析和生命周期维护的过程。随着 Agent 生态的发展，单纯的 Prompt 工程已转向基于 Skill 的工具调用，但 Skill 数量的激生带来了新的管理复杂度。

## 核心挑战
当企业为 Agent 配置了成百上千个 Skill 时，会出现以下问题：
- **依赖关系复杂**：某些 Skill 的执行依赖于其他 Skill 的输出（例如：生成报价文档依赖于查询库存和定价规则）。
- **更新影响难测**：当一个 Skill（如定价规则）更新时，很难快速评估哪些下游流程或 Skill 会受到影响。
- **选择困难**：过多的 Skill 会让 Agent 在决策时陷入“选择瘫痪”，降低执行效率。

## 解决方案
[[海致科技]] 的 [[AtlasGraph]] 通过图技术来解决这一问题：
- **结构化定义**：将 Skill 及其依赖关系映射为图中的节点和边。
- **标准化接口**：提供统一的执行接口，屏蔽底层实现的异构性。
- **流程固化**：将最优的业务流程以图的形式固定下来，避免每次都需要 LLM 重新规划路径。

这一理念与 [[三张图架构]] 中的“任务图”紧密相关，共同构成了企业级 Agent 可靠执行的基础。