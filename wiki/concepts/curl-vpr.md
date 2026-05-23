---
type: concept
title: CuRL-VPR
created: 2026-05-15
updated: 2026-05-15
tags: [强化学习, 医学AI, 过程奖励, 课程学习]
related: [cx-mind, 可验证推理链, 交错式推理]
sources: ["上交x创智x瑞金联合发布cx-mind：胸片诊断进入“可验证推理”时代.md"]
---
# CuRL-VPR

CuRL-VPR（Curriculum-based Reinforcement Learning with Verifiable Process Rewards）是基于课程的强化学习算法，结合可验证的过程奖励，是[[cx-mind]]实现[[可验证推理链]]的关键训练技术。

## 解决的核心问题

医学诊断任务的强化学习面临三大挑战：

1. **开放式答案空间复杂**：疾病可能共存，医学表达存在多种等价写法
2. **正确结论≠正确推理**：最终答案正确并不代表中间推理可靠
3. **奖励稀疏与credit assignment困难**：只奖励final answer容易造成医学幻觉

一个来自错误证据的正确结论在医学场景中仍然不可接受。

## 三重奖励机制

| 奖励类型 | 作用 |
|---------|------|
| Format Reward（格式奖励） | 确保输出格式正确 |
| Final-result Reward（最终结果奖励） | 评估最终答案正确性 |
| Process Reward（过程奖励） | 用真实放射科报告核查每一步推理的证据支撑 |

过程奖励是核心创新：模型不仅需要最终答案正确，还需要让中间think-answer步骤与真实放射学报告中的证据保持一致。强化学习不再只盯着终点，而是开始关注路径质量。

## 课程学习策略

采用closed-to-open课程学习策略：

1. **先在封闭式任务上训练**：二分类和选择题，建立稳定可验证奖励
2. **再迁移到开放式任务**：开放式诊断推理

这种训练节奏符合临床任务难度梯度，使开放式医学推理的RL过程更稳定。