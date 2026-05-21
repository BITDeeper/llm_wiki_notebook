---
type: entity
title: EigenData
tags: [agent, reinforcement-learning, data-generation, system, tsinghua]
related: [可执行数据闭环, credit-assignment-failure, tau-squared-bench, qwen3-235b-a22b-2507, surface-level-policy]
created: 2026-02-17
updated: 2026-02-17
sources: ["多轮agent训练拐点！清华首创可执行数据闭环，开源超越gpt-5.md"]
---

# EigenData

[[eigendata]] 是清华大学团队提出的一种用于优化多轮 [[agent]] 训练的可执行数据闭环系统。它旨在解决长链路交互中训练信号失真和 [[credit-assignment-failure]] 的问题。

## 核心机制

EigenData 并非传统的数据合成管道，而是一个能够根据失败反馈持续迭代的多智能体系统。其工作流程遵循“生成→执行→验证→修正”的闭环：

1.  **生成**：自动生成多轮对话和工具调用轨迹。
2.  **执行**：在真实环境中运行生成的轨迹。
3.  **验证**：使用 Verifier 检查最终环境状态是否成功。
4.  **修正**：如果执行失败，失败信息会被用于自动修正 Prompt、Workflow 及生成策略。

## 关键组件

### 可执行数据闭环
EigenData 强制要求每条训练样本的工具调用轨迹必须能被完整执行。这缩小了模型的学习空间，使其对齐真实系统的可行解集，避免了模型学习到仅在文本层面合理的 [[surface-level-policy]]。

### 用户模型稳定化
在训练 Agent 之前，EigenData 先使用生成的数据微调用户模拟器。这一步骤确保用户行为稳定、可控，消除了因用户异常导致 Reward 归零的噪声，解决了强化学习中的 Credit Assignment 问题。

### Verifier-based Reward
系统不再依赖模糊的 Reward Model，而是使用任务自带的验证函数（代码级检查）直接判断对错。结合 [[GRPO]] 算法进行组内相对优势学习，降低了长链路交互的高方差。

## 性能表现

在 [[tau-squared-bench]] 的测试中，基于 EigenData 训练的 [[qwen3-235b-a22b-2507]] 模型表现优异：
-   **Telecom 任务**：Pass¹ 达到 **98.3%**，显著超越 GPT-5 (62.5%)。
-   **Airline 任务**：Pass¹ 达到 **73.0%**，与 Gemini 3.0 Pro 持平。
-   **混合训练**：在三个工具域混合训练下仍保持 **81.3%** 的平均 Pass¹。

## 工程意义

EigenData 的核心贡献在于将多轮 Agent 的训练推向了一个新的工程范式：**训练信号必须先被构造成可执行、可归因、可验证的系统对象**。它证明了在 Agent 时代，系统级的数据质量优化比单纯追求模型规模更为关键。