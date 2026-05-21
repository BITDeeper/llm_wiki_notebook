---
type: entity
title: DeepSeek-Prover
tags: [形式化证明, 定理证明, deepseek]
related: [guo-daya, deepseek-math, aletheia]
created: 2026-03-22
updated: 2026-03-22
sources: ["大厂抢郭达雅进行时！deepseek核心成员还是个“综艺巨佬”.md"]
---

# DeepSeek-Prover

DeepSeek-Prover 是 [[DeepSeek]] 发布的面向形式化定理证明的模型，专注于 Lean 4 语言，于 2024 年 5 月发布。

## 技术原理
- **核心方法**：通过大规模合成形式化证明数据进行微调。
- **基础模型**：基于 [[DeepSeek-Math]] 7B。

## 性能表现
- **miniF2F 基准**：Whole-proof generation 准确率达到 46.3% (64 samples)，累计达到 52%，显著高于 GPT-4 的 23.0%。
- **FIMO 基准**：在 148 题中证明了 5 题，而 GPT-4 得分为 0。

## 意义
DeepSeek-Prover 的成果表明，DeepSeek 的模型能力已从一般的数学推理延伸到了更硬核的形式化推理方向，与 [[Google DeepMind]] 的 [[Aletheia]] 系统处于同一技术赛道。

## 核心作者
[[郭达雅]]。