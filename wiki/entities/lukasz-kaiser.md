---
type: entity
title: Łukasz Kaiser
created: 2026-05-27
updated: 2026-05-27
tags: [人物, transformer, ai研究员, google]
related: [transformer架构, llion-jones, post-transformer辩论-20260505, scaling-law]
sources: ["统治ai十年的transformer，要被亲爹亲手砸碎？.md"]
origin_date: 2017-06-12
---
# Łukasz Kaiser

Transformer联合发明人，2017年论文"Attention Is All You Need"的作者之一。后参与ChatGPT、GPT系列和o1的实际工程开发。

## 在架构之争中的角色

在2026年5月5日旧金山[[post-transformer辩论-20260505|辩论赛]]中，Kaiser作为[[transformer架构|Transformer]]的辩护方核心人物出场，面对三位挑战者的质疑。

## 核心论点

- **Scaling曲线为终极判据**：除非Post-Transformer证明更好的[[scaling-law|scaling曲线]]，否则Transformer仍是主流
- **并行性优势**：在最新Nvidia硬件上，小型GRU比大型Transformer慢50倍，顺序执行架构在当前硬件上不具竞争力
- **隐式持续学习**：Transformer的上下文学习（ICL）在数学上等价于梯度下降
- **关键让步**：承认AI Agent已能自动编写CUDA/Triton核函数，[[硬件彩票]]壁垒正在被瓦解
- **递归预言**："也许找到下一个架构的，恰恰会是Transformer本身"

## 立场特点

Kaiser的辩护策略不是否认Transformer的缺陷，而是将举证责任推给挑战者。他承认五大死穴的存在，但坚持"有问题的东西"和"应该被替换的东西"之间存在鸿沟。他主动提议建立困惑度统一测试标准，实质上为挑战者铺路。