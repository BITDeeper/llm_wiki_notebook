---
type: entity
title: Claude Sonnet 5
tags: [anthropic, model, coding, llm]
related: [claude-code, anthropic, swarm-mode, swe-bench]
created: 2026-02-03
updated: 2026-02-03
sources: ["claude-5史诗级泄露，史上最强编程模型评测炸裂！核心秘密曝光.md"]
---

# Claude Sonnet 5

**Claude Sonnet 5**（代号：**Fennec**）是 [[Anthropic]] 开发的第五代 Claude Sonnet 系列大语言模型。尽管定位为中端系列，但其在多项基准测试中超越了前代旗舰 [[Claude Opus 4.5]]，被视为 Anthropic 在编程领域的里程碑式产品。

## 核心特性

### 性能指标
- **SWE-Bench 得分**：超过 **80.9%**，远超此前业界最高分（74.4%）。
- **上下文窗口**：**100 万 token**，支持对大型代码库的全局理解与重构。
- **推理成本**：通过 Google [[TPU]] 优化训练，成本仅为 Opus 4.5 的 **50%**。
- **响应速度**：相比前代模型有显著提升，延迟更低。

### 能力范围
- **代码交付**：不仅能生成代码片段，还能完成修 bug、重构代码、补充测试用例、运行 CI、查找回归问题等端到端软件工程任务。
- **视觉生成**：在结构化视觉生成（如 ASCII 地图）和 UI 渲染方面表现出色。
- **多智能体协作**：内置支持 [[Swarm-Mode]]（蜂群模式），能够模拟人类开发团队的协作流程。

## 技术架构
- **训练基础设施**：利用 Google 的 TPU 进行训练和推理优化，使其在保持高性能的同时大幅降低了算力成本。
- **部署状态**：据泄露信息，该模型已部署在 Google Vertex AI 上（模型 ID：`claude-sonnet-5@20260203`）。

## 市场定位
Anthropic 采取“越级打击”策略，用中端型号的定价提供旗舰级的性能，旨在解决开发者对 Opus 系列“太慢、太贵”的痛点，并直接应对 [[OpenAI]] 在编程领域的竞争。

## 参见
- [[Claude Code]]：集成了 Sonnet 5 核心能力的编程代理工具。
- [[Swarm-Mode]]：Sonnet 5 支持的多智能体协作模式。