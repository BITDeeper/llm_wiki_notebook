---
type: concept
title: Turn Loop
tags: [code-generation, iterative-development, ai-agents]
related: [claude-code-harness, experiment-harness]
created: 2026-04-05
updated: 2026-04-05
sources: ["claude-code-harness+龙虾科研团来了！金字塔分层架构+多智能体讨论，单人也能跑出「实验室」科研.md"]
---

# Turn Loop

[[turn-loop]] 描述了 [[claude-code-harness]] 中模型生成代码的迭代循环过程。

## 循环步骤

模型不再一次性吐出代码片段，而是像工程师一样经历以下循环：
1.  **读取**：读取本地代码库、数据集和模型检查点。
2.  **理解**：理解当前任务和上下文。
3.  **编写**：编写 `main.py` 或相关代码。
4.  **测试**：运行测试用例。
5.  **定位**：定位报错或失败原因。
6.  **修复**：修改代码并重新进入循环。

## 意义

这一机制使得 AI 能够像人类开发者一样，通过不断的试错和反馈来完善代码，而不是寄希望于“一次生成，完美运行”。它是实现可信实验代码生成的基础工作流。