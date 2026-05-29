---
type: entity
title: LatentUM
created: 2026-05-27
updated: 2026-05-27
tags: [模型, 统一模型, 隐空间, 多模态]
related: [邓志杰, mantis, 原生理解生成统一, neo-unify-架构]
sources: ["本周六，围观学习cvpr-2026论文分享会，最后报名了.md"]
---
# LatentUM

[[邓志杰]] 提出的隐空间统一模型（Latent Unified Model）。核心思想是将所有模态统一映射至共享语义隐空间，基于自回归 Transformer 完成多模态信息的融合与对齐。

## 技术特点

- 解决现有统一模型在生成和理解视觉内容时使用不同表示的问题
- 通过共享语义隐空间提升跨模态对齐效果
- 可作为世界模型基座，用于训练具身动作策略

## 与相关概念的关系

LatentUM 与商汤 [[neo-unify-架构]] 均属于 [[原生理解生成统一]] 范式的实现路径，但技术路线不同——LatentUM 侧重隐空间映射与自回归 Transformer，而 neo-unify 侧重原生多模态架构消除模态间信息断层。两者异同值得后续追踪。

## 关联

- 在 [[mantis]] 具身动作策略方法中作为基座模型使用
- 在 [[cvpr-2026-论文分享会-机器之心]] 上由邓志杰做 Keynote 分享
