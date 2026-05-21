---
type: source
title: "OpenAI公开大规模稳定训练的秘密，英伟达AMD英特尔都受益"
tags: [openai, networking, mrc, infrastructure, scaling]
related: [mrc, 英伟达, amd, 英特尔, scaling-law, ai-takeoff]
created: 2026-05-07
updated: 2026-05-07
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/QugylM-Bhdx785Gnxca84w"
venue: "量子位"
sources: ["openai公开大规模稳定训练的秘密，英伟达amd英特尔都受益.md"]
---

# OpenAI公开大规模稳定训练的秘密，英伟达AMD英特尔都受益

## 概述
本文报道了 OpenAI 通过开放计算项目（OCP）发布的 MRC（Multipath Reliable Connection）网络协议。该协议旨在解决超大规模 AI 训练（10万+ GPU）集群中的网络稳定性问题，实现了微秒级故障恢复。OpenAI 联合了英伟达、AMD、英特尔、微软和博通共同开发了该协议，目前已在 GB200 超算平台上运行。

## 核心技术
MRC 协议主要包含三大技术创新：
1.  **多平面网络拓扑**：将 800Gb/s 网卡拆分为 8 条 100Gb/s 子链路，连接到独立交换机，减少网络层数和故障点。
2.  **自适应包喷射**：扩展 RoCE 乱序处理能力，允许数据包通过数百条路径并行传输，并在拥塞时微秒级切换路径。
3.  **SRv6 静态源路由**：将路径决策移至发送端，消除动态路由收敛带来的抖动。

## 行业意义
该协议的开放标志着 AI 基础设施标准化的进一步推进，使得整个行业（尤其是拥有自研芯片或超算能力的厂商）都能受益。它解决了 [[scaling-law]] 在向更大规模演进时遇到的网络瓶颈，是实现 [[ai-takeoff]] 和激进加速的重要物理基础。

## 相关实体
- [[openai]]
- [[英伟达]]
- [[amd]]
- [[英特尔]]
- [[mrc]]