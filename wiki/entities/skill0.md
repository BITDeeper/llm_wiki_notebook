---
type: entity
title: SKILL0
tags: [model, framework, reinforcement-learning, agent, zhejiang-university]
related: [技能内化, 上下文强化学习, 课程学习, alfworld, zju-real-lab, 美团龙猫团队, 清华大学]
created: 2026-04-11
updated: 2026-04-11
sources: ["小模型用不好skill？新范式让模型学会skill的底层逻辑，3b模型推理token省5倍，性能反超.md"]
---

# SKILL0

[[SKILL0]] 是由 [[ZJU REAL Lab]] 联合 [[美团龙猫团队]] 和 [[清华大学]] 提出的一个新的智能体训练框架。其核心目标是解决小参数模型（如 3B、7B）在推理时无法有效利用外部技能文档的问题，通过 [[技能内化]] 机制，使模型将过程性知识转化为内部参数，实现零样本自主执行。

## 核心机制

SKILL0 的训练过程模拟了人类从“照着说明书操作”到“凭肌肉记忆执行”的学习过程，主要包含以下三个关键步骤：

1.  **建立技能脚手架**：
    构建层级化的 SkillBank，包含通用技能（跨任务策略）和任务特定技能（领域专门知识）。这些技能文档在训练初期作为“参考书”提供给模型。

2.  **上下文强化学习**：
    在训练阶段，模型接收完整的技能上下文；但在推理评估阶段，完全移除所有技能。这种机制迫使模型学习技能的底层逻辑，而不是简单地照本宣科。为了解决长上下文带来的 Token 开销问题，SKILL0 引入了 [[视觉编码压缩]] 技术，将文本技能渲染为图像，利用视觉编码器进行压缩。

3.  **动态课程学习**：
    训练过程分为多个阶段，技能预算线性衰减（例如从 6 个减到 3 个，再到 0 个）。每个阶段使用 Filter → Rank → Select 机制，根据技能对当前任务的帮助度动态筛选保留的技能文件。

## 性能表现

根据在 [[ALFWorld]] 和 [[Search-QA]] 基准上的测试结果：

-   **3B 模型**：在 ALFWorld 上成功率达到 87.9%，比标准 RL 基线高 9.7%，推理 Token 开销仅为 0.38k（相比传统方案的 >1.9k 节省了 5 倍）。
-   **7B 模型**：零技能推理成功率达 89.8%，显著优于 GPT-4o (48.0%) 和 Gemini-2.5-Pro (60.3%)。

## 局限性

SKILL0 主要适用于稳定的、可复用的行为模式。对于需要实时更新的动态知识（如 API 变更），传统的检索增强（RAG）依然不可替代。

## 相关链接

-   论文：[SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization](https://arxiv.org/abs/2604.02268)
-   代码：[GitHub - ZJU-REAL/SkillZero](https://github.com/ZJU-REAL/SkillZero)