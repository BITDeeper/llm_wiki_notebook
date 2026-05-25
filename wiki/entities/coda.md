---
type: entity
title: CODA
created: 2026-05-24
updated: 2026-05-24
tags: [gpu优化, transformer, 内核融合, 高性能计算, 开源项目]
related: [gemm-epilogue-编程抽象, tri-dao, han-guo, claude-code, flashattention]
sources: ["还在手写cuda内核？coda来了！llm和新手也能让transformer跑出光速.md"]
origin_date: 2026-05-22
---
# CODA

**CODA**（读起来像"终曲"，念起来像"CUDA"）是由 MIT、普林斯顿、Together AI 和 Meta 联合开发的编程抽象框架，全称为"CODA: Rewriting Transformer Blocks as GEMM-Epilogue Programs"。其核心思想是将 Transformer 块重写为 GEMM-Epilogue 程序，通过数学重参数化将散碎的内存密集型操作融合到矩阵乘法的尾声阶段执行。

## 核心思想

CODA 的出发点是一个关键观察：GPU 上高性能矩阵乘法（GEMM）内核在结构上分为主循环（mainloop）和尾声（epilogue）两部分。尾声阶段，矩阵乘法的输出仍"活在"片上寄存器中，尚未写入全局显存——这是一个短暂的黄金窗口，可以在此多做一些计算，完全省掉一次显存写入再读出的往返。

CODA 发现 Transformer 中的内存密集型操作（RMSNorm、SwiGLU、RoPE、交叉熵等）可以通过代数重新参数化，塞进这个尾声窗口执行。

## 五类可组合原语

CODA 固定住经过专家优化的 GEMM 主循环，在尾声位置暴露五类基本原语：

1. **逐元素变换** — 残差加法、激活函数、RoPE
2. **向量加载与存储** — 广播 RMSNorm 权重
3. **矩阵分块加载与存储** — 保存中间激活供反向传播使用
4. **分块规约** — 局部均方根、分块 log-sum-exp
5. **有状态变换** — 在线归一化所需的 max 和 sum-exp 统计

## 性能数据

- **单算子层面：** 反向传播内核相比 cuBLAS + torch.compile 基线加速 1.6–1.8 倍（GEMM-Residual-PartialRMS-GEMM），SwiGLU 反向约 1.4–1.6 倍
- **端到端：** 完整 Transformer 层前向加速 5%–20%，大模型尺寸下更显著
- **LLM 生成内核：** 由 [[claude-code|Claude Code]] 生成的内核性能与人工手写不相上下，个别配置略有超越
- **数值精度：** 与 PyTorch 参考实现相当，部分配置更优

## 数学基础

论文证明了一个关键定理：只要前向尾声是"分块局部"的，反向传播就自动继承相同的结构。以 GEMM-RMSNorm-GEMM 模式为例，RMS 归一化中的行缩放因子 r 与后续矩阵乘法满足交换律，可将 r 的应用推迟到第二个 GEMM 的尾声中执行。

## 当前限制

- 仅支持单 GPU 场景，不涉及分布式训练
- 重参数化主要针对标准 Transformer 架构（如 LLaMA），其他架构适用性有待验证
- 基于 CuTeDSL（NVIDIA CUTLASS 的 Python DSL）实现

## 关键人物

- [[han-guo|Han Guo]]：第一作者，代码仓库维护者
- [[tri-dao|Tri Dao]]：共同作者，FlashAttention 核心作者

## 链接

- 论文地址：https://arxiv.org/abs/2605.19269
- 代码地址：https://github.com/HanGuo97/coda-kernels