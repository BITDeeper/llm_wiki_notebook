---
type: entity
title: Tengu
tags: [anthropic, system, deployment, feature-flag]
related: [anthropic, capybara-v2-fast, claude-code]
created: 2026-04-02
updated: 2026-04-02
sources: ["anthropic王炸claude基准测试泄露，卡皮巴拉细节曝光！还在代码里下毒.md"]
---

# Tengu

**Tengu**（天狗）是 Anthropic 内部的一套灰度发布和回滚开关系统，于 2026 年 4 月初的源码泄露中被曝光。

## 功能与机制
- **灰度控制**：通过 `tengu_*` 前缀的开关控制新功能或模型优化的上线。
- **秒级回滚**：具备 Kill-switch（自杀开关）功能，一旦上线出现异常，可以秒级回滚，确保生产环境稳定。
- **A/B 测试**：代码注释中包含大量 A/B 测试证据，表明该系统被广泛用于验证新特性的效果。

## 测试流程
根据泄露代码，Tengu 系统支持分阶段推送：
1. **内部金丝雀**：首先向 `ant/internal` 用户（Anthropic 员工）开放，进行第一波验证。
2. **外部解锁**：只有在内部验证通过后，才向外部用户解锁新功能。

## 应用案例
该系统被用于控制 [[capybara-v2-fast]] 模型的优化上线，确保了针对“过早停止”Bug 的修复能够安全地部署。

## 相关条目
- [[anthropic]] — 系统的所有者。
- [[capybara-v2-fast]] — 使用该系统进行部署的模型。