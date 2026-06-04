---
type: source
title: "超越TurboQuant：Together AI把2-bit KV Cache推向真实服务"
created: 2026-06-04
updated: 2026-06-04
tags: [kv-cache, 量化, 推理优化, together-ai, oscar, 长上下文]
related: [oscar, together-ai, kv-cache-量化, sglang, 周中竹]
sources: ["超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/gDnXSTdlEMKgvEXhs6VCGA"
venue: 量子位
---
# 超越TurboQuant：Together AI把2-bit KV Cache推向真实服务

量子位发布的关于 [[together-ai]] 联合 [[悉尼大学]] 和 [[uiuc]] 提出 [[oscar]] 2-bit KV Cache量化方案的深度报道。

## 核心内容

文章详细介绍了 [[oscar]] 的核心创新——[[注意力感知旋转]]（Attention-aware Rotation），该方法不再单纯追求K/V向量的重建精度，而是围绕Query和注意力分数的协方差来决定旋转方向，保护注意力机制的关键路径。

### 关键技术要点

- **优化目标转变**：从"向量重建精度"转向"保护注意力机制质量"
- **三段式Token Pool**：BF16 sink（64 tokens）｜INT2 history｜BF16 recent（256 tokens）的混合存储策略
- **旋转矩阵设计**：R = U · Hadamard · bit-reversal，三者协同优化
- **系统级集成**：已接入 [[sglang]] 服务路径，支持paged KV、radix prefix cache和fused kernel pipeline

### 评测结果

- 在约2.28 effective bits per KV element预算下，OSCAR精度接近BF16
- 在Qwen3-4B-Thinking上，相比TurboQuant最高提升40.1分
- KV Cache显存降低约8倍，decode最高约3倍加速，吞吐最高约7倍提升

### 作者信息

第一作者 [[周中竹]]（Zhongzhu Zhou），Together AI高级研究科学家，悉尼大学博士。

## 来源信息

- 论文链接：https://arxiv.org/abs/2605.17757
- 项目主页：https://oscar-quantize.github.io/
- 代码链接：https://github.com/FutureMLS-Lab/OSCAR