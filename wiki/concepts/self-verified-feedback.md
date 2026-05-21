---
type: concept
title: Self-Verified Feedback (SVF)
tags: [verification, inference, optimization, prism]
related: [prism, dllm, best-of-n, hts]
created: 2026-05-11
updated: 2026-05-11
sources: ["icml-2026｜拒绝大力出奇迹，prism框架让dllm也能高效test-time-scaling.md"]
---

# Self-Verified Feedback (SVF)

**Self-Verified Feedback (SVF)**（自验证反馈）是 [[prism]] 框架中提出的一种轻量级验证机制，旨在解决传统 Test-Time Scaling 中依赖外部验证器带来的高成本问题。

## 工作原理
SVF 直接复用当前的 [[dllm]] 模型本身，将其作为一个二分类验证器。具体流程如下：
1.  **生成候选**：在中间去噪状态，先生成一个完整的候选答案。
2.  **构造 Prompt**：构造一个 Yes/No 验证 Prompt，询问模型该答案是否可能正确。
3.  **获取分数**：模型输出 Yes 和 No 的 Logits，将其转换为二元归一化分数。
4.  **指导搜索**：该分数用于对轨迹进行排序、裁剪（在 [[hts]] 中）以及最终答案的选择。

## 优势
*   **零额外开销**：不需要加载额外的 Reward Model 或 Verifier，节省了显存和工程成本。
*   **低计算占比**：实验表明，SVF 的调用次数通常仅占总 NFE（函数调用次数）的 10% 以下，对整体推理速度影响极小。
*   **高性价比**：虽然在绝对准确率上可能略逊于更大的专用外部验证器（如 Qwen3-8B），但在仅使用原模型（8B）的情况下，提供了极具竞争力的性能提升路径。

## 局限性
SVF 的精度受限于模型自身的能力。如果模型本身对某个领域缺乏判断力，SVF 的信号可能不够准确。但在数学推理和代码生成等逻辑性较强的任务中，SVF 表现出了良好的有效性。

## 参考来源
*   [ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling](https://mp.weixin.qq.com/s/ADd96lqUpkKYRyeBUk4GUA)