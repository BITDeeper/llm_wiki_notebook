---
type: entity
title: Everything Claude Code (ECC)
created: 2026-05-24
updated: 2026-05-24
tags: [开源项目, claude-code, 智能体框架, github]
related: [claude-code, affaan-mustafa, agentshield, 按需加载机制, tokenmaxxing, 1-n-agent调度]
sources: ["8小时狂揽15k美金！claude-code屠榜黑客马拉松，开源神器爆15万星.md"]
origin_date: 2026-01-01
---
# Everything Claude Code (ECC)

Everything Claude Code（简称 ECC）是由 [[affaan-mustafa|Affaan Mustafa]] 开发的开源 [[claude-code|Claude Code]] 配置与智能体框架，采用 MIT 协议，GitHub 星标达15万。项目地址：https://github.com/affaan-m/ECC

## 核心理念

ECC 的核心思路是将 AI 视为"数字工厂"的基础设施，而非等待提问的聊天机器人。它是专为 AI 智能体 Harness（约束框架）设计的性能系统，涵盖技能、记忆、安全扫描，不只是一个配置包。

## 系统规模

- **38个专业智能体**：规划师、安全审查员、调试员、代码审查员等
- **156项按需加载技能**：包括 /plan、/tdd、/security-scan、/quality-gate 等
- **72个自定义斜杠命令**
- **[[agentshield|AgentShield]]**：涵盖 CLAUDE.md、MCP 配置、钩子、技能的 1,282 项安全测试
- **3个 Opus 4.6 智能体**运行红队流水线（攻击者、防御者、审计者）
- **跨会话构建置信度的持续学习层**
- **覆盖12种语言生态系统**

## 关键工程创新

### 按需加载机制

为防止156项技能同时加载导致上下文窗口爆炸，ECC 设计了模块化[[按需加载机制]]。系统像动态内存加载器一样工作：写 TypeScript 时只激活 TS 专属 Review 智能体，开始写 Python 测试时 TDD 智能体才会苏醒。

### Token 极致优化

- **mgrep**：ECC 重新实现的检索机制，过滤冗余代码空行与无用信息，将检索阶段 Token 消耗降低50%
- **Stop 钩子**：替代 UserPromptSubmit，以超低延迟在本地完成增量构建与"无感沉淀"

### 安全防御

内置 [[agentshield|AgentShield]] 安全防御管道，在 AI 执行指令前进行毫秒级扫描，防止凭证泄露和恶意注入。

## 与现有概念的关联

ECC 是 [[任务执行范式]] 从模型开发转向智能体工程化系统的典型案例，其38个智能体按需调度是 [[1-n-agent调度]] 的工程实现。与 [[tokenmaxxing]] 追求极致吞吐形成有趣对照，ECC 代表了"Token 吝啬主义"——在智能体系统中极致优化 Token 消耗的工程哲学。