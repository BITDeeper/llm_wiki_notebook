---
type: concept
title: Harness-Level Evaluation（执行系统级评测）
created: 2026-06-10
updated: 2026-06-10
tags: [agent-harness, 评测, 开放问题]
related: [code-as-agent-harness, agent-harness]
sources: ["rss/claude-code爆火背后的agent-harness底层逻辑，uiuc、meta、斯坦福深度解读.md"]
---
# Harness-Level Evaluation（执行系统级评测）

## 定义

不仅评估Agent的最终输出，也评估计划、工具调用、状态转移和反馈使用的评测方法。由UIUC/Meta/Stanford综述《Code as Agent Harness》作为开放问题提出。

## 核心问题

传统benchmark主要看最终结果：答案对不对、测试过没过、任务完成没有。但对于code-harnessed agent，这远远不够：

- 一个Agent可能最终通过测试，但过程中做了大量危险修改、污染共享状态，或引入隐藏regression
- 另一个Agent可能没有完成任务，但执行轨迹清晰、失败原因明确、状态可恢复
- 真实部署中，后者未必更差

## 相关开放问题

- **Incomplete Feedback**：测试通过不代表程序真正正确
- **Regression-Free Self-Evolution**：避免harness自我优化时引入新失败模式
- **多Agent共享状态的语义冲突**
- **Human-in-the-loop的系统化**：可记录、可追责、可验证

## 意义

当Agent变成长期执行系统，评测方式也必须改变。下一代Agent评测需要从"结果导向"转向"过程+结果"的综合评估。