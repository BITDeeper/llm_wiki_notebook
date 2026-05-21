---
type: concept
title: SRAM-first vs HBM-first
tags: [chip-architecture, memory-hierarchy, ai-hardware]
related: [matx-one, 英伟达, cerebras-systems, 可拆分脉动阵列]
created: 2026-02-25
updated: 2026-02-25
sources: ["融资34亿！谷歌前tpu员工创业新型芯片，卡帕西也投了.md"]
---

# SRAM-first vs HBM-first

[[SRAM-first vs HBM-first]] 指的是当前 AI 芯片设计的两种主流技术路线，代表了在“速度”与“容量”之间的不同权衡。

## HBM-first（高带宽内存优先）
- **代表厂商**：[[英伟达]] (NVIDIA)、谷歌 (TPU)。
- **核心逻辑**：大模型训练本质上是“带宽游戏”。随着模型参数和上下文长度的增加，需要在计算单元之间高速搬运海量的权重和激活值。
- **优势**：极高的数据吞吐量，适合大规模模型训练。
- **劣势**：访存延迟较高，难以满足实时推理对低延迟的极致要求。

## SRAM-first（静态随机存储器优先）
- **代表厂商**：[[Cerebras Systems]]、Groq。
- **核心逻辑**：推理时代的关键在于响应速度。通过将尽可能多的数据放在片上 SRAM 中，减少外部访存，从而大幅降低单次查询延迟。
- **优势**：极低的延迟，适合实时推理和交互。
- **劣势**：SRAM 容量有限且成本高昂，难以扩展到支持超大规模模型或超长上下文。

## 混合架构（Hybrid-first）
- **代表厂商**：[[MatX]]。
- **核心逻辑**：认为未来的 AI 工作流（如 [[Agent 循环]]）既需要吞吐也需要低延迟。试图通过 [[可拆分脉动阵列]] 等新技术，在同一芯片上融合 SRAM 的低延迟与 HBM 的大容量，消除两者的割裂。