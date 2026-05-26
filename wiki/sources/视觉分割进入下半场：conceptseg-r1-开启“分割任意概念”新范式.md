---
type: source
title: "视觉分割进入下半场：ConceptSeg-R1 开启分割任意概念新范式"
created: 2026-05-25
updated: 2026-05-25
tags: [视觉分割, 概念分割, 强化学习, 多模态大模型]
related: [conceptseg-r1, 概念分割, meta-grpo, sam-segment-anything-model, 我爱计算机视觉]
sources: ["视觉分割进入下半场：conceptseg-r1-开启“分割任意概念”新范式.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/O0WcEyTd1-p2r6O-widSpA"
venue: 我爱计算机视觉微信公众号
---
# 视觉分割进入下半场：ConceptSeg-R1 开启"分割任意概念"新范式

本文由 [[我爱计算机视觉]] 发布，报道了由南洋理工大学、大连理工大学等机构联合提出的 [[conceptseg-r1]] 模型。该工作标志着视觉分割从"类别分割"向[[概念分割]]的范式转变。

## 核心内容

- **问题定义**：传统分割模型只能处理可见物体或开放词汇类别，无法处理由上下文、关系、功能、规则和推理共同定义的抽象概念。
- **概念三级分类**：将概念按认知复杂度分为上下文无关（CI）、上下文相关（CD）和上下文推理（CR）三个等级。
- **技术方案**：提出 [[meta-grpo]]（元群组相对策略优化）机制和概念翻译模块（CTM），实现从演示中归纳规则并转化为像素级分割。
- **性能表现**：在16个基准测试上全面领先，7B版本在CD和CR任务上达到82.8 mIoU；零样本迁移在Cityscapes上达到62.6 mIoU，超过原生SAM 3。

## 关键链接

- 论文地址：https://arxiv.org/abs/2605.20385
- 项目主页：https://ntu-ai4x.github.io/ConceptSeg-R1
- 代码仓库：https://github.com/NTU-AI4X/ConceptSeg-R1（已开源）