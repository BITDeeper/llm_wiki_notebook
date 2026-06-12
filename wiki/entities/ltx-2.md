---
type: entity
title: LTX-2
created: 2026-06-11
updated: 2026-06-11
tags: [联合视频音频生成, 开源模型, 基线模型]
related: [baton, 联合视频-音频生成]
sources: ["rss/指令遵循媲美seedance-2.0！复旦腾讯联合提出baton，多说话人场景m-wer暴降76%.md"]
---
# LTX-2

LTX-2是开源的[[联合视频-音频生成]]模型，在[[baton|Baton]]论文中作为主要对比基线。

## 在Baton实验中的表现

- **Verse-Bench**（简单单事件场景）：与Baton结果相当
- **Sem100**（复杂语义场景）：被Baton在P-Acc上超越32%、M-WER上超越76%、DeSync上超越30%

LTX-2依赖粗粒度全局文本嵌入指导扩散过程，在复杂多阶段动作和多说话人场景下无法有效拆解语义，导致[[跨模态失配]]。