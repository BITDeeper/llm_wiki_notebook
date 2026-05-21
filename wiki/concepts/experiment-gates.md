---
type: concept
title: Experiment Gates
created: 2026-04-15
updated: 2026-04-15
tags: [software-development, feature-flags, telemetry]
related: [claude-code, telemetry, prompt-caching]
sources: ["5分钟缓存清零，性能打1折！集体声讨claude，cc之父紧急回应.md"]
---

# Experiment Gates

Experiment Gates（实验性功能门控）是一种动态配置系统，允许开发者向特定的用户群体推送或启用实验性的功能特性。

## 在 Claude Code 中的应用

在 [[claude-code]] 的架构中，Experiment Gates 被用于推送如“1小时 Prompt 缓存”等实验性优化功能。

### 架构耦合问题

根据 [[boris-cherny]] 的解释，这些门控功能与 [[telemetry]]（遥测）系统存在深度耦合：
- **开启遥测**：客户端能够连接到 Experiment Gates，从而获取并启用最新的实验性策略（如 1 小时缓存）。
- **关闭遥测**：客户端无法连接到 Gates，系统会回退到保守的默认配置（如 5 分钟缓存）。

### 争议

这种设计导致了严重的用户体验问题。用户为了保护隐私而关闭遥测，却意外失去了性能优化的资格。这种“隐私换性能”的架构设计被社区批评为一种隐形的惩罚机制，暴露了功能开关与数据收集策略绑定的伦理风险。