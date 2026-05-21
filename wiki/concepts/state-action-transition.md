---
type: concept
title: State-Action-Transition
tags: [reinforcement-learning, robotics, medical-ai]
related: [medos, medical-world-model, vla-视觉-语言-动作]
created: 2026-02-20
updated: 2026-02-20
sources: ["医疗ai大洗牌！斯坦福、普林斯顿发布首个医学世界模型medos.md"]
---

# State-Action-Transition

**State-Action-Transition**（状态-动作-转换）是 [[medos]] 模型的核心逻辑闭环，描述了 AI 如何与医疗物理世界进行交互。

## 闭环逻辑

1.  **State（状态）**：感知当前的医疗场景，包括组织的物理属性、血流的细微变化以及患者的实时生理指征。
2.  **Action（动作）**：基于当前状态决定采取的医疗干预措施，如药物注射或手术操作。
3.  **Transition（转换）**：预测并观察动作执行后环境状态的物理变化。

## 意义

这一闭环解决了传统医疗 AI 缺乏对“干预后果”理解的问题。通过掌握“Transition”规律，模型不再是被动地分析数据，而是能够主动推演治疗过程带来的物理演变，从而实现真正的预测性医疗和安全的机器人操作。