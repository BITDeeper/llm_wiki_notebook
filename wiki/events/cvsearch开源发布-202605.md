---
type: event
title: CVSearch 开源发布
created: 2026-05-27
updated: 2026-05-27
tags: [开源发布, 视觉搜索, ICML-2026]
related: [cvsearch, 认知驱动视觉搜索, 哈尔滨工业大学深圳]
sources: ["icml-2026-哈工深等开源cvsearch：首创认知驱动视觉搜索，让大模型学会\"看重点\".md"]
origin_date: 2026-05-27
participants: [哈尔滨工业大学深圳, 深圳鹏城实验室, 中国科学院深圳先进技术研究院]
causes: []
effects: []
significance: medium
---
# CVSearch 开源发布

2026年5月，[[哈尔滨工业大学深圳]]、[[深圳鹏城实验室]] 和 [[中国科学院深圳先进技术研究院]] 联合开源了 [[cvsearch]] 框架。该框架首创 [[认知驱动视觉搜索]] 方法，论文被 ICML 2026 录用。

## 事件背景

多模态大模型虽然推理能力越来越强，但面对 4K/8K 超清图像时因严重下采样变成"近视眼"，[[高分辨率感知瓶颈]] 日益突出。现有视觉搜索方法陷入效率与鲁棒性的两难困境。

## 核心成果

- 提出三阶段认知工作流：全局认知评估→专家辅助搜索→语义引导自适应扫描
- [[语义引导自适应切分]]（SGAP）技术实现语义完整的图像切分
- [[免训练框架]] 设计，可直接应用于 Qwen、LLaVA、InternVL 等模型
- 在 HR-Bench 8K 上达到 77.6（SOTA），提升 20.2 个百分点

## 资源

- 论文：https://arxiv.org/abs/2605.23655
- 代码：https://github.com/liliupeng28/ICML26-CVSearch