---
type: entity
title: AngelSlim
tags: [工具, 模型压缩, 腾讯, 量化]
related: [腾讯混元团队, sherry量化, seq]
created: 2026-05-02
updated: 2026-05-02
sources: ["腾讯混元最新开源：440m翻译模型手机离线就能用，翻译质量超谷歌.md"]
---

# AngelSlim

AngelSlim 是腾讯混元团队自研的模型压缩工具/框架，旨在通过先进的量化技术降低大模型的部署门槛，使其能在资源受限的设备（如手机）上运行。

## 核心技术
AngelSlim 包含多种量化方案，主要包括：
- **[[SEQ]] (Stretchable Elastic Quantization)**：拉伸弹性量化技术，用于将模型参数量化至特定数值集合（如 {-1.5, -0.5, 0.5, 1.5}），在 2-bit 压缩下实现几乎无损的质量。
- **[[Sherry量化]]**：稀疏高效三值量化技术，被 ACL 2026 录用，用于实现 1.25-bit 的极致压缩。

## 应用成果
基于 AngelSlim 框架，腾讯混元团队成功将 [[Hy-MT1.5]] 翻译模型压缩至 440MB，并保持了超越 [[谷歌翻译]] 的质量水平。

## 资源
- 技术报告：[arXiv:2602.21233](https://arxiv.org/abs/2602.21233)
- 代码仓库：[GitHub - tencent/AngelSlim](https://github.com/tencent/AngelSlim)