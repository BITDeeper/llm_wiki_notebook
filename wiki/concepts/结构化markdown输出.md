---
type: concept
title: 结构化Markdown输出
created: 2026-05-18
updated: 2026-05-18
tags: [搜索, 输出格式, token优化, ai-agent]
related: [anysearch, 搜索第四次范式转移]
sources: ["谷歌搜不到的80%互联网，anysearch全打通了！开发者连夜接入.md"]
---
# 结构化Markdown输出

结构化Markdown输出是 [[anysearch]] 的核心设计理念之一，指搜索结果以清洗后的结构化Markdown格式返回，而非传统的链接列表或原始HTML。

## 设计动机

AI Agent不需要链接列表或HTML页面，需要的是可以直接用于推理和决策的结构化数据。传统搜索返回10条链接，Agent需要逐一抓取、解析、提取信息，消耗大量Token。

## 关键参数

- 每条结果通常500-2000 Token
- 声称相比同类产品（如Exa），Token消耗降低60-70%
- 具体对比：Exa搜10条结果约15,000 Token vs AnySearch搜5条高质量结果约5,000 Token

## 对Agent的意义

- 降低Token成本（对生产环境中持续运行的Agent尤为关键）
- 减少二次筛选和处理的开销
- 提升响应速度和决策效率