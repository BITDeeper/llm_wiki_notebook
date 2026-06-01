---
type: source
title: "AdamW和Muon的失稳根源有解了，港中文新优化器Pion：在等谱流形上更新大模型"
created: 2026-05-30
updated: 2026-05-30
tags: [优化器, 大模型训练, 等谱流形, 谱保持, 稳定性]
related: [pion-优化器, 等谱流形优化, 加法更新范式, 机器之心]
sources: ["adamw和muon的失稳根源有解了，港中文新优化器pion：在等谱流形上更新大模型.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/CZp2P9XBDm77rK8FJiUt-Q"
venue: 机器之心
---
# AdamW和Muon的失稳根源有解了，港中文新优化器Pion：在等谱流形上更新大模型

## 摘要

本文报道了香港中文大学刘威杨团队提出的基于等谱流形的大模型优化器 [[pion-优化器]]。该优化器从根源上解决大模型训练失稳问题，核心思路是将传统优化器的"加法更新"替换为在等谱流形上的"旋转更新"，严格保持权重矩阵的奇异值不变。

## 核心论点

- 大模型训练失稳（loss spike、NaN）的根源在于传统优化器的[[加法更新范式]]破坏了参数矩阵的谱结构
- 通过在[[等谱流形优化|等谱流形]]上进行纯旋转更新，可以从源头解决稳定性问题
- [[谱保持]]优化在一定程度上能够替代架构层面的归一化层，为模型训练提供来自优化器本身的稳定性

## 关键实验结果

1. **Normalization-free 训练**：完全移除归一化层后，AdamW 和 Muon 均崩溃（NaN），Pion 保持稳定收敛
2. **超深层网络**：200 层网络中，Pion 的 loss 轨迹标准差（0.0892）低于 AdamW（0.0931）和 Muon（0.0927）
3. **SFT 抗遗忘**：在数学和代码微调中实现最佳 ID/OOD 性能平衡
4. **RLVR 训练**：在 GRPO 框架下取得最快收敛和最稳定表现

## 研究团队

- 施柯煊、李瀚轩（香港中文大学博士生，共同一作）
- 邱泽钜（马克斯普朗克研究所博士生）
- 温研东（西湖大学助理教授）
- Simon Buchholz（马克斯普朗克研究所研究员）
- 刘威杨（香港中文大学助理教授，通讯作者）

## 论文信息

- 论文标题：Pion: A Spectrum-Preserving Optimizer via Orthogonal Equivalence Transformation
- arXiv：2605.12492
- 代码：https://github.com/Sphere-AI-Lab/pion