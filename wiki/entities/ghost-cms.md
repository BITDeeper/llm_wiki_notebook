---
type: entity
title: Ghost CMS
tags: [cms, open-source, security, nodejs]
related: [claude-opus-4-6, nicholas-carlini, CVE-2026-26980, sql注入]
created: 2026-03-29
updated: 2026-03-29
sources: ["claude-90分钟挖穿20年漏洞！5w星“安全”系统跌下神坛，linux内核也未能幸免.md"]
---

# Ghost CMS

## 简介
[[Ghost CMS]] 是一款基于 Node.js 开发的开源内容管理系统，专注于内容出版，是许多博客、新闻媒体和内容付费网站的主流选择。该项目在 GitHub 上拥有超过 5 万星，以安全著称，在 2026 年被 [[Claude Opus 4.6]] 攻破前，从未出现过严重的安全漏洞。

## 安全事件

### CVE-2026-26980
2026 年 3 月，[[Anthropic]] 研究员 [[Nicholas Carlini]] 使用 Claude Opus 4.6 在 90 分钟内发现了 Ghost CMS 的首个高危漏洞。
- **漏洞类型**：[[SQL注入]]
- **位置**：内容 API 的 slug 过滤器排序功能
- **影响**：允许未经身份验证的攻击者从数据库中执行任意读取操作
- **根本原因**：开发人员将字符串和用户输入直接拼接进 SQL 查询语句

## 历史地位
Ghost CMS 作为“首个被 AI 攻破的 5 万星安全标杆”，标志着 AI 漏洞挖掘能力进入新阶段。该事件证明了即使是拥有长期安全记录的成熟软件，也可能面临 AI 自动化审计的挑战。

## 技术细节
该漏洞的发现过程展示了 AI 的典型攻击模式：
1. 通过自然语言指令引导模型遍历代码库
2. 模型自主识别出用户输入与 SQL 查询拼接的危险模式
3. 生成可利用代码，成功获取管理员凭据、API 密钥和密码哈希