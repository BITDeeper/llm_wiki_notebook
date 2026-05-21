---
type: concept
title: 缓存命中率
tags: [metrics, llm, optimization]
related: [input-cache, deepseek-v4]
created: 2026-04-27
updated: 2026-04-27
sources: ["deepseek-v4永久降价！缓存命中再打1折，实测编程成本骤降83%.md"]
---

# 缓存命中率

缓存命中率（Cache Hit Rate）是指在模型推理请求中，能够直接从缓存中读取处理结果的部分占总输入 Token 的比例。

## 技术指标
它是衡量 LLM 推理系统效率和成本效益的核心指标。命中率越高，意味着重复计算越少，推理速度越快且成本越低。

## 实测数据
根据 [[量子位]] 对 [[DeepSeek V4]] 的实测：
- **V4-Pro**：缓存命中率约为 **95-96%**。
- **V4-Flash**：缓存命中率约为 **91%**。

这一极高的命中率是 DeepSeek 能够实现“编程成本骤降 83%”的技术基础。