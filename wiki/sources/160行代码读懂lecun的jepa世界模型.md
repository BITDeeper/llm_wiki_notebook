---
type: source
title: "160行代码读懂LeCun的JEPA世界模型"
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 世界模型, 自监督学习, 教学代码, pytorch]
related: [jepa, yann-lecun, keon-jepa, 量子位]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/Pey2P8xl4R7RGr9wSMkADg"
venue: 量子位
---
# 160行代码读懂LeCun的JEPA世界模型

量子位发布的关于开发者 keon 用极简 PyTorch 代码实现 JEPA 系列五个变体的教学项目报道。文章详细介绍了 [[jepa]] 联合嵌入预测架构的核心思想及其五个变体（[[i-jepa]]、[[v-jepa]]、[[v-jepa-2]]、[[c-jepa]]、[[leworldmodel]]），并展示了如何通过[[算法蒸馏]]将复杂的工程实现压缩回纯数学本质。

## 核心内容

- **项目地址：** https://github.com/keon/jepa
- **核心主张：** JEPA 系列模型可以用极简代码（160-278行）完整呈现核心算法机制
- **依赖：** 仅 PyTorch 和 torchvision，普通笔记本即可运行
- **验证结果：** [[i-jepa]] 在 CIFAR-10 上 100 个 epoch 达到 52.7% [[线性探测]] 准确率

## 五个变体概览

| 变体 | 代码行数 | 核心机制 |
|------|---------|---------|
| I-JEPA | 160 | 掩码块嵌入预测 |
| V-JEPA | 188 | 3D管块掩码 |
| V-JEPA 2 | 278 | 动作条件预测 |
| C-JEPA | 174 | 物体轨迹掩码 |
| LeWorldModel | 233 | 端到端联合训练 |

## 关键引用

> "把算法蒸馏到只剩数学本质。"

## 局限性

文章坦诚指出极简教学版与原版论文在模型规模、数据集复杂度、实验精度上存在显著差距，如 I-JEPA 的 52.7% 线性探测对比论文的 ImageNet 结果差距明显。