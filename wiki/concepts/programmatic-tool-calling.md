---
type: concept
title: Programmatic Tool Calling (PTC)
tags: [agent, tool-use, anthropic, architecture]
related: [minion, llm-代码编排模式, context-污染, claude]
created: 2025-12-05
updated: 2025-12-05
sources: ["anthropic官宣ptc突破，中国开发者一年前就实现了.md"]
---

# Programmatic Tool Calling (PTC)

Programmatic Tool Calling (PTC) 是 Anthropic 提出的一种 AI Agent 工具调用范式，允许 LLM 生成代码来编排工具调用，而非通过传统的多次 API 往返直接调用工具。

## 核心目标
PTC 旨在解决传统 Tool Calling 模式下的两个核心问题：
1.  **[[context-污染]]**：避免将所有中间结果（如大型日志文件）返回给 LLM，从而节省上下文窗口。
2.  **推理开销**：减少因多次工具调用导致的模型推理往返次数，降低延迟和成本。

## 工作原理
在 PTC 模式下，LLM 生成一段 Python 代码（脚本），该脚本在隔离的代码执行环境中运行。脚本负责调用所需的工具、处理数据（如过滤、聚合），并仅将最终处理结果返回给 LLM。

## 局限性
尽管 PTC 是一种进步，但它相比开源框架 [[minion]] 存在一些限制：
-   **配置复杂**：需要显式配置 `allowed_callers` 等参数。
-   **环境受限**：运行在受限的容器中，无法自由安装 Python 包或调用 Web/MCP 工具。
-   **生态封闭**：与 Claude 生态系统紧密耦合，缺乏 Provider-agnostic 特性。

## 参见
- [[minion]] — 一个更早实现类似理念且更灵活的开源框架。
- [[llm-代码编排模式]] — PTC 底层的架构模式。
