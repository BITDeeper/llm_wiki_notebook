---
type: entity
title: Dolphin
tags: [ai, model, audio-visual, speech-separation, efficiency]
related: [dp-lipcoder, 热扩散注意力, 视听语音分离, 清华大学, 胡晓林]
created: 2026-02-13
updated: 2026-02-13
sources: ["视听分离sota提速6倍！清华发布首个6m高性能模型｜iclr'26.md"]
---

# Dolphin

**Dolphin** 是由 [[清华大学]] 计算机系胡晓林副教授团队开发的高效视听语音分离模型。该模型以仅 6M 的参数量，在视听分离任务上实现了 SOTA 性能，同时将推理速度提升了 6 倍以上。

## 核心特性

### 极致高效
- **参数量**：6.22M（计入视觉编码器），相比主流模型（如 IIANet 的 15.01M）减少了一半以上。
- **推理速度**：处理 1 秒音频仅需 33.24ms，GPU 推理速度比现有 SOTA 快 4-6 倍。
- **计算量**：MACs 仅为 10.89 G，显著降低了计算开销。

### 性能领先
在 LRS2、LRS3 和 VoxCeleb2 等权威基准数据集上，Dolphin 在尺度不变信噪比（SI-SNRi）上均达到领先水平（LRS2 上为 16.8 dB）。其分离出的语音在主观听感测试（MOS）中获得了 3.86 的高分，远超对比模型。

## 技术架构

Dolphin 的架构设计旨在解决视觉编码器的语义与效率冲突，以及单次推理中的全局-局部特征建模难题：

1.  **[[DP-LipCoder]]**：双路径离散视觉编码器。利用 [[矢量量化]] 技术，通过重建路径和语义路径分别提取基础视觉线索和深层语义信息，实现了轻量化与高判别力的统一。
2.  **[[GLA]] (Global-Local Attention)**：全局-局部注意力模块。
    -   **全局注意力 (GA)**：在低分辨率下捕捉长时序的全局语境。
    -   **[[热扩散注意力]] (HDA)**：受物理启发的注意力机制，利用热扩散过程的平滑特性进行多尺度滤波，在去噪的同时保留语音瞬态细节。
3.  **直接特征回归**：摒弃传统的掩码策略，直接预测目标语音的深层表征，减少了非线性失真。

## 应用场景
Dolphin 的高效性使其非常适合部署在资源受限的端侧设备，如：
- 智能助听器
- 智能手机
- 智能眼镜（AR/VR）
- 实时会议系统

## 开源信息
- 论文：[Dolphin: Efficient Audio-Visual Speech Separation via Discrete Visual Semantic and Physics-Inspired Attention](https://arxiv.org/pdf/2509.23610)
- 代码：[GitHub - JusperLee/Dolphin](https://github.com/JusperLee/Dolphin)