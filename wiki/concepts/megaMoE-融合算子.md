---
type: concept
title: MegaMoE 融合算子
created: 2026-05-29
updated: 2026-05-29
tags: [MoE, 算子优化, 通算融合, 推理优化]
related: [昇腾, deepseek-v4, agent-推理负载]
sources: ["deepseek狂吞17万亿tokens？国产ai算力，最关键一战来了！.md"]
---
# MegaMoE 融合算子

[[昇腾]] 平台的 MoE 推理通算融合方案，将 MoE 推理中原本分开执行的五个步骤融为一个大算子，实现通信与计算的真正并行。

## 背景

MoE（混合专家）架构的核心优势是每次只激活一小部分专家，计算效率高。但代价是专家分散在不同卡上，每次推理都需要大量卡间通信。计算被稀疏化后，**通信成为第一瓶颈**。

昇腾早期已有 MC2 通算融合算子，但在 EP（专家并行）并行模式下，仍无法实现通信与 Grouped Matmul 计算的完全并行。

## 技术方案

MegaMoE 将以下五个步骤融合为一个大算子：

1. **Alltoall Dispatch** — 将 token 分发到对应专家
2. **GMM1**（Grouped Matmul 1）— 第一组矩阵乘法
3. **Swiglu** — 激活函数
4. **GMM2**（Grouped Matmul 2）— 第二组矩阵乘法
5. **Alltoall Combine** — 将结果收集回来

融合后，通信和计算尽可能同时进行，同时支持 Prefill 和 Decode 场景。

## 实测性能

在 [[atlas-800-a3|Atlas 800 A3]] 上实测：

| 场景 | 性能提升 |
|------|----------|
| Prefill | 20%-30% |
| Decode | 10%+ |

测试模型：DeepSeek V3.1、[[Qwen3-235B]]。

## 与批次不变性的关系

[[批次不变性]] 关注的是模型输出不随批次组织方式变化，而 MegaMoE 关注的是 MoE 推理中的通信-计算并行效率。两者是不同维度的工程挑战，互不矛盾但需要区分。