---
type: entity
title: IsoDDE
tags: [ai-model, drug-discovery, biology, deepmind]
related: [isomorphic-labs, alpha-fold-3, boltz-2, 隐藏结合位点发现, 结合亲和力预测]
created: 2026-02-20
updated: 2026-02-20
sources: ["谷歌发布「alphafold-4」，不再开源！性能碾压上一代.md"]
---

# IsoDDE

## 概述
[[IsoDDE]] 是由 [[Isomorphic Labs]] 开发的新一代 AI 药物设计引擎，被业界称为「AlphaFold 4」。它是一个统一引擎，整合了结构预测、结合强度计算和[[隐藏结合位点发现]]等能力，性能全面碾压前代 [[AlphaFold 3]]。

## 技术特性与性能
- **泛化能力**：在处理与训练数据相似度极低（0-20%）的难例时，成功率是 [[AlphaFold 3]] 的两倍多。
- **抗体识别**：在抗体识别任务上的高精度预测成功率是 [[AlphaFold 3]] 的 2.3 倍，是开源模型 [[Boltz-2]] 的近 20 倍。
- **亲和力预测**：在[[结合亲和力预测]]任务中，不仅超越了所有 AI 方法，还超越了传统的 FEP 物理模拟方法，且无需实验数据作为起点。
- **发现能力**：能够仅凭氨基酸序列发现蛋白质上隐藏的结合位点（如 Cereblon 蛋白的案例），展现出超越人类直觉的洞察力。

## 闭源性质
与 [[AlphaFold]] 系列不同，[[IsoDDE]] 采用完全闭源策略。[[Isomorphic Labs]] 仅发布了技术报告，未公开代码、模型架构或训练方法。这引发了学术界关于其性能优势是源于算法创新还是[[私有数据壁垒]]的争论。