---
type: entity
title: τ²-bench (Tau²-bench)
tags: [benchmark, agent, tool-use, evaluation]
related: [eigendata, qwen3-235b-a22b-2507, gpt-5, gemini-3-0-pro]
created: 2026-02-17
updated: 2026-02-17
sources: ["多轮agent训练拐点！清华首创可执行数据闭环，开源超越gpt-5.md"]
---

# τ²-bench (Tau²-bench)

[[tau-squared-bench]] 是一个用于评估真实场景下 Tool-Using Agent 能力的基准测试集。它侧重于考察模型在多轮交互和长链路任务中的可靠性，而非单次工具调用能力。

## 测试领域

该基准包含三个具有真实工具 API 的领域：
1.  **Airline**：航空领域（如航班查询、预订）。
2.  **Retail**：零售领域。
3.  **Telecom**：电信领域（规则最为复杂）。

## 评估指标

τ²-bench 采用 **Pass¹** 指标进行评估。
-   **定义**：要求 Agent 在一次完整的多轮交互中成功完成任务，中途不得失败。
-   **意义**：相比于单步成功率，Pass¹ 更严格地反映了 Agent 在长链路场景下的真实稳定性和抗干扰能力。

## 相关记录

在清华 [[eigendata]] 系统的相关测试中，[[qwen3-235b-a22b-2507]] 模型在 τ²-bench 上取得了超越 GPT-5 和 Gemini 3.0 Pro 的成绩，特别是在 Telecom 任务上达到了 98.3% 的 Pass¹。