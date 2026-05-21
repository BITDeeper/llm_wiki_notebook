---
type: entity
title: Triton (OpenTriton)
tags: [programming-language, compiler, openai, cuda-alternative]
related: [cuda-护城河, maia-200, openai, torchtpu, 英伟达]
created: 2026-02-02
updated: 2026-02-02
sources: ["老黄大出血！openai背刺英伟达，微软自研芯连夜拆掉cuda护城河？.md"]
---

# Triton

一种用于并行编程的高级语言和编译器基础设施，由 [[OpenAI]] 核心团队开发。它被视为拆解 [[英伟达]] [[cuda-护城河]] 的关键软件武器，被微软用于支持其自研芯片 [[maia-200]]。

## 核心优势

- **代码效率**：在 Transformer 注意力内核等核心场景中，使用 Triton 编写的代码量比 CUDA 减少 75-90%。
- **性能表现**：实测性能媲美甚至局部超越 CUDA 5-37%。
- **易用性**：提供了更高级的抽象，使得开发者无需深入底层硬件细节即可编写高性能代码，大幅降低了从 CUDA 迁移到其他硬件（如 AMD、TPU 或自研芯片）的门槛。

## 战略角色

Triton 在微软对抗英伟达的战略中扮演了“特洛伊木马”的角色：

1. **生态破局**：CUDA 的护城河主要在于开发者的学习成本和代码迁移成本。Triton 通过提供一种更通用、更易用的编程模型，使得开发者可以轻松在 [[maia-200]]、Google TPU 等非英伟达硬件上部署模型。
2. **行业联盟**：除了微软和 OpenAI，Google 和 Meta 也在推动类似的去 CUDA 化努力（如 [[torchtpu]]），Triton 成为了这一反 CUDA 联盟的重要技术支点。

## 影响

随着 Triton 生态的成熟，英伟达依靠 CUDA 锁定开发者的能力正在被削弱。它标志着 AI 软件栈正从封闭垄断走向开放多元。