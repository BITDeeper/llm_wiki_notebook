---
type: entity
title: Mabyduck
created: 2026-05-30
updated: 2026-05-30
tags: [评测平台, 图像质量, 主观评测]
related: [pico-感知图像编解码器, 感知压缩, bayesian-elo评分]
sources: ["苹果用ai重新发明了图像压缩：同样画质，文件只要三分之一.md"]
---
# Mabyduck

Mabyduck 是一个第三方评测平台，专注于组织大规模人类主观图像质量评测。

## 在 PICO 项目中的角色

苹果团队委托 Mabyduck 组织了 [[pico-感知图像编解码器|PICO]] 的大规模人类主观评测：

- **评测者规模**：610 位经过筛选的评测者
- **筛选条件**：需通过色盲检测和压缩伪影辨别测试
- **评测方式**：盲测两两对比
- **数据量**：共收集 74,925 次配对比较结果
- **评分方法**：汇总为 [[bayesian-elo评分|Bayesian ELO]] 分数