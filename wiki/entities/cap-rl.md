---
type: entity
title: CaP-RL
tags: [nvidia, reinforcement-learning, code-generation]
related: [cap-x, cap-agent0, grpo]
created: 2026-04-02
updated: 2026-04-02
sources: ["英伟达给机器人装上龙虾大脑！具身智能的harness来了.md"]
---

# CaP-RL

**CaP-RL** 是 [[英伟达]] [[cap-x]] 框架中包含的强化学习算法组件。

## 工作原理
CaP-RL 直接利用环境反馈的成功与否作为可验证奖励，使用强化学习算法（如 GRPO）对编程模型本身进行后训练。

## 优势
- **优化直觉**：让模型的“写码直觉”越来越准。
- **逻辑层优化**：与传统的在像素层进行 RL 不同，CaP-RL 在代码逻辑层进行优化。
- **零样本迁移**：由于物理逻辑在仿真和现实中是通用的，这种能力可以直接零样本无损迁移到真实世界的机器人上，缓解 [[Sim2Real]] 鸿沟。