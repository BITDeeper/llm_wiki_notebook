---
type: concept
title: 虚拟细胞
tags: [biology, simulation, ai-model, drug-discovery]
related: [perturbdiff, destructive-sequencing, scrna-seq]
created: 2026-03-12
updated: 2026-03-12
sources: ["用diffusion构建「ai虚拟细胞」，14项指标霸榜！mila唐建团队破解单细胞「破坏性」测序难题.md"]
---
# 虚拟细胞

虚拟细胞是指利用 AI 构建的能够模拟药物干预或基因编辑后细胞状态的计算模型。

## 核心价值
由于 [[破坏性测序]] 的物理限制，生物实验无法对同一细胞进行“前后对比”。虚拟细胞模型旨在解决这一痛点，提供一种无损、可重复的试错环境，从而加速新药研发和基因功能研究。

## 技术路径
- **早期尝试**：基于回归的模型，试图强行配对非配对数据，效果有限。
- **分布建模**：如 STATE、CellFlow 等方法，假设微扰结果是静态分布。
- **生成式建模**：如 [[PerturbDiff]]，利用 [[泛函扩散]] 对“分布的分布”进行建模，捕捉生物系统的随机性和隐变量影响，被认为是构建高保真虚拟细胞的重要突破。