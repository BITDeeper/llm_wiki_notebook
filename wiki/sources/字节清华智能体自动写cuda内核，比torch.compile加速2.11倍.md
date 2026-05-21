---
type: source
title: "字节清华智能体自动写CUDA内核，比torch.compile加速2.11倍"
tags: [ai, cuda, reinforcement-learning, code-generation, bytedance, tsinghua-air]
related: [cuda-agent, kernelbench, torch.compile, claude-opus-4-5, gemini-3-pro, 智能体强化学习, 长上下文rl]
created: 2026-03-03
updated: 2026-03-03
authors: [梦晨]
year: 2026
url: "https://mp.weixin.qq.com/s/jrgvJLKZ_j55pzKr6u_T4g"
venue: "量子位"
sources: ["字节清华智能体自动写cuda内核，比torch.compile加速2.11倍.md"]
---

# 字节清华智能体自动写CUDA内核，比torch.compile加速2.11倍

## 概述

本文报道了字节跳动 Seed 团队与清华大学智能产业研究院（AIR）联合发布的 [[cuda-agent]] 系统。该系统利用大规模智能体强化学习，实现了 GPU 内核的自动生成与优化。在 [[kernelbench]] 基准测试中，其性能全面超越 [[torch.compile]] 及现有的商业大模型方案（如 [[claude-opus-4-5]] 和 [[gemini-3-pro]]），相对 `torch.compile` 实现了 2.11 倍的几何平均加速比。

## 核心技术路径

文章指出，现有的 AI 辅助方案主要分为两类：
1.  **无训练的迭代优化**：依靠提示词引导模型反复修改代码。
2.  **固定的执行-反馈循环**：模型在编译运行结果的指导下做调整。

CUDA Agent 走出了第三条路：构建一个完整的大规模智能体强化学习系统，包含三个核心组件：
-   **可扩展的数据合成流水线**：构建了 [[cuda-agent-ops-6k]] 数据集。
-   **CUDA 开发环境**：配备技能规范文档（SKILL.md）及可靠的验证和性能分析工具。
-   **长上下文 RL 训练算法**：专门针对长上下文场景设计，解决了训练不稳定性问题。

## 关键成果

-   **性能突破**：在 KernelBench 上，相对 `torch.compile` 的 faster rate 达到 96.8%，几何平均加速比为 2.11 倍。在 Level-2 任务上，加速比甚至达到 2.80 倍。
-   **超越商业模型**：相比 Claude Opus 4.5 和 Gemini 3 Pro 约 66-69% 的 faster rate，CUDA Agent 达到了 96.8%，在难题（Level-3）上领先约 40 个百分点。
-   **长上下文稳定性**：成功支撑了 128K 上下文窗口和最多 150 轮的交互，训练过程未出现崩溃。

## 技术细节

### 数据构建与防作弊
团队通过“种子算子挖掘 -> 组合合成 -> 执行驱动过滤”的流程，构建了 6000 个高质量样本。为了防止模型通过捷径（如输出常数）获取高分，设置了严格的防作弊机制，包括禁止篡改验证脚本、使用多组输入测试以及引入同步预热步骤。

### 分阶段训练策略
为了应对长上下文场景下的强化学习不稳定性，训练分为两个阶段：
1.  **单轮 PPO 热身**：学习基础代码生成。
2.  **多轮智能体 RL**：使用 [[拒绝微调]]（RFT）初始化 Actor，筛选正向结果样本；通过价值预训练初始化 Critic。

## 意义

该研究标志着 AI 编程能力从“应用层开发”向“基础设施层优化”的下沉，证明了通过特定数据训练和 RL 对齐，专用模型在垂直领域（如底层系统编程）可以大幅超越通用顶级模型。
