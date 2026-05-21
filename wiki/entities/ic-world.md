---
type: entity
title: IC-World
tags: [video-generation, world-model, grpo, multimodal, ai-research]
related: [gong-xiang-shi-jie-sheng-cheng, in-context-generation, lin-guosheng, ye-deheng, solaris, grpo, ji-shen-zhi-neng-shu-ju-kun-jing]
created: 2026-03-28
updated: 2026-03-28
sources: ["ai「活在同一个世界里」了！首个共享世界生成模型ic-world登场.md"]
---

# IC-World

[[ic-world]] 是由 Lin Guosheng（林国省）与 Ye Deheng（叶德珩）团队提出的首个**共享世界生成**视频模型。它解决了传统视频生成模型在处理多视角输入时无法保持时空一致性的核心痛点。

## 核心特性

IC-World 能够同时生成同一时间、同一世界在不同视角下的视频，并确保这些视频在几何结构和动态行为上保持一致。这对于多机器人协作、多人游戏等需要“共享现实”的应用场景至关重要。

## 技术架构

IC-World 的核心在于“双策略协同”：

1.  **[[in-context-generation]]**：
    *   **原理**：将多视角输入图像拼接成一张大图，配合共享提示词，利用大模型的上下文能力一次性生成多视角视频合集。
    *   **作用**：从架构层面强制模型“看到”整个世界，利用模型固有的长序列建模能力保证一致性。
    *   **优势**：不仅提升了一致性，还通过并行生成显著提高了推理效率。

2.  **基于 [[grpo]] 的强化学习微调**：
    *   **几何一致性奖励模型**：用于约束场景结构（如物体位置、背景）在不同视角下的稳定性。
    *   **动态一致性奖励模型**：用于约束物体动作和交互行为在不同视角下的时间同步性。

## 性能表现

*   **一致性**：在几何一致性和动态一致性指标上全面超越现有 SOTA 方法。
*   **质量**：在 VBench 基准测试中达到 81.15 分，证明其并未为了追求一致性而牺牲视觉质量。
*   **效率**：得益于并行生成策略，生成速度远超传统的串行生成方案。

## 行业影响

IC-World 被视为视频生成领域从“独立生成”向“共享生成”范式转变的标志性工作。其核心思想与后续 [[saining-xie]] 团队发布的 [[solaris]] 模型不谋而合，共同指明了世界模型发展的下一阶段。

## 外部链接

*   论文：https://arxiv.org/abs/2512.02793
*   代码：https://github.com/wufan-cse/IC-World