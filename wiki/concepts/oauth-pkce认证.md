---
type: concept
title: OAuth PKCE认证
created: 2026-05-21
updated: 2026-05-21
tags: [authentication, oauth, security]
related: [hermes-agent, openclaw, 订阅转api, xai]
sources: ["20刀月费秒变api！hermes一行命令就能用上claude、chatgpt订阅.md"]
---
# OAuth PKCE认证

OAuth PKCE（Proof Key for Code Exchange）是一种用于公共客户端（如本地应用、移动端）的OAuth安全扩展，防止授权码拦截攻击。在AI Agent生态中，PKCE成为框架与AI平台安全对接的关键技术。

## 在Agent生态中的应用

- [[hermes-agent]]通过OAuth PKCE实现与[[xai]] Grok、[[anthropic]] Claude、[[openai]] ChatGPT的安全认证
- [[openclaw]] v5.18专门修复了[[xai]]的OAuth PKCE认证兼容问题
- 支持浏览器登录流程，用户通过OAuth授权后即可在终端使用订阅额度

## 技术要点

- 公共客户端无法安全存储client_secret，PKCE通过动态生成的code_verifier/code_challenge替代
- 每次授权请求生成唯一的挑战值，防止中间人攻击
- 与[[订阅转api]]机制深度绑定——OAuth穿透是proxy功能的技术基础