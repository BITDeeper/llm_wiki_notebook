---
type: source
title: "ICML 2026 Spotlight: 拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代"
created: 2026-05-13
updated: 2026-05-13
tags: [投机解码, 大模型推理, 高并发, ICML-2026, 阿里, 浙江大学]
related: [echo-弹性投机解码, 投机解码, 阿里千问事业部, 浙江大学, sglang]
sources: ["icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md"]
authors: [胡欣怡, 沈宇豪, 张堡霖, 张恒鑫, 戴俊, 戈霜, 陈磊, 李跃, 万明成]
year: 2026
url: "https://arxiv.org/abs/2604.09603"
venue: ICML 2026 Spotlight
---
# ICML 2026 Spotlight: 拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代

**来源：** 机器之心
**发布日期：** 2026-05-13
**论文：** ECHO: Elastic Speculative Decoding with Sparse Gating for High-Concurrency Scenarios

## 核心内容

本文报道了阿里巴巴千问事业部与浙江大学联合提出的 [[echo-弹性投机解码]] 方法，入选 ICML 2026 Spotlight。该方法解决了 [[投机解码]] 在高并发推理场景下失效的关键问题。

### 问题背景
传统投机解码假设目标模型验证多个 draft token 的成本接近一次普通自回归前向，但在生产级高并发服务中，随着 batch size 增大，验证计算逐渐成为主瓶颈。例如 EAGLE-3 在 BS=128 时吞吐甚至低于 vanilla AR。

### 核心贡献
1. **Super-Tree 视角**：将 batch 内所有请求的候选 token 树看作统一 Super-Tree，在全局验证预算 K_max 下弹性分配深度与宽度
2. **[[稀疏置信门控]]**：只在高区分度的 sweet spots 做决策，避免在不可靠深度上频繁判断
3. **[[弹性预算调度]]**：两级优先级机制——优先全局深度扩展，其次机会性宽度扩展
4. **系统集成**：通过 Flatten & Pack 将非规则候选树打包为 dense、kernel-compatible 布局，集成到 [[sglang]]

### 关键实验结果
- 低负载 BS=1：1.63×–5.35× wall-time 加速
- 高负载 BS=256（Qwen3-235B）：吞吐从 2,803 tok/s 提升至 3,207 tok/s，提升 14.4%
- 在 LLaMA3.3-70B 上最高达到 5.35× 加速
