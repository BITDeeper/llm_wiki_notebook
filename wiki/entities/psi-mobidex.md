---
type: entity
title: Psi-MobiDex
tags: [数据集, 真机数据, 具身智能]
related: [灵初智能, psi-r2, raw-data-in-raw-data-out]
created: 2026-04-12
updated: 2026-04-12
sources: ["中国具身屠榜全球！10万小时数据炸场，pi、英伟达集体破防.md"]
---

# Psi-MobiDex

Psi-MobiDex 是 [[灵初智能]] 发布的内部真机数据集，规模达 5417 小时。

## 用途
该数据集主要用于 [[psi-r2]] 模型的预训练，与近 10 万小时的人类操作数据共同构成了模型的训练基础。

## 相关技术
在处理该数据集及人类数据时，灵初智能采用了 [[raw-data-in-raw-data-out]] 的范式，即尽量减少人为干预（如图像修复、关键点对齐），直接将原始图像和通过运动学计算转换的关节角度喂给模型。