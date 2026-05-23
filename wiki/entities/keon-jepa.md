---
type: entity
title: keon/jepa 极简教学项目
created: 2026-05-15
updated: 2026-05-15
tags: [开源项目, 教学代码, jepa, pytorch]
related: [jepa, i-jepa, v-jepa, v-jepa-2, c-jepa, leworldmodel, 算法蒸馏, yann-lecun]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
origin_date: 2026-01-01
---
# keon/jepa 极简教学项目

keon/jepa 是一个 GitHub 开源项目，由开发者 keon 创建，用极简单文件形式以 PyTorch 实现 [[jepa]] 联合嵌入预测架构的五个核心变体。

## 项目特点

- **极简代码：** 每个变体 160-278 行代码，独立单文件实现
- **最小依赖：** 仅依赖 PyTorch 和 torchvision
- **低门槛运行：** 普通笔记本即可运行，支持 CUDA、MPS、CPU
- **论文对照：** 代码注释标明对应论文符号（f_theta、g_phi、s_y）

## 涵盖的五个变体

| 变体 | 文件 | 代码行数 | 数据集 |
|------|------|---------|--------|
| [[i-jepa]] | ijepa.py | 160 | CIFAR-10 |
| [[v-jepa]] | vjepa.py | 188 | Moving MNIST |
| [[v-jepa-2]] | vjepa2.py | 278 | 玩具数据 |
| [[c-jepa]] | cjepa.py | 174 | 3-digit弹跳视频 |
| [[leworldmodel]] | leworldmodel.py | 233 | 玩具数据 |

## 扩展功能

每个 `xxx.py` 旁边都有对应的 `xxx_extras.py`，提供：
- 掩码动画可视化
- Loss 收敛曲线
- t-SNE 和 PCA 降维图
- [[线性探测]] 评估

## 设计哲学

项目采用[[算法蒸馏]]理念，将 Meta 官方 V-JEPA 仓库的复杂工程实现压缩回算法本体，去除分布式训练、数据流水线、日志系统等工程包装，使 JEPA 从论文概念变为可读代码。

## 项目地址

https://github.com/keon/jepa