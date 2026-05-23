---
type: concept
title: Token效率悖论
created: 2026-05-17
updated: 2026-05-17
tags: [ai-agent, token消耗, 效率, 悖论]
related: [agentic-coding-token消耗研究发布-202605, token作为生产资料, scaling-law, ai-subscription-crisis]
sources: ["花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
---
# Token效率悖论

Token效率悖论是指在 AI Agent 执行任务时，更多的 token 消耗并不保证更高的任务准确率，甚至往往呈现负相关的现象。

## 核心表现

1. **任务层面**：token 消耗更多的任务往往准确率更低。将任务按平均 token 消耗分组后，高消耗组的准确率低于低消耗组。
2. **运行层面**：同一任务的多次运行中，最高准确率出现在中等偏低开销时，而非最高开销时。继续增加开销，准确率不增反减。
3. **行为层面**：高开销运行轨迹中，重复修改和重复查看同一文件的次数明显更多，表明更多 token 消耗伴随大量"来回折腾"，而非高效推理。

## 与 Scaling Law 的张力

Wiki 中记录了 [[dario-amodei]] 强调 [[scaling-law]] 没有撞墙的观点，但 Token效率悖论在 Agent 应用层面揭示了一个"反 scaling"现象——在应用层，更多资源投入不带来更好结果。这构成了模型层 scaling 与应用层效率之间的深层张力。

## 恶性循环

失败任务比成功任务消耗更多 token，但增加消耗又不提高成功率——形成"越失败越花钱，越花钱越不成功"的恶性循环。

## 实证来源

该概念由 [[密歇根大学]] 和 [[斯坦福大学]] 的研究团队在 2026 年 5 月发表的论文中首次系统量化，基于 8 个前沿模型在 [[swe-bench-verified]] 上的 500 个任务实验。