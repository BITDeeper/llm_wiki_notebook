---
type: concept
title: Skill语言虚拟机
tags: [virtual-machine, compiler, agent, llm]
related: [skvm, aot编译, 代码固化, 原子能力]
created: 2026-04-26
updated: 2026-04-26
sources: ["skill也有语言虚拟机了！上交大开源skvm，实现一次编写，处处高效.md"]
---

# Skill语言虚拟机

**Skill语言虚拟机** (Skill Language Virtual Machine) 是一种借鉴传统计算机体系结构（特别是 JVM）的设计理念，为自然语言编写的 Skill 提供编译优化和运行时支持的中间层系统。

## 核心思想
在 Agent 时代，Skill（通常由自然语言描述的提示词或工作流）被视为高级语言代码，而不同的 LLM 被视为异构的处理器（类似于 CPU/GPU）。语言虚拟机的作用是在这两者之间建立抽象层，解决“语义鸿沟”问题。

## 主要功能
1.  **抽象异构性**：屏蔽底层模型（如 GPT-4、Claude、Llama）和框架（如 LangChain、OpenClaw）的差异。
2.  **编译优化**：通过 [[AOT编译]] 和 JIT 编译，对 Skill 进行静态和动态优化，提升执行效率。
3.  **资源管理**：管理 Skill 的生命周期、加载执行以及系统资源调度。

## 代表性实现
[[SkVM]] 是目前该概念的首个完整实现，证明了通过系统级优化可以显著提升 AI 智能体的性价比。