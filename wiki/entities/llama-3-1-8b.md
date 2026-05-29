---
type: entity
title: Llama 3.1-8B
created: 2026-05-27
updated: 2026-05-27
tags: [大语言模型, meta, 开源模型]
related: [fp4训练, mxfp4, amd-instinct-mi355x]
sources: ["amd新论文颠覆认知：fp4训练不稳定，原因不是随机性不足.md"]
---
# Llama 3.1-8B

Llama 3.1-8B 是 Meta 发布的 80 亿参数开源大语言模型。

## 在 FP4 训练研究中的角色

Llama 3.1-8B 是 AMD 联合 [[宾夕法尼亚州立大学]] 的 [[fp4训练]] 突破性论文中使用的实验模型。研究团队在 [[amd-instinct-mi355x]] GPU 上，使用 [[mxfp4]] 格式在 C4 数据集上完成了该模型的全流程预训练。

实验设置遵循 MLPerf 标准，收敛目标为验证集困惑度达到 3.3。最终结果显示，MXFP4 + [[确定性hadamard旋转]] 的训练轨迹紧密跟踪 FP8 基线，端到端实现 9-10% 的净加速。