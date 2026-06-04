---
type: entity
title: OpenShell
created: 2026-06-03
updated: 2026-06-04
tags: ["英伟达", "安全沙箱", "运行时", "agent安全", "开源", "智能体生态"]
related: ["nemoclaw", "英伟达", "hermes-agent", "openclaw", "paperclip"]
sources: ["老黄也来养马了！英伟达版hermes-agent发布.md", "老黄刚夸完openclaw，hermes反手把智能体搬进电脑桌面.md"]
origin_date: 2026-05-31
---
# OpenShell

OpenShell 是 [[英伟达]] 推出的安全沙箱运行时，围绕 [[openclaw]] 和 [[hermes-agent]] 长出的安全组件，用于更稳定地运行开源智能体。

## 生态角色

OpenShell 是 [[nemoclaw]] 企业级参考栈的核心安全组件，提供容器隔离能力，将 OpenClaw 或 Hermes 的执行环境沙箱化，降低智能体直接操作系统的安全风险。

## 核心职责

- **文件和网络策略**：通过 policy.yaml 硬编码网络策略，白名单以外的目标直接返回 403
- **凭证代理**：Agent 看不到 Slack/Outlook 令牌，鉴权在沙箱代理出口完成
- **沙箱隔离**：接触内部敏感数据的 Agent 被硬性禁止访问公网

## 安全设计理念

OpenShell 的安全靠的是**策略代码**，而非靠模型自觉。Agent 想碰白名单以外的目标，代理会直接返回 403，Hermes 把它当成一次普通的工具报错处理。

## 扩展计划

在 2026 年 5 月 31 日的 GTC Taipei 上，英伟达宣布 [[hermes-agent]] 和 [[openclaw]] 都将把 OpenShell 集成进各自即将推出的 Windows 原生应用。