---
type: concept
title: Human-in-the-World-Model 框架
created: 2026-06-16
updated: 2026-06-16
tags: [具身智能, 世界模型, 人机协同, 后训练]
related: [current-robotics, curr-0, 世界模型, sim2real]
sources: ["rss/一个模型控制手脚腰身！机器人终于学会全身协同干精细活了.md"]
---
# Human-in-the-World-Model 框架

Human-in-the-World-Model 是[[current-robotics|Current Robotics]]提出的闭环机制，代表其在具身智能领域的下一步路线图。

## 背景

仅靠真实机器人训练不足以支撑大规模迭代。物理世界存在不可规模化的根本限制：
- 一台机器人每次测试都消耗硬件、能源和人力
- 失败无法回滚
- 场景无法按需重置

因此，Current Robotics 正在构建覆盖视觉、本体感知、力觉等物理信号的多物理模态交互[[世界模型]]，希望将评测、后训练和部署验证从真实硬件迁移到可扩展的数字环境中。

## 框架机制

在 Human-in-the-World-Model 框架下：
1. 人类可以直接在多物理模态交互世界模型中介入
2. 对机器人策略进行修正
3. 修正结果立即用于后续训练

这一闭环机制旨在降低后训练对真实机器人部署和人工干预的依赖，解决[[sim2real]]迁移中的高成本问题。

## 与传统方案的区别

传统[[sim2real]]依赖仿真环境的自动迭代，而 Human-in-the-World-Model 引入了人类专家的直接介入，在世界模型内部完成策略修正，使人类知识直接注入数字环境的训练循环中。