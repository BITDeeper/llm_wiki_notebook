---
type: entity
title: GPT-Rosalind
tags: [openai, model, life-science, biology, drug-discovery, 生命科学, 模型]
related: [openai, alphafold, gpt-5.4, dyno-therapeutics, life-sciences-research-插件, prism, codex]
created: 2026-04-18
updated: 2026-05-05
sources: ["不卷alphafold，openai首个生命科学模型杀出，单项超越95%专家.md", "巨震，openai核心高管集体出逃！奥特曼挥刀自裁：理想已死，搞钱要紧.md"]
---

# GPT-Rosalind

[[GPT-Rosalind]] 是 [[OpenAI]] 发布的首款专用生命科学推理模型系列，以英国物理化学家、DNA 双螺旋结构发现者之一 Rosalind Franklin（罗莎琳德·富兰克林）命名。

## 核心定位
不同于通用大模型（如 [[GPT-5.4]]），GPT-Rosalind 定位为科学家的“AI 实验室搭档”，旨在通过 [[生命科学工作流自动化]] 压缩药物研发早期周期。其核心目标不是替代科学家进行实验，而是通过整合文献、数据和工具，提升科研思考的效率。

在技术架构上，GPT-Rosalind 将科学计算能力整合进 OpenAI 的底层生态，使得开发者可以通过 API 调用这些能力，而非仅限于一个独立的科学工作空间界面。

## 主要能力
模型针对科研工作流进行了优化，核心能力覆盖以下五个方向：
1. 化学反应机理推理
2. 蛋白质结构与突变效应理解
3. 基因组学解读
4. 实验规划
5. 海量文献的综合分析

## 性能表现
- **RNA 预测**：在与 [[Dyno Therapeutics]] 的合作测试中，使用未公开的 RNA 序列进行评估，模型在 RNA 序列功能预测任务上的表现优于 95% 的人类领域专家。
- **基准测试**：在 BixBench 和 LABBench2 等基准测试中，GPT-Rosalind 在多项任务上超越了通用模型 GPT-5.4，特别是在实验设计（CloningQA）方面提升显著。
- **能力边界**：模型在“分析/理解”任务上表现卓越，但在“生成/设计”任务上（约 84% 的人类专家水平）相对较弱，验证了 [[理解分析强于创造设计]] 的技术现状。

## 配套生态
OpenAI 同步推出了 [[Life Sciences Research 插件]]，该插件已连接 50 多个公共多组学数据库和科学工具（如 PubMed, UniProt, NCBI），允许用户在一个界面内完成文献检索、序列比对和结构预测等操作。

## 战略意义
GPT-Rosalind 的发布标志着 [[OpenAI]] 正式切入万亿美元制药赛道，同时也代表了公司在科学计算领域的战略转变：
- **从单点技术向工作流整合转变**：与 [[Google DeepMind]] 的 [[AlphaFold]]（专注于结构预测的“超级显微镜”）不同，GPT-Rosalind 试图成为调度资源的“大脑”。
- **从情怀应用向基础设施转变**：从提供独立的、情怀化的科学应用（如 [[Prism]]），转向提供底层的 API 基础设施。这反映了 OpenAI 在 IPO 压力下的极度实用主义——从卖“应用”转向卖“能力”。