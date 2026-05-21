---
type: entity
title: Jarred Sumner
created: 2026-04-15
updated: 2026-04-15
tags: [anthropic, engineering, bun]
related: [claude-code, anthropic, boris-cherny]
sources: ["5分钟缓存清零，性能打1折！集体声讨claude，cc之父紧急回应.md"]
---

# Jarred Sumner

Jarred Sumner 是 [[anthropic]] 的工程师，同时也是 Bun 运行时（JavaScript 运行时）的创造者。

## 在缓存争议中的角色

在 [[claude-code]] 的缓存 TTL 争议中，他试图从技术成本角度为 5 分钟 TTL 策略辩护。

### 技术观点

- **一次性调用理论**：他认为 5 分钟 TTL 对整体而言“更便宜而不是更贵”。
- **理由**：他声称相当一部分 [[claude-code]] 请求是一次性调用（如 subagent 调用），缓存上下文只用一次就不再访问。对于这类请求，使用 1 小时 TTL 反而浪费了 2 倍的写入成本（[[prompt-caching]] 的写入成本高于读取）。

### 争议点

他的解释虽然符合特定场景下的技术逻辑，但与用户提供的实际数据（2 月份 1 小时 TTL 下的低浪费率）存在出入，导致部分用户认为 Anthropic 的默认策略并未针对真实工作流进行优化。