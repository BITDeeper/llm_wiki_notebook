---
type: source
title: "ICSE 2026杰出论文：北大团队提出SEAlign对齐框架"
tags: [icse, software-engineering, alignment, agent, llm, code-model]
related: [sealign, 北京大学, 软件工程智能体对齐, swe-bench, qwen2.5-coder-instruct-14b]
created: 2026-05-07
updated: 2026-05-07
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/xK2DmpaI0-cTB49pfWdKAQ"
venue: "机器之心"
sources: ["icse-2026杰出论文-突破代码模型真实工程落地瓶颈，北大团队提出sealign对齐框架：显著提升软件工程智能体决策质量.md"]
---

# ICSE 2026杰出论文：北大团队提出SEAlign对齐框架

本文报道了北京大学金芝教授和李戈教授团队发表于 ICSE 2026 并荣获 ACM SIGSOFT 杰出论文奖的工作。该研究提出了 [[sealign]] 框架，旨在解决代码大模型在真实软件工程场景中表现不佳的问题。

## 核心发现

现有代码模型在经典基准（如 HumanEval）上表现优异，但在真实工程任务（如 [[SWE-bench]]）中往往大幅下滑。研究指出，根本原因在于模型缺乏**多步决策能力**，而非单步代码生成能力。真实软件工程是一个长时程、强上下文持续交互、反复验证与修正的复杂过程。

## 解决方案：SEAlign

SEAlign 的核心思想是识别智能体轨迹中的**关键决策点**并进行偏好对齐，而非均匀优化所有步骤。其流程包括：

1.  **轨迹数据收集**：在真实环境中记录 Agent 决策轨迹。
2.  **轨迹树构建**：合并共享前缀，过滤低质量样本（如无效循环）。
3.  **偏好对齐训练**：利用类蒙特卡洛采样识别关键动作对，通过偏好学习优化模型行为。

## 实验结果

在 [[Qwen2.5-Coder-Instruct-14B]] 上的实验显示，SEAlign 显著提升了模型在真实场景中的表现：

*   **SWE-Bench-Verified**：解决率从 **2.8%** 提升至 **21.8%**。
*   **行为改善**：空补丁率从 52.0% 降至 22.8%，循环卡死率从 27.8% 降至 15.6%。
*   **泛化能力**：在 HumanEvalFix 任务中，SEAlign 模型在 Agent 框架下表现优于基线（62.8% vs 31.1%）。

## 意义

该研究将软件工程能力建模为一种智能体轨迹上的关键点决策能力，引入了控制论视角，为代码模型走向实用化和工程化提供了可行路径。
