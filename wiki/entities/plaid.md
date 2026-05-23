---
type: entity
title: Plaid
created: 2026-05-16
updated: 2026-05-16
tags: [金融科技, 数据连接, api, 基础设施]
related: [openai, ai个人理财助理, chatgpt-plus]
sources: ["openai把chatgpt接进银行，它知道你攒了多少钱，但碰不了一分.md"]
---
# Plaid

**Plaid** 是一家金融数据连接服务商，为应用提供连接用户银行账户的标准化API接口。在 [[openai]] 推出的ChatGPT个人理财功能中，Plaid充当关键中间层角色。

## 核心信息

- 覆盖超过 **12000家金融机构**，包括Schwab、Fidelity、Chase、Robinhood、American Express、Capital One等
- 用户通过Plaid/银行的授权流程完成登录验证
- Plaid不会将银行用户名和密码分享给OpenAI等第三方应用
- OpenAI获取的是**结构化财务数据**，而非原始登录凭证

## 在AI金融场景中的角色

Plaid作为AI进入金融场景的**关键基础设施中间层**，解决了三个核心问题：

1. **授权验证** — 标准化的银行账户授权流程
2. **数据传输** — 将分散的金融机构数据统一为结构化格式
3. **安全隔离** — 在用户、银行和AI平台之间建立安全边界

## 关联条目

- [[openai]] — 通过Plaid接入银行数据
- [[ai个人理财助理]] — Plaid支撑的新兴AI应用范式
- [[只读模式]] — 当前数据访问的安全边界设计