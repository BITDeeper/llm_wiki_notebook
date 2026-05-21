---
type: entity
title: TACO (Terminal Agent Compression)
tags: [cli-agent, framework, compression, self-evolution]
related: [观测压缩, 任务执行范式, terminalbench, ai-subscription-crisis]
created: 2026-05-07
updated: 2026-05-07
sources: ["taco-让-cli-agent-在自主迭代中学会丢掉无用上下文.md"]
---

# TACO (Terminal Agent Compression)

**TACO** (Terminal Agent Compression) 是一个由曼彻斯特大学、北京航空航天大学、香港科技大学及 MAP 研究团队联合提出的终端智能体自进化观测压缩框架。

## 核心功能

TACO 旨在解决 CLI Agent 在长程任务中面临的上下文“脏数据”问题。它是一个无需训练、即插即用的框架，通过让智能体从真实交互轨迹中学习压缩规则，在过滤低价值终端输出的同时，保留后续决策所需的关键行动线索。

## 工作原理

TACO 的核心是一个轻量级的自进化规则引擎，包含三个关键阶段：

1.  **终端输出压缩**：利用规则过滤安装进度、编译流水等冗余信息，同时保留错误信号和关键诊断信息。
2.  **任务内规则集演化**：动态生成新规则以处理未见过的输出，并通过检测 Agent 的“过度压缩信号”（如重复请求完整输出）来修正规则。
3.  **全局规则池演化**：将验证有效的规则沉淀到全局池中，供后续任务检索和复用。

## 性能表现

在 [[terminalbench]] 1.0/2.0、SWE-Bench Lite、CompileBench 等基准测试中，TACO 成功地在提升任务成功率的同时降低了 Token 消耗。这表明它不仅节省了上下文空间，还提高了信息的有效密度。

## 关键指标

TACO 使用 **Retention (规则保留率)** 来判断系统的收敛状态。当相邻演化轮次中的 Top-K 规则重合比例稳定在高位（如 >90%）时，表明系统已掌握稳定的压缩模式。

## 关联概念

- **[[观测压缩]]**：TACO 实现的具体技术理念。
- **[[任务执行范式]]**：TACO 是 Agent 工程化系统中优化上下文管理的典型案例。
- **[[ai-subscription-crisis]]**：TACO 通过提升 Token 效率，为解决 Agent 高成本问题提供了技术路径。