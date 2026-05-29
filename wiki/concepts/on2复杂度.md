---
type: concept
title: O(n²)复杂度
created: 2026-05-27
updated: 2026-05-27
tags: [ai架构, 计算复杂度, transformer]
related: [transformer架构, post-transformer辩论-20260505]
sources: ["统治ai十年的transformer，要被亲爹亲手砸碎？.md"]
---
# O(n²)复杂度

[[transformer架构|Transformer]]注意力机制随序列长度呈平方增长的计算代价，被称为悬在Transformer头上的"达摩克利斯之剑"。

## 问题本质

在标准Transformer中，自注意力机制需要计算序列中每一对token之间的关系。当序列长度为n时，计算量为O(n²)，意味着序列长度翻倍，计算量增加四倍。这使得处理超长上下文（百万Token级别）的成本急剧攀升。

## 在辩论中的角色

在2026年5月的[[post-transformer辩论-20260505|辩论赛]]中，O(n²)复杂度被列为Transformer五大死穴之首。挑战者指出，当"图书馆有一亿本书"时，每次查询都要翻遍所有卡片的系统无法持续支撑。