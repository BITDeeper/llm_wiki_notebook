---
type: entity
title: RLinf
created: 2026-05-12
updated: 2026-05-12
tags: [强化学习, 分布式, 具身智能, 框架]
related: [dexbotic, dm0, sft-plus-rl黄金范式]
sources: ["一个框架，重塑具身研发流程：dexbotic走向具身pytorch.md"]
---
# RLinf

RLinf 是一个顶级分布式强化学习框架，作为 [[dexbotic]] 的RL后端，实现了具身智能领域SFT+RL闭环的工程化突破。

## 核心能力

- **Cluster**：分布式集群管理
- **HybridComponentPlacement**：混合组件部署
- **Actor/Rollout/Env Worker组**：多角色工作器编排
- **EmbodiedRunner**：具身任务运行器

## 与Dexbotic的整合

2026年2月10日，RLinf与 [[dexbotic]] 官宣战略合作。双方采用"乐高式协作"模式：

- **Dexbotic稳守前端**：机器人策略定义、模型注册、Checkpoint管理、专属数据变换与用户侧实验入口
- **RLinf稳守后端**：分布式Rollout、优化、Worker调度、日志记录与Runner编排

双方拒绝粗暴的代码融合（Fork强行揉合），而是通过标准接口实现模块化拼装。整合已在LIBERO系列任务套件中完成端到端验证，支持PPO等算法完成后训练。

## 意义

此次整合标志着具身智能领域长期存在的"SFT与RL割裂"问题被真正打通，开发者可在同一开发流中自然完成从模型开发到RL后训练的全流程。