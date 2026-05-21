---
type: concept
title: Capability Token
tags: [security, permission, access-control]
related: [tuanziguardianclaw, openclaw]
created: 2026-03-13
updated: 2026-03-13
sources: ["首只“卫士虾”堵上openclaw原生漏洞，仅6.5kb大小，agent组团写的.md"]
---

# Capability Token

Capability Token（能力令牌）是一种细粒度的权限控制机制，用于管理 AI 智能体或软件组件的敏感操作权限。

## 工作原理
在 [[TuanziGuardianClaw]] 系统中，Skill（智能体技能）必须持有特定的 Capability Token 才能执行对应的高危操作。例如：
- `CAP_READ_LOCAL_FILES`: 读取本地文件
- `CAP_EXECUTE_COMMAND`: 执行系统命令
- `CAP_NETWORK_REQUEST`: 发起网络请求

如果某个 Skill 试图执行操作但未持有相应的合规令牌，请求将被直接拦截。

## 优势
- **细粒度控制**：解决了传统“全有或全无”权限管理的弊端。
- **最小权限原则**：确保 Skill 仅拥有完成其任务所需的最小权限集。
- **动态审计**：令牌的发放和检查过程可被记录，便于安全审计。