---
type: concept
title: 3D Scaling
tags: [quantum-computing, architecture, hardware-design, scaling]
related: [quantware, vio-40k, 扇出极限, chiplet-架构]
created: 2025-12-11
updated: 2025-12-11
sources: ["谷歌的百比特诅咒，被这家公司彻底冲破了.md"]
---

# 3D Scaling (3D 缩放)

[[3D Scaling]] 是一种在量子处理器设计中利用三维空间进行布线和集成的架构技术，旨在突破传统二维平面芯片的物理限制。

## 核心原理
传统量子芯片受限于“[[扇出极限]]”：控制线必须从芯片边缘引入，导致芯片中心的 qubit 难以连接或连线过长、干扰过大。
[[3D Scaling]] 通过构建立体空间结构，允许控制线从多层、多方向进入量子芯片，相当于给量子处理器“多加了一维空间”。

## 优势
- **降低噪声**：Qubit 之间的连线更短，减少了电磁干扰。
- **解决布线拥堵**：控制线不再挤在芯片边缘，布线密度不再受限于平面面积。
- **提升扩展性**：打破了二维平面的物理限制，为大规模 qubit 集成提供了空间基础。

## 应用
[[QuantWare]] 在其 [[VIO-40K]] 架构中采用了 [[3D Scaling]] 技术，这是其能够实现 10,000 qubit 规模并打破 [[百比特天花板]] 的关键因素之一。