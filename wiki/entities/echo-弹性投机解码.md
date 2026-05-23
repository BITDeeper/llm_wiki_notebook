---
type: entity
title: ECHO 弹性投机解码
created: 2026-05-13
updated: 2026-05-13
tags: [投机解码, 大模型推理, 高并发, ICML-2026, 阿里, 浙江大学]
related: [投机解码, 阿里千问事业部, 浙江大学, sglang, 稀疏置信门控, 弹性预算调度]
sources: ["icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md"]
origin_date: 2026-04-09
---
# ECHO 弹性投机解码

ECHO（Elastic Speculative Decoding with Sparse Gating for High-Concurrency Scenarios）是由阿里巴巴千问事业部与浙江大学联合提出的投机解码优化方法，入选 ICML 2026 Spotlight。

## 核心理念

ECHO 将投机树构造从"尽可能多猜 token"重新建模为**固定验证预算下的调度问题**：在严格的全局 token 验证预算内，动态决定哪些请求应该继续加深、哪些请求应该提前截断、哪些预算应该转向扩宽候选集。

## 三大核心组件

### 1. Super-Tree 视角
将 batch 内所有请求的候选 token 树看作统一的 Super-Tree，施加全局约束 K_max，使投机解码从"每个请求独立扩树"转变为"多个请求共享一个全局预算池"。

### 2. [[稀疏置信门控]]
- 只在 root、target depth 及少量自适应选择的中间深度进行门控
- 通过 warm-up/calibration 阶段识别高区分度位置（sweet spots）
- 根据路径置信度判断当前请求是继续 deepen 还是 truncate 并释放预算

### 3. [[弹性预算调度]]
- **Priority 1 — 全局深度扩展**：高置信度请求优先加深
- **Priority 2 — 机会性宽度扩展**：剩余预算用于扩宽被截断请求的候选集

## 系统集成

ECHO 集成到工业级推理框架 [[sglang]]，通过 Flatten & Pack 将非规则候选 token 树打包为 dense、kernel-compatible 布局。计划于 2026 年 6 月向 SGLang 提交 MR。

## 关键实验数据

| 模型 | 场景 | 加速/提升 |
|------|------|-----------|
| LLaMA3.3-70B | BS=1 | 最高 5.35× 加速 |
| Qwen3-235B | BS=1 | 平均 2.02× 加速 |
| Qwen3-235B | BS=256 | 吞吐提升 14.4%（2,803→3,207 tok/s） |
| LLaMA3.3-70B | 高并发 | 吞吐提升 12.96% |

## 作者信息
- 共同第一作者：胡欣怡（阿里千问）、沈宇豪（浙江大学）、张堡霖（阿里千问）
- 通讯作者：戈霜（阿里千问）
