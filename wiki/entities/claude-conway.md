---
type: entity
title: Claude Conway
created: 2026-05-25
updated: 2026-05-25
tags: [anthropic, ai智能体, conway, 永不下线]
related: [anthropic, claude-memory-files, claude-dreams, openclaw, runtime-agent-os, 系统智能]
sources: ["claude「永久大脑」，真的来了！.md"]
origin_date: 2026-03-25
---
# Claude Conway

Claude Conway 是 [[anthropic|Anthropic]] 正在开发的下一代 7x24 小时永不下线 AI 智能体平台，代号为 Conway。它不是传统意义上的聊天窗口，而是一个拥有独立运行环境的常驻后台智能体。

## 核心架构

Conway 包含三个核心功能区：

- **搜索（Search）**：信息检索与整合
- **对话（Chat）**：交互式沟通
- **系统（System）**：后台任务管理与执行

## 关键能力

- 常驻后台运行，无需用户主动触发
- 监听外部事件并主动触发任务
- 通过 Webhook 接收信号
- 操控浏览器
- 运行 [[claude-code|Claude Code]]
- 支持「CNW ZIP」自定义扩展包格式

## 底层基座

Conway 的持久运行依赖两大核心能力：

1. **[[claude-memory-files|文件记忆]]**：提供持久的结构化存储架构
2. **[[claude-dreams|Dreams]]**：提供异步记忆整合与维护机制

三者叠加形成从记忆到反思再到行动的完整闭环。

## 与 OpenClaw 的对比

Conway 与 [[openclaw]] 直接对标，但安全性完全不同：

- OpenClaw 头两个月被发现至少 9 个 CVE 漏洞，超过 4.2 万个暴露实例在公网裸奔
- Conway 跑在 Anthropic 托管云基础设施上，扩展必须显式安装，Webhook 可逐服务开关，浏览器集成走 Claude 权限模型

## 发现时间线

- **2026年3月底**：Claude Code 51.2万行源码泄露，首次揭开 Conway 面纱（关联 [[source-map-leaks]]）
- **2026年5月**：[[testingcatalog]] 证实 Conway 存在，侧边栏入口在灰度测试中出现
- **当前状态**：已确认存在但未正式发布

## 战略意义

Conway 代表从「被动式对话」到「主动式常驻」的范式颠覆，是 [[系统智能]] 理念——AI 从单点工具演化为可记忆、可行动的整合系统——的具体实现。其三层功能区与 [[runtime-agent-os]] 的三层架构（实体/交互/记忆）高度对应。