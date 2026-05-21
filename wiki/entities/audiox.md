---
type: entity
title: AudioX
tags: [audio-generation, multimodal, dit, hkust]
related: [if-caps, t2a-bench, maf-module, cross-modal-regularization-effect, guo-yike, tian-zeyue, xue-wei]
created: 2026-03-09
updated: 2026-03-09
sources: ["一个模型，搞定所有音频生成任务！多项基准sota-iclr'26.md"]
---

# AudioX

AudioX 是由香港科技大学（HKUST）郭毅可院士团队提出的统一音频生成模型。该模型基于 [[Diffusion Transformer (DiT)]] 架构，旨在通过单一模型解决音频生成领域的任务碎片化问题。

## 核心特性

### 统一任务处理
AudioX 能够处理多种音频生成任务，包括但不限于：
- 文本生成音效（T2A）
- 文本生成音乐（T2M）
- 视频配音（V2A）
- 视频配乐（V2M）
- 音频修复（Audio Inpainting）
- 音乐续写（Music Completion）

### 架构设计
模型采用了 [[多模态自适应融合]]（MAF）模块，这是一种轻量级模块，允许模型灵活融合文本、视频、图像等多种模态的输入信息。

### 性能表现
在 AudioCaps、MusicCaps、V2M-bench 等多项权威基准测试中达到了 SOTA 水平。特别是在细粒度可控生成方面，在 [[T2A-bench]] 和 AudioTime 等基准上全面领先。

## 训练数据
AudioX 的训练基于团队构建的大规模 [[IF-caps]] 数据集，该数据集包含约 700 万个经过细粒度标注的样本。

## 理论贡献
AudioX 的研究过程中发现了 [[跨模态正则化效应]]，即提升文本标注质量能隐式增强视频等其他模态的生成性能，为多模态学习提供了新的理论视角。