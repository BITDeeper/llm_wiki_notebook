---
type: entity
title: RT-2
created: 2026-03-02
updated: 2026-03-02
tags: [模型, 基准, vla]
related: [vlanext, vla-视觉-语言-动作]
sources: ["想入局vla却不知从何下手？ntu&中大开源「终极菜谱」：从基座到频域建模，每一步都有实验支撑.md"]
---

# RT-2

**RT-2**（Robotics Transformer 2）是 Google 发布的具有里程碑意义的 [[vla-视觉-语言-动作]] 模型。

## 在 VLANeXt 研究中的角色
在 [[VLANeXt]] 的研究过程中，RT-2 被作为构建基线模型的起点。研究团队复现了一个类似 RT-2 的架构（基于 LLaMA，输入当前帧图像和指令，输出下一步动作），以此作为基准，通过逐步添加新的设计模块（如独立 Policy Head、[[流匹配]] 等），清晰地展示了 VLA 模型从基础到 SOTA 的演进路径。