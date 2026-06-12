---
type: concept
title: MTP（多词元推理）
created: 2026-06-08
updated: 2026-06-08
tags: [推理优化, 训练优化, 效率, 词元]
related: [macaron-v1-preview, dsa-稀疏注意力, mint-toolkit]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# MTP（多词元推理）

提高模型训练和推理效率的技术，通过一次推理过程预测多个词元（token），减少总体推理步数。

## 技术特点

- 一次推理过程输出多个词元，而非传统的逐词元生成
- 显著提高训练和推理效率
- 与 [[dsa-稀疏注意力|DSA（稀疏注意力）]] 结合可进一步降低大模型训练成本

## 应用

在 [[macaron-v1-preview|Macaron-V1-Preview]] 中，MTP 与 DSA 结合使用，支撑749B模型在有限算力下的高效训练。

## 行业采用

- Macaron-V1-Preview：支持 MTP + DSA
- M2.7：支持 MTP
- Qwen3.6：支持 MTP