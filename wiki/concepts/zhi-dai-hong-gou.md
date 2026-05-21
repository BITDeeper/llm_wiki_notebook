---
type: concept
title: "指代鸿沟"
tags: [multimodal, reasoning, limitations]
related: [thinking-with-visual-primitives, gan-zhi-hong-gou]
created: 2026-04-30
updated: 2026-04-30
sources: ["刚刚，deepseek多模态技术范式公布，以视觉原语思考.md"]
---

# 指代鸿沟

多模态大模型在推理过程中面临的核心瓶颈之一，指模型虽然能“看见”图像内容，但在进行复杂推理时，无法精确定位其正在讨论的视觉对象。

## 表现形式
- **计数错误**：在密集场景中（如人群照片），模型容易重复计数或遗漏。
- **空间描述混乱**：在描述复杂电路图或相对位置时，模型的前后回答可能自相矛盾，无法准确指代“左边那个大的”或“中间偏右”的模糊对象。

## 成因
自然语言天生具有模糊性。当模型使用自然语言构建思维链时，注意力机制会随着推理步骤的增加而逐渐“漂移”，导致逻辑锚点丢失。这与 [[gan-zhi-hong-gou]]（Perception Gap，即分辨率不足导致看不清）不同，指代鸿沟是认知层面的定位失效。

## 解决方案
[[DeepSeek]] 提出的 [[thinking-with-visual-primitives]] 范式旨在解决此问题，通过引入坐标和边界框作为“锚点”，将推理过程与图像的物理空间刚性绑定。