---
type: source
title: "夯爆了！清北斯坦福联手，SimpleTES横扫21个科学难题"
tags: [ai-for-science, research-paper, algorithm, simpletes, will-lab]
related: [simpletes, will-宽德智能学习实验室, 评估侧计算, trajectory-level-post-training]
created: 2026-04-24
updated: 2026-04-24
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/uLj5Q_CKBUsT180I5yGJew"
venue: "新智元"
sources: ["夯爆了！清北斯坦福联手，simpletes横扫21个科学难题.md"]
---

# 夯爆了！清北斯坦福联手，SimpleTES横扫21个科学难题

## 摘要
本文报道了由宽德智能学习实验室与斯坦福、北大、清华等高校联合提出的 SimpleTES 框架。该框架通过系统化放大“试错-反馈-进化”循环，在涵盖数学、量子计算、GPU 优化等 6 个领域的 21 个科学难题上取得了 SOTA 或接近 SOTA 的成绩，挑战了单纯追求模型参数和推理长度的主流范式。

## 核心观点
- **范式转移**：AI 科研的真正跃迁不在于让模型“想得更久”（推理计算），而在于把“试错—反馈—进化”的发现机器无限放大（[[评估侧计算]]）。
- **通用性**：SimpleTES 是一个跨领域的通用方法论，不依赖特定领域的先验知识。
- **开源胜利**：许多成就基于开源模型（如 gpt-oss）实现，打破了“只有闭源模型才能做科研”的迷思。

## 关键技术细节
- **SimpleTES 框架**：通过三个维度控制试错过程：
  - **Global Width (C)**：并行探索宽度，同时开启 C 条独立路线。
  - **Refinement Depth (L)**：迭代精修深度，每条路线循环 L 轮修补。
  - **Local Sample Size (K)**：局部候选数量，每步生成 K 个候选择优。
- **Trajectory-Level Post-training**：一种新的后训练方法，以整条探索轨迹的最终突破作为监督信号，旨在解决 AI 科研中的“短视症”，让模型学会可迁移的“长线思维”。

## 实验成果
- **数学**：在圆填充问题（n=26, 32）上刷新世界纪录；在 Erdős 最小重叠等问题上超越前 AI 最佳结果。
- **量子计算**：在超导量子比特路由策略上超越金标准 SABRE 算法 21.7%。
- **GPU 优化**：编写的 Triton 程序在 H100/A100/MI300 上击败了所有 AI 方法和经典库。
- **算法工程**：在 AtCoder 启发式竞赛中，从零开始发现的算法超越所有人类选手。
- **数据科学**：发现的 Scaling Law 比人类推导的规律外推拟合度提升 352%。

## 背景机构
- **Will (宽德智能学习实验室)**：由宽德投资孵化，目标是构建超级科技助手 (ASI for Sci-Tech)，采取“预训练+方法论+评估引擎”的全栈式研发路线。
- **宽德投资**：量化金融公司，ICLR 2026 赞助商，为 Will 提供资金支持。

## 外部链接
- 项目主页：https://www.wizardquant.com/will/SimpleTES
- 代码开源：https://github.com/Wizard-Intelligence-Learning-Lab/SimpleTES