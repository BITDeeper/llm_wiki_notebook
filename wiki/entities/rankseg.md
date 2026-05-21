---
type: entity
title: RankSEG
tags: [algorithm, computer-vision, semantic-segmentation, optimization, python-library]
related: [semantic-segmentation, reciprocal-moment-approximation, hong-kong-chinese-university, post-processing-optimization]
created: 2026-01-05
updated: 2026-01-05
sources: ["语义分割别无脑用argmax！港中文新算法：三行代码，推理速度提升10倍.md"]
---

# RankSEG

[[RankSEG]] 是由 [[香港中文大学]] (CUHK) 提出的一个算法框架及 Python 工具包，旨在优化 [[语义分割]] 任务的推理阶段性能。它通过数学理论证明，传统的 `argmax` 或固定阈值后处理方法在优化 Dice 或 IoU 等全局指标时是次优的，并提供了一种即插即用的替代方案。

## 核心特性
- **即插即用**：无需重新训练模型，仅需在推理代码中增加或修改三行代码即可集成。
- **理论最优**：基于 [[排序性质]]，直接寻找能最大化 Dice 期望的二值掩码。
- **高效近似**：通过 [[倒数矩近似]] (RMA) 技术，解决了穷举计算量过大的问题，实现了 10 倍以上的推理速度提升。

## 使用示例
```python
from rankseg import RankSEG

# 1. 初始化 RankSEG (优化 Dice 指标)
rankseg = RankSEG(metric='dice')

# 2. 获取模型的概率输出
probs = model(images).softmax(dim=1)

# 3. 获取优化后的预测结果 (替换原来的 probs.argmax(dim=1))
preds = rankseg.predict(probs)
```

## 技术原理
RankSEG 的核心在于认识到逐像素最优解不等于全局最优解。它通过以下步骤实现优化：
1.  **排序**：根据像素属于前景的概率进行排序。
2.  **搜索**：搜索最佳的“体积” $k$（即前景像素数量），使得 Dice 期望最大。
3.  **近似**：使用 RMA 技术快速计算期望，避免指数级复杂度。

## 应用场景
- 医学图像分割（如 LiTS, KiTS 数据集），提升对肿瘤等小物体的识别精度。
- 自动驾驶场景分割（如 Cityscapes 数据集），改善对遮挡物体的处理。
- 任何使用标准深度学习模型（如 UNet, DeepLab）进行语义分割的任务。

## 版本与变体
- **RankSEG-BA** (Brute-force Approximation)：原始理论算法，精度高但计算复杂度极高。
- **RankSEG-RMA** (Reciprocal Moment Approximation)：引入倒数矩近似的高效版本，在保持精度的同时大幅提升速度。

## 外部链接
- [GitHub 仓库](https://github.com/rankseg/rankseg)
- [在线 Demo](https://huggingface.co/spaces/statmlben/rankseg)
- [官方文档](https://rankseg.readthedocs.io/en/latest/index.html)