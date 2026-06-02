---
type: entity
title: Vera CPU
tags: [nvidia, cpu, arm, data-center, ai-hardware, 产品, 英伟达, agent原生计算]
related: [英伟达, rubin-platform, 空间多线程, grace-cpu, 黄仁勋, vera-rubin, agent原生计算, coreweave, 供给侧革命]
created: 2026-04-29
updated: 2026-06-01
sources: ["昔日gpu霸主，今日cpu屠夫？黄仁勋亮大招.md", "刚刚，老黄重新发明pc！全球首个agent原生电脑问世.md"]
---

# Vera CPU

Vera CPU 是英伟达推出的最新一代数据中心处理器，也是英伟达首次作为独立产品（而非仅作为 GPU 的附庸）推向市场的 CPU。它标志着英伟达正式进军英特尔和 AMD 主导的数据中心 CPU 市场。作为 [[vera-rubin]] 系统的核心处理器，黄仁勋宣称："到今天为止，世界上所有的 CPU 都是为人造的。这一刻，Vera CPU 是给智能体用的。"——它是全球首款"不为人类、只为 Agent 造"的 CPU。

## 设计哲学

黄仁勋比喻："CPU 是指挥家，GPU 是交响乐团"。Vera CPU 专为 [[agent原生计算]] 时代的 Agent 调度和编排而设计，而非传统的人机交互场景。随着 AI 智能体应用的普及，服务器 CPU 正成为制约系统整体性能的瓶颈，Vera CPU 旨在解决这一问题。

## 技术规格

Vera CPU 专为高负载 AI 工作负载设计，其规格在同类产品中极具竞争力：

- **核心架构**：基于下一代定制 Arm 架构，拥有 **88 个**定制 Olympus ARM 核心。
- **线程技术**：支持 **176 个**线程，引入了 [[空间多线程]]（Spatial Multi-Threading）技术。
- **晶体管数量**：高达 **2270 亿**个。
- **内存系统**：
    - **1.5 TB** 系统内存（是上一代 Grace CPU 的三倍）。
    - **1.2 TB/s** 内存带宽（采用 SoCMM LPDDR5X 技术，是市面最强 x86 CPU 的 2 至 3 倍）。
    - **1.8 TB/s** 互连带宽（通过 NVLink-C2C 技术，是 Grace 的三倍）。
- **缓存设计**：每个核心拥有 2MB L2 缓存（Grace 的两倍），共享 162MB L3 缓存（提升 42%）。
- **功耗**：仅 **50W**（对于 88 核 CPU 极低），尽可能多塞 CPU 进 AI 数据中心，不抢生成 token 的宝贵电力，显著降低数据中心能耗。

## 三大硬核指标

1. **世界第一的单核性能**：每个时钟周期抓取、解码、执行 10 条指令，创下世界最高纪录。
2. **刷新天花板的带宽**：Scalable Coherency Fabric"光速级"互联，无 chiplet 税，无跨芯片边界损耗。首款使用 PCIe Gen6 的 CPU，配 1.2 TB/s LPDDR5X 带宽。
3. **极致能效**：50W 超低功耗，为 AI 数据中心最大化 CPU 密度。

## 实测性能

- SQL 速度比 x86 快 3 倍
- 实时流处理（如纽交所数据）比 x86 快 6 倍

## 战略意义

Vera CPU 的独立上市是英伟达"[[供给侧革命]]"的关键一环，为客户提供绕过传统 x86 架构瓶颈的方案，赋予云服务商如 [[coreweave]] 更大的架构灵活性。

## 参见

- [[Rubin 平台]] / [[vera-rubin]]：与 Vera CPU 配套的下一代 GPU 架构。
- [[Grace CPU]]：Vera CPU 的前代产品。
- [[英伟达]]：母公司。
- [[黄仁勋]]：英伟达 CEO。