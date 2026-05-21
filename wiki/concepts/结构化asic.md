---
type: concept
title: 结构化ASIC
tags: [hardware-design, asic, fpga]
related: [hc1, fpga, asic]
created: 2026-02-21
updated: 2026-02-21
sources: ["24人团队硬刚英维达！amd前高管梦之队出手，新芯片每秒17000个token.md"]
---

# 结构化ASIC

[[结构化ASIC]]（Structured ASIC）是一种介于 FPGA 和全定制 ASIC 之间的芯片设计方法。

## 设计理念
结构化ASIC 使用预定义的门阵列和固化 IP 核，底层电路结构固定不变。设计师主要通过改变顶层的金属互连层来实现特定的逻辑功能。

## 优势
- **成本较低**：相比于全定制 ASIC，掩模层数少，设计成本和 NRE 费用更低。
- **周期更短**：[[Taalas]] 利用此思路将 [[HC1]] 的生产周期从 6 个月缩短至 2 个月。
- **性能优于 FPGA**：虽然灵活性不如 FPGA，但性能和能效远高于后者。

## 在 AI 时代的应用
随着 AI 模型架构的快速变化，全定制 ASIC 的风险过高。结构化ASIC 提供了一种折中方案，允许厂商以相对较低的成本和较快的周期，针对特定模型（如 Llama 3.1）进行硬件优化。