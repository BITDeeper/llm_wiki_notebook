---
type: concept
title: RIRM
tags: [algorithm, reinforcement-learning, optimization, efficiency]
related: [yuan-3-0-flash, rapo, 过度反思]
created: 2026-02-10
updated: 2026-02-10
sources: ["硅谷豪赌算力烧到停电，中国团队反向出击！这一刀，直接砍碎scaling-law.md"]
---

# RIRM

[[RIRM]]（Reflection Inhibition Reward Mechanism，反思抑制奖励机制）是一种用于解决大模型 [[过度反思]] 问题的强化学习机制。它由 [[YuanLab.ai]] 团队在 [[Yuan 3.0 Flash]] 模型中首次提出。

## 工作原理
[[RIRM]] 的核心思想是教导模型识别“何时思考已足够”。其工作流程包括：
1. **识别节点**：在强化学习过程中，识别模型首次输出正确答案的关键节点。
2. **施加奖励**：对首次正确答案给予正奖励。
3. **抑制冗余**：对后续缺乏新证据的重复验证、自我推翻等行为施以负奖励。

## 效果
通过 [[RIRM]]，模型学会了在正确节点停止思考，而非进行无止境的推演。实验数据显示，引入 [[RIRM]] 后：
- MATH-500 基准上的反思阶段 Token 占比从 71.6% 骤降至 28.4%。
- 总 Token 消耗减少约 47%，最高可达 75%。
- 模型准确率不降反升（从 83.20% 提升至 89.47%）。

## 意义
[[RIRM]] 标志着推理目标从单纯模仿人类冗长的思维过程，转向以最小 Token 预算达成正确性的“效用导向智能”。它让 Token 成为一种可被模型内部感知和调节的计算资源。