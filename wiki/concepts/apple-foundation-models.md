---
type: concept
title: Apple Foundation Models
tags: [apple, ai-architecture, on-device]
related: [apple, gemini, siri]
created: 2026-01-13
updated: 2026-01-13
sources: ["15年差评如潮，siri终于有救了！苹果10亿真金白银投谷歌一票.md"]
---

# Apple Foundation Models

苹果公司开发的生成式AI模型基础架构，旨在为 [[apple]] 的设备端和云端AI功能提供支持。

## 现状与局限
目前的 [[apple-foundation-models]] 参数规模约为1500亿。虽然强调隐私保护和端侧处理能力，但在生成质量和复杂推理能力上被评价为落后于行业顶尖水平（如 [[gemini]] 的1.2万亿参数）。

## 战略升级
为了弥补差距，[[apple]] 采取了混合策略：
1. **短期**：引入 [[google]] 的 [[gemini]] 模型作为 [[apple-foundation-models]] 的补充，特别是用于 [[siri]] 等需要强推理能力的场景。
2. **长期**：继续研发自研的大参数模型（目标1万亿参数），以实现技术独立。

## 部署方式
[[apple-foundation-models]] 结合了端侧运行和 [[private-cloud-compute]]（私有云计算），确保在利用云端算力的同时保护用户隐私。