---
type: entity
title: ClinVideoSuite
created: 2026-05-27
updated: 2026-05-27
tags: [数据集, 医学AI, 视频理解, 训练数据]
related: [medscope, ga-grpo, visual-cot]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
origin_date: 2026-05-27
---
# ClinVideoSuite

ClinVideoSuite 是 [[medscope|MedScope]] 配套的大规模训练数据集，由 [[leapquest|LeapQuest]] 团队构建。

## 数据规模

| 数据类型 | 数量 |
|----------|------|
| 时间戳密集 caption | 635K |
| 证据关联 QA | 254K |
| 视觉 CoT 轨迹 | 34K |

此外还包含用于强化学习的交互式训练环境。

## 设计理念

数据不是简单问答，而是强调问题必须依赖**局部时间窗中的视觉证据**。这一设计确保模型学会的不是"猜答案"，而是"找证据"。

## 数据合成管线

ClinVideoSuite 采用自动化合成管线构建，覆盖多种临床视频场景，确保数据质量和证据关联性。

## 关联

- 专门服务于 [[medscope|MedScope]] 的训练需求
- 与 [[MedVidBench]]（53万样本）同属医学视频评测/训练数据体系
- 支撑 [[ga-grpo|GA-GRPO]] 强化学习中的证据导向训练