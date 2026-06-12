---
type: concept
title: 动态top-p策略
created: 2026-06-08
updated: 2026-06-08
tags: [稀疏注意力, 注意力机制, 效率优化]
related: [rtpturbo-v2, dsa-稀疏注意力, 内生稀疏性]
sources: ["rss/阿里rtpurbov2：原生transformer再次崛起，百步训练实现10倍稀疏注意.md"]
---
# 动态top-p策略

[[rtpturbo-v2|RTPurboV2]] 采用的 token 选择策略，对每个 query 保留累积注意力得分达到 p（如0.9）的 token 集合，替代传统的固定 top-k。

## 问题背景

传统稀疏注意力方法通常采用固定 top-k 策略，但存在根本性缺陷：不同的 attention head、不同的序列长度、不同的 query，所需的上下文 token 数量差异巨大。

以同一模型同一层的三个召回头为例，在64K上下文下，覆盖90%注意力质量所需的 token 数差异可达**三个数量级**，意味着不存在一个固定的 k 值能同时满足所有场景。

## 技术实现

- 对每个 query 保留累积注意力得分达到 p 的 token 集合
- 集中型 query 自动精简预算，分散型 query 自动扩展覆盖
- 配合**无排序的 top-p 解码核**：通过256-bin 直方图替代排序操作，将评分与筛选融合为单次 kernel launch，内存开销压缩至 O(1)

## 优势

- 自适应不同 head、序列长度和 query 的差异化需求
- 避免固定 top-k 的过度压缩或冗余计算
- 无排序解码核实现 O(1) 内存开销，适合实际部署