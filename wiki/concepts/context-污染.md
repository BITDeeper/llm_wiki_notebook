---
type: concept
title: Context 污染
tags: [agent, llm, performance, optimization]
related: [programmatic-tool-calling, llm-代码编排模式, minion]
created: 2025-12-05
updated: 2025-12-05
sources: ["anthropic官宣ptc突破，中国开发者一年前就实现了.md"]
---

# Context 污染

Context 污染是指在传统 AI Agent 循环中，每次工具调用的中间结果都会完整返回给大语言模型（LLM），导致大量无关或冗余数据占用上下文窗口的现象。

## 问题表现
例如，当 Agent 需要分析一个 10MB 的日志文件以查找错误频率时，传统模式会将整个文件内容塞入 LLM 的上下文中。即使 LLM 最终只需要一个简单的摘要，它也必须处理全部原始数据。

## 负面影响
-   **成本高昂**：大量无效 Token 导致 API 调用成本激增。
-   **性能下降**：上下文过长可能导致推理速度变慢或超出模型窗口限制。
-   **精度降低**：过多的噪音数据可能干扰模型的注意力，影响最终输出的准确性。

## 解决方案
采用 [[llm-代码编排模式]]（如 [[minion]] 框架或 Anthropic 的 [[programmatic-tool-calling]]）可以有效缓解 Context 污染。通过让代码环境负责数据处理，仅将最终结果返回给 LLM，大幅减少了上下文的占用。
