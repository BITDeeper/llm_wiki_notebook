---
type: concept
title: Equivocation
created: 2026-05-04
updated: 2026-05-04
tags: [logic, fallacy, linguistics]
related: [luo-ji-miu-wu, smartypat-bench]
sources: ["首个英文原生「弱智吧」！逻辑谬误数据集与生成框架来了-aaai'26.md"]
---
# Equivocation

[[Equivocation]]（偷换概念 / 一词多义）是一种逻辑谬误，指在论证过程中使用一个词的多种含义，导致逻辑推理的断裂。这种谬误常依赖于自然语言的歧义性。

## 典型案例

[[r-ShittyAskScience]] 中的经典例子：“Since smoking is bad for you, how come it cures salmon?”（既然吸烟有害，为什么能治好三文鱼？）。这里利用了单词 "cure" 既有“治疗”又有“腌制”的双重含义，制造了逻辑陷阱。

## 在数据集中的地位

[[Equivocation]] 是 [[SMARTYPAT-BENCH]] 中最常见的谬误类型之一。对于大模型而言，识别这类谬误往往需要理解词语的语境含义，这比单纯的形式逻辑推理更具挑战性。