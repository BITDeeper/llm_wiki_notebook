---
type: source
title: "刚刚，Cursor被扒底裤！Claude Code套壳实锤，500亿估值全靠Ctrl+H？"
tags: [cursor, claude-code, 逆向工程, 套壳, ai-编程]
related: [cursor, claude-code, anthropic, 应用层焦虑, ai-洗代码]
created: 2026-04-14
updated: 2026-04-14
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/T-TXsDZsDnljSSkKC5p1Pg"
venue: "新智元"
sources: ["刚刚，cursor被扒底裤！claude-code套壳实锤，500亿估值全靠ctrl+h？.md"]
---

# 刚刚，Cursor被扒底裤！Claude Code套壳实锤，500亿估值全靠Ctrl+H？

## 概述
本文报道了 [[cursor]] 被指通过简单的字符串替换将 [[claude-code]] 包装成自研产品的事件。开发者 Jason Kneen 和 coah 通过逆向工程发现，Cursor 3.0 捆绑了 Anthropic 的官方 SDK，并使用本地代理进行“品牌洗白”，引发了关于 AI 应用层价值与 [[应用层焦虑]] 的广泛讨论。

## 核心发现

### 1. 技术架构揭秘
逆向分析显示，Cursor 3.0 的架构分为三层：
- **GLASS (UI 层)**：基于 VS Code 的深度定制，包含 50 多个服务。
- **COMPOSER (引擎层)**：负责代码生成、调试和规划。
- **AGENT SYSTEM (代理层)**：核心指控点。该层实际上捆绑了 `@anthropic-ai/claude-agent-sdk`，并通过本地 HTTP 代理拦截请求。

### 2. 字符串替换引擎
Cursor 被指使用了一套简单的字符串替换规则来掩盖其使用 Claude Code 的事实：
- `Claude Code` → `Cursor Agent`
- `Co-Authored-By: Claude` → `Made-with: Cursor`
- `claude.com` → `cursor.com`
- 过滤计费头信息和 GitHub Issues 链接。

### 3. 用户行为与竞品处理
- **用户画像**：后台调用 Claude Opus 分析用户历史对话，构建开发风格画像。
- **竞品封杀**：代码中显式屏蔽了 `github.copilot` 和 `github.copilot-chat` 插件。

## 官方回应与争议
Cursor CEO Michael Truell 称此举仅为“不到 1% 流量的 A/B 测试”。然而，安装包中发现的完整 SDK 及微调模型（`claude-3.7-sonnet-finetuned-cursor`）表明这可能是一个长期的集成方案。

## 行业影响
该事件折射出 AI 应用层的深层困境：当核心智能依赖基础模型（如 [[anthropic]] 的 Claude）时，应用层公司的差异化价值究竟在哪里？文章指出，[[claude-code]] 已成为执行层的标杆，而 Cursor 试图成为“工作流编排层”，但其护城河面临上游供应商（如 Anthropic 官方推出 VS Code 扩展）的直接挑战。