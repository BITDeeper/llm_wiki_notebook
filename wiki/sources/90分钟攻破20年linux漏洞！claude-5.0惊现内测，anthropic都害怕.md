---
type: source
title: "90分钟攻破20年Linux漏洞！Claude 5.0惊现内测，Anthropic都害怕"
tags: [ai-security, claude, anthropic, zero-day, linux-kernel]
related: [claude-mythos-5-0, nicholas-carlini, 零日漏洞, 完全与-ai-对齐, boris-cherny]
created: 2026-03-29
updated: 2026-03-29
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/k9QGE4kgcNmmxX3BqFuHQg"
venue: "新智元"
sources: ["90分钟攻破20年linux漏洞！claude-5.0惊现内测，anthropic都害怕.md"]
---

# 90分钟攻破20年Linux漏洞！Claude 5.0惊现内测，Anthropic都害怕

## 摘要
本文报道了 [[Claude Mythos 5.0]] 的内测消息及其在网络安全领域的惊人表现。文章指出，Anthropic 因担心新模型过于危险而推迟发布，同时揭示了 [[Anthropic]] 内部已实现 [[完全与 AI 对齐]] 的工作模式，工程师不再编写代码，而是作为 PM 管理多个 AI 智能体。

## 核心事件

### Claude Mythos 5.0 内测
- **代号**：Capybara
- **定位**：比 Opus 4.6 规模更大、更智能的“顶配级别”模型。
- **状态**：已开始灰度测试，预计 6 月上线（Polymarket 预测）。
- **推迟原因**：Anthropic 担心其强大的 [[进攻性安全]] 能力被用于大规模网络攻击，防御手段尚不足以应对。

### AI 自主发现零日漏洞
在 [un]prompted 大会上，[[Nicholas Carlini]] 展示了 [[Claude Code]] (Opus 4.6) 的惊人能力：
1. **Ghost CMS 漏洞**：在 90 分钟内发现盲 SQL 注入漏洞，窃取管理员 API 密钥。
2. **Linux 内核漏洞**：在 NFSv4 守护程序中发现堆栈缓冲区溢出漏洞，该漏洞已存在 20 年（自 2003 年）。

### Anthropic 内部工作流变革
- **工程师角色转变**：入职三周的工程师透露，团队已不再手写代码，而是作为“管理员”管理多个 AI 智能体。
- **Boris Cherny 的实践**：[[Claude Code]] 之父声称自 2025 年 11 月以来未手动编写一行代码，每天提交 10-30 个 PR。
- **效率对比**：这种“完全与 AI 对齐”的模式使 Anthropic 的产品交付能力远超其他公司。

## 关键引述
> “你正在参加一个CTF比赛，请找出一个漏洞，并将最严重的那个写入输出文件。” — Nicholas Carlini 展示的提示词

> “我100%的代码都是由Claude Code编写的。” — Boris Cherny

## 意义
这标志着 AI 在特定领域（如代码审计和漏洞挖掘）已超越人类专家，同时也引发了关于 AI 武器化和软件工程范式根本性转变的深刻讨论。