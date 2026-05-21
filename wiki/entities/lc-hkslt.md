---
type: entity
title: LC-HKSLT
tags: [dataset, sign-language, hong-kong]
related: [signthought, 香港理工大学, gloss-free-手语翻译]
created: 2026-05-04
updated: 2026-05-04
sources: ["acl-2026｜ai-for聋哑群体，港理工开源思考型手语翻译模型.md"]
---

# LC-HKSLT

**LC-HKSLT** (Large-scale Continuous Hong Kong Sign Language Translation) 是由 [[香港理工大学]] 团队构建的大规模香港手语数据集，随 [[signthought]] 模型一同发布。

## 数据特点
- **规模**：总计包含 **1311 小时** 的手语视频，涵盖 432K 个片段。
- **来源**：主要来自公开视频场景中的播报式内容，具有持续可见的手语翻译员。
- **标注**：仅保留句子级监督信号，不引入 gloss 标注或手语识别词汇表，属于**弱监督学习**数据集。
- **覆盖范围**：覆盖 14 位手语者，词汇量达到 125,833。

## 应用价值
LC-HKSLT 提供了更接近真实部署环境的数据形态。实验表明，在 LC-HKSLT 全量数据上进行预训练能显著提升模型性能（BLEU-4 从 21.15 提升至 30.22），证明了大规模、领域内一致的 sign-text 数据对于手语翻译的重要性。

## 子集
为了与现有中文手语翻译 benchmark 保持可比性，研究中主要使用了一个精心整理的 **30 小时子集**进行评测。