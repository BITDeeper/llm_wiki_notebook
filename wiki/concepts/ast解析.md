---
type: concept
title: AST解析
tags: [programming, compilers, optimization]
related: [tree-sitter, graphify, token优化]
created: 2026-04-07
updated: 2026-04-07
sources: ["卡帕西没做完的，开源社区48小时搞定了！完全体知识库，token省70倍.md"]
---

# AST解析

[[AST解析]]（抽象语法树解析）是指将源代码文本转换为结构化树状表示的过程。在 AI 辅助工具和知识管理领域，AST 解析被用于替代部分 LLM 调用，以降低成本和提高确定性。

## 在 Graphify 中的应用
[[Graphify]] 利用 [[tree-sitter]] 在本地进行 AST 解析，直接从代码中提取函数定义、类结构和调用关系。
- **优势**：这是一个确定性过程，不产生 Token 消耗，且速度极快。
- **对比**：若使用 LLM 读取代码文件来理解结构，不仅成本高，还可能产生幻觉。

## 技术意义
AST 解析代表了“本地优先”策略在 AI 工具中的应用：将逻辑性强、结构明确的任务交给传统算法处理，将语义模糊、需要推理的任务交给 LLM。这种分工是实现高效 [[Token优化]] 的关键。