---
type: event
title: "Dexbotic × RLinf 战略合作"
created: 2026-05-12
updated: 2026-05-12
tags: [具身智能, 强化学习, 战略合作, 开源]
related: [dexbotic, rlinf, sft-plus-rl黄金范式, dm0登顶robochallenge-202602]
sources: ["一个框架，重塑具身研发流程：dexbotic走向具身pytorch.md"]
origin_date: 2026-02-10
time_span:
  start: 2026-02-10
  end: null
participants: [dexbotic, rlinf, 原力灵机]
causes: [具身智能数据困境]
effects: [dm0登顶robochallenge-202602]
significance: high
---
# Dexbotic × RLinf 战略合作

2026年2月10日，开源具身智能框架 [[dexbotic]] 宣布与分布式强化学习框架 [[rlinf]] 达成深度战略合作，以RLinf作为其分布式强化学习后端。

## 背景

具身智能领域长期存在"SFT与RL割裂"问题：研究者必须在两个独立的开源项目间"来回奔波"，在SFT框架中完成训练后，需手动切换到复杂的RL框架仓库，重新编写任务配置、路径适配与数据接口。

## 合作内容

双方采用[[乐高式协作架构]]模式：

- **Dexbotic稳守前端**：策略定义、模型注册、Checkpoint管理、数据变换、实验入口
- **RLinf稳守后端**：分布式Rollout、优化、Worker调度、日志记录、Runner编排
- 通过后端适配器完整复用RLinf原生的分布式能力
- 已在LIBERO系列任务套件中完成端到端验证

## 影响

- 开发者可在同一开发流中完成从SFT到RL后训练的全流程
- 标志着 [[sft-plus-rl黄金范式]] 在工程层面的真正打通
- 为 [[dm0登顶robochallenge-202602|DM0模型登顶]] 提供了训练基础设施