---
type: entity
title: HunyuanVideo
created: 2026-05-28
updated: 2026-05-28
tags: [视频生成, 扩散模型, 基础模型, 腾讯]
related: [surf, 高分辨率视频生成加速]
sources: ["高分辨率视频生成不再慢半拍：让大模型保留“原味”的同时提速十余倍.md"]
---
# HunyuanVideo

HunyuanVideo是腾讯混元团队开发的视频生成基础模型。在[[surf]]加速框架的跨模型验证中，HunyuanVideo实现了约8.7倍的推理加速，证明了SURF框架的[[插件式兼容]]能力。

## 与SURF的兼容性

SURF作为通用加速范式，可在不修改HunyuanVideo基础架构的前提下接入并实现显著加速，验证了该方法不局限于单一模型。