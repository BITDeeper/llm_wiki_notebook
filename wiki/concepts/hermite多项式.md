---
type: concept
title: Hermite多项式
created: 2026-05-28
updated: 2026-05-28
tags: [数学, 正交多项式, 高斯分布, 理论工具]
related: [lejepa, 各向同性高斯分布约束, 线性可识别性, sturm-liouville理论]
sources: ["lecun新证明：世界是高斯的.md"]
---
# Hermite多项式

Hermite 多项式是高斯分布下转移算子的特征函数，构成函数空间的自然正交基，类似于周期函数中的傅里叶级数。

## 在 LeJEPA 证明中的作用

Hermite 多项式的关键性质是：一个函数中非线性成分的次数越高，它在正样本对之间的相关性就越低。

[[lejepa]] 的对齐损失要最大化正样本对之间的相关性，因此任何非线性扭曲都会被严格惩罚。这解释了为什么 LeJEPA 学到的映射必然是线性的——非线性成分在优化过程中被系统性地压制。

## 与 Sturm-Liouville 理论的关系

Hermite 多项式的性质与 [[sturm-liouville理论]] 结合，构成了 LeJEPA 线性可识别性证明的数学基础。前者解释了非线性的惩罚机制，后者证明了高斯分布的唯一性。