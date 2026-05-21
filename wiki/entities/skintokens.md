---
type: entity
title: SkinTokens
tags: [3d生成, 绑定, 蒙皮, 离散化, vast]
related: [tokenrig, fsq-cvae, 蒙皮权重, vast, 清华大学]
created: 2026-04-22
updated: 2026-04-22
sources: ["3d生成告别「穿模」噩梦！vastx清华将蒙皮权重token化，统一生成骨骼与权重，grpo微调形变平滑.md"]
---

# SkinTokens

**SkinTokens** 是由 [[VAST]] 与 [[清华大学]] 合作提出的一种 3D 绑定技术方法。其核心创新在于将连续的 [[蒙皮权重]] 离散化，从而解决传统 AI 绑定算法中高维回归难以学习的问题。

## 核心机制

SkinTokens 使用 [[FSQ-CVAE]]（有限标量量化变分自编码器）将原本庞大、连续且稀疏的蒙皮权重矩阵压缩为一小段离散的 Token 序列。这一过程将传统的“高维连续回归”任务转化为了类似语言模型的“序列预测”问题。

## 优势

- **降低预测难度**：离散化后的 Token 序列更容易被模型捕捉和学习，避免了高维连续空间中的预测模糊。
- **提升准确率**：实验数据显示，使用 SkinTokens 后，蒙皮准确率相比现有方法提升了 98%～133%。
- **改善形变质量**：有效减少了模型在关节处（如手肘、膝盖）的不自然扭曲和折叠。

## 应用

SkinTokens 是 [[TokenRig]] 框架的基础组件，负责将蒙皮信息转化为模型可处理的离散形式，使得骨骼和蒙皮可以在同一个自回归框架中联合生成。

## 相关链接

- 论文/项目主页：https://zjp-shadow.github.io/works/SkinTokens/
- GitHub 仓库：https://github.com/VAST-AI-Research/SkinTokens