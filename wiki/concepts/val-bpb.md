---
type: concept
title: val-bpb
tags: [metrics, evaluation]
related: [autoresearch, 自进化训练循环]
created: 2026-03-09
updated: 2026-03-09
sources: ["卡帕西开源agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k.md"]
---

# val-bpb

[[val-bpb]] (Validation Bits Per Byte，验证集每字节比特数) 是衡量模型压缩性能和预测准确度的指标。

## 定义
数值越低，表示模型对验证集数据的预测越准确，模型效果越好。

## 特点
-   **模型无关性**：该指标与模型的大小（参数量）无关，允许在不同规模的模型之间进行公平比较。
-   **极简决策**：在 [[autoresearch]] 等自动化框架中，它被用作唯一的“铁律”指标，极大地简化了评估逻辑，无需人工介入复杂的权衡。

## 应用
在 [[自进化训练循环]] 中，AI 仅需比较当前模型与基线模型的 val_bpb 值，即可决定是否保留代码修改。