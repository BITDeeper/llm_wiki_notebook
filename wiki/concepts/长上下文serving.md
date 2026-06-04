---
type: concept
title: 长上下文Serving
created: 2026-06-04
updated: 2026-06-04
tags: [推理优化, 长上下文, serving, 系统工程]
related: [kv-cache-量化, oscar, sglang, 三段式token-pool]
sources: ["超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
---
# 长上下文Serving

长上下文Serving是指大模型在处理超长文本时的在线服务系统工程，是大模型从实验室走向生产环境的关键环节。

## 核心挑战

随着大模型上下文长度激增（如Qwen3系列支持32K+生成长度），传统BF16 KV Cache导致显存成为瓶颈：

- **显存容量**：长上下文产生海量KV Cache，显存很快成为天花板
- **显存带宽**：每生成一个新token都要回读越来越长的历史KV
- **批量调度**：显存受限导致batch size受限，影响吞吐
- **前缀复用**：Agent场景中共享前缀的缓存命中率直接影响效率

## 关键技术方向

### KV Cache压缩

通过 [[kv-cache-量化]] 将KV Cache从BF16压缩至更低比特（如2-bit），显存可降低约8倍。

### 前缀缓存

Radix prefix cache等技术通过复用共享前缀的KV Cache，减少重复计算。在共享系统提示、多轮Agent、工具调用链路等长前缀高复用场景中尤其重要。

### 混合精度存储

如 [[oscar]] 的 [[三段式token-pool]]，对历史KV使用INT2极致压缩，对关键sink和recent token保留BF16精度。

## 系统级收益指标

以 [[oscar]] 为例，在长上下文Serving场景中可实现：

- KV Cache memory降低约 **8倍**
- Decode加速最高约 **3倍**（100k context, full prefix-cache hit）
- Job-level throughput提升最高约 **7倍**（大batch, 显存预算固定）

## 与Agent场景的关联

长上下文Serving对Agent场景尤其关键。真实Agent往往包含很长的系统提示、工具说明、历史对话和检索内容，不同请求之间存在大量共享前缀。高效的KV Cache管理和前缀复用是支撑Agent规模化部署的基础设施。