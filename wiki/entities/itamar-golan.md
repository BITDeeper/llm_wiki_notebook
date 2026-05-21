---
type: entity
title: Itamar Golan
tags: [security-expert, ceo, prompt-security]
related: [clawdbot, agent-安全灾难]
created: 2026-01-28
updated: 2026-01-28
sources: ["clawdbot，正在引爆全球灾难！各大ceo预警：不要安装，不要安装.md"]
---

# Itamar Golan

[[Itamar Golan]] 是 Prompt Security 的 CEO。在 [[ClawdBot]] 爆火期间，他是最早发出严厉全球灾难预警的安全专家之一。

## 主要观点
他指出 [[ClawdBot]] 的默认配置极其危险，成千上万的实例正运行在 VPS 上，端口直接暴露在公网且无身份验证。他警告称，这种配置实际上是在邀请攻击者接管系统。

## 安全修复清单
他提出了必须立即执行的修复措施：
1.  **关闭公网端口**：通过防火墙将访问限制在 VPN 或 IP 白名单内。
2.  **增加认证**：为所有接口增加认证机制（JWT/OAuth 或高强度共享密钥），并强制启用 TLS。
3.  **轮换密钥**：立即更换所有密钥，并默认它们已经泄露。
4.  **基础防护**：补齐请求限流、完整日志记录以及实时告警能力。

## 参考来源
- [ClawdBot，正在引爆全球灾难！各大CEO预警：不要安装，不要安装](https://mp.weixin.qq.com/s/sLtRRhXkoEFutWJhvaMvbw)