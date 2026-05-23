---
type: entity
title: PACE
created: 2026-05-21
updated: 2026-05-21
tags: [强化学习, 算法, 无监督环境设计, ICML-2026]
related: [无监督环境设计, 最近发展区, 策略参数变化, 国防科技大学]
sources: ["icml-2026｜传统ued瓶颈被打破，强化学习也能精准定位「最近发展区」.md"]
origin_date: 2026-05-01
---
# PACE

PACE（**P**arameter **C**hange for Unsupervised **E**nvironment Design）是一种用于 [[无监督环境设计]]（UED）的算法，由国防科技大学与厦门大学联合提出，被 ICML 2026 接收。

## 核心思想

PACE 的核心判断是：如果一个 level 真正促成了学习，那么智能体在该 level 上训练后，策略参数应该发生有意义的变化。PACE 不再把 level 的价值建立在 regret、GAE 或 Monte Carlo return 等间接信号上，而是直接观察该 level 诱导的 [[策略参数变化]]。

## 数学直觉

通过一阶泰勒展开，PACE 推导出：在局部梯度更新假设下，一个 level 带来的目标提升与其诱导的策略参数变化平方范数成正比。因此，level score 定义为：

$$S(l) = \|\theta_l' - \theta\|^2$$

其中 $\theta$ 是更新前的策略参数，$\theta_l'$ 是在 level $l$ 上完成一次局部策略更新后的参数。

## 运行机制

PACE 的工作流程分为两个阶段：

1. **Level Scoring**：从 level generator 生成候选 level，用当前策略收集数据，执行一次临时策略更新计算 score，高分 level 写入 level buffer。
2. **Policy Training**：从 level buffer 中按 score 优先级采样 level，正式更新策略参数。

两个阶段交替进行，buffer 持续保留最能诱导策略更新的 level。

## 实验结果

| 基准 | 指标 | PACE | 最强基线 |
|------|------|------|----------|
| MiniGrid | IQM | 0.964 | 0.808 (PLR) |
| MiniGrid | Optimality Gap | 0.172 | 更高 |
| Craftax | 平均 reward | 26.42 | 18.73 (DR) |

## 优势

- **计算友好**：无需额外 rollout，score 可在策略更新过程中直接获得
- **低方差**：参数变化是确定性计算，不受稀疏奖励或长时程任务中回报估计的方差影响
- **内生信号**：直接衡量"这次训练到底带来了多少策略改进"

## 局限性

- 一阶泰勒展开的局部梯度假设在非凸优化景观中的适用性有待进一步验证
- 方法依赖 level generator 的质量，PACE 本身不解决环境生成问题
- 在连续控制、多智能体、大规模三维环境中的可扩展性尚未验证