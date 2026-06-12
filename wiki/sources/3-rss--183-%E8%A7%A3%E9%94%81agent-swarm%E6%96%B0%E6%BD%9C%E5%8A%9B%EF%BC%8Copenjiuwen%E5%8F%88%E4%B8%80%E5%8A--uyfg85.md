---
type: source
title: "解锁Agent Swarm新潜力，openJiuwen又一力作：多智能体流网络"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/Eleh8ZlAVYpgV_4MCq_2vQ"
venue: 机器之心
tags: [多智能体, 流网络, 强化学习, 文本梯度, 华为, openJiuwen]
related: [mango-多智能体流网络优化, openjiuwen, jiuwenswarm, 多agent协作架构, 自进化架构]
created: 2026-06-08
updated: 2026-06-08
sources: ["rss/解锁agent-swarm新潜力，openjiuwen又一力作：多智能体流网络.md"]
---
# 解锁Agent Swarm新潜力，openJiuwen又一力作：多智能体流网络

## 摘要

机器之心报道了 openJiuwen 研究团队提出的 MANGO（Multi-Agent Network Gradient Optimization）框架。该框架归属于华为 JiuwenSwarm 研究范畴，在 AgentOS 统一执行与调度底座支撑下，将多智能体协作建模为有向流网络，通过强化学习优化路径选择、文本梯度优化节点提示词、节点跳跃降低计算成本，实现端到端协作优化。

## 核心内容

- **流网络构建**：将工作流中的行动迭代插入流网络，基于向量相似度决定是否创建新节点，每个节点分配不同大模型代表一个智能体。
- **RL边优化**：将边选择建模为马尔可夫决策过程，使用 REINFORCE 算法优化策略网络，综合考虑过程正确性和最终任务表现。
- **文本梯度节点优化**：基于全局任务结果和局部执行反馈生成文本梯度信号，反向传播更新节点提示词，解决长路径中梯度信号消失问题。
- **节点跳跃机制**：选择性跳过已充分优化的节点，用训练工作流中的真实步骤填充输出，Skip-3 设置下训练时间缩短 41.5%，推理时间缩短 47.4%。

## 关键实验结果

- 在 7 个基准数据集上全面超越现有方法
- MATH500 上比 MaAS 准确率提升 12.8%
- DROP 上比 AFlow F1 提升 5.1%
- Skip-3 设置下 API 成本最低

## 论文信息

- 标题：Reinforced Collaboration in Multi-Agent Flow Networks
- 作者：Zheng Wang, Yuang Liu, Yangkai Ding
- 单位：华为泊松实验室、维纳研究所（NWRC）
- arXiv：2605.12943
- 仓库：https://github.com/openJiuwen-ai/agent-store/tree/main/community/mango

## 与现有维基的关联

- 与 [[多agent协作架构]] 直接相关，MANGO 提供了流网络建模+强化学习+文本梯度的三重优化方案
- 与 [[自进化架构]] 相关，体现了多智能体系统从人工设计到自主优化的演进
- 与 [[agent-harness-后训练]] 形成互补：Mind Lab 优化模型本身，MANGO 优化智能体之间的协作路径