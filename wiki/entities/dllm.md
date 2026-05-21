---
type: entity
title: dLLM (Discrete Diffusion Language Models)
tags: [model-architecture, non-autoregressive, discrete-diffusion, generation]
related: [prism, test-time-scaling, 非自回归生成, llada, dream]
created: 2026-05-11
updated: 2026-05-11
sources: ["icml-2026｜拒绝大力出奇迹，prism框架让dllm也能高效test-time-scaling.md"]
---

# dLLM (Discrete Diffusion Language Models)

**dLLM**（离散扩散语言模型）是一类采用离散扩散过程进行文本生成的语言模型。与主流的自回归模型（如 GPT 系列）不同，dLLM 采用非自回归、多步去噪的生成方式。

## 核心特性
*   **非自回归生成**：不从左到右逐 Token 生成，而是从被掩码的噪声序列出发，通过多步并行去噪逐渐恢复完整答案。
*   **全局双向上下文**：在去噪的每一步，模型都能看到整个序列的上下文信息，这使得 dLLM 在处理长距离依赖和规划任务时具有天然优势。
*   **去噪动力学**：生成过程被视为从噪声到清晰数据的逐步去噪过程，中间状态是部分掩码的全局序列。

## 推理优化的挑战与机遇
由于生成机制的根本差异，传统的为自回归模型设计的 [[test-time-scaling]] 方法（如基于前缀的树搜索、过程奖励模型）不能直接高效适配 dLLM。
*   **挑战**：朴素的 [[best-of-n]] 方法在 dLLM 上代价极高，因为每条候选轨迹都需要完整的 T 步去噪（O(NT) 复杂度）。
*   **机遇**：dLLM 的中间状态（部分掩码序列）提供了独特的优化空间，例如 [[prism]] 框架利用“局部重掩码”在保留高置信度骨架的同时探索细节变体。

## 代表性模型
*   **LLaDA 系列**：如 LLaDA-8B-Instruct, LLaDA-2.0-mini。
*   **Dream 系列**：如 Dream-7B-Instruct。
*   **其他**：Mercury, Gemini Diffusion 等。

## 应用场景
dLLM 特别适合需要全局规划和自我修正的任务，如复杂数学推理、代码生成等。随着 [[prism]] 等高效推理框架的出现，dLLM 正在成为一种具有竞争力的新型语言模型架构。

## 参考来源
*   [ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling](https://mp.weixin.qq.com/s/ADd96lqUpkKYRyeBUk4GUA)