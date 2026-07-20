---
type: entity
title: FuseSearch-4B
created: 2026-06-14
updated: 2026-06-14
tags: [ai-model, code-localization, open-source, ant-group, acl-2026]
related: [代码定位, 工具效率, 自适应并行执行, 蚂蚁集团, qwen3-4b, swe-bench-verified]
sources: ["rss/代码定位太慢？蚂蚁acl2026新作：让模型自己学会「该搜多少」.md"]
---
# FuseSearch-4B

**FuseSearch-4B** 是 [[蚂蚁集团]] CodeFuse 团队推出的开源代码定位模型，参数量为 40 亿，基于 [[qwen3-4b|Qwen3-4B]] 底座。相关论文被 [[acl-2026|ACL 2026]] Findings 收录。

## 核心性能

在 [[swe-bench-verified|SWE-bench Verified]] 基准上，FuseSearch-4B 展现出了越级挑战的能力：
- 达到 84.7% 文件级 F1，匹配商用闭源大模型 [[claude-haiku-4-5|Claude Haiku 4.5]]。
- 推理速度提升 93.6%。
- Token 消耗降低 68.9%。

## 设计特点

FuseSearch 采用极简设计哲学，仅依赖三个只读工具（glob, grep, read_file）即可实现零成本、零依赖部署，语言无关。

其核心创新在于通过两阶段训练法（SFT + RL）赋予模型 [[自适应并行执行]] 能力，并引入 [[工具效率]] 作为奖励函数的关键乘积项，成功避免了 [[朴素并行的冗余陷阱]]。

## 下游应用

作为 [[kimi-k2-instruct|Kimi-K2-Instruct]] 的前置搜索引擎接入时，FuseSearch-4B 能够在不影响修复精度的前提下，将整体 Agent 成本削减近一半。