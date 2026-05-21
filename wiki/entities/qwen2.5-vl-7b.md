---
type: entity
title: Qwen2.5-VL-7B
tags: [model, multimodal, qwen, alibaba]
related: [ca-tts, cdrl, 阿里巴巴集团]
created: 2026-03-22
updated: 2026-03-22
sources: ["浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力丨cvpr'26.md"]
---

# Qwen2.5-VL-7B

Qwen2.5-VL-7B 是阿里巴巴通义千问系列的多模态视觉-语言模型，参数量为 7B。

## 在研究中的应用
- 在 [[CA-TTS]] 相关研究中，被选定为统一的基座模型。
- 实验表明，通过 [[CDRL]] 训练和 [[CA-TTS]] 框架推理，该模型在 Math-Vision 等基准上的准确率得到了显著提升（从 23.0% 提升至 42.4%）。
- 即使在 CA-TTS 框架中让 Qwen2.5-VL-7B 自身充当“专家模型”进行校准，其性能仍优于传统的 Majority Voting 方法。