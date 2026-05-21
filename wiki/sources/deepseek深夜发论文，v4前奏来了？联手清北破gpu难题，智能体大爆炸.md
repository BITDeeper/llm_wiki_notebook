---
type: source
title: "DeepSeek深夜发论文，V4前奏来了？联手清北破GPU难题，智能体大爆炸"
tags: [deepseek, dualpath, inference, agent, io-optimization]
related: [dualpath, 计算与存储解耦, pd分离架构, 缓存-计算比率, openclaw]
created: 2026-02-27
updated: 2026-02-27
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/umXriXhPR9BIrnFrk1Xlng"
venue: "新智元"
sources: ["deepseek深夜发论文，v4前奏来了？联手清北破gpu难题，智能体大爆炸.md"]
---

# DeepSeek深夜发论文，V4前奏来了？联手清北破GPU难题，智能体大爆炸

## 概述
本文报道了 DeepSeek 联合北京大学、清华大学发布的针对智能体推理优化的 [[dualpath]] 架构。该架构旨在解决大规模 [[kv-cache]] 从外部存储读取带来的 I/O 瓶颈，通过 [[计算与存储解耦]] 技术，实现了离线推理吞吐量提升 1.87 倍、在线场景下每秒智能体运行次数提升 1.96 倍的性能突破。

## 核心观点
- **瓶颈转移**：在智能体长上下文推理中，性能瓶颈已从计算转移到 I/O（内存/存储带宽）。GPU 大量时间处于空转等待数据状态。
- **架构创新**：[[dualpath]] 引入了“Storage-to-Decode”的第二条加载通路，将“思考”与“回忆”并行化，消除了 KV-Cache 加载的 I/O 开销。
- **经济效益**：软件层面的优化带来了近乎 2 倍的性能提升，意味着在不增加硬件成本的情况下，Agent 的部署成本可以减半。

## 关键技术细节
- **缓存-计算比率**：DeepSeek 指出在智能体场景下该比率极高（22GB/PFLOP），表明 I/O 是瓶颈。
- **块式流处理**：将庞大的 KV Cache 切分成小块，计算第 N 块时预加载第 N+1 块，实现“边下载边播放”。
- **PD分离架构优化**：解决了传统 Prefill-Decode 分离架构中存储网络利用率不均衡的问题。

## 性能数据
- 在 DeepSeek V3.2 (660B/27B) 和 Qwen 2.5-32B 上进行测试。
- 离线推理（强化学习 rollout）中吞吐量最高提升 **1.87倍**。
- 在线场景下每秒智能体运行次数提升 **1.96倍**。
- 在 1152 块 GPU 的集群上实现了线性扩展。

## 局限性与挑战
- **工具调用延迟**：论文主要优化 KV-Cache 加载，但未考虑工具调用（如运行代码、查询数据库）的延迟。
- **硬件依赖**：DualPath 高度依赖特定的硬件拓扑（如 GDRDMA、特定的网卡带宽配置）。
- **资源压力转移**：虽然解决了 GPU 空转，但将压力转移到了 CPU 内存（DRAM）和存储网络。

## 行业意义
DualPath 的诞生标志着从“算力为王”到“带宽决胜”的思维转变，宣告了 Pre-filling 时代的终结和 Agentic Serving 时代的正式确立。