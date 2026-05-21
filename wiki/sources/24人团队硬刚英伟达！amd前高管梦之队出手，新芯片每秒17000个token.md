---
type: source
title: "24人团队硬刚英伟达！AMD前高管梦之队出手，新芯片每秒17000个token"
tags: [ai-hardware, asic, taalas, startup, inference-speed]
related: [taalas, hc1, 芯片即模型, 结构化asic, ljubiša-bajić]
created: 2026-02-21
updated: 2026-02-21
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/1yO1wjv23ECvSxF66vEZcQ"
venue: "量子位"
sources: ["24人团队硬刚英维达！amd前高管梦之队出手，新芯片每秒17000个token.md"]
---

# 24人团队硬刚英伟达！AMD前高管梦之队出手，新芯片每秒17000个token

## 概述
本文报道了初创公司 [[Taalas]] 发布的首款 AI 推理芯片 [[HC1]]。该芯片通过极端的 [[芯片即模型]] 架构，实现了每秒 17000 个 token 的峰值推理速度，比当前最快的竞品 [[Cerebras]] 快 10 倍，同时功耗降低 10 倍，成本降低 20 倍。

## 核心数据
- **速度**：17,000 token/s (Llama 3.1 8B)
- **对比**：Cerebras (~2,000 t/s), SambaNova (~900 t/s), Groq (~600 t/s), Nvidia B200 (~350 t/s)
- **工艺**：台积电 N6
- **面积**：815mm²
- **功耗**：250W (单颗)

## 技术原理
[[HC1]] 采用了 [[结构化ASIC]] 的设计理念，不改变底层电路，仅通过调整两层掩模来适配特定模型。它利用 [[掩模ROM]] 将模型权重直接硬编码（刻蚀）在硅片上，仅保留少量 [[SRAM]] 用于 LoRA 微调和 KV 缓存。这种“硅基编译器”思路将芯片生产周期从 6 个月缩短至 2 个月。

## 团队背景
[[Taalas]] 成立于两年前，团队仅 24 人。创始人 [[Ljubiša Bajić]] 曾任 AMD 集成电路设计总监，也是 [[Tenstorrent]] 的创始人兼首任 CEO。团队核心成员多来自 AMD/ATI，被称为“AMD 前高管梦之队”。

## 应用与争议
- **多芯片扩展**：展示了针对 [[DeepSeekR1-671B]] 的 30 芯片解决方案，成本约 7.6 美分/百万 token。
- **具身智能潜力**：亚毫秒级延迟被认为有利于 [[具身智能]] 发展。
- **质疑**：网友实测发现其推理深度较差，且硬编码模式面临模型快速迭代带来的过时风险。