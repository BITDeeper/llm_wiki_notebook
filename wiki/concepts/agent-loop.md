---
type: concept
title: Agent Loop (智能体循环)
tags: [agent, architecture, workflow, ai-system, 智能体, 迭代优化, 多模态生成]
related: ["codex", "claude-code", "prompt-caching", "compaction", "runtime-agent-os", "gems", "agent-memory", "agent-skill", "任务执行范式", "task-execution-paradigm"]
created: 2026-01-24
updated: 2026-05-08
sources: ["openai绝地反击！codex大脑首曝，8亿用户极限架构硬刚claude.md", "openclaw的风刮到了多模态生成，6b小模型超越nano-banana-2！.md"]
---

# Agent Loop (智能体循环)

Agent Loop（智能体循环）是一种将“观察-思考-行动-反馈”串联起来的系统架构，旨在使 AI 能够像人类员工一样独立完成复杂任务，而非仅进行一问一答的对话。它是 [[codex]] 和 [[claude-code]] 等编程 Agent 的核心“大脑”，同时也是 [[gems]] 框架中用于多智能体协作和闭环优化的核心组件。

## 核心流程

Agent Loop 的本质是一个闭环优化系统，其工作流程通常包含以下步骤的循环：

1.  **构建 Prompt / 生成**：
    *   系统整合 System 指令（角色定义）、Tools（可用工具）、Context（环境上下文）和 User Instruction（用户指令），形成发给模型的完整输入。
    *   模型根据当前指令生成初步结果或规划下一步行动。
2.  **模型推理 / 评估**：
    *   模型基于 Prompt 分析当前状态，规划下一步行动（如读取文件、执行命令）。
    *   系统同时评估生成结果与目标指令的对齐程度。
3.  **工具调用 / 反馈**：
    *   系统执行模型决定的操作，与外部环境（如文件系统、终端）进行交互。
    *   将工具执行的输出、错误信息或评估差异转化为反馈信息。
4.  **结果反馈 / 迭代**：
    *   将工具执行的输出或错误信息追加回 Prompt，作为模型下一次推理的依据。
    *   基于反馈进行下一轮生成或修正，直到结果满足要求或达到停止条件。
5.  **循环**：重复上述过程，直到模型判断任务已完成或达到终止条件。

## 关键特征

- **独立性**：Agent 能够自主规划路径（Chain of Thought）并验证结果，无需用户每一步都介入。
- **纠错能力**：通过反馈循环，Agent 可以在执行失败时自我修正（Self-Correction）。
- **逐步对齐**：通过多次迭代修正细节，确保复杂指令被准确执行，显著提升输出质量。
- **状态管理**：随着循环进行，上下文窗口会迅速填满，需要配合 [[prompt-caching]] 和 [[compaction]] 等技术来控制成本和保持记忆。

## 应用场景

Agent Loop 架构广泛应用于需要多步推理和工具调用的场景，如：

- **AI 编程助手**：自动读代码、修 Bug、跑测试。
- **自动化运维**：监控日志、执行脚本、处理故障。
- **数据分析**：执行查询、生成图表、撰写报告。
- **多模态生成**：在 [[gems]] 等框架中，通过迭代优化处理复杂的生成任务。

## 与相关概念的关系

- **[[runtime-agent-os]]**：Agent Loop 是运行在 Runtime Agent OS 之上的核心逻辑，后者提供了实体管理、交互层和记忆层等支撑。
- **[[task-execution-paradigm]]**：Agent Loop 是任务执行范式在 AI 领域的具体实现，标志着 AI 从“聊天伴侣”向“数字劳动力”的转变。
- **[[gems]]**：在 Gems 框架中，Agent Loop 作为核心组件，通过闭环优化机制显著提升了模型在主流任务上的表现。