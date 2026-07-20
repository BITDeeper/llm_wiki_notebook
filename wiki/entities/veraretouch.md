---
type: entity
title: VeraRetouch
created: 2026-06-14
updated: 2026-06-14
tags: [ai修图, vlm, 端侧部署, 图像处理]
related: [vivo-blueimage-lab, aetherretouch-1m, 全可微分修图执行器, 推理式修图, 美学照片重构]
sources: ["rss/0.6b-vlm重塑ai修图推理流程，支持手机端侧部署，vivo+浙大出品.md"]
origin_date: 2026-06-14
---
# VeraRetouch

VeraRetouch 是由 [[vivo-blueimage-lab|vivo BlueImage Lab]]、浙江大学AiXM实验室、之江实验室与中国科学院大学联合提出的一个轻量、全可微分、支持移动端部署的[[推理式修图|推理式照片修图]]框架。

## 核心架构

VeraRetouch 基于 FastVLM-0.5B（0.6B参数）构建。输入图像与用户指令经过轻量VLM生成结构化推理与控制latent，随后由[[全可微分修图执行器|Retouch Renderer]]输出最终修图结果。

- **修图大脑**：0.6B视觉语言模型，负责分析画面问题并生成修图计划。
- **修图执行器**：全可微分的 Retouch Renderer，将高层语言意图转化为低层像素级调整。
- **控制维度**：将修图空间拆解为光照、全局色彩和特定色彩三个相对独立的控制维度。

## 支持的任务

1. **Auto-Retouch（自动修图）**：模型自动分析光影和色彩问题并生成方案。
2. **Style-Retouch（风格修图）**：根据自然语言描述（如“温暖秋日感”）推理调色方向。
3. **Param-Retouch（参数修图）**：根据明确的参数指令（如对比度、曝光）进行精确修图。

## 性能表现

- **客观指标**：在FiveK-Bench自动修图任务上达到26.85 dB PSNR，超越Flux.1 Kontext等大型模型。
- **人类偏好**：38人盲评在视觉美感、指令一致性和纹理保持方面获最高评分。
- **推理速度**：H20 GPU上需6.9秒/张；在iPhone 16 Pro上约13.56秒/张。

## 局限性

- 目前仅支持全图调整，缺乏局部蒙版能力（未来有望通过引入像素级mask机制解决）。
- 在处理“分布外（OOD）”的极端修图参数时可能出现不一致。