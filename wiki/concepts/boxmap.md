---
type: concept
title: BoxMap
created: 2026-03-23
updated: 2026-03-23
tags: [spatial-representation, layout]
related: [unicalli, 列级排版, duplicate-rope]
sources: ["告别ai「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨iclr'26.md"]
---
# BoxMap

BoxMap（边界框图）是 [[UniCalli]] 模型中引入的一种空间表示形式，用于编码每个字符的位置和大小。

## 功能
它充当了空间“脚手架”的角色。通过在生成过程中同时预测这个布局框，模型被迫内化字符间距、大小变化的排版原则，从而实现高质量的 [[列级排版]]。

## 技术细节
BoxMap 的特征通常与图像和文本特征一起输入到 [[MMDiT]] 模型中，并通过 [[Duplicate RoPE]] 进行位置对齐。