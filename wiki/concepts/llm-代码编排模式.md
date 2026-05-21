---
type: concept
title: LLM 代码编排模式
tags: [agent, architecture, design-pattern]
related: [programmatic-tool-calling, minion, context-污染, 任务执行范式]
created: 2025-12-05
updated: 2025-12-05
sources: ["anthropic官宣ptc突破，中国开发者一年前就实现了.md"]
---

# LLM 代码编排模式

LLM 代码编排模式是一种 AI Agent 架构设计模式，其核心思想是将 LLM 定位为“规划者”，负责生成逻辑代码；将代码环境定位为“执行者”，负责具体的数据处理和工具调用。

## 架构流程
1.  **用户请求**：用户提出复杂任务。
2.  **LLM 规划**：LLM 分析需求，生成一段 Python 代码来编排整个任务流程。
3.  **代码执行**：代码在隔离环境中运行，调用工具、处理数据、控制逻辑流。
4.  **结果返回**：仅将最终处理后的结构化结果返回给 LLM。
5.  **LLM 总结**：LLM 解读结果并生成用户友好的响应。

## 优势
-   **消除 [[context-污染]]**：中间数据在代码环境处理，不占用 LLM 上下文。
-   **降低推理成本**：减少了 LLM 的调用次数和 Token 消耗。
-   **提升执行效率**：利用 Python 的异步和并行能力，大幅降低任务延迟。
-   **增强可靠性**：代码提供了确定性的错误处理和重试逻辑。

## 实践案例
-   [[minion]]：开源框架，将此模式作为基础架构。
-   [[programmatic-tool-calling]] (PTC)：Anthropic 提出的类似特性，但作为可选功能。
