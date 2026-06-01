---
type: event
title: Autogenesis 协议发布
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 自进化, 协议, 学术发布]
related: [autogenesis-protocol-agp, autogenesis-system-ags, 自进化架构, 任务执行范式]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
origin_date: 2026-04-01
time_span:
  start: 2026-04-01
  end: null
participants: [南洋理工大学, 斯坦福大学, 普林斯顿大学, 香港城市大学, 张文涛, 赵哲, 温海斌, 王梦迪, 安波, 尹明]
causes: []
effects: [autogenesis-protocol-agp, autogenesis-system-ags]
significance: high
---
# Autogenesis 协议发布

2026 年 4 月，来自南洋理工大学、斯坦福大学、普林斯顿大学、香港城市大学的联合团队发布了 **Autogenesis Protocol（AGP）**——一个面向智能体自我进化的双层协议架构，以及基于该协议构建的 **Autogenesis System（AGS）**。

## 背景

在 MCP、A2A 等连接协议普及之后，智能体已具备较强的外部连接能力。但当智能体需要在运行过程中修改自身组件（Prompt、工具、记忆等）时，缺乏可追踪、可回滚、可审计的治理机制。自进化仍处于经验主义阶段。

## 核心贡献

AGP 将自进化拆分为两层：
- **RSPL（资源基底协议层）**：将智能体内部五类组件抽象为可管理的协议级资源
- **SEPL（自进化协议层）**：将自我改进形式化为 Reflect → Select → Improve → Evaluate → Commit 的闭环流程

## 性能验证

- GAIA Test 达 89.04%，较 baseline 提升 12.61%
- HLE 达 59.6%，排名第二
- LeetCode 五语言测试中 C++ 和 Java 接近满分

## 意义

此事件标志着智能体自进化从**经验主义**进入**协议化治理**阶段。AGP 不是替代 MCP/A2A，而是填补了智能体技术栈中"进化层"的空白，为未来通用智能体的可治理进化能力奠定了协议基础。

## 论文信息

- 论文：https://arxiv.org/abs/2604.15034
- GitHub：https://github.com/DVampire/Autogenesis