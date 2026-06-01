---
type: source
title: "DiffusionOPD：复旦联合通义万相提出扩散模型「在线策略蒸馏」新范式"
created: 2026-05-29
updated: 2026-05-29
tags: [扩散模型, 强化学习, 知识蒸馏, 多任务学习, 复旦大学, 通义万相]
related: [diffusionopd, 在线策略蒸馏, 多任务强化学习解耦, 闭式kl散度损失, 连续状态马尔可夫链]
sources: ["diffusionopd：复旦联合通义万相提出扩散模型「在线策略蒸馏」新范式，让学⽣模型同时学会构图、⽂字与美学.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/S3SNEw3UDLIG_v6K5FgNyg"
venue: 机器之心
---

# DiffusionOPD：复旦联合通义万相提出扩散模型「在线策略蒸馏」新范式

## 摘要

本文报道了[[复旦大学]]与[[通义万相]]联合提出的 [[diffusionopd|DiffusionOPD]] 方法，首次将大语言模型领域的[[在线策略蒸馏]]（On-Policy Distillation）系统性地扩展到扩散模型的连续状态空间。该方法将多任务强化学习解耦为"单任务在线策略探索"和"多任务能力整合"两个独立阶段，通过推导[[闭式kl散度损失|闭式KL散度损失]]实现无方差的多任务能力蒸馏。

## 核心贡献

1. **理论框架**：将扩散模型去噪过程重新建模为[[连续状态马尔可夫链]]，推导出解析的、无 Monte-Carlo 方差的均值匹配损失
2. **等价性证明**：严格证明闭式KL与PPO-style策略梯度在期望意义下梯度完全相等，但PPO天然方差更高且不兼容ODE采样器
3. **统一视角**：框架同时统一了随机SDE采样器与确定性ODE采样器

## 实验结果

- 在收敛速度和性能上限上显著优于所有多任务RL基线（Multi-Task GRPO-Guard、Multi-Task NFT、Cascade NFT）
- 在蒸馏方法消融中优于DMD、TDM、SFT等替代方案
- 在GenEval、OCR、美学等多个任务领域均表现优异

## 论文信息

- 论文标题：DiffusionOPD: A Unified Perspective of On-Policy Distillation in Diffusion Models
- arXiv编号：2605.15055
- 代码仓库：ali-vilab/DiffusionOPD