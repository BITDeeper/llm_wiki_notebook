---
type: concept
title: SSH沙盒
tags: [security, virtualization, openclaw]
related: [openclaw, openshell]
created: 2026-03-24
updated: 2026-03-24
sources: ["龙虾史上最大升级！但接了微信的千万别更.md"]
---

# SSH沙盒

SSH 沙盒是一种利用 SSH 协议、密钥和证书构建的隔离执行环境，用于安全地运行远程代码。

## 核心功能
- **身份验证**：支持使用密钥、证书以及 `known_hosts` 进行精细化的身份验证。
- **隔离性**：确保智能体执行的不可信代码不会直接污染宿主环境。
- **生命周期管理**：通常由专门的组件（如 [[openclaw]] 中的 OpenShell）负责管理沙盒的创建和销毁。

## 应用场景
在 AI 智能体框架中，SSH 沙盒解决了执行不可信代码时的安全问题，是区分于普通脚本工具的关键安全特性。
