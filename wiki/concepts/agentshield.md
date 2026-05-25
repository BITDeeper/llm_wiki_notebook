---
type: concept
title: AgentShield
created: 2026-05-24
updated: 2026-05-24
tags: [ai安全, 智能体安全, 红队测试]
related: [everything-claude-code-ecc, 智能体harness设计]
sources: ["8小时狂揽15k美金！claude-code屠榜黑客马拉松，开源神器爆15万星.md"]
---
# AgentShield

[[everything-claude-code-ecc|ECC]] 内置的安全防御管道，包含1,282项安全测试，采用红队/蓝队/审计师三权分立架构，防止凭证泄露和恶意注入。

## 安全威胁背景

在智能体大规模调用外部工具的时代，AI 在自主运行中可能不小心将私钥（sk-）或 Token（ghp_）提交到公共 Git 仓库，或遭受恶意代码注入。安全问题是智能体大规模部署的前提条件。

## 架构设计

AgentShield 在 AI 真正执行指令（如调用 Terminal 或写文件）之前，进行毫秒级扫描。通过启用安全审计模式（--opus 标志），ECC 启动三个 Opus 4.6 智能体分身：

- **红队（攻击者）**：主动寻找系统漏洞
- **蓝队（防御者）**：查漏补缺，修补防御
- **审计师**：客观判决，确保公正

这种三权分立式的 AI 互相博弈，在本地为开发者筑起安全防火墙。

## 覆盖范围

涵盖 CLAUDE.md、MCP 配置、钩子、技能等全方位安全测试，共1,282项测试用例。

## 开放问题

AgentShield 的1,282项安全测试是否经过独立安全审计，目前尚无公开信息。