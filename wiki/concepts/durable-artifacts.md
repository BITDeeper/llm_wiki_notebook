---
type: concept
title: Durable Artifacts
tags: [data-management, system-design, memory]
related: [file-as-bus, 状态连续性, aiscientist]
created: 2026-04-20
updated: 2026-04-20
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# Durable Artifacts

[[Durable Artifacts]]（持久化工件）指在 AI 系统运行过程中生成的、被持久化保存的项目证据，如分析文档、代码文件、实验日志和中间结果。

## 作用

在 [[aiscientist]] 系统中，Durable Artifacts 是实现 [[状态连续性]] 的具体手段。与存储在易失性内存（如 LLM 上下文窗口）中的信息不同，Durable Artifacts 具有以下特点：
- **可追溯**：完整记录了决策过程和中间状态。
- **可引用**：后续阶段可以直接读取和分析这些文件，无需重新生成。
- **稳定性**：不受对话轮次限制或上下文窗口截断的影响。

## 意义

通过将项目状态转化为 Durable Artifacts，系统能够在长程任务中积累“经验”。这使得 AI 不仅仅是执行单次指令，而是能够像人类研究员一样，基于之前的实验记录和笔记进行迭代和优化。