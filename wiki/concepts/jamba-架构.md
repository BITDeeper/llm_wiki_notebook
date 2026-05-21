---
type: concept
title: Jamba 架构
created: 2025-12-31
updated: 2025-12-31
tags: [模型架构, 混合模型, 推理优化]
related: [ai21-labs, groq, transformer, ssm]
sources: ["人均1个亿！黄仁勋拟砸下30亿美元，「买断」openai昔日劲敌.md"]
---

# Jamba 架构

Jamba 架构是由 [[ai21-labs]] 提出的一种混合模型架构，融合了 **SSM（状态空间模型）** 和 **Transformer** 技术。该架构旨在解决传统Transformer模型在长上下文处理中的效率和内存瓶颈问题。

## 技术特性
- **混合设计**：结合了SSM的高效推理能力和Transformer的强大建模能力。
- **长上下文优化**：在256K上下文长度下，仅需4GB的KV缓存，激活参数仅120亿，实现了线性扩展特性。
- **性能优势**：
    - 长上下文处理速度提升2.5倍。
    - 相比DeepSeek、Llama及谷歌模型，能效提升2-5倍。
    - 内存消耗显著降低。

## 应用场景
Jamba 架构的低内存占用特性使其特别适合 [[groq]] 等受内存限制的推理芯片（如使用SRAM替代HBM的LPU），这也是 [[英伟达]] 意在收购AI21 Labs的关键技术动机之一。