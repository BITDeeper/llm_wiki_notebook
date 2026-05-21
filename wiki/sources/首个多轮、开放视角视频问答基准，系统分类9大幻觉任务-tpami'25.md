---
type: source
title: "首个多轮、开放视角视频问答基准，系统分类9大幻觉任务 | TPAMI'25"
created: 2025-12-26
updated: 2025-12-26
tags: [video-understanding, benchmark, hallucination, nlp, multimodal]
related: [wildvideo, 高阶幻觉, 多模态, gpt-4o, claude-3.5-sonnet, gemini]
authors: [国防科技大学, 中山大学]
year: 2025
venue: "TPAMI 2025"
url: "https://ieeexplore.ieee.org/document/11097075"
sources: ["首个多轮、开放视角视频问答基准，系统分类9大幻觉任务-tpami'25.md"]
---

# 首个多轮、开放视角视频问答基准，系统分类9大幻觉任务

## 概述

本文介绍了由国防科技大学与中山大学团队提出的 **[[WildVideo]]** 基准。这是首个系统分类9类幻觉任务的多轮、开放视角视频问答基准，旨在解决多模态大模型在动态、连续视觉场景中的[[高阶幻觉]]问题。该工作已被 TPAMI 2025 接收。

## 核心贡献

### 1. 评测范式升级
WildVideo 摒弃了传统的单轮、单视角、选择题型设定，采用：
- **多轮开放问答**：最多支持5轮连续对话，模拟真实交互。
- **双重视角**：包含第一人称（自我视角）和第三人称（外视角）视频。
- **中英双语**：提供完整的双语评测集。

### 2. 幻觉分类体系
研究团队首次从三个层面系统定义了9类幻觉任务：
- **感知幻觉**：静态（物体属性）、动态（动作理解、视觉定位、跨帧一致性）。
- **认知幻觉**：常识认知（因果关系、跨模态指代）、世界知识认知。
- **上下文理解幻觉**：上下文省略、跨轮检索。

### 3. 数据集规模
- 包含 1,318 段视频（含 Charades-EGO 配对视频及 YouTube 全球事件视频）。
- 13,704 个单轮问答对与 1,585 个多轮对话。
- 数据经过 LLM 生成与多国 PhD 级别专家的人工审核。

## 关键发现

### SOTA 模型的脆弱性
即使是当前最先进的模型（如 [[GPT-4o]]），在 WildVideo 上也面临严峻挑战：
- **单轮任务**：GPT-4o 准确率仅为 62.1%。
- **多轮任务**：准确率大幅下降至 52.7%。
- **上下文理解**：最佳得分未超过 51.4%。

### 能力结构失衡
- **感知层面**：模型在静态物体识别上表现尚可，但在涉及时序的动作理解和视觉定位上大幅下滑。
- **认知层面**：常识推理和跨模态指代是普遍难点，最低得分仅 11.0%。

### 视角与语言偏好
- **视角偏好**：几乎所有模型在第三人称视频上的表现均优于第一人称视频（受运动模糊、视角突变影响）。
- **语言差异**：模型在中文任务上的表现普遍低于英文。

### 轻量级模型的反常
轻量级的 Gemini 1.5 Flash 在多轮上下文理解任务中反超了 Gemini 1.5 Pro，提示模型设计在效率与长上下文处理能力间可能存在不同的优化路径。

## 意义

WildVideo 像一个功能全面的“体检中心”，揭示了当前多模态模型在走向真正的、实用的视频对话智能之路上，仍需在动态感知、深层推理和连贯交互等多个关键能力上实现突破。

## 外部链接

- 论文地址: [IEEE Xplore](https://ieeexplore.ieee.org/document/11097075)
- 项目主页: [WildVideo Leaderboard](https://chandler172857.github.io/WildVideo-leaderboard/)
- Github: [yangsongyuan18/WildVideo](https://github.com/yangsongyuan18/WildVideo)
- 数据集: [Hugging Face](https://huggingface.co/datasets/yangsongyuan18/wildvideo)