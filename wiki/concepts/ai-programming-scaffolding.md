---
type: concept
title: AI编程脚手架
tags: [system-design, prompt-engineering, constraints]
related: [claude-md, agentic-engineering]
created: 2026-04-20
updated: 2026-04-20
sources: ["一个claude.md霸榜github第一！蒸馏自karpathy，6万码农抄作业.md"]
---

# AI编程脚手架

[[AI编程脚手架]] (AI Programming Scaffolding) 指围绕大语言模型构建的规则、配置和约束系统，用于引导模型输出符合特定工程标准的结果。

## 重要性
随着模型能力的提升，瓶颈已从“模型能不能做”转移到了“如何让模型按预期做”。脚手架层（如 [[CLAUDE.md]]）成为了连接模型能力与实际应用的关键“胶水”。

## 组成部分
-   **配置文件**：如 `.cursorrules` 或 `CLAUDE.md`，定义行为准则。
-   **验收标准**：通过测试用例定义目标，而非具体步骤。
-   **上下文管理**：提供清晰的代码库结构和依赖关系。

## 价值
良好的脚手架可以将顶级工程师的 [[隐性知识显性化]]，使得 AI Agent 能够大规模继承和复用人类经验。