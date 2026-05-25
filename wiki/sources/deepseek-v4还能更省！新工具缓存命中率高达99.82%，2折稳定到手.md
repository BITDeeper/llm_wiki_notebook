---
type: source
title: "DeepSeek V4还能更省！新工具缓存命中率高达99.82%，2折稳定到手"
created: 2026-05-25
updated: 2026-05-25
tags: [deepseek, 缓存优化, 编程agent, 成本控制, 量子位]
related: [reasonix, deepseek-v4, 前缀缓存优化, tokenmaxxing]
sources: ["deepseek-v4还能更省！新工具缓存命中率高达99.82%，2折稳定到手.md"]
authors: [鱼羊, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/Fgw6dUiIBSfPBYlkwWOpWQ"
venue: 量子位公众号
---
# DeepSeek V4还能更省！新工具缓存命中率高达99.82%，2折稳定到手

量子位发表于2026年5月25日的报道，介绍专为 [[DeepSeek V4]] 打造的终端编程 Agent [[reasonix]]，通过 [[前缀缓存优化]] 将缓存命中率提升至 99.82%，使输入 token 成本降至原来的 1/5。

## 核心内容

- **[[reasonix]]**：基于字节稳定 prefix-cache 设计的 append-only 运行循环，专为 DeepSeek 打造，完全不追求通用性。
- **三区上下文架构**：固定前缀区、只追加历史区、草稿区，确保前缀字节级稳定。
- **[[工具调用修复]]**：针对 DeepSeek 模型常见的 JSON 丢失、参数畸形、重复调用风暴、截断等问题进行最多 4 轮自动修复。
- **[[模型自动升降级]]**：默认使用 V4 Flash，困难任务手动或失败信号触发时自动切换至 V4 Pro，完成后自动回退。
- **成本实证**：4 亿+ token 账单从 61 美元降至 12 美元。

## 关键发现

- DeepSeek V4 系列发布 1 个月后，官方宣布永久降价。
- 社区存在替代方案：通过微型桥接程序在 [[codex]] 中使用 DeepSeek V4 Pro，同样实现 95%+ 缓存命中。
- 不同 harness（[[claude-code]]、OpenCode）下使用 DeepSeek 的成本效率存在差异。

## 与现有维基的关联

- 与 [[tokenmaxxing]] 形成对照：一个追求吞吐量最大化，一个追求极致成本压缩。
- 与 [[批次不变性]] 理念一脉相承：append-only 设计在应用层维护上下文不变性。
- 与 [[ai-subscription-crisis]] 形成呼应：暗示成本问题可能源于工具链效率而非订阅制本身。