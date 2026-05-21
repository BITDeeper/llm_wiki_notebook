---
type: entity
title: SkVM
tags: [skvm, virtual-machine, compiler, agent, llm]
related: [skill语言虚拟机, 原子能力, aot编译, 代码固化, shanghai-jiaotong-university, ipads-team, openclaw, hermes-agent, pi-presentation-intelligence]
created: 2026-04-26
updated: 2026-04-26
sources: ["skill也有语言虚拟机了！上交大开源skvm，实现一次编写，处处高效.md"]
---

# SkVM

**SkVM** (Skill Virtual Machine) 是由 [[上海交大]] [[IPADS团队]] 开发的面向 Skill 的语言虚拟机。它借鉴了经典 JVM 架构，旨在解决自然语言编写的 Skill 在异构大语言模型（LLM）和 Agent Harness 之间的适配与效率问题。

## 核心设计理念
在 SkVM 的设计哲学中，**Skill 是代码，而不同的 LLM 是异构处理器**。通过引入中间虚拟层，SkVM 实现了“一次编写，处处高效”的目标，即同一个 Skill 可以在不同能力的模型和不同的框架上高效运行。

## 技术架构
SkVM 包含两个主要部分：
1.  **AOT 编译**：在 Skill 安装阶段进行静态优化。
2.  **运行时优化**：在 Skill 执行阶段进行 JIT 加速和自适应调优。

### AOT 编译流程
- **PASS-1 基于能力的编译**：利用 [[原子能力]] 标准对模型进行“跑分”画像。如果 Skill 需求超出模型能力，编译器会自动降级 Skill（如将相对路径转为绝对路径）以适配弱模型。
- **PASS-2 环境绑定**：自动提取 Skill 依赖的包和工具，生成安装/检验脚本，消除运行时环境报错。
- **PASS-3 并发提取**：将串行的 Workflow 转换为 DAG 并行图，发掘数据并行、指令并行和线程并行机会。

### 运行时优化
- **代码固化**：通过 JIT 技术，当检测到 LLM 生成的代码与预生成指纹匹配时，直接复用模板代码，跳过 LLM 推理过程。
- **自适应重编译**：收集运行时错误日志反馈给编译器，自动重新优化 Skill。

## 性能表现
- **精度提升**：使 [[Qwen 30B]] 等小模型达到 [[Opus 4.6]] 等顶尖模型的任务成功率。
- **成本降低**：Token 消耗减少 40%。
- **速度飞跃**：代码执行速度提升 19-50 倍，整体执行效率提升 3.2 倍。

## 生态兼容性
SkVM 能够无缝集成主流 Agent 框架，包括 [[OpenClaw]]、[[Hermes Agent]]、openJiuwen Agent 和 [[PI]]，并支持 [[Clawhub]] 等主流 Skill 生态。

## 参见
- [[Skill语言虚拟机]]
- [[原子能力]]
- [[代码固化]]