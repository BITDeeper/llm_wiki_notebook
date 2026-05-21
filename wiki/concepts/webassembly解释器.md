---
type: concept
title: WebAssembly 解释器
tags: [programming-language, compiler, llm-reasoning]
related: [transformer-内置计算机]
created: 2026-03-17
updated: 2026-03-17
sources: ["卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# WebAssembly 解释器

**WebAssembly**（简称 Wasm）是一种现代的低级指令集格式，旨在为 Web 平台提供高性能的执行环境。它支持 C、C++、Rust 等多种高级语言编译生成。

## 在 Transformer 内置计算机中的角色
在 [[Transformer 内置计算机]] 的架构中，WebAssembly 被用作模型内部的“机器语言”。研究者在 Transformer 权重中实现了一个 WebAssembly 解释器，使得模型能够生成并执行标准化的程序代码。

## 优势
*   **标准化**：允许将经过验证的标准算法（如数独求解器、图算法）直接嵌入模型。
*   **可验证性**：代码执行过程以自回归方式输出，便于调试和审计。
*   **性能**：Wasm 本身设计接近原生性能，适合嵌入在推理循环中进行精确计算。