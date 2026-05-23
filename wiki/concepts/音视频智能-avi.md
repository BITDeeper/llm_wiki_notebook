---
type: concept
title: 音视频智能 (AVI)
created: 2026-05-20
updated: 2026-05-20
tags: [多模态, 音视频, avi, 综述]
related: [omni-modal模型, 联合音视频生成, vla-视觉-语言-动作, 医疗视频理解, 原生理解生成统一]
sources: ["nus、牛津等联合发布音视频智能综述：系统梳理大模型时代的avi全景图.md"]
---
# 音视频智能 (AVI)

**音视频智能（Audio-Visual Intelligence, AVI）** 是利用AI同时处理、理解和生成音频与视觉信息的技术领域。它涵盖从语音识别、说话头生成、拟音合成到音视频问答、空间音频、具身导航等十几个子方向。

## 感知-生成-交互三主线

AVI的任务体系可组织为三条主线：

### 理解世界（感知）
音视频感知、声源定位、AVQA、跨模态检索与推理。模型不再"只看视频"或"只听语音"，而是在统一表示下做对齐、grounding与推理。AV-LLM的崛起让长视频理解、AVQA等任务有了新的基线。

### 创造世界（生成）
视频配音、音频驱动视频生成、[[联合音视频生成]]、音画编辑。当前最大瓶颈不是单模态画质或音质，而是联合生成中的**音画同步、跨身份一致性与长时一致性**。

### 与世界交互（交互）
音视频对话、[[omni-modal模型|omni-modal]]交互、具身智能与机器人。从级联式ASR+LLM+TTS到原生omni-modal实时对话，模型从"被动执行单轮指令"走向"主动审视环境并实时响应"。

## 演化路径

AVI经历了从"单点对齐"到"统一backbone"的范式跃迁：

1. **早期对齐阶段：** L3-Net、Wav2Lip — 解决"对得上"的问题
2. **可扩展表示阶段：** ImageBind、AudioLDM、MusicGen — 建立跨模态表示
3. **跨模态生成阶段：** MMAudio、FoleyCrafter、JavisDiT — 跨模态与联合生成
4. **统一模型阶段：** GPT-4o、Veo-3、Seedance 2.0、Qwen-Omni — 听-看-说-动一体化

## 技术基础

- **表示学习：** 对比对齐、masked/denoising重建、token级跨模态预测
- **模型架构：** 从CLIP/AudioCLIP到AV-HuBERT、ImageBind，再到Decoder-only LLM + omni encoder与MoE架构
- **生成范式：** VAE / GAN / Diffusion / 自回归（AR）/ Masked Autoregressive（MAR）五类
- **强化学习：** RLHF、DPO、reward shaping在AV生成上的应用

## 与其他概念的关系

- [[vla-视觉-语言-动作]] 是AVI交互主线在具身智能方向的自然延伸
- [[原生理解生成统一]] 与AVI的omni-modal趋势高度一致
- [[医疗视频理解]] 同属多模态视频理解，是AVI感知主线在医疗领域的应用
- [[任务执行范式]] 与AVI从单任务到闭环交互的演进形成呼应

## 未来六轴

详见[[nus、牛津等联合发布音视频智能综述：系统梳理大模型时代的avi全景图|综述原文]]，包括[[因果事件-声源grounding]]、[[av世界模型]]、长程AV上下文记忆、因果AV干预与可控生成、[[verifier与reward生态]]、交互式与负责任AVI。