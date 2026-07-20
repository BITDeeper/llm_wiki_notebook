---
type: entity
title: Pliny the Liberator
created: 2026-06-14
updated: 2026-06-16
tags: [security-researcher, jailbreak, prompt-leak, 黑客, ai安全, 越狱攻击]
related: [fable-5, 系统提示词注入, 越狱, fable-5下架事件, 安全分类器+模型防御架构, 马兴军, 内部安全坍塌]
sources: ["rss/仅一行代码，fable-5复活了！.md", "rss/5秒攻破，仅需1次对话：fable-5最强安全机制被华人团队破解.md"]
---
# Pliny the Liberator

**Pliny the Liberator**（GitHub ID: elder-plinius）是一名知名黑客、安全研究员和「头号越狱玩家」，在[[fable-5|Fable 5]]的安全研究方面表现活跃。

## 主要行为与成果

### Fable 5 系统提示词泄露

Pliny 在 Fable 5 发布后 24 小时内，即在其 CL4R1T4S 仓库泄露了完整系统提示词，内容包括：

- 12 万字符
- 1585 行代码
- 72 个命名章节
- 18 个工具的 JSON 定义

这份泄露文件成为全网开发者尝试通过[[系统提示词注入]]复活 Fable 5 的核心资源。

### 安全分类器绕过

在 Fable 5 发布前后，Pliny 曾独立公开了针对 Fable 5 [[安全分类器+模型防御架构|安全分类器]]的绕过方法。

## 与 ISC 研究的对比

Pliny 的绕过方法更偏向传统的组合式[[越狱]]探索。与之形成对比的是，[[马兴军]]团队发现的[[内部安全坍塌]]（ISC）结构性缺陷揭示了新一代超级智能体普遍采用的"[[安全分类器+模型防御架构|安全分类器 + 模型]]"防御架构的根本性问题——两者从不同角度暴露了当前 AI 安全机制的脆弱性。