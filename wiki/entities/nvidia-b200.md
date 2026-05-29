---
type: entity
title: NVIDIA B200
created: 2026-05-28
updated: 2026-05-28
tags: [gpu, 硬件, nvidia]
related: [orbit, 量化]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# NVIDIA B200

NVIDIA B200 是 NVIDIA 的高端 GPU 产品。在 [[orbit]] 框架的验证实验中，单台 8×B200 服务器提供了约 1536GB 的 HBM 预算，足以支撑万亿参数级 MoE 模型的 RL 后训练。

## 在 Orbit 验证中的角色

- 单节点 8×B200 的 HBM 预算约 1536GB。
- 对 1T 级模型，传统全参微调的 weight + grad 显存下界远超单机预算。
- [[adapter-first-rl|Orbit 的 Adapter-first]] 路径通过冻结低精度 base、仅训练 adapter，将 1T 级模型的 RL 后训练压缩到该硬件预算内。