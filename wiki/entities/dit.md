---
type: entity
title: DiT
created: 2026-02-12
updated: 2026-02-12
tags: [architecture, deep-learning, generative-model]
related: [xiaomi-robotics-0, 流匹配]
sources: ["小米的首代机器人vla大模型来了！丝滑赛德芙，推理延迟仅80ms丨全面开源.md"]
---
# DiT

**DiT** (Diffusion Transformer) 是一种结合了扩散模型与 Transformer 架构的生成模型架构。在 [[Xiaomi-Robotics-0]] 中，DiT 被用作模型的“小脑”，专门负责生成连续的动作块。

## 在具身智能中的应用

### 角色定位
- **小脑**：负责将“大脑”（VLM）的决策转化为具体的、连续的物理动作。
- **优势**：相比传统的离散 Token 方式，DiT 可以直接生成连续动作向量，避免精度截断，使轨迹更平滑灵巧。

### 技术协同
- **KV Cache 复用**：由于 DiT 与底层 VLM 同为 Transformer 结构，可以直接复用 VLM 的 KV Cache，减少重复计算，降低推理延迟。
- **流匹配结合**：配合 [[流匹配]] 技术，DiT 能够在极少的采样步数（如 5 步）内生成高质量动作，是实现 80ms 低延迟的关键。