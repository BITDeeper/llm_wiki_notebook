---
type: concept
title: 单流Transformer架构
tags: [架构, 深度学习, 视频生成]
related: [happyhorse-1-0]
created: 2026-04-09
updated: 2026-04-09
sources: ["神秘「欢乐马」霸榜视频模型！本以为seedance2.0已封神….md"]
---

# 单流Transformer架构

单流 Transformer 架构是一种深度学习模型架构，[[HappyHorse-1.0]] 采用了 40 层的该架构来处理视频生成任务。

## 特点

与多流或级联架构不同，单流架构通常旨在通过统一的路径处理数据，这可能有助于模型在保持高效推理的同时处理复杂的时空信息。HappyHorse-1.0 仅需 8 步去噪即可输出 1080P 视频，其架构设计被认为是实现这一高效率的关键因素之一。