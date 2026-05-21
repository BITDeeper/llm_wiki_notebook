---
type: entity
title: tree-sitter
tags: [tools, parsing, code-analysis]
related: [ast解析, graphify]
created: 2026-04-07
updated: 2026-04-07
sources: ["卡帕西没做完的，开源社区48小时搞定了！完全体知识库，token省70倍.md"]
---

# tree-sitter

[[tree-sitter]] 是一个增量解析器生成工具，用于构建语法树。在 [[Graphify]] 工具中，tree-sitter 被用于在本地对代码文件进行 [[AST解析]]。

通过 tree-sitter，Graphify 能够直接提取代码的结构信息（如函数定义、类层级、调用关系），而无需调用昂贵的大语言模型 API。这是 Graphify 实现 Token 消耗大幅降低的关键技术基础之一。