---
type: concept
title: x402 标准
tags: [protocol, standard, http, payment, coinbase]
related: [agent-economy, ap2-protocol, agent-wallet]
created: 2026-03-14
updated: 2026-03-14
sources: ["龙虾版支付宝来了！睡觉都在帮你抢红包.md"]
---

# x402 标准

x402 是由加密货币交易所 Coinbase 推动的一项技术标准，旨在将支付语义直接嵌入到 HTTP 状态码中。

## 核心思想
传统的 HTTP 402 状态码原本保留用于指示“需要付款”，但从未被广泛标准化使用。x402 标准试图复兴并扩展这一概念，使得网络请求在返回资源的同时，能够直接在协议层触发支付动作。

## 对 Agent 经济的影响
如果 x402 被广泛采纳，AI 智能体在调用 API 或获取资源时，支付将不再是额外的步骤，而是网络通信协议的一部分。这意味着“调用即支付”，极大地简化了 [[Agent 经济]] 中的交易流程，为高频、小额的机器间交易提供了理想的底层支持。