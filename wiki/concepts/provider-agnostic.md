---
type: concept
title: Provider-Agnostic
tags: [architecture, design-pattern, vendor-independence]
related: [minion, anthropic, claude]
created: 2025-12-05
updated: 2025-12-05
sources: ["anthropic官宣ptc突破，中国开发者一年前就实现了.md"]
---

# Provider-Agnostic

Provider-Agnostic（供应商无关）是指软件系统或框架的设计不依赖于特定的服务提供商（如云厂商或模型供应商），允许用户灵活切换底层后端的一种架构特性。

## 在 AI Agent 领域的应用
在 AI Agent 开发中，Provider-Agnostic 意味着框架能够支持多种大语言模型（LLM）作为后端，例如 Claude、GPT-4 或本地开源模型。

## 优势
-   **避免锁定**：不被单一供应商的定价、政策或技术变更所束缚。
-   **成本优化**：可以根据任务需求灵活选择性价比最高的模型。
-   **冗余备份**：在某个服务不可用时，可以快速切换到备用服务。

## 案例
[[minion]] 框架被强调为 Provider-Agnostic，这与 Anthropic 的 [[programmatic-tool-calling]] (PTC) 形成对比，后者紧密耦合于 Claude 生态系统。
