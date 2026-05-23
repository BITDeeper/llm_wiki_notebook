---
type: source
title: "Source: 全球排名前三，复旦自进化harness-engineering让gpt‑5.4再涨7个点.md"
created: 2026-05-22
updated: 2026-05-22
sources: ["全球排名前三，复旦自进化harness-engineering让gpt‑5.4再涨7个点.md"]
tags: []
related: []
---

# Source: 全球排名前三，复旦自进化harness-engineering让gpt‑5.4再涨7个点.md

## 关键实体

- **复旦大学**（机构）— 核心角色，AHE方法的主要提出方。未在wiki中。
- **北京大学**（机构）— 外围角色，联合研究团队。未在wiki中。
- **上海奇绩智峰**（公司）— 外围角色，联合研究团队。未在wiki中。
- **GPT-5.4**（模型/产品）— 核心角色，AHE实验的主要基座模型。未在wiki中（wiki仅有GPT-5.5）。
- **GPT-5.5**（模型/产品）— 外围角色，AHE在其发布后迅速适配并取得全球第三。已存在于wiki。
- **OpenAI**（公司）— 外围角色，发布Harness Engineering相关博客，Codex-CLI为基线。已存在于wiki。
- **Anthropic**（公司）— 外围角色，提及发布Harness Engineering博客。已存在于wiki。
- **LangChain**（公司）— 外围角色，提及发布Harness Engineering博客。未在wiki中。
- **OpenClaw**（工具/项目）— 外围角色，被提及推动Harness Engineering成为热词。已存在于wiki。
- **Hermes Agent**（工具/项目）— 外围角色，被提及推动Harness Engineering成为热词。已存在于wiki。
- **NexAU**（框架）— 核心角色，AHE中提供解耦Harness组件可观测性的框架。未在wiki中。
- **Agent Debugger**（工具/组件）— 核心角色，将原始轨迹提炼为分层反馈的流水线。未在wiki中。
- **Evolve Agent**（智能体角色）— 核心角色，负责基于证据驱动修改Harness实现进化。未在wiki中。
- **Coding Agent**（智能体角色）— 核心角色，在NexAU框架上运行测试的执行者。未在wiki中。
- **Terminal-Bench 2**（评测基准）— 核心角色，AHE的主要评测环境。未在wiki中。
- **SWE-Bench Verified**（评测基准）— 外围角色，用于验证跨任务泛化能力。未在wiki中。
- **Codex-CLI**（工具/产品）— 外围角色，作为实验基线对比（71.9%）。未在wiki中。
- **Qwen-3.6-Plus**（模型）— 外围角色，跨模型泛化实验对象。未在wiki中。
- **Gemini-3.1-Flash**（模型）— 外围角色，跨模型泛化实验对象。未在wiki中。
- **DeepSeek-V4**（模型）— 外围角色，跨模型泛化实验对象。已存在于wiki。
- **机器之心**（媒体）— 来源发布方。已存在于wiki。

## 关键概念

- **Harness Engineering** — 围绕大模型构建外部确定性框架（system prompt、工具、middleware等）的工程实践，旨在释放模型能力。**本文核心主题**，2026年成为业界热词。未在wiki中。
- **Agentic Harness Engineering (AHE)** — 复旦等提出的可观测性驱动的Harness自动优化方法，让Agent自主参与Harness迭代进化。未在wiki中。
- **可观测性（Observability）** — AHE的核心理念，分组件可观测、经验可观测、决策可观测三层。未在wiki中。
- **声明式Harness** — 将Harness拆分为七种正交文件级组件的解耦设计，使失败模式与单一组件的映射关系清晰。未在wiki中。
- **渐进式披露** — Agent Debugger将10M级原始轨迹提炼为10K级概览报告的设计，支持按需回溯。未在wiki中。
- **证据驱动修改** — Evolve Agent的设计原则，每次修改必须附带失败证据、根因推断和预测，由下一轮评测证伪。未在wiki中。
- **跨模型泛化** — 一份Harness在不同模型上均有效的特性，弱模型提升更大。未在wiki中。
- **跨任务泛化** — Harness从一个评测集迁移到另一个评测集仍有效的能力。未在wiki中。
- **事实优于策略** — 核心发现：Memory和Tool（事实性语义）比System Prompt（策略性语义）迁移性更好，恢复全局增幅95%以上。未在wiki中。
- **行为先验僵化** — 人工注入的方法论指导反而成为进化僵化之源的现象。未在wiki中。

## 主要论点与发现

**核心主张：**
1. 模型能力释放依赖精密的外部Harness框架，而Harness的迭代优化可以且应该被自动化。
2. AHE通过三层可观测体系（组件、经验、决策），实现了Harness从人工经验驱动到自动证据驱动的进化。

**关键实验证据：**
- GPT-5.4在Terminal-Bench 2上从69.7%提升至77.0%（绝对+7.3%，相对+10.5%），超越OpenAI官方Codex-CLI（71.9%）。
- GPT-5.5发布后，AHE适配的Harness在Leaderboard位列全球第三。
- 跨任务泛化：Terminal-Bench 2上演化的Harness直接迁移到SWE-Bench Verified仍有效。
- 跨模型泛化：同一份Harness在Qwen-3.6-Plus、Gemini-3.1-Flash、DeepSeek-V4上均获+5.1%到+10.1%提升。
- 消融实验：Memory单独恢复全局增幅95%以上，System Prompt单独迁移反而导致性能下降。

**证据强度：** 较强。有定量实验、多基线对比、消融实验和泛化验证，且论文在X平台获得10w+浏览讨论。但需注意Terminal-Bench 2的具体规模（89题）相对有限。

## 与现有Wiki的关联

- **直接关联：** `openclaw`、`hermes-agent`、`gpt-5.5`、`deepseek-v4`、`openai`、`anthropic`、`机器之心` 均在本文中被提及。
- **概念关联：** 与 `自进化架构`、`evolver` 高度相关——AHE本质上是Harness层面的自进化方法。与 `任务执行范式`（从模型开发转向智能体工程化系统）一脉相承。
- **延伸知识：** 为 `agentic-engineering`（Karpathy提出的概念）提供了具体的工程化实现路径。`模型-技能分离架构` 中Skills层的优化可借鉴AHE的可观测性方法论。

## 矛盾与张力

- **与社区惯性矛盾：** 社区普遍认为"先调Prompt"，但AHE消融实验表明Prompt策略性语义迁移性最差，Memory的事实性语义才是价值沉淀核心。
- **内部张力：** 人工行为先验（方法论指导）反而抑制进化——78%修改集中在Middleware层，在75.3%触顶。删除所有行为指导后反而分布更健康、分数更高。
- **潜在局限：** 评测集规模（89题）是否足够大？跨模型泛化实
