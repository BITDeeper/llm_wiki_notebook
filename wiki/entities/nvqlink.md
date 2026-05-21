---
type: entity
title: NVQLink
tags: [nvidia, interconnect, quantum-computing, hardware-interface]
related: [cuda-q, quantware, vio-40k, 量子-经典混合计算, 英伟达]
created: 2025-12-11
updated: 2025-12-11
sources: ["谷歌的百比特诅咒，被这家公司彻底冲破了.md"]
---

# NVQLink

[[NVQLink]] 是 [[英伟达]] 开发的高速互联协议，旨在连接量子处理器（QPU）与经典计算资源（如 GPU），是 [[量子-经典混合计算]] 的基础设施。

## 功能与作用
- **高速对接**：提供量子算力进入经典计算系统的物理通道，解决了量子计算机作为“算力孤岛”的问题。
- **数据吞吐**：支持大规模数据在量子处理器与经典处理器之间的快速传输，满足预处理和误差校正的需求。

## 生态意义
[[NVQLink]] 与 [[CUDA-Q]] 软件栈共同构成了英伟达在量子时代的“入口”策略。虽然英伟达不直接生产量子芯片，但通过控制这一标准接口，它成为了量子算力接入现实世界的关键守门人。

## 应用案例
[[QuantWare]] 的 [[VIO-40K]] 架构宣布支持与 [[NVQLink]] 直接对接，使得开发者可以通过英伟达的生态体系直接调用万级 qubit 的量子算力。