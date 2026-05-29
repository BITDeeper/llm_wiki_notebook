---
type: concept
title: SME（可缩放矩阵扩展）
created: 2026-05-28
updated: 2026-05-28
tags: [cpu架构, 矩阵运算, armv9]
related: [lx2处理器, 灵晟超级计算机]
sources: ["国产超算生成式压缩模型训练性能突破2.16-eflops，支撑全球遥感数据万倍级压缩.md"]
---
# SME（可缩放矩阵扩展）

SME（Scalable Matrix Extension）是 Armv9 架构的矩阵运算加速指令集，为 CPU 提供高效的矩阵乘法运算能力，是大模型在 CPU 上高效训练的关键硬件支持。

## 在 D2AR 中的作用

[[d2ar]] 研究团队围绕 [[lx2处理器]] 的 SME 矩阵扩展，对关键算子进行了专门优化，使国产 Armv9 CPU 单节点训练效率达到与 NVIDIA A100 GPU 相当的水平。

## 对比

- **SME**（LX2，Armv9）：大模型训练效率 ≈ NVIDIA A100（Tensor Core）
- **AMX**（Intel Xeon 8558P）：大模型训练效率显著低于 LX2 + SME

SME 的优化效果验证了国产 CPU 架构在大模型训练中的性能潜力。