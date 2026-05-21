---
type: source
title: 卡帕西点赞Transformer内置计算机！每秒3万Token吞吐，拿下世界最难数独
tags: [ai-research, transformer, inference-optimization, webassembly, hullkvcache]
related: [percepta, christos-tzamos, transformer-内置计算机, hullkvcache, 2维注意力头, ai-for-science]
created: 2026-03-17
updated: 2026-03-17
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/MlKc-UCeLH8Y6BX3ohVRmA"
venue: 量子位
sources: ["卡帕西点赞transformer内置计算机！每秒3万token吞吐，拿下世界最难数独.md"]
---

# 卡帕西点赞Transformer内置计算机！每秒3万Token吞吐，拿下世界最难数独

## 概述
本文报道了 [[Percepta]] 团队提出的一种在 Transformer 模型内部构建原生计算机的新方法。该研究由 [[Christos Tzamos]] 领衔，获得了 [[Andrej Karpathy]] 的公开点赞。通过在模型权重中内嵌 WebAssembly 解释器并引入创新的 [[HullKVCache]] 技术，该方案在普通 CPU 上实现了每秒 3 万+ Token 的吞吐量，并成功求解了“世界最难数独”。

## 核心论点

### 内部计算 vs. 外部工具
文章指出，当前大模型（LLM）在多步骤、长上下文的精确计算任务中表现不佳。现有的解决方案——[[工具调用]]（Tool Use）和 [[智能体调度]]（Agent Scheduling）——本质上是依赖外部“外挂”，存在延迟高、可验证性差的问题。Percepta 团队提出的方案是**将计算机直接嵌入模型内部**，实现从“黑盒调用”到“白盒计算”的转变。

### 技术原理
1.  **内嵌计算机**：在 Transformer 权重中实现 WebAssembly 解释器。模型可以生成并执行 C/C++ 等语言编译的机器码指令，计算过程以自回归方式逐行输出，完全透明且可审计。
2.  **几何优化**：通过 [[2维注意力头]] 将注意力机制转化为计算几何中的 [[凸包极值查询]] 问题，将计算复杂度从 O(n) 降至 O(log n)。

## 关键发现与数据

### 性能突破
*   **吞吐量**：在普通 CPU 上达到 **31,037 Token/秒**，比传统 KV Cache 快近 200 倍。
*   **效率**：完成约 9000 行指令序列仅需 1.3 秒。

### 任务验证
*   **10x10 最小代价完美匹配**：模型内部执行匈牙利算法，指令输出效率达 7301 行/秒，精准求解最优匹配。
*   **世界最难数独**：针对 Arto Inkala 设计的数独（仅 21 个提示数），模型在 3 分钟内通过约束传播和回溯搜索实现 **100% 精确求解**。

## 意义
这项工作挑战了当前主流的“Agent 调用工具”范式，提供了一种更高效、更原生的替代方案。它不仅解决了长上下文精确计算的难题，还通过 [[HullKVCache]] 极大地降低了高性能推理的硬件门槛，对 [[本地推理]] 和 [[ai-for-science]] 领域具有重要意义。