---
type: entity
title: MedScope
created: 2026-05-27
updated: 2026-05-27
tags: [医学AI, 视频理解, 多模态模型, 强化学习, ICML-2026]
related: [ophiuchus, think-with-images-videos, clinvideosuite, ga-grpo, leapquest, visual-cot]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
origin_date: 2026-05-27
---
# MedScope

MedScope 是面向临床长视频的 "Think with Videos" 智能体，由 [[leapquest|LeapQuest]] 团队开发，论文被 ICML 2026 接收。

## 核心挑战

长临床视频的关键证据不仅细，而且稀疏——不仅要看对内容，还要看对时间。一个手术动作、一个内镜视野变化、一个器械进入与离开的瞬间，可能只持续几秒，却决定模型是否真的理解了临床过程。

## 技术框架

MedScope 模拟临床医生的观察方式：

1. 先快速建立全局理解
2. 再回到可疑时间窗，用 `crop_video` 截取片段
3. 用 `get_frame` 获取关键帧
4. 把局部观察结果整合进答案

这使得 MedScope 的推理过程天然具备**可审查性**：模型为什么回答这个结果，不只看它"说了什么"，还可以看它"回看了哪一段视频、找到了哪些帧、这些证据是否支持结论"。

## 三阶段训练路线

1. **临床推理 warm-up**：学习医学语义和长程视频理解
2. **Visual-CoT cold-start SFT**：教会模型何时需要更多证据、如何调用工具
3. **[[ga-grpo|GA-GRPO]] 强化时序对齐**：通过 grounding-aware reward 和 evidence-modulated advantage，让模型更偏向检索真正支持结论的视觉片段

## 配套数据集

[[clinvideosuite|ClinVideoSuite]] 是 MedScope 配套的大规模训练数据集，包含 635K 时间戳密集 caption、254K 证据关联 QA、34K 视觉 CoT 轨迹。

## 评测结果

在 SVU-31K、ClinVideo-Eval 等评测中，MedScope 在多粒度视频理解、细粒度时序推理和 grounded VQA 上取得开源模型中的 SOTA。

消融实验显示，去掉 evidence reward 会显著降低定位质量：R@0.5 从 40.1 下降到 33.2，mIoU 从 43.8 下降到 38.8，证明答案级监督不足以教会模型可靠地选择证据。

## 关联

- 与 [[ophiuchus|Ophiuchus]] 共同构成 [[think-with-images-videos|Think with Images/Videos]] 范式
- 将 [[医疗视频理解]] 从被动分析推进到主动证据驱动推理
- 与 [[uAI-NEXUS-MedVLM]] 同属医学AI多模态赛道，但方法论路径不同