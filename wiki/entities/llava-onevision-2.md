---
type: entity
title: LLaVA-OneVision-2
created: 2026-05-21
updated: 2026-05-21
tags: [多模态大模型, 视频理解, 码流原生, 视觉语言模型]
related: [ov-encoder, codec-stream-tokenization, codec-native视觉建模, jumpscore, qwen3-vl-8b]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
origin_date: 2026-05-20
---
# LLaVA-OneVision-2

LLaVA-OneVision-2 是首个以"码流（Codec-Stream）"为视觉单元的视频多模态大模型，8B 参数量。由 Lmms Lab、Glint Lab、AIM for Health Lab、MVP Lab 联合开发。

## 核心理念

传统均匀采帧将 Token 预算浪费在可预测的背景上。LLaVA-OneVision-2 利用视频压缩码流的结构信息，让 Token 跟随"语义增量"分布——"Token 跟着比特率走，而不是跟着秒表走"。

## 架构设计

- **视觉骨干**：复用 [[ov-encoder]]（OneVision-Encoder），原生分辨率视觉骨干 + Windowed Attention
- **Token 分配**：[[codec-stream-tokenization]] 四步流水线，实现流级、bit-cost-aware 的 Token 分配
- **位置编码**：共享 3D RoPE，码流画布、采样帧、静态图像置于统一时空坐标系
- **语言解码器**：Qwen3-8B 自回归解码器
- **三种证据来源**：采样视频、码流视频、原生分辨率图像，统一由 OV-Encoder 编码

## 性能表现

| 任务类别 | 对比基线 | 提升幅度 |
|---------|---------|---------|
| 18 项视频任务 | 同体量模型 | +4.3 |
| 11 项空间推理任务 | 同体量模型 | +5.3 |
| 4 项跟踪任务 | 同体量模型 | +15.6 J&F |
| [[jumpscore]] | Qwen3-VL-8B | 74.9 vs 30.1（+44.8） |

## 训练策略

四阶段渐进训练：Stage 1 图像 → Stage 2 指令调优 → Stage 3 长视频 → Stage 4 码流 + 空间。交替输入训练，码流视频/均匀采样视频/图像/拼图按比例混合。

## 开放资源

- GitHub 代码、HuggingFace 模型与数据、评测协议均已开源
- ~8M 重标注视频 + ~4M 空间监督数据