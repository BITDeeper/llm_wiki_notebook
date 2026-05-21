---
type: entity
title: Vera CPU
tags: [nvidia, cpu, arm, data-center, ai-hardware]
related: [英伟达, rubin-platform, 空间多线程, grace-cpu]
created: 2026-04-29
updated: 2026-04-29
sources: ["昔日gpu霸主，今日cpu屠夫？黄仁勋亮大招.md"]
---

# Vera CPU

Vera CPU 是英伟达推出的最新一代数据中心处理器，也是英伟达首次作为独立产品（而非仅作为 GPU 的附庸）推向市场的 CPU。它标志着英伟达正式进军英特尔和 AMD 主导的数据中心 CPU 市场。

## 技术规格
Vera CPU 专为高负载 AI 工作负载设计，其规格在同类产品中极具竞争力：
- **核心架构**：基于下一代定制 Arm 架构，拥有 **88 个**定制 Olympus ARM 核心。
- **线程技术**：支持 **176 个**线程，引入了 [[空间多线程]]（Spatial Multi-Threading）技术。
- **晶体管数量**：高达 **2270 亿**个。
- **内存系统**：
    - **1.5 TB** 系统内存（是上一代 Grace CPU 的三倍）。
    - **1.2 TB/s** 内存带宽（采用 SoCMM LPDDR5X 技术）。
    - **1.8 TB/s** 互连带宽（通过 NVLink-C2C 技术，是 Grace 的三倍）。
- **缓存设计**：每个核心拥有 2MB L2 缓存（Grace 的两倍），共享 162MB L3 缓存（提升 42%）。
- **功耗**：仅 **50W**（对于 88 核 CPU 极低），显著降低数据中心能耗。

## 战略意义
Vera CPU 的独立上市是英伟达“[[供给侧革命]]”的关键一环。随着 AI 智能体应用的普及，服务器 CPU 正成为制约系统整体性能的瓶颈。Vera CPU 旨在解决这一问题，为客户提供绕过传统 x86 架构瓶颈的方案，赋予云服务商如 [[coreweave]] 更大的架构灵活性。

## 参见
- [[Rubin 平台]]：与 Vera CPU 配套的下一代 GPU 架构。
- [[Grace CPU]]：Vera CPU 的前代产品。