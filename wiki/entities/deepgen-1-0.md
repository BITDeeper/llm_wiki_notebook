---
type: entity
title: DeepGen 1.0
tags: [ai, multimodal, model, open-source]
related: [原生理解生成统一, mr-grpo, think-token, scb, 本地推理, 上海创智学院, 复旦大学, 中国科学技术大学]
created: 2026-03-18
updated: 2026-03-18
sources: ["5b参数+4060ti，10秒出图，全流程开源可复现！补齐统一多模态生成编辑的开源版图，让高质量图像生成真正变得更轻量、更普及.md"]
---

# DeepGen 1.0

[[deepgen-1-0]] 是由上海创智学院、复旦大学和中国科学技术大学联合发布的统一多模态生成编辑模型。该模型总参数量为 5B（3B VLM + 2B DiT），旨在通过轻量化架构和全流程开源，降低高质量图像生成的门槛。

## 核心特性
- **轻量化部署**：在消费级显卡（如 NVIDIA 4060Ti 16G）上即可运行，实测 10 秒出图。
- **五大能力集成**：统一支持图像生成、图像编辑、推理生成、推理编辑和文字渲染。
- **全流程开源**：开源了训练代码、推理代码、模型权重及高质量训练数据，支持从零复现。

## 架构设计
DeepGen 1.0 采用了 VLM-DiT 架构：
- **VLM 分支**：负责处理文本和图像输入，提供语义理解与世界知识。
- **DiT 分支**：在 VLM 的引导下生成高质量图像。
- **连接与融合**：通过精简的 encoder based connector 进行特征对齐，并利用 [[scb]]（堆叠通道桥接）实现跨层深度融合。

## 关键技术
- **[[think-token]]**：充当隐式思维链，不增加大量参数即可提升模型对复杂指令的推理能力。
- **[[mr-grpo]]**：多奖励组相对策略优化算法，结合辅助 SFT Loss 和 KL 正则化，确保强化学习训练的稳定性。

## 性能表现
据官方报道及社区实测，DeepGen 1.0 在多项质量指标上超越了参数量是其 4 倍的工业级生成模型。其轻量化特性使得个人开发者和研究团队能够以极低成本进行部署和实验。

## 开源资源
- 论文：[DeepGen 1.0: A Lightweight Unified Multimodal Model for Advancing Image Generation and Editing](https://arxiv.org/abs/2602.12205)
- 代码：[GitHub - deepgenteam/deepgen](https://github.com/deepgenteam/deepgen)
- 权重：[Hugging Face](https://huggingface.co/deepgenteam/DeepGen-1.0)
- 数据：[Hugging Face Dataset](https://huggingface.co/datasets/deepgenteam/DeepGen-1.0)