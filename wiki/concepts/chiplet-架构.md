---
type: concept
title: Chiplet 架构
tags: [hardware-design, scalability, quantum-computing, semiconductor]
related: [quantware, vio-40k, 3d-scaling, 百比特天花板]
created: 2025-12-11
updated: 2025-12-11
sources: ["谷歌的百比特诅咒，被这家公司彻底冲破了.md"]
---

# Chiplet 架构

[[Chiplet 架构]]（小芯片架构）是一种将大型处理器拆分为多个模块化小芯片，并通过高保真互联技术将其组合成完整系统的设计方法。这一概念虽源于经典芯片领域（如 AMD Zen 架构），但被 [[QuantWare]] 成功引入量子计算领域。

## 在量子计算中的意义
在量子硬件中，制造单一大芯片面临巨大挑战：
- **良率低**：芯片面积越大，制造缺陷概率越高。
- **校准难**：大规模集成难以保证所有 qubit 的一致性。
- **扩展性差**：单一模块难以灵活扩展。

## 解决方案
[[Chiplet 架构]] 通过以下方式解决了上述问题：
- **模块化制造**：将大型 QPU 拆分为小模块，各自独立制造和校准，提高了良率和可靠性。
- **高保真互联**：通过高质量的芯片间连接技术，确保模块间信号传输不引入额外噪声。
- **灵活扩展**：可以根据需求像搭积木一样增加模块数量，实现线性扩展。

## 实例
[[QuantWare]] 的 [[VIO-40K]] 架构采用了 [[Chiplet 架构]]，配合 [[3D Scaling]]，成功实现了 10,000 qubit 的可扩展设计。