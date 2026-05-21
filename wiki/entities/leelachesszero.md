---
type: entity
title: LeelaChessZero
tags: [open-source, ai, chess-engine, gpu-computing]
related: [claude-code, rocm, cuda-护城河]
created: 2026-01-23
updated: 2026-01-23
sources: ["cuda要凉？claude-30分钟铲平英伟达护城河，amd要笑醒了.md"]
---

# LeelaChessZero

LeelaChessZero (lc0) 是一个基于深度神经网络的开源国际象棋引擎项目。

## AI 移植案例
该项目是验证 [[claude-code]] 跨平台移植能力的关键案例。开发者 johnnytshi 利用 [[claude-code]] 在 30 分钟内为 lc0 实现了完整的 [[rocm]] 后端，使其能够在 AMD GPU（特别是 RDNA 3.5 架构）上运行基于注意力机制的神经网络。

## 技术细节
- **后端实现**：在 `src/neural/backends/rocm/` 中添加了完整支持。
- **优化**：针对 RDNA 3.5 上的 FP16 性能进行了优化，并实现了自动 Batch Size 调优。
- **性能**：在 Strix Halo (Radeon 8060S) 上实现了 >2000 nps 的节点搜索速度。