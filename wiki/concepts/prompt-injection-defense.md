---
type: concept
title: 提示词注入防御
tags: [security, llm, agent]
related: [tuanziguardianclaw, openclaw, hermes-agent]
created: 2026-03-13
updated: 2026-03-13
sources: ["首只“卫士虾”堵上openclaw原生漏洞，仅6.5kb大小，agent组团写的.md"]
---

# 提示词注入防御

提示词注入防御是指针对大语言模型（LLM）和 AI 智能体的提示词注入攻击的防护机制。这类攻击试图通过输入特定的恶意文本（如“忽略之前的指令”）来诱导模型执行非预期操作。

## 防御策略
[[TuanziGuardianClaw]] 采用了关键词拦截机制作为防御手段：
1. **检测**：扫描输入中是否包含典型注入语句（如 "ignore previous instructions", "reveal system prompt", "bypass security"）。
2. **阻断**：一旦检测到此类关键词，立即将操作归类为极高风险。
3. **记录**：记录拦截日志并向用户发送告警通知。

## 行业挑战
提示词注入被认为是当前 Agent 架构中最难防的安全问题之一，因为攻击指令可能隐藏在网页、邮件或文档中，难以通过传统的输入过滤完全消除。