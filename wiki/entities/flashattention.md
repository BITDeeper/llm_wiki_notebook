---
type: entity
title: FlashAttention
tags: [内核, 优化, 注意力机制, 硬件加速, algorithm, optimization, gpu, attention-mechanism]
related: [mla-多头潜在注意力, deepseek-v4, vllm, avo, cudnn, blackwell-b200]
created: 2026-05-03
updated: 2026-05-08
sources: ["vllm-v0-20-发布-2-bit-压缩默认开启-你的推理成本要打折了-20260503.md", "英伟达agent超越人类gpu专家！连续7天自主进化，优化算子性能碾压flashattention-4.md"]
---

# FlashAttention

[[flashattention]] 是一种针对 Transformer 模型注意力机制的 IO 感知精确算法，通过分块计算和优化内存访问模式来显著提升计算速度并减少显存占用。它已成为现代推理框架（如 [[vllm]]）的核心后端，也是 GPU 算子优化领域的标杆。

## 版本演进

-   **FlashAttention 2/3**：早期版本主要针对标准的 Multi-Head Attention (MHA) 进行优化，通过平铺和重计算减少 HBM 访问次数。
-   **FlashAttention 4 (FA4)**：
    -   在 vLLM v0.20 中引入，专门针对 SM90+ (H100/H200/[[blackwell-b200]]) 架构进行了深度优化。
    -   被公认为社区最强的开源注意力核函数优化方案，代表了人类专家在 GPU 算子优化领域的顶尖水平。

## 对 MLA 的支持

FlashAttention 4 的一个关键特性是对 [[DeepSeek V4]] 独有的 [[MLA]] (Multi-Head Latent Attention) 机制的原生支持。

-   **问题背景**：MLA 通过“矩阵吸收”压缩了 KV 维度。早期的推理框架（包括旧版 vLLM）常将其当作 MQA 处理，需要将压缩的 KV “展开”回完整尺寸，导致内存优势丧失。
-   **FA4 的解决方案**：结合专用的 MLA Kernel，FA4 可以直接在压缩后的 KV 空间中进行计算，无需展开。
-   **效果**：这种“正确打开方式”使得 KV Cache 的有效容量相比早期处理方式提升了 10×，极大释放了 MLA 架构的潜力。

## 性能基准与 AI 挑战

作为基线对比对象，FlashAttention-4 常被用于衡量最新的 AI 优化能力。

-   **对比结果**：在英伟达 [[blackwell-b200]] GPU 上，[[avo]] 智能体生成的优化方案性能比 FlashAttention-4 快了 **10.5%**。
-   **意义**：FlashAttention 被 AVO 超越标志着 AI 智能体在底层系统优化领域已具备超越顶尖开源社区贡献者的能力。

## 硬件要求

FA4 的极致性能依赖于 NVIDIA 最新的 SM90+ 架构（H100 及以上）。对于较旧的架构（如 A100, SM80），框架会自动回退到 FA3 或 FA2 路径，虽然兼容但无法获得全部性能红利。