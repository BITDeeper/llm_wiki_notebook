---
type: concept
title: 后Transformer（Post-Transformer）
created: 2026-05-27
updated: 2026-05-27
tags: [ai架构, 后transformer, 新架构]
related: [transformer架构, scaling-law, 硬件彩票, post-transformer辩论-20260505]
sources: ["统治ai十年的transformer，要被亲爹亲手砸碎？.md"]
---
# 后Transformer（Post-Transformer）

泛指所有试图取代[[transformer架构|Transformer]]的新一代AI架构，包括BDH架构、液态神经网络、状态空间模型（SSM）等。

## 核心主张

Post-Transformer阵营认为Transformer存在O(n²)复杂度、记忆缺失、灾难性遗忘等架构级缺陷，需要全新的架构范式而非补丁式修复。

## 面临的挑战

- **[[scaling-law|Scaling曲线]]尚未超越Transformer** — 这是[[lukasz-kaiser|Kaiser]]提出的核心判据
- **硬件劣势** — 顺序执行架构在当前GPU上比Transformer慢可达50倍
- **工程栈缺失** — 十年的编译器、框架、推理引擎积累全部围绕Transformer构建

## 突破窗口

Kaiser本人承认，[[硬件彩票]]壁垒正在被AI Agent自动优化CUDA内核的能力瓦解。一旦Post-Transformer架构在极长上下文任务上展示出更优的困惑度曲线，即使微小优势也会在scaling放大下形成对Transformer的致命一击。

## 代表性架构与人物

- BDH架构 — Adrian Kosowski（[[pathway|Pathway]]）
- 液态神经网络 — Matthias Lechner（[[liquid-ai|Liquid AI]]）
- [[llion-jones|Llion Jones]]（[[sakana-ai|Sakana AI]]）— 站在Post-Transformer阵营的Transformer联合发明人