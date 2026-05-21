---
type: concept
title: MRAM+SRAM混合架构
tags: [hardware-design, memory-technology, ai-hardware]
related: [寒序科技, groq, 内存墙, mram]
created: 2026-03-10
updated: 2026-03-10
sources: ["截击英伟达！openclaw狂吞token，北大系芯片黑马剑指2000-tokenss.md"]
---

# MRAM+SRAM混合架构

MRAM+SRAM 混合架构是一种结合了磁性随机存储器（MRAM）和静态随机存储器（SRAM）优点的片上存储方案，旨在解决大模型推理中的容量与速度矛盾。

## 组成与作用
- **SRAM (Static Random-Access Memory)**：负责最高速的缓存与中间变量计算。优势是速度极快，劣势是密度低（占用芯片面积大）。
- **MRAM (Magnetoresistive Random-Access Memory)**：一种新型非易失性存储器。优势是密度远高于 SRAM，且功耗极低；速度接近 SRAM。

## 优势
[[Groq]] 等纯 SRAM 方案虽然速度快，但难以在单片上运行大模型（如 70B 参数）。[[寒序科技]] 提出的混合架构利用 MRAM 存储大规模权重，利用 SRAM 处理热点数据，从而在保持 [[确定性流式推理]] 低延迟特性的同时，大幅提升了单片的模型容量，目标是实现 **2000 Tokens/s** 的推理性能。