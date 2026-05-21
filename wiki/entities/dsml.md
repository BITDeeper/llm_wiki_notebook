---
type: entity
title: DSML
tags: [language, dsl, tool-calling, deepseek]
related: [deepseek-v4, dsec]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# DSML

DSML 是 DeepSeek 自研的一种类似 XML 的领域特定语言（DSL），专门用于解决大模型工具调用中的转义失败问题。

## 设计目的
在通用的 JSON 或 YAML 格式工具调用中，模型经常容易出现转义字符错误，导致调用失败。DSML 通过设计一套简单高效的协议，从语法层面规避了这些问题。

## 效果
引入 DSML 后，DeepSeek V4 的工具调用成功率从“看运气”提升到了**工业级稳健**水平。这体现了 DeepSeek 在工程细节上追求极致确定性的理念。