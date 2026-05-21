---
type: source
title: "AI「活在同一个世界里」了！首个共享世界生成模型IC-World登场"
tags: [video-generation, world-model, reinforcement-learning, multimodal, ai-research]
related: [ic-world, gong-xiang-shi-jie-sheng-cheng, in-context-generation, lin-guosheng, ye-deheng, solaris, grpo]
created: 2026-03-28
updated: 2026-03-28
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/sekNifQofIhk9YiS3z3xWw"
venue: "量子位"
sources: ["ai「活在同一个世界里」了！首个共享世界生成模型ic-world登场.md"]
---

# AI「活在同一个世界里」了！首个共享世界生成模型IC-World登场

本文介绍了由 Lin Guosheng（林国省）与 Ye Deheng（叶德珩）团队提出的 [[ic-world]] 模型。这是首个系统性解决**共享世界生成**问题的视频生成模型，旨在解决现有视频模型在多视角生成时无法保持时空一致性的缺陷。

## 核心问题：共享世界一致性

现有的主流视频生成模型（Image-to-Video / Text-to-Video）通常基于一个“致命假设”：一次只生成一个视角下的视频。这导致当输入同一世界的多张不同视角图片时，模型生成的视频会出现场景结构错位、物体位置飘移、动作不同步等问题。

对于 [[具身智能]]、多机器人协作或多人游戏等应用场景，这种不一致性是灾难性的。

## 解决方案：双策略协同

IC-World 提出了结合架构创新与强化学习微调的解决方案：

1.  **In-Context Generation（架构层）**：
    *   将来自同一世界的多张不同视角图片像拼图一样拼接成一张大图。
    *   配合共享的文本提示词，让模型一次性生成包含所有视角的“视频合集”，最后再切分回独立视频。
    *   这种方法利用了视频大模型固有的上下文能力，从底层强制绑定“同一个世界”。

2.  **GRPO 强化学习微调（训练层）**：
    *   引入 [[grpo]]（Group Relative Policy Optimization）算法。
    *   设计了两个专门的奖励模型：
        *   **几何一致性奖励模型**：惩罚不同视角下的场景结构错位。
        *   **动态一致性奖励模型**：确保不同视角下物体动作和行为的同步性。

## 实验结果

*   **一致性评估**：在静态场景（几何一致性）和动态场景（动态一致性）评估中均取得最优结果。
*   **视频质量**：在 VBench 基准测试中取得 81.15 分，证明在提升一致性的同时并未牺牲生成质量。
*   **效率**：In-Context Generation 的并行生成特性显著缩短了生成时间。
*   **消融实验**：证明 In-Context Generation 是基础，而 GRPO 和双重奖励模型是锦上添花且缺一不可的组件。

## 行业意义

IC-World 的出现标志着视频生成世界模型正在从“独立世界生成”走向“共享世界生成”。值得注意的是，[[saining-xie]] 团队也在后续发布了采用相似核心思想的 [[solaris]] 模型，印证了这一技术趋势的必然性。

## 原文链接

*   论文：https://arxiv.org/abs/2512.02793
*   代码：https://github.com/wufan-cse/IC-World