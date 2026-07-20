---
type: entity
title: Wan 2.1
tags: [video-generation, foundation-model, open-source, 视频生成, 基础模型, 扩散模型, DiT, 开源模型]
related: [linvideo, vbench, 视频扩散模型, world-r1, rhymeflow, cogvideox, sora]
created: 2026-03-10
updated: 2026-06-12
sources: ["10秒视频token超5万，o(n²)跑不动？用后训练线性化框架实现1.71倍加速，推理成本大降｜cvpr'2026.md", "解决视频生成穿帮问题！浙大&微软3000条纯文本让模型理解3d.md", "rss/清华开源视频生成加速框架：无需重训练，视频生成提速1.8倍，质量几乎无损.md"]
---

# Wan 2.1

**Wan 2.1** 是一个开源的视频生成基础模型系列，采用主流 DiT（Diffusion Transformer）架构，包含 1.3B（13亿）和 14B（140亿）参数版本。它是当前视频生成领域的代表性基座模型之一，也是 3D 时空注意力二次方复杂度瓶颈的典型代表。

## 技术特点

作为基于扩散概率模型的大规模视频生成系统，Wan 2.1 能够处理高分辨率、长时序的视频生成任务。生成 81 帧 720p 视频需近 17 分钟（单 A800 GPU），凸显了长序列推理的计算挑战。

## 应用与评测

- **基准测试**：Wan 2.1 常被用于 [[VBench]] 和 [[VBench-2.0]] 等视频生成评测基准中，以评估模型在多维度（如动态性、语义一致性等）及物理/常识一致性上的表现。
- **推理优化验证**：在 [[LinVideo]] 框架的实验中，Wan 14B 模型在经过线性化处理后实现了 1.71 倍的推理加速，证明了该模型架构在工程优化方面的潜力。
- **3D 一致性提升**：Wan 2.1 是 [[World-R1]] 训练所基于的基座模型。World-R1 分别在其 1.3B（Small）和 14B（Large）两个规模上进行了训练和验证，在不修改 Wan 2.1 架构的前提下，通过强化学习显著提升了生成视频的 3D 一致性，PSNR 最高提升 10.23 dB。
- **RhymeFlow 基准对比**：在 [[rhymeflow|RhymeFlow]] 的测试中，Wan 2.1 作为主要基准模型，RhymeFlow 在其上的测试结果为 PSNR 比 SAP 高 1.84，SSIM 高 0.053，速度相当。