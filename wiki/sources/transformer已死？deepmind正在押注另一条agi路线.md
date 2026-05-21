---
type: source
title: "Transformer已死？DeepMind正在押注另一条AGI路线"
tags: [deepmind, agi, nested-learning, continual-learning, miras, hope]
related: [google-deepmind, nested-learning, miras, hope, ali-behrouz, shane-legg, 联想记忆, 灾难性遗忘, 持续学习]
created: 2026-01-08
updated: 2026-01-08
authors: [新智元, KingHZ]
year: 2026
url: "https://mp.weixin.qq.com/s/gse1I315nY2DtzG7qqaY6A"
venue: "新智元"
sources: ["transformer已死？deepmind正在押注另一条agi路线.md"]
---

# Transformer已死？DeepMind正在押注另一条AGI路线

## 摘要
本文详细介绍了 Google DeepMind 正在探索的一条通往 AGI 的新路线——[[嵌套学习]]（Nested Learning）。该理论由康奈尔大学博士生 [[Ali Behrouz]] 等人提出，旨在解决当前 [[Transformer]] 架构最致命的缺陷：缺乏 [[持续学习]] 能力（即文章类比的医学上的“[[灾难性遗忘]]”或顺行性遗忘症）。文章指出，通过将模型视为由不同更新频率的子模块组成的嵌套系统，并让优化器与架构协同进化，AI 有望实现从“被动训练”到“主动进化”的跨越。

## 核心观点

### Transformer 的局限性
尽管 [[Transformer]] 开启了 Scaling 时代，但存在以下根本性局限：
1.  **长上下文处理效率低**
2.  **抽象知识层级有限**
3.  **适应性弱**
4.  **缺乏持续学习能力**：这是最关键的问题。当前 LLM 无法将“现在的经历”（短期记忆/上下文）自然沉淀为“未来的知识”（长期记忆/参数），必须依赖昂贵的外部再训练。

### 一切 AI 皆是“联想记忆”
文章提出，理解记忆的底层逻辑是关键。[[联想记忆]]（Associative Memory）是人类学习机制的基石，本质是键值对映射。
-   [[注意力机制]] 本质上就是一种联想记忆系统。
-   [[优化器]] 也可以被视为“将当前梯度映射到历史信息”的联想过程。
基于此，团队提出了 [[MIRAS]] 框架，用于统一设计模型中的记忆模块。

### 嵌套学习框架
[[嵌套学习]] 的核心在于打破架构与优化器的界限，使其互为上下文、协同进化。
-   **更新频率**：通过快慢模块的组合（如 RNN 快更新 vs 预训练模型慢更新），构建在不同时间尺度上学习的系统。
-   **嵌套系统**：由多个独立子模块组成，每个模块拥有自己的参数、上下文和优化目标。
-   **知识传递**：层级间通过直接条件传递、梯度传递、初始状态传递（Meta-Learning）或权重生成（Hypernetwork）进行信息流动。

### HOPE 架构
基于嵌套学习范式和连续记忆系统提出的 [[HOPE]] 架构，在长上下文和持续学习任务中表现优异，超越了现有对比模型。

## 行业影响与风险
-   **AGI 路线**：DeepMind 创始人 [[Shane Legg]] 高度评价该方向，认为这是通往 AGI 的坦途。网友将其比作《Attention is All you Need》的“续集”。
-   **安全隐忧**：解决持续学习虽然打开了 AGI 的大门，但也可能带来不可控的风险。具备持续学习能力的 AI 会产生“偏好”和“记忆”，DeepMind 内部消息称已突破但因安全原因未发布。

## 关键实体
-   [[Google DeepMind]]：主要研究机构。
-   [[Ali Behrouz]]：核心论文作者，康奈尔大学博士生。
-   [[Shane Legg]]：DeepMind 创始人，公开支持该路线。