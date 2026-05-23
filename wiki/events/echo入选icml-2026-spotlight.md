---
type: event
title: ECHO 入选 ICML 2026 Spotlight
created: 2026-05-13
updated: 2026-05-13
tags: [学术会议, ICML, 投机解码, 阿里, 浙江大学]
related: [echo-弹性投机解码, 阿里千问事业部, 浙江大学, 投机解码]
sources: ["icml-2026-spotlight-拒绝盲目猜token，阿里x浙大将投机解码带入弹性预算时代.md"]
origin_date: 2026-05-13
participants: [阿里千问事业部, 浙江大学]
causes: []
effects: []
significance: medium
---
# ECHO 入选 ICML 2026 Spotlight

阿里巴巴千问事业部与浙江大学联合提出的 [[echo-弹性投机解码]]（Elastic Speculative Decoding with Sparse Gating for High-Concurrency Scenarios）入选 ICML 2026 Spotlight 论文。

## 事件背景

论文由胡欣怡（阿里千问）、沈宇豪（浙江大学）、张堡霖（阿里千问）担任共同第一作者，戈霜（阿里千问）担任通讯作者。

## 核心贡献

该论文首次将投机解码从"尽可能多猜 token"的范式转变为"固定验证预算下的调度问题"，提出了 Super-Tree 视角、[[稀疏置信门控]] 和 [[弹性预算调度]] 三大核心组件。

## 影响

- 在 Qwen3-235B 高并发场景（BS=256）下实现 14.4% 吞吐提升
- 计划于 2026 年 6 月向 [[sglang]] 提交 MR，推动开源社区集成
- 标志着投机解码研究从单请求优化进入高并发批次级调度的新阶段
