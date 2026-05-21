---
type: entity
title: S2Bench
tags: [dataset, benchmark, ai-security, agent-evaluation]
related: [spider-sense, mind2web, eicu]
created: 2026-02-14
updated: 2026-02-14
sources: ["ai智能体也有「蜘蛛感应」，防御延时骤降至8.3%.md"]
---

# S2Bench

**S2Bench** 是一个专门为评估 AI 智能体防御能力而构建的高质量基准测试数据集。它由 [[spider-sense]] 研究团队发布，旨在全面测试防御系统在面对复杂攻击时的鲁棒性和效率。

## 数据集特点

S2Bench 的设计重点在于模拟真实且具有挑战性的攻击场景，主要包括以下特征：

1.  **多场景覆盖**：包含不同领域的任务（如 Web 操作、医疗分析），以测试防御机制的泛化能力。
2.  **真实工具调用**：测试用例涉及真实的 API 调用和工具使用，能够模拟 Agent 在实际运行中的状态。
3.  **多阶段攻击**：不仅测试单次输入攻击，还覆盖了 Agent 执行链路中的多个阶段（Query, Plan, Action, Observation）。
4.  **高质量假阳性样本**：这是 S2Bench 的一大亮点。它包含大量在结构与操作模式上酷似恶意攻击、但本质意图完全无害的“高难度”测试用例。这些样本专门用于考验防御系统是否会因过度敏感而误伤合法的用户操作（即测试误报率 FPR）。

## 用途

在 [[spider-sense]] 的相关研究中，S2Bench 被用于验证框架的性能。实验结果显示，Spider-Sense 在该数据集上取得了最低的攻击成功率（ASR）和最低的误报率（FPR），证明了其 SOTA 级的防御能力。

## 链接
*   HuggingFace: https://huggingface.co/datasets/aifinlab/S2Bench