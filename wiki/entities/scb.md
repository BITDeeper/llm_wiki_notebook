---
type: entity
title: SCB
tags: [ai, architecture, multimodal]
related: [deepgen-1-0, think-token, vlm-dit-架构]
created: 2026-03-18
updated: 2026-03-18
sources: ["5b参数+4060ti，10秒出图，全流程开源可复现！补齐统一多模态生成编辑的开源版图，让高质量图像生成真正变得更轻量、更普及.md"]
---

# SCB

[[scb]] (Stacked Channel Bridging，堆叠通道桥接) 是 [[deepgen-1-0]] 模型中用于连接视觉语言模型（VLM）和扩散 Transformer（DiT）的关键架构组件。

## 技术原理
SCB 旨在实现 VLM 理解分支与 DiT 生成分支之间的高效深度融合。通过堆叠通道桥接技术，模型能够在不同层级间对齐和传递特征，确保语义理解信息能够有效地指导图像生成过程。

## 与 Think Token 的配合
SCB 通常与 [[think-token]] 配合使用。SCB 负责架构上的连接与特征融合，而 Think Token 则作为可学习的隐式思维单元，在连接过程中传递推理逻辑和高层语义信息。

## 意义
这种设计解决了传统多模态模型中“理解”与“生成”模块分离导致的信息断层问题，是实现 [[原生理解生成统一]] 的具体技术手段之一。