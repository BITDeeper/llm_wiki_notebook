---
type: entity
title: Brendan MacLean
tags: [person, developer, bioinformatics, ai-programming]
related: [skyline, claude-code, pwiz-ai, dario-amodei]
created: 2026-04-29
updated: 2026-04-29
sources: ["和anthropic-ceo一起发过nature，他用claude-code复活三年烂尾代码.md"]
---

# Brendan MacLean

Brendan MacLean 是华盛顿大学基因组科学系的首席开发者，也是知名开源蛋白质组学软件 [[skyline]] 的项目负责人。

## 职业背景
他在 MacCoss 实验室工作了近二十年，负责维护和迭代拥有 70 万行 C# 代码的 Skyline 项目。由于学术实验室的人员高流动性，他长期负责“带新人”，将复杂的代码库知识和项目规范传授给新加入的本科生、研究生和实习生。

## 与 AI 的结合
Brendan 是将 [[上下文工程]] 理论应用于实际遗留系统开发的先驱者。他创造性地将“带新人”的方法论应用于 [[claude-code]]，通过构建独立的 `pwiz-ai` 仓库，成功解决了 AI 在处理复杂遗留代码时的上下文缺失问题。

### 核心贡献
- **三层上下文架构**：提出了 `CLAUDE.md`（地图）、`Skills`（技能）、`MCP`（感知）的三层上下文结构，使 AI 能够像资深开发者一样理解项目。
- **复活遗留代码**：利用 AI 在两周内完成了搁置一年的功能模块，并修复了停摆三年的测试模块。
- **自动化维护**：实现了 Skyline 项目中 2000 多张教程截图的完全自动化维护。

## 关系网络
- 曾与 [[dario-amodei]]（Anthropic CEO）在 2012 年合著过一篇 *Nature Biotechnology* 论文。
- 他的工作模式被视为 [[深度上下文模式]] 的典型案例，与 [[openai]] 的 [[symphony]]（广泛编排模式）形成对比。