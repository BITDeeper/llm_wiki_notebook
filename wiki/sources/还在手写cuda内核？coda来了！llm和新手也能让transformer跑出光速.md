---
type: source
title: "还在手写CUDA内核？CODA来了！LLM和新手也能让Transformer跑出光速"
created: 2026-05-24
updated: 2026-05-24
tags: [gpu优化, transformer, 内核融合, ai编程, 高性能计算]
related: [coda, gemm-epilogue-编程抽象, tri-dao, claude-code, vibe-coding]
sources: ["还在手写cuda内核？coda来了！llm和新手也能让transformer跑出光速.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/pHWz5wJSCEKI7okW1vAvzg"
venue: 机器之心
---
# 还在手写CUDA内核？CODA来了！LLM和新手也能让Transformer跑出光速

**来源：** 机器之心
**发布日期：** 2026-05-24
**原文链接：** https://mp.weixin.qq.com/s/pHWz5wJSCEKI7okW1vAvzg

## 摘要

本文报道了由 MIT、普林斯顿、Together AI 和 Meta 联合发表的研究成果 [[coda|CODA]]，该框架通过 [[gemm-epilogue-编程抽象|GEMM-Epilogue 编程抽象]]将 Transformer 中的散碎内存密集型操作（RMSNorm、SwiGLU、RoPE、交叉熵等）融合到矩阵乘法的尾声阶段执行，消除不必要的显存读写。

## 核心内容

- **问题背景：** 随着低精度格式（FP8/FP4）加速矩阵计算，Transformer 训练中归一化、激活函数等"小算子"频繁搬运大型中间张量所造成的内存带宽瓶颈相对恶化。
- **核心方法：** 通过数学重参数化（代数变换），将独立算子序列压缩到 GEMM 尾声中执行。论文证明前向分块局部性可自动传递到反向传播。
- **五类原语：** 逐元素变换、向量加载/存储、矩阵分块加载/存储、分块规约、有状态变换。
- **实验结果：** 反向传播内核相比 cuBLAS + torch.compile 基线加速 1.6–1.8 倍；完整 Transformer 层端到端前向加速 5%–20%；LLM（[[claude-code|Claude Code]]）生成内核性能与人工手写不相上下。
- **当前限制：** 仅支持单 GPU 场景，主要针对标准 Transformer 架构。

## 关键人物

- [[tri-dao|Tri Dao]]：FlashAttention 核心作者，论文共同作者，社交媒体推广者
- [[han-guo|Han Guo]]：论文第一作者，代码仓库维护者

## 关联主题

- [[vibe-coding]]：LLM 生成 GPU 内核是 Vibe Coding 在极端专业领域的成功验证
- [[agentic-engineering]]：AI 深度参与训练基础设施优化
- [[批次不变性]]：同属 GPU 算子优化领域，但切入点不同