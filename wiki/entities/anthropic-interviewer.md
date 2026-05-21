---
type: entity
title: Anthropic Interviewer
tags: [ai-tools, research-methodology, anthropic]
related: [anthropic, claude, 社交成本]
created: 2026-03-20
updated: 2026-03-20
sources: ["anthropic公开8万人访谈：害怕ai替代我，更怕没有它.md"]
---

# Anthropic Interviewer

Anthropic Interviewer 是 Anthropic 开发的一个专门用于大规模用户调研的 AI 访谈系统。在 2026 年初的 8 万人访谈项目中，它充当了“AI 树洞”的角色。

## 核心功能与特点

- **去人格化交互**：作为一段代码，它消除了人际交往中的 [[社交成本]]。用户无需担心被评判、被同情或成为他人的心理负担，从而愿意向其吐露内心最隐秘的渴望与恐惧。
- **大规模数据收集**：成功收集了来自 159 个国家、使用 70 种语言的 80,508 名用户的深度访谈数据。
- **开放式引导**：能够引导用户主动谈论悲伤、心理危机、财务窘迫、关系破裂等敏感话题。

## 技术背景
该系统基于 [[Claude]] 模型构建。为了处理其收集的海量文本数据，Anthropic 还构建了一个由 Claude 驱动的分类器网络，用于情绪评估和用户身份标记（一致性 >90%）。

## 意义
Anthropic Interviewer 的成功应用展示了 AI 在社会科学研究中的新范式：利用 AI 的非人类属性，突破传统问卷调查或面对面访谈的心理防御机制，获取更真实的人类反馈数据。