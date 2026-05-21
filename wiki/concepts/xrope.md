---
type: concept
title: XRoPE
tags: [architecture, positional-encoding]
related: [moss-vl, 绝对时间戳编码]
created: 2026-04-13
updated: 2026-04-13
sources: ["准确回答视频细节！11b模型挑战视频理解「证据级」任务，开源可商用.md"]
---

# XRoPE

[[xrope]] 是 [[moss-vl]] 模型提出的一种统一位置编码方案。

## 特点
该方案能够同时建模时间维度、空间维度和文本查询维度。通过统一的位置编码，模型实现了跨模态的精细对齐，有助于在处理长视频时稳定抓取时间细节和空间关系。