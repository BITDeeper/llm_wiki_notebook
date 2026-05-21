---
type: entity
title: Meta-Harness
tags: [ai-agent, optimization, framework, stanford, automl]
related: [harness, claude-code, agent-model-harness, terminalbench-2, yoonho-lee]
created: 2026-04-04
updated: 2026-04-04
sources: ["meta-harness让haiku性能狂飙，甚至追平opus！.md"]
---

# Meta-Harness

**Meta-Harness** 是由斯坦福 IRIS Lab 联合 MIT、威斯康星大学等机构开发的自动化优化框架，旨在自动迭代和优化 AI 智能体的 **[[Harness]]**（脚手架/基础设施）。

## 核心机制
Meta-Harness 的核心在于让优化器能够处理海量的上下文信息，从而进行精确的 **[[反事实诊断]]**。

### 1. 完整执行轨迹
与传统的优化方法（如 Self-Refine, OPRO）仅依赖压缩摘要或标量分数不同，Meta-Harness 保留了任务执行的完整历史：
- 所有历史候选 [[Harness]] 的源代码
- 每一轮的执行轨迹
- 命令日志、错误信息、超时行为
- 评分结果

其处理的上下文量最高可达 **1000 万 token**，是传统方法的 400 倍。

### 2. 文件系统交互
Meta-Harness 为优化器（称为 Proposer）提供了一个虚拟的文件系统。Proposer（通常使用 [[Claude Code]]）可以使用 `grep`、`cat` 等标准工具自主检索信息，而不是被动接收处理过的数据。

### 3. 优化闭环
1. Proposer 读取文件系统中的历史记录。
2. 分析任务失败原因（基于完整轨迹）。
3. 针对性地重写 [[Harness]] 代码。
4. 新 [[Harness]] 跑测试，结果写回文件系统。
5. 循环继续。

## 性能表现
Meta-Harness 在多个领域验证了其有效性：

- **代码代理 ([[TerminalBench-2]])**：使轻量级的 [[Claude Haiku 4.5]] 成功率提升至 37.6%，超越了所有其他 Haiku 智能体；使 [[Claude Opus 4.6]] 达到 76.4% 的成功率。
- **文本分类**：在 LawBench 等数据集上超越 SOTA 方法 7.7 个百分点，且仅需对手十分之一的评估次数。
- **数学推理**：发现的检索策略在未见过的模型上平均提升了 4.7 个百分点，证明了策略的通用性。

## 意义
Meta-Harness 证明了 **[[Agent = Model + Harness]]** 这一范式的潜力。它表明，通过系统化的工程优化（而非仅增加模型参数），可以显著释放 AI 智能体的潜力，甚至让小模型通过优秀的“身体”超越拥有平庸“身体”的大模型。