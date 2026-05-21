---
type: concept
title: Transformer 内置计算机
tags: [llm-reasoning, webassembly, inference, white-box]
related: [hullkvcache, 2维注意力头, claude-code, ai-for-science]
created: 2026-03-17
updated: 2026-03-17
sources: ["卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# Transformer 内置计算机

**Transformer 内置计算机**是一种不依赖外部工具（如 Python 解释器），而是直接在 Transformer 模型的权重中内嵌可执行程序（如 WebAssembly 解释器）的技术范式。

## 核心思想
传统的 LLM 解决精确计算问题的方案通常是“外挂”式的，即通过 [[工具调用]]（Tool Use）让模型生成脚本，由外部沙箱执行。这种方式增加了延迟，且计算过程对模型而言是“黑盒”的。

内置计算机方案主张**将计算机直接嵌入模型内部**，使模型能够生成并执行机器码指令，计算结果直接在模型的 Token 输出流中生成。

## 技术实现
1.  **WebAssembly 解释器**：在 Transformer 权重中实现一套现代化 RAM 计算机与 WebAssembly 解释器。这意味着 C/C++ 等标准编译语言代码可以被编译为模型可识别的 Token 指令序列。
2.  **白盒化计算**：计算过程（如回溯、约束传播）以自回归方式逐行输出，完全可审计和可验证。

## 优势
*   **透明性**：计算过程从黑箱变为白盒，实现了计算的可验证性。
*   **效率**：结合 [[HullKVCache]] 等优化技术，可以在普通 CPU 上实现极高的推理吞吐量（30,000+ Token/秒）。
*   **精确性**：在数独求解、图匹配等需要严格逻辑的任务中，能实现 100% 的精确率。

## 对比与挑战
*   **vs. 外部工具**：相比 [[Claude Code]] 等依赖外部沙箱的方案，内置计算延迟更低，但灵活性可能受限（如难以直接访问互联网）。
*   **通用性**：目前主要展示于特定算法任务，如何泛化到通用逻辑推理仍需探索。