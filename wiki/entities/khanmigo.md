---
type: entity
title: Khanmigo
tags: [product, llm, education, failure-case]
related: [claude-code, anthropic, 高阶幻觉]
created: 2026-03-21
updated: 2026-03-21
sources: ["太疯了！mit博士在transformer里造计算机，攻破llm终极缺陷.md"]
---

# Khanmigo

[[Khanmigo]] 是由 Khan Academy 推出的基于 GPT-4 的 AI 导师产品，旨在为学生提供个性化的学习辅导。

## 问题与争议
尽管基于强大的大语言模型，Khanmigo 在处理基础算术和逻辑问题时曾表现出明显的缺陷。例如，在 2024 年的测试中，它有时无法给出确定的算术答案，甚至出现类似“9.11 > 9.9”的错误。

这一现象被 [[Percepta]] 团队和 [[Christos Tzamos]] 引用作为 LLM “终极缺陷”的典型案例：即模型虽然具备强大的语言理解和推理能力，但在精确计算和逻辑确定性方面存在短板。

## 技术背景
Khanmigo 的问题反映了早期 [[Transformer]] 架构在处理数值计算时的局限性。这也促使了行业向 [[混合-LLM-架构]] 或 [[内部计算]] 方向的探索，试图在不依赖外部不稳定工具调用的情况下，从根本上解决模型的计算可靠性问题。