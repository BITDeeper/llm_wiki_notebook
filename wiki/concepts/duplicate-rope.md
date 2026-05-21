---
type: concept
title: Duplicate RoPE
created: 2026-03-23
updated: 2026-03-23
tags: [positional-encoding, transformer]
related: [unicalli, boxmap, mmdit]
sources: ["告别ai「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨iclr'26.md"]
---
# Duplicate RoPE

Duplicate RoPE（重复旋转位置编码）是 [[UniCalli]] 模型中用于实现多模态空间对齐的技术。

## 原理
该技术首先计算出书法图像的 2D 旋转位置编码（RoPE），然后直接将其“复制”并附加到文本和 [[BoxMap]]（布局框）的特征上。

## 作用
通过添加可学习的调制嵌入，Duplicate RoPE 确保了文本、图像和布局框三种不同模态的信息能够在同一个绝对空间坐标系中对话，从而保证了生成内容的几何一致性。