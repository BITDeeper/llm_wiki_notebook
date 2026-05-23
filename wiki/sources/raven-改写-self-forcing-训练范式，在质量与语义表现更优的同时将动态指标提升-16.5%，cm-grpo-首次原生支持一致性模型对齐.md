---
type: source
title: "RAVEN 改写 Self-Forcing 训练范式，在质量与语义表现更优的同时将动态指标提升 16.5%，CM-GRPO 首次原生支持一致性模型对齐"
created: 2026-05-22
updated: 2026-05-22
tags: [视频生成, 自回归模型, 强化学习, 一致性模型, 偏好对齐]
related: [raven, cm-grpo, history-supervision-gap, training-time-test, 自回归视频扩散模型]
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/HH0NxuwQEdKdCJgGWAwyqQ"
venue: 我爱计算机视觉
---
# RAVEN 改写 Self-Forcing 训练范式

本文报道了帝国理工学院团队提出的 RAVEN（Real-time Autoregressive Video Extrapolation Network）框架及其配套算法 CM-GRPO。RAVEN 通过 training-time test 框架解决自回归视频生成中的 [[history-supervision-gap]]，将模型自生成的历史重新打包进训练过程，使后续 chunk 的损失能够直接监督前面被缓存的历史表示。CM-GRPO 则首次在一致性采样器上直接进行在线强化学习对齐，避免了引入辅助随机过程。

## 核心内容

- **问题识别**：自回归视频扩散模型存在训练时历史上下文与推理时历史上下文的分布不匹配问题，即 [[history-supervision-gap]]
- **方法论**：[[training-time-test]] 将模型 rollout 生成的 clean endpoint 和 noisy state 交错打包，让后续 chunk 损失回传到历史表示
- **CM-GRPO**：将一致性采样步骤视为策略核，直接在推理采样器上做策略优化
- **实验结果**：RAVEN + CM-GRPO 在 VBench 四个维度全面领先，Total Score 85.46，Quality 86.54，Semantic 81.17，Dynamic Degree 2.962
- **用户研究**：覆盖100个长提示词，RAVEN 在所有基线和所有维度上均获更高偏好

## 技术演进链

[[因果蒸馏]] 解决速度问题 → RAVEN 解决历史分布问题 → CM-GRPO 解决采样过程对齐问题，三者构成递进的技术演进链。

## 关键链接

- 论文：https://arxiv.org/abs/2605.15190
- 项目主页：https://yanzuo.lu/raven/
- 代码仓库：https://github.com/mvp-ai-lab/RAVEN
- 模型权重：https://huggingface.co/mvp-lab/RAVEN