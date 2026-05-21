---
type: concept
title: 反思抑制奖励机制 (RIRM)
tags: [reinforcement-learning, inference-optimization, fast-thinking]
related: [yuan3-0-ultra, fast-thinking, yuanlab-ai]
created: 2026-03-05
updated: 2026-03-05
sources: ["企业级openclaw最强拍档来了！万亿参数的国产多模态大模型，刚刚开源发布.md"]
---

# 反思抑制奖励机制 (RIRM)

[[反思抑制奖励机制 (RIRM)]]（Reflection Inhibition Reward Mechanism）是一种用于优化大模型推理过程的强化学习机制。该机制由 [[YuanLab.ai]] 在 [[Yuan3.0 Ultra]] 的训练中提出，旨在解决模型在推理过程中出现的“过度思考”问题。

## 核心思想

在 [[Fast-thinking]]（快思考）范式下，模型倾向于采用高效的短路径推理。然而，在强化学习过程中，模型可能会陷入无休止的反思循环，导致 Token 消耗激增而收益递减，这种现象被称为“过度思考”。

RIRM 通过对反思次数引入奖励约束，鼓励模型在获得可靠答案后主动停止无效的反思步骤。其核心在于平衡推理深度与计算成本，确保模型只在必要时才进行深度的多步推理。

## 作用与效果

-   **抑制无效反思**：减少模型在已解决问题上的冗余计算。
-   **保留必要深度**：在复杂问题中，模型仍能保留必要的推理深度，确保答案的准确性。
-   **效率提升**：实验结果显示，在 RIRM 优化下，模型精度显著提升，同时推理过程中生成的 Token 数量持续下降，实现了准确性与计算效率的同步优化。

这一机制使得 [[Yuan3.0 Ultra]] 能够更好地适应企业级应用场景，在保证输出质量的同时降低响应延迟和运营成本。