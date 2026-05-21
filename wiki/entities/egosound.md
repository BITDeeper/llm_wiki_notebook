---
type: entity
title: EgoSound
tags: [数据集, 基准测试, 多模态, 听觉理解]
related: [第一人称声音理解, ego4d, egoblind, qwen3-omni-thinking-30b, vla-视觉-语言-动作]
created: 2026-03-12
updated: 2026-03-12
sources: ["复旦等推出「第一人称视听基准」，补齐多模态模型「听觉拼图」.md"]
---

# EgoSound

**EgoSound** 是首个专门面向多模态大模型（MLLMs）的第一人称“声音理解”评测基准。由复旦大学、上海创智学院、INSAIT、华东师范大学和南开大学联合提出。

## 核心目标
旨在解决现有第一人称视频理解基准高度“视觉中心化”的问题，系统评测模型在真实世界中利用声音线索进行空间定位、因果推理和跨模态理解的能力。

## 数据集构成
融合了两类互补数据源：
- **[[Ego4D]]**：覆盖大量日常第一人称活动。
- **[[EgoBlind]]**：聚焦更依赖听觉理解、交互和导航的场景。

最终规模为 **900 段严格筛选视频** + **7315 条验证后的开放式问答（[[OpenQA]]）**。

## 评测任务体系
EgoSound 系统拆解了第一人称声音能力的边界，覆盖 7 类任务：
1. **Sound Characteristics**（声音特征）
2. **Counting**（计数）
3. **Temporal Attribute**（时序属性）
4. **Spatial Location**（空间定位）
5. **Sound Source Identification**（声源识别）
6. **Inferential Causality**（因果推理）
7. **Cross-Modal Reasoning**（跨模态推理）

## 评测结果
- **人类表现**：平均准确率 83.9%。
- **SOTA 模型表现**：[[qwen3-omni-thinking-30b]] 准确率 56.7%。
- **关键差距**：模型在空间定位、时序属性和因果推理上表现最差，说明当前模型仍难以将声音转化为可靠认知。

## 技术细节
为确保问题必须依赖听觉线索，研究团队采用了多阶段筛选机制：
1. 定位关键的人-物交互片段。
2. 生成片段的“音频中心”描述。
3. 构建并筛选高质量 [[OpenQA]]。
4. 借助多个强模型辅助标注。

## 外部链接
- Paper: [arXiv:2602.14122](https://www.arxiv.org/abs/2602.14122)
- Github: [github.com/groolegend/EgoSound](https://github.com/groolegend/EgoSound/)
- Huggingface: [EgoSound Dataset](https://huggingface.co/datasets/grooLegend/EgoSound/)
- Project Page: [groolegend.github.io/EgoSound](https://groolegend.github.io/EgoSound/)