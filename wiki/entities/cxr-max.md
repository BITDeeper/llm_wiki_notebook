---
type: entity
title: CXR-MAX 数据集
created: 2026-05-13
updated: 2026-05-13
tags: [数据集, 医疗AI, 胸片诊断, 多教师蒸馏, 基准测试]
related: [apo-autonomous-preference-optimization, 悉尼科技大学, 医疗视频理解]
sources: ["icml-2026-将多教师冲突转化为动态约束，破解多模态大模型推理对齐难题.md"]
origin_date: 2026-05-13
---
# CXR-MAX 数据集

CXR-MAX（Multi-source Alignment for X-rays）是由 [[悉尼科技大学]] 研究团队构建的大规模多源胸片诊断基准数据集，专为促进高风险领域的多教师蒸馏研究而设计。

## 数据集概况

- **规模**：170,982 个推理实例
- **疾病覆盖**：14 种胸部疾病
- **教师模型**：7 个主流多模态大语言模型（MLLM）
  - GPT-5
  - Gemini-2.5
  - Sonnet-4
  - Grok-4
  - Qwen-VL-MAX
  - GLM-4.5V
  - Moonshot
- **基础数据**：扩展自著名的 MIMIC-CXR 数据集

## 设计目的

CXR-MAX 旨在评估真实非平稳环境下的推理对齐效果。通过汇集来自 7 个不同主流 MLLM 的推理轨迹，该数据集揭示了教师模型在医疗诊断任务中的严重非平稳性——部分疾病（如实变、水肿）的预测准确率落差超过 70%。

## 资源链接

- 数据集地址：https://huggingface.co/datasets/MiaoMiaoYang/CXR-MAX
- 代码仓库：https://github.com/XiaoyuYoung/APO
