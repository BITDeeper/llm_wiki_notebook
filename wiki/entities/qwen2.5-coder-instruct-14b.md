---
type: entity
title: Qwen2.5-Coder-Instruct-14B
tags: [llm, code-model, open-source, qwen]
related: [sealign, swe-bench, opengcc]
created: 2026-05-07
updated: 2026-05-07
sources: ["icse-2026杰出论文-突破代码模型真实工程落地瓶颈，北大团队提出sealign对齐框架：显著提升软件工程智能体决策质量.md"]
---

# Qwen2.5-Coder-Instruct-14B

[[Qwen2.5-Coder-Instruct-14B]] 是一个参数规模为 14B 的开源代码大模型。在 [[SEAlign]] 框架的研究中，该模型被用作基座模型进行实验。

## 性能基准

尽管该模型在经典代码生成基准上表现不俗，但在未经过专门对齐的情况下，其在真实软件工程任务中的表现存在显著瓶颈：

*   **原始表现**：配合 [[OpenHands]] 框架，在 [[SWE-bench]]-Verified 上的问题解决率仅为 **2.8%**。
*   **主要问题**：存在较高的空补丁率（52.0%）和循环卡死率（27.8%），表明其在多步交互和工具使用方面存在不足。

## SEAlign 优化后

经过 [[SEAlign]] 框架优化后，该模型在真实场景中的表现得到了质的飞跃：

*   **SWE-Bench-Verified**：解决率提升至 **21.8%**（提升近 8 倍）。
*   **SWE-Bench-Lite**：解决率从 3.7% 提升至 **17.7%**。
*   **行为改善**：空补丁率降至 22.8%，循环卡死率降至 15.6%。
*   **泛化能力**：在 HumanEvalFix 任务中，结合 Agent 框架后的通过率从 31.1% 提升至 **62.8%**。
