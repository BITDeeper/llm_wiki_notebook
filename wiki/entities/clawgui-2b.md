---
type: entity
title: ClawGUI-2B
created: 2026-04-19
updated: 2026-04-19
tags: [model, gui-agent, small-model]
related: [clawgui, mobileworld, mai-ui]
sources: ["教龙虾玩手机！打通gui智能体训练-评测-部署全流程，训练、真机、评测一站解决.md"]
---

# ClawGUI-2B

ClawGUI-2B 是由 [[zju-real]] 团队基于 [[clawgui]] 框架训练的 GUI 专用多模态小模型。

## 模型规格

- **参数量**：2B（20 亿）
- **基座模型**：MAI-UI-2B

## 性能指标

在 [[mobileworld]] 基准测试中，ClawGUI-2B 取得了 **17.1 SR**（成功率）的成绩。
- 相比于基座模型 MAI-UI-2B（11.1 SR）提升了 **6%**。
- 其性能水平接近参数量更大的 8B 级别模型。

## 训练特点

该模型利用 [[clawgui]]-RL 组件进行训练，采用了 [[online-rl]] 和 [[prm]]（过程奖励模型）技术，在保持小参数规模的同时实现了对复杂 GUI 任务的高效处理。