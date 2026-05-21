---
type: source
title: "和Anthropic CEO一起发过Nature，他用Claude Code复活三年烂尾代码"
tags: [ai-programming, claude-code, legacy-code, context-engineering, openai]
related: [brendan-maclean, skyline, claude-code, symphony, 上下文工程, 隐性知识显性化]
created: 2026-04-29
updated: 2026-04-29
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/1o8SyE62SWtSpQRrEVs_3g"
venue: "新智元"
sources: ["和anthropic-ceo一起发过nature，他用claude-code复活三年烂尾代码.md"]
---

# 和Anthropic CEO一起发过Nature，他用Claude Code复活三年烂尾代码

## 摘要
本文详细介绍了华盛顿大学基因组科学系首席开发者 [[brendan-maclean]] 如何利用 [[claude-code]] 成功复活拥有 70 万行代码的遗留软件 [[skyline]] 的案例。同时对比了 [[openai]] 发布的 [[symphony]] 系统，探讨了 AI 编程时代的两种管理范式：“深度上下文模式”（带徒弟）与“广泛编排模式”（开工厂）。

## 核心观点
文章指出，AI 编程的瓶颈已从“模型能否写代码”转变为“人类能否有效管理 AI”。这要求人类像带新人一样，为 AI 构建详细的上下文和规范，将原本存在于人脑中的隐性知识转化为机器可读的显性资产。

## 关键案例

### 案例 A：Brendan 与 Skyline（深度上下文模式）
- **背景**：[[skyline]] 是一个拥有 17 年历史、70 万行 C# 代码的开源蛋白质组学软件。由于学术实验室人员流动率高，大量代码因原作者离开而无人敢碰（如搁置一年的文件视图面板，停摆三年的 Java 测试模块）。
- **解决方案**：Brendan 没有直接使用浏览器版的 Claude.ai，而是创建了独立的 `pwiz-ai` 仓库，构建了三层上下文：
  1. **CLAUDE.md**：项目的“地形图”，包含结构、编译方式和测试流程。
  2. **Skills**：专业技能定义，例如强制 AI 在修改代码前先进行根因分析的 `debugging` skill。
  3. **MCP 集成**：让 AI 能读取真实的测试数据、异常报告和用户工单。
- **成果**：
  - 搁置一年的文件视图面板在两周内完成。
  - 停摆三年的 Java 测试模块在不到一天内添加了新功能。
  - 实现了 2000 多张教程截图的 100% 自动化维护。
  - 实验室原本排斥 AI 的开发者也用 Claude Code 发布了新功能。

### 案例 B：OpenAI 与 Symphony（广泛编排模式）
- **背景**：工程师需要同时管理多个 Codex 会话，上下文切换成本极高。
- **解决方案**：开发 [[symphony]] 系统，将 Linear 看板变成控制中心。每个 Issue 自动分配一个 Agent，独立运行、自动重启。
- **成果**：部分团队 PR 合并量暴涨 500%。工程师角色从“写代码”转变为“Review 结果”。

## 概念对比：带徒弟 vs 开工厂

| 维度 | Anthropic / Brendan (深度上下文) | OpenAI (广泛编排) |
| :--- | :--- | :--- |
| **核心隐喻** | 师傅带徒弟 | 开自动化工厂 |
| **适用场景** | 复杂的遗留系统、高耦合代码 | 任务拆分明确的新项目、流程化工作 |
| **关键动作** | 编写 CLAUDE.md、Skills、MCP | 编写 SPEC.md、WORKFLOW.md |
| **人类角色** | 资深开发者/导师 | 管理者/审查者 |
| **AI 特性** | 深度理解特定上下文 | 大规模并行处理 |

## 启示
1. **文档的价值回归**：在 AI 时代，写文档不再仅仅是“为了人”，更是“为了机器能干活”。隐性知识必须显性化，AI 才能接手工作。
2. **上下文工程**：这是 AI 编程的新瓶颈。无论是构建深厚的项目上下文（Brendan），还是构建高效的开发流程上下文（OpenAI），本质都是将人类经验转化为系统提示词。
3. **管理范式的转变**：开发者需要从单纯的代码编写者，转变为 AI 智能体的管理者和代码质量的审查者。

## 相关条目
- [[上下文工程]]
- [[隐性知识显性化]]
- [[技术债复活]]