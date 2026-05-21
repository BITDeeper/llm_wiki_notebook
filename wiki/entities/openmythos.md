---
type: entity
title: OpenMythos
tags: ["model", "open-source", "transformer", "anthropic", "ai-model", "moe"]
related: ["claude-mythos", "kye-gomez", "循环深度-transformer", "多潜变量注意力", "deepseek-v4", "循环深度-transformer-rdt", "mythos", "deepseekmoe"]
created: 2026-04-20
updated: 2026-05-07
sources: ["claude-mythos核心架构开源！22岁天才一人破解，融合deepseek思路.md", "mythos架构被22岁小伙“逆推”开源了！moe和注意力借鉴deepseek.md"]
---

# OpenMythos

[[OpenMythos]] 是由 22 岁开发者 [[Kye Gomez]] 发起的开源项目，旨在复现并公开据传被 Anthropic 封印的 [[Mythos]] 架构。该项目在 GitHub 上发布，实现了一种名为 [[循环深度-transformer-rdt]] (RDT) 的新型 Transformer 架构。

## 核心特性

OpenMythos 的核心假设是：通过增加计算深度（循环次数）比单纯增加参数量更高效。其架构主要包含以下三个核心点：

1.  **权重循环**：让同一组 Transformer 权重最多反复运行 16 遍，而非堆叠上百层不同的层。
2.  **动态路由**：在循环块内部使用混合专家层，借鉴了 [[DeepSeek]] 的 [[DeepSeekMoE]] 设计（细粒度路由专家 + 共享专家），确保每次循环激活不同的专家子集。
3.  **潜在空间推理**：推理过程完全在 hidden state 中完成，不生成中间 token，直到最后一轮才输出答案。

## 技术细节

### 三段式设计
OpenMythos 的架构在实现上分为三个部分：
1.  **Prelude**：初始编码层。
2.  **Recurrent Block**：核心循环块，最多循环 16 次，结合了 DeepSeek-MoE 的路由机制。
3.  **Coda**：最终解码层。

### 融合技术
- **DeepSeek-MoE**：在循环层中使用细粒度专家路由，提供广度。
- **多潜变量注意力 (MLA)**：来自 DeepSeek-V2，大幅降低 KV 缓存显存占用。
- **稳定性机制**：包括 LTI 约束注入、自适应计算时间 (ACT) 和深度级 LoRA 适配器。其中，[[lti-稳定循环注入]] 技术借鉴自 [[UCSD]] 和 [[Together AI]] 的论文 *Parcae*，用于解决循环架构可能出现的发散问题。

## 性能表现

根据实验数据，770M 参数的 RDT 模型在性能上追平了 1.3B 参数的标准 Transformer，实现了参数量减少近一半但效果相当的目标（即“时间换空间”）。

## 意义

OpenMythos 的出现挑战了传统的 Scaling Laws，表明未来的模型竞争可能更多依赖于架构设计和推理深度，而非单纯的参数堆叠。