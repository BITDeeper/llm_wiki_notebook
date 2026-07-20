---
type: entity
title: Qwen3-4B
created: 2026-05-28
updated: 2026-06-14
tags: ["大模型", "中小模型", "阿里", "llm", "base-model", "alibaba"]
related: ["orbit", "double-buffered-rollout", "fusesearch", "qwen"]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md", "rss/代码定位太慢？蚂蚁acl2026新作：让模型自己学会「该搜多少」.md"]
---
# Qwen3-4B

**Qwen3-4B** 是阿里巴巴 [[qwen|千问]] 系列下的 40 亿（4B）参数大语言模型。作为典型的中小参数模型，Qwen3-4B 在多项研究中被用作基座模型，并在不同场景下验证了其性能潜力。

## 在 FuseSearch 研究中的应用

在 FuseSearch 研究中，Qwen3-4B 被选作 [[fusesearch|FuseSearch-4B]] 的底座基座模型。研究表明，经过精细的强化学习策略调优后，Qwen3-4B 能够在特定垂直任务（如 [[代码定位]]）中爆发出比肩大参数商用模型的实力。

## 在 ORBIT 框架基准测试中的应用

在 [[orbit]] 框架的异步 rollout 性能基准测试中，Qwen3-4B + OFT 在 8×B200、TP=2 设置下用于验证 [[double-buffered-rollout]] 机制的效果。

### 基准测试结果

- 1.42 倍单步时间优化
- 44% rollout 吞吐提升
- eval accuracy 保持不变