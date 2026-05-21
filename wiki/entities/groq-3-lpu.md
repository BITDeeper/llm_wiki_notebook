---
type: entity
title: Groq 3 LPU
tags: [hardware, lpu, groq, low-latency]
related: [groq, 英伟达, vera-rubin, rubin-gpu]
created: 2026-03-17
updated: 2026-03-17
sources: ["龙虾gpu来了！老黄杀入openclaw战场，全新rubin算力狂飙35倍.md"]
---

# Groq 3 LPU

由 [[Groq]] 团队开发（后被 [[英伟达]] 整合）的第三代语言处理单元（Language Processing Unit），是一颗专为极致低延迟 Token 生成而设计的确定性数据流处理器。

## 硬件特性

### 1. 确定性数据流架构
与 GPU 的动态调度不同，Groq 3 LPU 采用静态编译，由编译器直接调度指令。这种消除了动态调度开销的架构，使得其执行过程具有极高的确定性。

### 2. 极致的存储权衡
- **容量**：片上仅配备 500 MB SRAM，仅为 [[rubin-gpu]] 288 GB HBM4 的 **五百分之一**。
- **带宽**：带宽高达 150 TB/s，反过来是 Rubin GPU 的 **近 7 倍**。

这种“极小容量、极高带宽”的设计，使其天生适合处理需要频繁访问少量参数的解码和 Token 生成任务。

## 在 Vera Rubin 系统中的角色

英伟达并未用 LPU 替代 GPU，而是通过 **异构计算拆解** 实现了协同：
1.  **Prefill & Attention**：仍由 [[rubin-gpu]] 处理，利用其大显存和强算力优势。
2.  **解码 & Token 生成**：卸载给 Groq 3 LPU，利用其低延迟和高带宽优势。

两者通过以太网紧密耦合，延迟减半。这种分工使得 [[vera-rubin]] 系统在高价值 Token 生成（超级档位）上的性能提升了 **35 倍**。

## 生产与部署
Groq 3 LPU 由三星代工，已进入量产阶段，预计 2026 年 Q3 出货。每个 LPX 机架包含 256 颗 LPU，总计 128 GB 片上 SRAM 和 640 TB/s 的规模扩展带宽。