---
type: source
title: "ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling"
tags: [icml, test-time-scaling, dllm, inference-optimization, discrete-diffusion]
related: [prism, dllm, test-time-scaling, best-of-n, scaling-law]
created: 2026-05-11
updated: 2026-05-11
authors: ["Jinbin Bai"]
year: 2026
url: "https://mp.weixin.qq.com/s/ADd96lqUpkKYRyeBUk4GUA"
venue: "ICML 2026"
sources: ["icml-2026｜拒绝大力出奇迹，prism框架让dllm也能高效test-time-scaling.md"]
---

# ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling

## 概述
本文介绍了入选 ICML 2026 的 PRISM 框架，这是一种专为 [[dllm]]（离散扩散语言模型）设计的高效 [[test-time-scaling]]（推理时扩展）方法。针对传统 Best-of-N 方法在非自回归模型上计算成本过高（O(NT)）的问题，PRISM 通过层次化轨迹搜索、局部重掩码分支和自验证反馈，将计算复杂度降至接近 O(N + KT)，在数学推理和代码生成任务上实现了显著的性价比提升。

## 核心技术
PRISM 框架包含三个核心组件，旨在利用 dLLM 的去噪动力学特性：

1.  **Hierarchical Trajectory Search (HTS)**：将推理过程分为早期随机探索、中期渐进裁剪和后期精修三个阶段。在逻辑骨架形成时动态裁剪低质量轨迹，将计算资源重新分配给高潜力候选。
2.  **Local Branching via Partial Remasking**：保留高置信度的 Token（对应稳定结构），仅对低置信度部分进行重掩码和分支。这避免了从头开始重新采样，在保留高质量结构的同时探索细节变体。
3.  **Self-Verified Feedback (SVF)**：复用 dLLM 自身作为二分类验证器，通过构造 Yes/No 验证 Prompt 对中间状态生成的候选答案进行打分。这消除了加载额外验证模型的显存和工程开销。

## 实验结果
在 LLaDA-8B-Instruct、Dream-7B-Instruct 等模型上的实验表明：
*   **性能提升**：LLaDA-8B 在 GSM8K 上从 67.58% 提升至 85.30%，在 MATH-500 上从 26.40% 提升至 42.80%。
*   **效率优势**：在 GSM8K 上，PRISM 使用 1048 NFE 达到 85.30% 准确率，而 Best-of-16 需要 4096 NFE 才能达到 87.50%，实现了超过 4 倍的去噪计算节省。
*   **轻量级验证**：SVF 虽然在绝对准确率上（85.30%）略逊于外部更大的验证器 Qwen3-8B（87.35%），但无需额外加载模型，总参数量仅 8B（对比 16B），具有极高的部署性价比。

## 意义
PRISM 重新定义了 dLLM 上的 Test-Time Scaling 范式，证明了非自回归模型不仅能并行生成，也能通过算法优化实现高效的推理扩展。这为 [[llada]]、[[dream]] 等离散扩散模型在资源受限环境下的应用提供了关键路径。

## 相关链接
*   论文标题：Prism: Efficient Test-Time Scaling via Hierarchical Search and Self-Verification for Discrete Diffusion Language Models
*   arXiv 地址：https://arxiv.org/abs/2602.01842
*   代码地址：https://github.com/viiika/Prism