---
type: entity
title: TuanziGuardianClaw
tags: [security, openclaw, agent, kernel]
related: [openclaw, nextie, tuanzi, capability-token, prompt-injection-defense, user-data-sovereignty]
created: 2026-03-13
updated: 2026-03-13
sources: ["首只“卫士虾”堵上openclaw原生漏洞，仅6.5kb大小，agent组团写的.md"]
---

# TuanziGuardianClaw

TuanziGuardianClaw（卫士虾）是 [[OpenClaw]] 生态系统的首个安全内核，由 [[Nextie]] 团队发布。其核心功能是监控并阻断本机其它 Agent（Skill）的高危风险行为，旨在解决提示词注入、数据泄露和命令注入等安全问题。

## 核心特性

### Agent 生成
TuanziGuardianClaw 是 [[Agent-Generated-Code]] 的典型案例，完全由 [[Nextie]] 的 [[团子]]（Tuanzi）多智能体协同平台编写，而非人类工程师手动开发。这标志着 AI 智能体已具备构建复杂安全系统的能力。

### 安全内核定位
- **优先级**：规则优先级高于所有其它 Skill。
- **不可变性**：任何 Skill 均不可绕过、编辑或修改其规则。
- **透明性**：完全透明，允许用户手动调整安全策略，并解释拦截原因。

## 防御机制

### 1. 提示词注入防御
针对 [[Prompt-Injection-Defense]]，通过关键词拦截机制检测恶意指令（如 "ignore previous instructions"），一旦发现立即阻断并告警。

### 2. 数据主权与保护
基于 [[User-Data-Sovereignty]] 原则，维护受保护资产清单：
- **禁止外泄**：API 密钥、SSH 私钥、会话 Cookie 等。
- **显式确认**：访问 .env、.ssh/ 等高风险目录。
- **限制导出**：联系人、证件号等个人数据。

### 3. 网络通信审查
评估目标地址安全性，拦截向未知域名或裸 IP 发送的数据，检测 Base64 编码等伪装传输行为。

## 权限管理

### 权限等级
为 Skill 定义了 5 个权限等级：
- **Level 0**: 纯文本处理（无文件/网络访问）。
- **Level 1**: 读取特定用户文件。
- **Level 2**: API 调用和程序执行（需确认）。
- **Level 3**: Shell 命令和系统配置（高风险）。
- **Level 4**: Root 权限操作（默认阻断）。

### Capability Token
引入 [[Capability-Token]] 系统，要求 Skill 持有特定令牌（如 `CAP_READ_LOCAL_FILES`）才能执行敏感操作。

## 核心原则
1. 用户数据主权
2. 最小权限
3. 显式许可
4. Skill 之间零信任
5. 安全优先于便利