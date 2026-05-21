---
type: entity
title: SimpleTES
tags: [ai-for-science, algorithm, framework, scaling]
related: [评估侧计算, trajectory-level-post-training, will-宽德智能学习实验室, ai-for-science]
created: 2026-04-24
updated: 2026-04-24
sources: ["夯爆了！清北斯坦福联手，simpletes横扫21个科学难题.md"]
---

# SimpleTES

**SimpleTES** (Simple Test-time Evaluation-driven Scaling) 是一个由 [[will-宽德智能学习实验室]] 与斯坦福、北大、清华等高校联合提出的 AI 科研框架。它通过系统化放大“生成候选解→评估反馈→迭代改进”的循环，在数学、量子计算、GPU 优化等 6 个领域的 21 个科学难题上取得了突破性成果。

## 核心机制
SimpleTES 的核心在于将科研试错过程拆解为三个可控维度，通过优化资源分配（总预算 N = C × L × K）来最大化发现效率：

1.  **Global Width (并行探索宽度 C)**：
    同时开启 C 条独立的探索路线。这解决了单路径探索容易陷入局部最优的问题，类似于同时派 C 个博士生从不同方向攻同一个课题。

2.  **Refinement Depth (迭代精修深度 L)**：
    每条路线不是一次性生成答案，而是根据评估结果反复修补、优化，循环 L 轮。这模拟了科研人员根据实验数据不断调整方案的过程。

3.  **Local Sample Size (局部候选数量 K)**：
    每一轮迭代中生成 K 个候选方案，由评估器打分后保留最好的一个进入下一轮。这降低了大模型生成随机性带来的噪声干扰。

## Trajectory-Level Post-training
除了测试时的搜索框架，SimpleTES 还提出了 **[[trajectory-level-post-training]]** 方法，旨在解决 AI 做科研时的“短视症”。

- **问题**：传统强化学习倾向于优化单步奖励，导致模型只盯着眼前分数，不敢进行可能导致短期分数下降但长期有益的探索。
- **解法**：以整条探索轨迹的最终突破作为监督信号，只保留表现最好的 R% 的“精英轨迹”进行训练（IRFT，迭代拒绝采样微调）。
- **效果**：模型学会了可迁移的“长线思维”和科研直觉，在完全没见过的新问题上也能找到更强解。

## 应用成果
SimpleTES 展示了惊人的跨领域通用性：
- **数学**：刷新圆填充问题（n=26, 32）世界纪录；改进 Erdős 最小重叠问题。
- **量子计算**：量子比特路由策略超越金标准 SABRE 算法 21.7%。
- **GPU 优化**：在 H100/A100/MI300 上编写的 Triton 程序击败所有 AI 方法和经典库。
- **算法工程**：在 AtCoder 启发式竞赛中超越所有人类选手。
- **数据科学**：发现的 Scaling Law 外推拟合度提升 352%。

## 意义
SimpleTES 证明了在“生成侧计算”（模型参数、推理长度）之外，“[[评估侧计算]]”（试错循环的深度和广度）是 AI 扩展的新轴线。它提供了一套不依赖特定领域先验知识的通用科学发现方法论。

## 参考来源
- [夯爆了！清北斯坦福联手，SimpleTES横扫21个科学难题](https://mp.weixin.qq.com/s/uLj5Q_CKBUsT180I5yGJew)