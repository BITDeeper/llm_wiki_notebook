---
type: entity
title: DevOps-Gym
created: 2026-05-03
updated: 2026-05-03
tags: [benchmark, devops, evaluation, software-engineering]
related: [长程推理, 非python语言弱势, terminalbench, swe-bench]
sources: ["agent全链路成功率0%？首个真实devops基准曝致命短板｜iclr'26.md"]
---

# DevOps-Gym

**DevOps-Gym** 是由 UCSB、NUS 和 Berkeley 联合提出的首个针对 DevOps 全生命周期的端到端评估框架。它旨在填补现有基准（如 SWE-bench）仅关注代码生成的空白，通过模拟真实的软件工程环境，全面评估 AI Agent 在运维和治理代码方面的能力。

## 核心特性

- **真实环境**：基于 30+ 个真实的 Java 和 Go 开源项目，构建了 700+ 个真实任务。
- **全容器化**：所有任务在隔离的、可复现的 Docker 容器中运行，确保环境一致性。
- **去污染设计**：移除了 Git Metadata，防止 Agent 通过 `git log` 等手段“作弊”获取答案。
- **兼容性**：完全复用 [[terminalbench]] 的标准格式，方便社区接入。

## 评测维度

DevOps-Gym 覆盖了 DevOps 的四大核心阶段：

1.  **构建与配置 (Build & Configuration)**：测试 Agent 解决依赖冲突、迁移构建系统（如 Maven 到 Gradle）的能力。
2.  **监控与异常检测 (Monitoring)**：测试 Agent 仅通过命令行工具（如 `top`, `iostat`）诊断性能瓶颈和资源异常（如内存泄漏）的能力。
3.  **问题修复 (Issue Resolving)**：基于真实的 GitHub Issue，测试 Agent 在 Java/Go 等编译型语言中的代码修复能力。
4.  **测试生成 (Test Generation)**：测试 Agent 在不查看修复代码的情况下，编写满足“Fail-to-Pass”标准的回归测试。

## 关键发现

在针对 Claude-4-Sonnet、OpenAI o4-mini、DeepSeek-V3.1 等 SOTA 模型的评测中：

- **构建任务**：最高成功率仅为 **51.85%**。
- **监控任务**：最高成功率仅为 **20.56%**。
- **全链路流水线 (End-to-End Pipeline)**：所有模型成功率均为 **0%**。

这一结果揭示了当前 AI Agent 在 [[长程推理]] 和动态系统理解上的致命短板。