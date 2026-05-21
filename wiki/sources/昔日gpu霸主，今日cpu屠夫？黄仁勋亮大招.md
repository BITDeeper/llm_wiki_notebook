---
type: source
title: "昔日GPU霸主，今日CPU屠夫？黄仁勋亮大招"
tags: [nvidia, cpu, ai-hardware, coreweave, strategy]
related: [英伟达, 黄仁勋, vera-cpu, coreweave, rubin-platform, 空间多线程, 供给侧革命]
created: 2026-04-29
updated: 2026-04-29
authors: ["新智元", "peter东"]
year: 2026
url: "https://mp.weixin.qq.com/s/5oHjxbLtIwqb9PkkAdWH_g"
venue: "新智元"
sources: ["昔日gpu霸主，今日cpu屠夫？黄仁勋亮大招.md"]
---

# 昔日GPU霸主，今日CPU屠夫？黄仁勋亮大招

## 摘要
本文详细报道了英伟达通过投资 CoreWeave 并推出独立 [[vera-cpu]] 进军数据中心 CPU 市场的战略举措。文章指出，黄仁勋的算力帝国正在开启一场以 [[vera-cpu]] 为武器的“[[供给侧革命]]”，旨在改变 AI 数据中心的建设模式。

## 核心要点

### 战略投资与绑定
- **20亿美元投资**：英伟达以每股 87.20 美元购入 CoreWeave 价值 20 亿美元的 A 类普通股，持股比例超过 11%。
- **算力期货**：这笔投资锁定了 CoreWeave 在 2030 年前建成 5 吉瓦 AI 工厂的计划，并包含高达 60 亿美元的英伟达硬件采购承诺。
- **优先供应权**：CoreWeave 将获得英伟达 [[rubin-platform]]、[[vera-cpu]] 和 BlueField 存储系统的优先供应权。

### Vera CPU 的独立与性能
- **战略转型**：[[vera-cpu]] 首次作为独立基础设施选项推向市场，不再仅作为 GPU 的附庸，标志着英伟达正式挑战英特尔和 AMD 在数据中心 CPU 领域的统治地位。
- **技术规格**：
    - **2270 亿**晶体管。
    - **88 个**定制 Olympus ARM 核心，支持 **176 个**线程。
    - **1.5 TB** 系统内存（是 Grace CPU 的三倍）。
    - **1.2 TB/s** 内存带宽（采用 SoCMM LPDDR5X 技术）。
    - **1.8 TB/s** 互连速度（通过 NVLink-C2C 技术）。
    - **50W** 功耗（对于 88 核 CPU 极低）。
    - L2 缓存翻倍（每核 2MB），L3 缓存提升 42%（162MB）。
- **空间多线程**：引入 [[空间多线程]] 技术，通过物理分区核心资源处理并发线程，同时保持确定性性能。

### 市场背景与竞争
- **应对大客户“叛逃”**：面对谷歌（TPU）、OpenAI（自研芯片）等大客户自研芯片的压力，英伟达通过绑定 CoreWeave 等 [[neocloud]] 厂商巩固基础设施层话语权。
- **AI 智能体的需求**：随着 AI 智能体应用普及，服务器 CPU 成为性能瓶颈，独立的高性能 CPU 成为刚需。

## 相关条目
- [[英伟达]]：全球 GPU 霸主，正通过 CPU 扩张版图。
- [[黄仁勋]]：英伟达 CEO，主导了此次战略投资。
- [[coreweave]]：专注于 AI 工作负载的云服务商，英伟达的深度盟友。
- [[rubin-platform]]：英伟达下一代计算架构。