---
type: entity
title: Hallo-Live
created: 2026-05-24
updated: 2026-05-24
tags: [数字人, 实时生成, 扩散模型, 音视频联合生成, 开源模型]
related: [异步双流扩散, 人类偏好引导蒸馏, 未来扩展注意力, 因果融合块, ovi-seq]
sources: ["hallo-live-让文本驱动音视频数字人迈入实时流式生成.md"]
origin_date: 2026-04-26
---
# Hallo-Live

Hallo-Live 是由复旦大学与上海创智学院团队提出的实时流式音视频数字人生成模型，论文于2026年4月26日发布于 arXiv，代码已在 GitHub 开源。该模型首次将文本驱动的音视频数字人生成真正推入实时交互区间。

## 核心架构

Hallo-Live 基于 [[异步双流扩散]]（Asynchronous Dual-Stream Diffusion）框架，包含两个训练阶段：

- **Stage 1 — Dual-Stream ODE Init**：模型同时输入不同 noise level 的音视频 blocks，基于单模态和跨模态的 Block-Causal Mask 训练双流 DiT。
- **Stage 2 — Self-Rollout + Dual-Stream DMD**：学生模型基于音视频 KV Cache 自回归生成完整音视频，引入多维 reward 对双流 DMD 损失进行加权蒸馏。

核心组件 [[因果融合块]] 实现了视频流和音频流的单模态自注意力、文本条件注入和跨模态交叉注意力三步融合。

## 关键技术

1. **[[未来扩展注意力]]**（Future-Expanding Attention）：允许视频块访问少量未来音频上下文，模拟协同发音现象，显著改善口型同步。
2. **[[人类偏好引导蒸馏]]**（HP-DMD）：通过奖励加权蒸馏将 VideoAlign（视频美学）、SyncNet（唇形同步）、AudioBox（语音自然度）多维偏好信号注入学生模型。

## 性能指标

| 指标 | 数值 |
|------|------|
| 吞吐 | 20.38 FPS |
| 端到端延迟 | 0.94 秒 |
| 相较教师模型 Ovi 吞吐提升 | 16.0 倍 |
| 相较教师模型 Ovi 延迟下降 | 99.3% |
| VideoAlign Overall | 2.32 |
| Sync-C | 4.72 |

## 硬件需求

当前实验依赖两张 NVIDIA H200 GPU，距离消费级硬件部署仍有优化空间。

## 应用场景

数字人直播、角色扮演、虚拟主持等需要实时交互的场景。在动漫风格、写实人物和多说话人场景下均有效。

## 局限性

- 同步和语音质量仍未全面超过最强离线模型
- 硬件门槛较高
- [[未来扩展注意力]] 的非严格因果设计是工程折衷

## 相关链接

- 论文：https://arxiv.org/abs/2604.23632
- 代码：https://github.com/fudan-generative-vision/Hallo-Live