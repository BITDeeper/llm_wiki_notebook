---
type: entity
title: François Chollet
tags: [researcher, keras, google-brain, ai-philosophy, ai-theory, benchmark]
related: ["arc-agi-2", "keras", "google-deepmind", "performance-paradox", "arc-agi-3", "样本外泛化", "scaling-law"]
created: 2026-01-10
updated: 2026-05-08
sources: ["gpt-5.2考赢人类！openai警告：大模型能力已过剩，agi天花板不是ai.md", "这套题，gpt-5.5、opus-4.7加起来没考到「1分」，人类却拿了满分100？.md"]
---

# François Chollet

**François Chollet** 是深度学习框架 **Keras** 的创始人、前 Google Brain 研究员，目前是 Google 的软件工程师。他也是 [[ARC-AGI-2]] 及后续基准测试的设计者，以对 AI 智能本质的深刻哲学思考而闻名。

## 核心观点与哲学

Chollet 主张 AGI 需要具备**抽象和迁移推理能力**，而不仅仅是模式匹配或统计相关性。

-   **智能的定义**：他认为，真正的智能是在全新环境中进行 [[样本外泛化]] 和适应的能力。如果一个系统只能在见过的数据分布上表现良好，那它并不具备 AGI 所需的能力。
-   **对 Scaling Law 的批评**：他经常指出，单纯增加模型规模和算力（[[scaling-law]]）并不能自动通向 AGI。他认为当前模型在处理新颖性和抽象推理方面存在根本性缺陷。

## 主要贡献

Chollet 的工作推动了行业从关注静态数据集性能转向关注泛化和适应能力。

-   **ARC 基准测试**：他创建了 **ARC-AGI**（Abstraction and Reasoning Corpus）系列基准测试（包括 [[ARC-AGI-2]] 和 [[ARC-AGI-3]]）。
    -   旨在通过“无训练集、纯推理”的测试方式，区分 AI 的“真正推理能力”与“刷题能力”。
    -   [[ARC-AGI-3]] 的目标是提供一个“最低共同测试集合”，专注于测试智能体在“新颖性、模糊性、规划、适应性”上的表现，这些正是现实世界任务的核心要求。
-   **Keras 框架**：作为 Keras 之父，他为深度学习的普及和易用性做出了巨大贡献。

## 参见
- [[ARC-AGI-2]]：他设计的通用人工智能基准测试。
- [[性能悖论]]：他的工作有助于解决这一评估难题。