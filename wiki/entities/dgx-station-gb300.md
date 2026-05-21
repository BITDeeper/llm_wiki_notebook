---
type: entity
title: DGX Station GB300
tags: [hardware, nvidia, supercomputer, inference, workstation, gpu, local-inference]
related: ["jensen-huang", "andrej-karpathy", "grace-blackwell", "tokenomics", "nvidia", "本地推理", "agent"]
created: 2026-03-20
updated: 2026-05-08
sources: ["黄仁勋，开启智元（token）时代.md", "英伟达首台dgx-gb300，老黄亲自登门送给他.md", "英伟达首台dgx-gb300，老黄送给他.md"]
---

# DGX Station GB300

## 概述
DGX Station GB300 是英伟达（[[nvidia]]）于 2026 年发布的桌面级超级计算机，被称为“桌面上的[[智元]]工厂”。它是英伟达押注推理时代、将原本属于数据中心的算力压缩进个人桌面的标志性产品，旨在支持智能体时代的本地开发与长期运行任务。

## 核心规格
- **架构**：基于 GB300 架构（与数据中心同源）。
- **算力**：20 PFLOPS (20 petaflops)。
- **内存**：748GB 统一内存（注：另一来源记录为 784GB）。
- **功耗**：需要 20 安培的专用电源。
- **定位**：桌面级数据中心。

## 产品特性与意义

### 本地与云端的无缝衔接
- 开发者在本地写代码、跑模型，环境与云端“迷你版数据中心”完全一致。
- 本地跑通的系统可以无缝迁移到云端或更大集群，无需推倒重来。

### 支持持续运行的 Agent
- 不同于传统的训练工具，DGX Station GB300 强调“让 AI 一直跑下去”的能力。
- 大容量内存和高算力使其能够直接折腾千亿甚至万亿参数级别的系统，满足 [[agent]] 长期运行的需求。

### 个人开发者的赋能
- 作为首台受赠者 [[Andrej Karpathy]] 的“大玩具”，它象征着算力正在从大型机构向“超级个体”下沉。
- 它解决了 [[本地推理]] 场景中性能不足的痛点，使个人开发者也能在本地进行企业级研发。

## 历史背景与象征意义
DGX Station GB300 是英伟达“三台超算，押注三个时代”战略的第三环，代表了 DGX 系列演进的最新形态：

1.  **2016 年 (DGX-1)**：送给马斯克领导下的 OpenAI，押注深度学习潜力。
2.  **2024 年 (DGX H200)**：送给 Sam Altman 领导下的 OpenAI，押注训练大基建。
3.  **2026 年 (GB300)**：送给 [[Andrej Karpathy]]，押注推理落地与个人智能体时代。

## 应用场景
作为 [[Andrej Karpathy]] 的主力设备，它被用于运行 [[OpenClaw]] 智能体（“多比之爪”），管理家庭自动化系统，展示了在本地进行大规模 [[智元]] 生产和消耗的能力。