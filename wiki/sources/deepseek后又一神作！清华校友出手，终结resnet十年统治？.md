---
type: source
title: "DeepSeek后又一神作！清华校友出手，终结ResNet十年统治？"
tags: [深度学习, 架构创新, resnet, ddl, 神经网络]
related: [ddl, resnet, mhc, rank-1-线性算子, 特征反转]
created: 2026-01-02
updated: 2026-01-02
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/dh3K9dVTma53qQN1G1dflw"
venue: "新智元"
sources: ["deepseek后又一神作！清华校友出手，终结resnet十年统治？.md"]
---

# DeepSeek后又一神作！清华校友出手，终结ResNet十年统治？

## 摘要
本文报道了普林斯顿大学与 UCLA 联合提出的一种新型神经网络架构——Deep Delta Learning (DDL)。该研究旨在解决过去十年统治深度学习领域的 ResNet（残差网络）架构中“只加不减”的局限性。通过引入可学习的 Rank-1 线性算子替代固定的恒等映射，DDL 赋予了神经网络“遗忘”、“重写”和“反转”特征的能力。斯坦福教授 Christopher Manning 评价该工作标志着 2026 年是“改进残差连接之年”。

## 核心观点

### ResNet 的局限性
ResNet 通过“加法捷径”解决了梯度消失问题，但其本质是前向欧拉离散，特征值恒为 +1。这意味着网络只能平移状态，无法反转或选择性遗忘旧特征，导致噪声累积和建模能力受限。

### DDL 的创新
DDL 将捷径从固定的恒等映射改为可学习的 Rank-1 算子，引入标量参数 $\beta$ 来控制特征方向：
- **$\beta \approx 0$**：保留特征（等同于 ResNet）。
- **$\beta \approx 1$**：遗忘并重写（状态重置）。
- **$\beta \approx 2$**：特征反转（产生负特征值）。

### 行业趋势
文章指出，DeepSeek 发布的 mHC（流形约束超连接）与 DDL 几乎同时出现，共同指向了“残差连接必须被重新设计”的行业共识。这标志着 AI 发展范式从单纯追求规模转向追求更合理的结构约束。

## 关键人物
- **Yifan Zhang**：普林斯顿大学博士生，论文第一作者，清华校友。
- **Christopher Manning**：斯坦福大学教授，对该研究给予高度评价。

## 原始出处
- 来源：新智元
- 日期：2026年1月2日
- 链接：[原文链接](https://mp.weixin.qq.com/s/dh3K9dVTma53qQN1G1dflw)