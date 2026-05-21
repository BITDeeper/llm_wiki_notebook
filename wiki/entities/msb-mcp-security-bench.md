---
type: entity
title: MSB (MCP Security Bench)
tags: [benchmark, security, mcp, ai-agent, evaluation]
related: [mcp, nrp-net-resilient-performance, mcp-攻击分类体系, 北京邮电大学, openclaw]
created: 2026-04-15
updated: 2026-04-15
sources: ["openclaw爆火，暴露12类致命隐患！mcp协议安全基准发布-iclr.md"]
---

# MSB (MCP Security Bench)

**MSB (MCP Security Bench)** 是由北京邮电大学团队发布的专门针对 [[MCP]] 协议的安全评测基准。该基准旨在填补 AI Agent 在工具调用环节的安全测评空白，相关论文已被 ICLR 2026 接收。

## 核心特性

### 1. 基于真实环境的执行套件
与传统的模拟评测不同，MSB 搭载了真实的 MCP 服务器。
- **规模**：涵盖 10 个现实场景、405 个真实工具和 2000 个攻击实例。
- **真实性**：所有测试实例均通过 MCP 运行真实的工具执行，直接观测攻击对环境状态的破坏程度。

### 2. 系统化的攻击分类
MSB 建立了完整的 [[MCP 攻击分类体系]]，覆盖了 Agent 工具调用的三个阶段（任务规划、工具调用、响应处理），定义了包括名称冲突（NC）、用户模拟（UI）、虚假错误（FE）在内的 12 类攻击向量。

### 3. 平衡性能与安全的评估指标
MSB 提出了 [[NRP (Net Resilient Performance)]] 指标，解决了单纯使用攻击成功率（ASR）评估的片面性。NRP 指标旨在量化 Agent 在抵御攻击的同时保持完成用户任务能力的综合抗风险能力。

## 测试结果

在对 GPT-5、DeepSeek-V3.1、Claude 4 Sonnet、Qwen3 等 10 款主流模型的测试中：
- **总体平均 ASR**：40.35%。
- **关键发现**：所有攻击方式均表现出有效性；混合攻击具有协同增强效应；性能越强的模型往往越容易受到攻击（[[能力-安全悖论]]）。

## 意义
MSB 是首个系统揭示 MCP 生态潜在攻击面的基准，为 Agent 安全研究提供了可复现、可量化的标准，标志着 AI 安全研究从文本空间向工具生态系统的扩展。