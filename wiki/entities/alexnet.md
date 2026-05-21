---
type: entity
title: AlexNet
created: 2026-01-16
updated: 2026-01-16
tags: [model, cnn, milestone, computer-vision]
related: [geoffrey-hinton, deep-learning-revival, dropout, gpu-training]
sources: ["ai教父geoffrey-hinton，全球第二个百万引用科学家！.md"]
---

# AlexNet

AlexNet 是由 Alex Krizhevsky、Ilya Sutskever 和 [[Geoffrey Hinton]] 于 2012 年提出的大型深度卷积神经网络（CNN）。它在 ImageNet LSVRC-2012 竞赛中取得了 Top-5 错误率 15.3% 的成绩，远超第二名的 26.2%，被视为 [[深度学习复兴]] 的标志性起点。

## 技术突破
AlexNet 的成功证明了“数据+GPU+端到端训练”范式的可行性，终结了计算机视觉领域依赖手工特征（如 SIFT、HOG）的时代。

### 架构特点
- **规模**：包含 8 层网络（5 个卷积层 + 3 个全连接层），拥有 6000 万个参数和 65 万个神经元。
- **激活函数**：使用了 ReLU（修正线性单元）替代传统的 Tanh 或 Sigmoid，解决了梯度消失问题并加速了训练。
- **正则化**：引入了 [[Dropout]] 技术，有效防止了过拟合。
- **训练加速**：利用 NVIDIA GPU 进行并行计算，大幅缩短了训练时间。

## 历史影响
- **开启 CNN 时代**：直接推动了 VGG、ResNet 等更先进架构的出现。
- **工业界信心**：其压倒性胜利点燃了工业界对深度学习的投资热情，推动了从语音识别到自动驾驶的广泛应用。
- **引用数据**：该论文引用数已超过 18 万次，是计算机科学史上被引用最多的论文之一。