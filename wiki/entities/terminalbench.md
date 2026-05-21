---
type: entity
title: TerminalBench
tags: [benchmark, tool-use, agent, cli-agent, evaluation]
related: [devops-gym, taco, 任务执行范式]
created: 2026-05-03
updated: 2026-05-08
sources: ["agent全链路成功率0%？首个真实devops基准曝致命短板｜iclr'26.md", "taco-让-cli-agent-在自主迭代中学会丢掉无用上下文.md"]
---

# TerminalBench

**TerminalBench** 是一个用于评估终端智能体（CLI Agent）性能的评测基准。它定义了 Agent 如何通过命令行工具与系统环境进行交互的规范，包含 1.0 和 2.0 两个版本。

## 应用场景与验证

TerminalBench 被用于验证 [[taco]] 框架在长程任务中的有效性。在该基准上的实验表明，原始 Prompt 中包含 24.6%–44.1% 的低价值冗余内容，这证明了上下文“脏数据”问题的普遍性。

### 实验结果
在插入了 TACO 框架后，基于 Terminus-2 等模型的智能体在 TerminalBench 上不仅降低了 Token 消耗，还显著提升了任务成功率。这证明了通过优化上下文管理（而非仅仅增加上下文窗口）可以有效提升 Agent 表现。

## 与 DevOps-Gym 的关系

[[devops-gym]] 完全兼容 TerminalBench 的标准格式。这意味着针对 TerminalBench 开发的工具或接口可以相对容易地适配到 DevOps-Gym 中，用于评估 Agent 在复杂 DevOps 场景下的表现。