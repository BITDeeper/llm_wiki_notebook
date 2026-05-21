---
type: entity
title: SimCity (1989) 移植事件
tags: [case-study, legacy-code, simcity, typescript]
related: [christopher-ehrlich, 盲移植, openai-codex, 基于属性的测试]
created: 2026-04-01
updated: 2026-04-01
sources: ["yc掌门人惊呼：这就是-agi！4天、零读码，ai移植37年古董软件.md"]
---

# SimCity (1989) 移植事件

指 2026 年开发者 [[christopher-ehrlich]] 利用 [[openai-codex]] 在 4 天内将 1989 年发布的经典游戏 SimCity 从 C 语言代码库“[[盲移植]]”到 TypeScript 的事件。

## 项目背景
- **原始代码**：最初由 Will Wright 为 Commodore 64 编写，后移植为 C 语言。代码包含大量位运算，变量名晦涩，结构复杂，人工理解成本极高。
- **目标**：在不阅读原始代码的情况下，将其移植到现代平台（浏览器/TypeScript）。

## 实施过程
1.  **桥接层**：编写一个能够调用原始 C 代码的接口层。
2.  **行为定义**：运行 [[基于属性的测试]]，定义输入输出必须一致。
3.  **AI 迭代**：AI 生成 TypeScript 代码，测试验证，失败则自动重试，直至通过。

## 结果
- **时间**：4天。
- **成本**：不到 30 美元（基于 ChatGPT 订阅）。
- **人工介入**：零代码阅读，仅进行极少的干预。

## 意义
该事件被视为软件工程范式转移的标志性案例，证明了在遗留系统现代化中，[[氛围编程]] 和基于验证的工程范式可以极大降低人力成本和时间成本。