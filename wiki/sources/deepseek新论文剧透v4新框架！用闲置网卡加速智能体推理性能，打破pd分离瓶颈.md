---
type: source
title: "DeepSeek新论文剧透V4新框架！用闲置网卡加速智能体推理性能，打破PD分离瓶颈"
tags: [deepseek, infrastructure, io-optimization, rdma, agent-systems]
related: [dualpath, deepseek-v4, pd分离架构, 吴永彤, snic, cnic]
created: 2026-02-27
updated: 2026-02-27
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/RkYyJyuRhAiEtAdW2yiXgg"
venue: 量子位
sources: ["deepseek新论文剧透v4新框架！用闲置网卡加速智能体推理性能，打破pd分离瓶颈.md"]
---

# DeepSeek新论文剧透V4新框架！用闲置网卡加速智能体推理性能，打破PD分离瓶颈

## 概述
本文报道了 DeepSeek 与北京大学、清华大学合作发布的一项关于智能体推理框架的新研究 [[DualPath]]。该框架针对长文本智能体场景下的 I/O 瓶颈，通过利用闲置的存储网卡（SNIC）带宽，打破了传统 [[PD分离架构]] 的性能限制。在 660B 规模模型的实测中，实现了离线推理吞吐提升 1.87 倍，在线服务吞吐提升 1.96 倍的性能表现。

## 核心观点
- **I/O 墙转移**：在智能体长文本场景下，推理性能的瓶颈已从“计算”转移到“数据搬运”（I/O）。
- **资源错配**：传统架构中，预填充引擎（PE）的存储网卡过载，而解码引擎（DE）的存储网卡闲置。
- **双路径加载**：引入“存储至解码”的第二路径，利用 DE 的闲置 SNIC 读取缓存，再通过 [[RDMA]] 传给 PE。

## 关键技术细节
- **流量隔离**：利用 InfiniBand/RoCE 的虚拟层技术，确保计算通信（CNIC）优先级（99%），缓存搬运“蹭”剩余带宽。
- **自适应调度**：根据磁盘队列和 Token 数动态分配任务，避免拥塞。
- **实测数据**：TTFT（首字延迟）大幅优化，TPOT（生成速度）几乎不受干扰。

## 相关人物
论文第一作者 [[吴永彤]]（北大博士生，DeepSeek 系统组成员），师从 [[金鑫]] 教授。

## 参考链接
- [论文原文](https://arxiv.org/pdf/2602.21548)
- [作者主页](https://jokerwyt.github.io/)