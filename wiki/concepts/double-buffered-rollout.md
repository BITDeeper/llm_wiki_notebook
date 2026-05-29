---
type: concept
title: Double-buffered rollout
created: 2026-05-28
updated: 2026-05-28
tags: [rollout, 异步, adapter, 版本管理]
related: [orbit, adapter-first-rl]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# Double-buffered rollout

Double-buffered rollout（双缓冲 rollout）是 [[orbit]] 框架中 adapter 版本管理的异步流式写入机制。

## 技术原理

1. 系统为 adapter 维护版本号。
2. 新版本 adapter 流式写入 inactive slot。
3. 当前 active slot 继续服务 in-flight 请求。
4. 新版本准备好后原子切换。

## 效果

减少 rollout bubble（rollout 空泡），实现训练与推理的高效重叠。在 [[qwen3-4b|Qwen3-4B]] + OFT、8×B200、TP=2 设置下的基准测试结果：

- 1.42 倍单步时间优化
- 44% rollout 吞吐提升
- eval accuracy 保持不变