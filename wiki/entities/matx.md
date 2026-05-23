---
type: entity
title: MatX
tags: [ai-chip, startup, hardware, llm, 公司, AI硬件, 推理优化]
related: [matx-one, reiner-pope, mike-gunter, andrej-karpathy, 英伟达, cerebras-systems, 可拆分脉动阵列, 显存带宽瓶颈, roofline模型, 软硬协同设计]
created: 2026-02-25
updated: 2026-05-22
sources: ["融资34亿！谷歌前tpu员工创业新型芯片，卡帕西也投了.md", "前谷歌-tpu-架构师：为何堆满算力仍无法消除推理卡顿？.md"]
---

# MatX

[[MatX]] 是一家成立于 2022 年的 AI 芯片初创公司，由前 Google TPU 团队核心架构师 [[Reiner Pope]] 创立，专注于 AI 推理硬件优化领域。该公司致力于构建专门针对大语言模型（LLM）优化的硬件，试图通过 [[软硬协同设计]] 解决当前 AI 芯片在吞吐量和延迟之间的权衡问题，直接挑战 [[英伟达]] 在 AI 硬件领域的霸主地位。

## 团队背景

- **[[Reiner Pope]]（CEO）**：前 Google TPU 技术主管、核心架构师，PaLM 模型软硬效率负责人。他对 [[显存带宽瓶颈]]、[[Roofline模型]] 和推理并发调度经济学有深刻理解。
- **[[Mike Gunter]]（CTO）**：前 Google 首席工程师，硬件架构专家。

## 核心产品

公司正在研发其首款芯片 [[MatX One]]，号称结合了 HBM 的高吞吐量和 SRAM 的低延迟特性，特别针对长上下文和 [[Agent 循环]] 场景进行了优化。

## 技术理念

MatX 认为现有的 AI 芯片架构（无论是 HBM 优先还是 SRAM 优先）都无法完美适配未来 LLM 的复杂工作流。他们主张从零开始重构算力与存储的关系，采用 [[可拆分脉动阵列]] 架构，以实现"训练级吞吐"与"推理级低延迟"的统一。

创始团队对推理延迟的物理约束（尤其是 [[显存带宽瓶颈]]）的深刻认知，暗示公司可能针对推理侧的物理极限提出创新硬件解决方案。

## 融资情况

- **A 轮（2025年3月）**：1 亿美元，领投方为 Spark Capital。
- **B 轮（2026年2月）**：5 亿美元，领投方为 Jane Street 和 Situational Awareness LP。知名投资人 [[Andrej Karpathy]]、Stripe 联创 Patrick Collison 等参投。

## 市场展望

MatX 计划于 2027 年出货，目标客户为顶尖 AI 实验室。尽管获得了资本和行业大佬的背书，但其仍面临软件生态建设（对抗 CUDA）以及产品落地时间窗口（2027年）的巨大挑战。