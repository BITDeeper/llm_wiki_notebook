---
type: entity
title: Qwen2.5-VL-7B
created: 2026-06-01
updated: 2026-06-01
tags: [视觉语言模型, 基座模型, 通义千问]
related: [se-ga, gui智能体]
sources: ["gui-agent「记与学」双修，长程任务有了专属记忆增强型自进化框架.md"]
---
# Qwen2.5-VL-7B

Qwen2.5-VL-7B 是通义千问系列中的 70 亿参数视觉语言模型，在 [[se-ga|SE-GA 框架]]中被选为基座模型。SE-GA 以该模型为基础，通过 MASE 两阶段训练框架和 TTME 记忆扩展模块，在多个 GUI 智能体基准上取得了超越 72B 参数模型的表现。

## 在 SE-GA 中的应用

- 作为基座模型接受基础能力训练（行为克隆）和自我进化训练（GRPO 强化学习）
- 仅使用 4K 条交互轨迹即实现有效微调
- 在 ScreenSpot 上达到 89.0%，超越 Qwen2.5-VL-72B 等更大模型