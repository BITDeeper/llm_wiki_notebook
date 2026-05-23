---
type: entity
title: ERA5
created: 2026-05-15
updated: 2026-05-15
tags: [数据集, 气象, 再分析]
related: [emformer, 误差累积]
sources: ["气象预测长期误差太难搞？icml-2026-这项成果用“累积上下文”给出了最优解.md"]
---
# ERA5

ERA5 是欧洲中期天气预报中心（ECMWF）发布的全球大气再分析数据集，是气象预测领域最常用的评测基准之一。

## 在本 Wiki 中的角色

ERA5 是 [[emformer|EMFormer]] 论文的主要评测数据集。研究团队在两种分辨率上进行了验证：

- **1.4° 分辨率**：EMFormer 在 6 小时至 10 天预测中 RMSE 最低、ACC 最高，全面超越 Pangu-Weather、GraphCast、OneForecast 等基线模型。
- **0.25° 分辨率**：EMFormer 在多变量预测中 RMSE 显著低于基线模型。

ERA5 数据集也是气象 AI 领域评估 [[误差累积]] 问题的标准测试平台。