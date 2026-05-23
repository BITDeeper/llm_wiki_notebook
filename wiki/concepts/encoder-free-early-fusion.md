---
type: concept
title: Encoder-free Early Fusion
created: 2026-05-12
updated: 2026-05-12
tags: [模型架构, 多模态, 早期融合, 交互模型]
related: [交互模型, tml-interaction-small, 原生理解生成统一, 微回合]
sources: ["刚刚，thinking-machines出手！首款交互模型来了，翁荔出镜实测.md"]
---
# Encoder-free Early Fusion（无编码器早期融合）

Encoder-free Early Fusion 是一种多模态模型架构设计理念，抛弃独立的音频/视觉编码器，所有模态从训练第一秒起在同一梯度流中联合训练。

## 问题背景
主流的 omni 多模态模型通常先训练一个 Whisper 类的音频编码器、一个 TTS 类的解码器，再把它们拼到 LLM 主干上。代价是：每个组件都要单独优化、单独维护，模态之间的信息很容易在边界处丢失。

## 技术方案（以 TML-Interaction-Small 为例）
- **音频**：用 dMel 表示，经过轻量级 embedding 层进入 transformer 主干
- **图像**：切成 40×40 的 patch，由 hMLM 模块完成编码
- **音频解码**：用 Flow Head 直出 mel 频谱，替代传统 TTS 解码器
- 所有组件连同 transformer 主干，全部从零开始联合训练

## 核心优势
- 模型从训练第一秒起就在同一个梯度流里学习如何协调音频、视频、文本三种信号
- 声音里的笑意、画面里的表情、文字里的犹豫，可以在同一层被模型捕捉到
- 消除模态边界的信息损耗

## 与其他统一架构的关联
- [[原生理解生成统一]] — 商汤的 neo-unify 架构是另一种统一多模态的路径，两者都试图消除模态间的信息断层，但技术路线不同