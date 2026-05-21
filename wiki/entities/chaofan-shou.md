---
type: entity
title: Chaofan Shou (寿超凡)
tags: [安全研究员, 白帽子, fuzzing, 区块链安全, security, hacker, anthropic, china]
related: ["claude-code", "anthropic", "fuzzland", "solayer", "source-map-leaks", "white-hat-hacker", "devin-ai"]
created: 2026-04-02
updated: 2026-05-08
sources: ["claude-code开源第一人，竟是华人辍学博士！cc之父回应：纯手误.md", "开盒claude-code的原来是中国00后！曾怒怼anthropic窃取用户代码.md"]
---

# Chaofan Shou (寿超凡)

Chaofan Shou（寿超凡/寿超璠）是一位中国 00 后安全研究员，现任 Solayer 软件工程师，区块链安全公司 FuzzLand 的联合创始人兼前 CTO。他以发现多个知名平台的高危漏洞而闻名，Bug Bounty 总收入超过 190 万美元。

## 职业履历

Chaofan Shou 的职业生涯主要集中在网络安全和区块链领域：

- **现任**: Solayer 软件工程师（2025年1月 FuzzLand 被收购后加入）。
- **FuzzLand**: 联合创始人兼 CTO。
- **Veridise**: 创始工程师，负责开发智能合约和区块链的自动化测试工具。
- **Salesforce**: 曾任安全工程师，负责静态分析工具（SAST）及数据管道建设。

## 学术背景

- **本科**: 毕业于 UC Santa Barbara（UCSB）计算机科学专业。3 年毕业，获 4.0 满绩点。
- **博士**: UC Berkeley Sky Computing Lab，导师为程序分析领域专家 Koushik Sen。就读两三年后选择辍学（"but I dropped out :p"）。
- **高中**: 上海平和双语学校。

## 主要成就

其个人主页栏目“Things I Broke”记录了多项重大漏洞发现：

- **2021年**: 发现 CVS Pharmacy 的 SSRF 漏洞及 TLS 投毒问题。
- **2023年**: 发现 Twitter 的 XSS、CSRF 及 CSP 绕过组合漏洞，理论上可接管全平台账户。
- **2024年**: 发现 AI 编程工具 [[devin-ai]] 的 SSRF 漏洞，导致用户信息泄露；发现 Etherscan 的 XSS 漏洞及 Cloudflare 绕过。
- **2026年**: 发现 [[claude-code]] 源码通过 npm source map 泄露，导致 51.2 万行代码公开。

## 研究方向

专注于模糊测试和程序分析。其开发的工具 ItyFuzz（链上智能合约模糊测试工具）发表在 ISSTA 2023，并在 CCS 2024、CoNEXT 2024 等顶会发表多篇论文。

## 观点与轶事

- **对 Anthropic 的批评**: 曾指责 [[anthropic]] 借安全审查功能之名“窃取用户代码库”。对于泄露的 Claude Code 源码，他评价其质量不如 OpenCode 和 Codex。
- **量化交易**: 曾尝试使用强化学习和微调 LLM 进行量化交易，最终战绩为 PnL -92%。
- **个人风格**: 社交媒体风格以调侃、轻描淡写著称（如将辍学描述为 "lol"）。