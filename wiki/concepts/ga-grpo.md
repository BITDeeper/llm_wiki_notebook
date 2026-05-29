---
type: concept
title: GA-GRPO（Grounding-Aware GRPO）
created: 2026-05-27
updated: 2026-05-27
tags: [强化学习, 医学AI, 视频理解, 算法]
related: [medscope, clinvideosuite, MedGRPO, think-with-images-videos]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
origin_date: 2026-05-27
---
# GA-GRPO（Grounding-Aware GRPO）

## 定义

GA-GRPO（Grounding-Aware Group Relative Policy Optimization）是 [[medscope|MedScope]] 采用的强化学习算法，通过 grounding-aware reward 和 evidence-modulated advantage，让模型偏向检索真正支持结论的视觉片段。

## 核心机制

- **Grounding-aware reward**：奖励模型准确定位与结论相关的视觉区域/时间窗
- **Evidence-modulated advantage**：根据证据质量调节优势函数，使模型更倾向于选择真正支持结论的视觉证据

## 与 MedGRPO 的对比

GA-GRPO 与 [[MedGRPO]] 同属 GRPO 家族的医学强化学习方法，但应用方向不同：

| 维度 | MedGRPO | GA-GRPO |
|------|---------|---------|
| 开发者 | [[联影智能]] | [[leapquest|LeapQuest]] |
| 应用场景 | 异构医疗视频理解 | 临床长视频证据检索 |
| 核心创新 | 跨数据集奖励归一化 | Grounding-aware reward + Evidence-modulated advantage |
| 目标 | 多任务统一理解 | 时序对齐的工具使用 |

## 消融实验证据

去掉 evidence reward 后，定位质量显著下降：

- R@0.5：40.1 → 33.2
- mIoU：43.8 → 38.8

这证明答案级监督不足以教会模型可靠地选择证据，需要显式的证据级奖励信号。

## 在 MedScope 训练中的位置

GA-GRPO 是 [[medscope|MedScope]] 三阶段训练路线的第三阶段，用于强化时序对齐的工具使用行为。