---
type: source
title: "DeepSeek V4震撼发布！实现全球开源领先"
tags: [deepseek, llm, multimodal, architecture, release]
related: [deepseek-v4, deepseek-v4-pro, deepseek-v4-flash, csa, hca, mhc, muon-优化器, megame]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/s1jhzL6DEY65nNSk4QIyoQ"
venue: "新智元"
created: 2026-04-24
updated: 2026-04-24
sources: ["deepseek-v4震撼发布！实现全球开源领先.md"]
---

# DeepSeek V4震撼发布！实现全球开源领先

## 概述
本文报道了 DeepSeek V4 系列模型的正式发布，包含 Pro 和 Flash 两个版本。文章详细介绍了 V4 在长上下文处理（100万 tokens）、Agent 能力及世界知识方面的突破，并深入解析了其背后的核心技术架构，如混合注意力机制（CSA + HCA）、流形约束超连接（mHC）和 Muon 优化器。

## 核心要点

### 模型版本与性能
- **DeepSeek-V4-Pro**: 拥有 1.6T 总参数 / 49B 激活参数。在 Agent 编程能力上超越 Claude Sonnet 4.5，接近 Opus 4.6；在世界知识上逼近 Gemini-Pro-3.1。
- **DeepSeek-V4-Flash**: 拥有 284B 总参数 / 13B 激活参数。主打高效率和性价比，逻辑推理能力接近 Pro 版，但世界知识深度略逊。

### 关键技术创新
1.  **混合注意力机制 (CSA + HCA)**:
    -   **CSA (压缩稀疏注意力)**: 压缩率为 4，结合 DSA 稀疏注意力，保留精细检索能力。
    -   **HCA (重压缩注意力)**: 压缩率为 128，进行极致压缩以维持全局稠密计算。
    -   **效果**: 在 100 万 token 上下文下，KV 缓存缩减至前代的 10%，计算量降至 27%。

2.  **流形约束超连接 (mHC)**:
    -   将残差映射矩阵约束在双随机矩阵流形上，确保谱范数不超过 1。
    -   仅增加 6.7% 的计算代价，显著提升了深层网络的信号传播稳定性。

3.  **Muon 优化器**:
    -   通过 Newton-Schulz 正交化加速收敛，配合 Anticipatory Routing（解耦路由计算）和 SwiGLU Clamping（钳制线性分量）等技巧，实现了万亿参数模型的稳定训练。

4.  **工程与训练优化**:
    -   **MegaMoE**: 自研通信计算融合算子，加速 1.5-1.96 倍。
    -   **On-Policy Distillation (OPD)**: 替代混合 RL，通过缓存隐藏状态解决显存瓶颈。
    -   **Generative Reward Model (GRM)**: Actor 网络同时充当奖励模型，联合优化评判与生成。

### API 与迁移
-   API 已上线，模型名为 `deepseek-v4-pro` 和 `deepseek-v4-flash`。
-   旧别名 `deepseek-chat` 和 `deepseek-reasoner` 将于 2026 年 7 月 24 日停用。

## 相关条目
- [[deepseek-v4]]: 主模型条目。
- [[csa]]: 压缩稀疏注意力。
- [[hca]]: 重压缩注意力。
- [[mhc]]: 流形约束超连接。
- [[muon-优化器]]: 训练优化算法。