---
type: source
title: "一个模型，搞定所有音频生成任务！多项基准SOTA | ICLR'26"
tags: [audio-generation, multimodal, iclr-2026, hkust, sota]
related: [audiox, guo-yike, tian-zeyue, xue-wei, if-caps, t2a-bench, dit, maf-module, cross-modal-regularization-effect]
created: 2026-03-09
updated: 2026-03-09
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/iKXvkZJnyE0VwoaVGOkFyw"
venue: "新智元"
sources: ["一个模型，搞定所有音频生成任务！多项基准sota-iclr'26.md"]
---

# 一个模型，搞定所有音频生成任务！多项基准SOTA | ICLR'26

## 概述
本文报道了香港科技大学（HKUST）郭毅可院士团队在 ICLR 2026 上发表的统一音频生成模型 [[audiox]]。该模型旨在解决音频生成领域的模型碎片化问题，通过单一模型处理文本生成音效（T2A）、文本生成音乐（T2M）、视频配音（V2A）、视频配乐（V2M）等多种任务。

## 核心贡献

### 1. 统一模型架构
AudioX 基于 [[Diffusion Transformer (DiT)]] 架构，并提出了 [[多模态自适应融合]]（MAF）模块。这使得模型能够灵活处理文本、视频、图像等多种模态的输入，并在 AudioCaps、MusicCaps、V2M-bench 等多个权威基准上达到 SOTA 性能。

### 2. 细粒度可控生成
模型支持对生成音频的类别、数量、时间戳和时序关系进行精准控制。在团队自建的 [[T2A-bench]] 和 AudioTime 等指令跟随基准上，AudioX 在所有评测维度上全面领先现有方法。

### 3. 大规模数据集 IF-caps
针对现有数据集缺乏细粒度标注的问题，团队构建了包含 700 万样本的 [[IF-caps]] 数据集（含 130 万音效数据和 570 万音乐数据）。
- **构建方法**：采用两阶段流水线。
  - **第一阶段**：使用 [[Gemini 2.5 Pro]] 进行结构化分析（如声音事件分类、时间戳、乐器属性等）。
  - **第二阶段**：利用 [[Qwen2-Audio]] 进行数据增强和改写，提升数据多样性。

### 4. 跨模态正则化效应
研究发现，提升文本标注的质量不仅改善了 [[文本生成音效]]（T2A）的性能，还意外提升了 [[视频配音]]（V2A）等其他模态任务的性能。这表明在统一训练框架下，高质量的文本数据充当了一种隐式正则化信号，增强了模型共享的多模态表示空间。

## 关键人物
- **[[田泽越]]**：第一作者，香港科技大学博士生。
- **[[郭毅可]]**：通讯作者，中国工程院外籍院士，香港科技大学首席副校长。
- **[[雪巍]]**：通讯作者，香港科技大学助理教授。

## 社区反响
- 论文被 ICLR 2026 接收。
- 项目已开源（代码、模型权重、数据集）。
- GitHub 获得 1.2k+ Stars，登顶 Hugging Face 音频生成模型排行榜。