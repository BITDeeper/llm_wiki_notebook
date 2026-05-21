---
type: source
title: "英伟达周末双炸！CUDA二十年最大更新，顺手屠榜AGI比赛"
tags: [nvidia, cuda, arc-prize, agi, synthetic-data, scaling-law]
related: [英伟达, cuda-13-1, nvarc, kaggle-arc-prize, cuda-tile, green-context, 合成数据, 测试时训练]
created: 2025-12-06
updated: 2025-12-06
authors: [新智元]
year: 2025
url: "https://mp.weixin.qq.com/s/UYT5cvMpEFkwCJiiHqOqtA"
venue: "新智元"
sources: ["英伟达周末双炸！cuda二十年最大更新，顺手屠榜agi比赛.md"]
---

# 英伟达周末双炸！CUDA二十年最大更新，顺手屠榜AGI比赛

## 概述
本文报道了英伟达在同一个周末内取得的两项重大技术突破：一是发布了 CUDA 平台二十年来最大的更新——CUDA 13.1，引入了全新的 Tile 编程模型；二是其特级大师团队（KGMoN）凭借 NVARC 方案赢得了 Kaggle ARC Prize 2025 冠军，证明了小模型结合合成数据与测试时训练的强大潜力。

## 核心内容

### 1. CUDA 13.1：二十年最大更新
英伟达推出了 CUDA 13.1，这是 CUDA 平台诞生二十年来最全面的更新，旨在简化下一代 GPU（如 Blackwell）的开发难度。

- **CUDA Tile 编程模型**：
  - 引入了基于 Tile（数据块）的编程抽象层，位于 SIMT 之上。
  - 开发者只需指定 Tile 上的数学运算，编译器和运行时自动处理线程分发和硬件细节（如 Tensor Core）。
  - 包含 CUDA Tile IR（新虚拟指令集架构）和 cuTile Python DSL。
  - 屏蔽底层硬件细节，确保代码对未来架构的兼容性。

- **Green Context**：
  - 传统 CUDA Context 的轻量级替代方案。
  - 允许开发者对 GPU 资源（主要是流多处理器 SM）进行更细粒度的分区和预置。
  - 提供更好的资源隔离和确定性，特别适合多租户或高利用率场景。

- **其他更新**：
  - **cuBLAS**：支持双精度和单精度模拟，针对 Blackwell 优化了 Grouped GEMM API。
  - **开发者工具**：Nsight Compute 支持 Tile Kernel 分析，Compute Sanitizer 增加编译时修补。
  - **数学库**：cuSPARSE 和 cuFFT 引入新 API，CCCL 3.1 提供确定性浮点归约选项。

### 2. 赢下 AGI 比赛：NVARC 方案
英伟达团队（KGMoN）以 27.64% 的分数夺得 Kaggle ARC Prize 2025 冠军，击败了 Claude Opus 4.5 等巨型模型，且单次任务推理成本极低（20 美分）。

- **核心策略**：
  - **合成数据**：构建了包含 320 万个样本的合成数据集。利用 120B 参数的开源大模型生成 Python 代码，再由代码生成逻辑样本。
  - **小模型微调**：选用 Qwen3（4B 参数）作为基础模型，使用 NeMoRL 框架和 Megatron 后端进行全量微调（SFT）。
  - **测试时训练（TTT）**：在推理阶段，利用测试集示例通过 LoRA 快速微调模型，使其适应当前任务风格。
  - **深度优先搜索（DFS）**：生成多种可能的代码路径并验证其正确性，结合 Batch DFS 算法提高效率。

- **技术细节**：
  - 使用 4 个 8xH100 节点训练 27 小时。
  - 推理时使用 bfloat16 精度，配合 Unsloth 框架和 FlashAttention2。
  - 尝试引入了微型递归模型（TRM）作为补充。

## 意义与影响
- **CUDA 生态演进**：CUDA Tile 的出现标志着 GPU 编程从“线程级”向“块级”抽象的重大转变，降低了开发门槛。
- **Scaling Law 的新视角**：NVARC 的胜利证明了在推理任务中，高质量的合成数据和针对性的微调比单纯扩大模型参数量更有效。
- **成本效益**：展示了通过高效工程化（合成数据+小模型）可以大幅降低 AI 推理成本，挑战了当前的 AI 订阅制模式。