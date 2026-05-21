---
type: entity
title: TerminalBench-2
tags: [benchmark, code-agent, evaluation, docker]
related: [meta-harness, claude-haiku-4-5, claude-opus-4-6, forgecode]
created: 2026-04-04
updated: 2026-04-04
sources: ["meta-harness让haiku性能狂飙，甚至追平opus！.md"]
---

# TerminalBench-2

**TerminalBench-2** 是一个包含 89 个 Docker 化任务的代码代理评测基准，被广泛用于衡量 AI 智能体在真实编程环境中的自主能力。

## 特点
- **任务多样性**：涵盖代码翻译、分布式机器学习配置、系统编程、生物信息学、密码分析等领域。
- **高难度**：任务需要长程自主执行、处理复杂依赖、应对截断的终端输出，并要求具备相当的领域知识。
- **评分机制**：每个任务二元评分（通过/失败），跑 5 次取平均值。

## 应用
TerminalBench-2 被几乎所有主流前沿实验室（如斯坦福、MIT）用于评估代码代理的实际能力。它是继 SWE-bench 之后又一个被广泛认可的“真实工作”测试集。

在 [[Meta-Harness]] 的研究中，该基准用于验证优化 [[Harness]] 对提升模型性能的作用。结果显示，经过优化的 [[Claude Haiku 4.5]] 和 [[Claude Opus 4.6]] 在该基准上分别取得了 37.6% 和 76.4% 的成功率。