---
type: concept
title: Agent原生计算
created: 2026-06-01
updated: 2026-06-01
tags: [计算范式, agent, 英伟达, 硬件革命]
related: [英伟达, 黄仁勋, rtx-spark, vera-cpu, 操作系统agent, 任务执行范式, 本地推理, ai-subscription-crisis]
sources: ["刚刚，老黄重新发明pc！全球首个agent原生电脑问世.md"]
origin_date: 2026-06-01
---
# Agent原生计算

硬件和软件从底层为AI智能体而非人类用户设计的全新计算范式。由 [[英伟达]] CEO [[黄仁勋]] 在2026年GTC大会上系统提出，标志着PC四十年来首次被推倒重来。

## 核心主张

- **"过去四十年，计算机是为人造的。从今天起，它要为Agent造。"**
- CPU重做（[[vera-cpu]]）、PC重新发明（[[rtx-spark]]）、数据中心重构（[[vera-rubin]]）、软件栈重搭（[[nvidia-agent-toolkit]]），全是这一主张的注脚。
- 黄仁勋将此次发布类比为Windows 95时刻（1995年），宣称"LLM是新时代的DirectX，Agent是新时代的应用"。

## Agent即操作系统

传统计算架构：应用层 + 代码 + 操作系统
Agent时代架构：**Agent + Harness**

- **Agent**：输入与感知、推理与规划、工具调用与行动，加上短期和长期记忆
- **Harness**：类似操作系统，负责连接一切、调度信息

这一概念与wiki中已有的 [[操作系统agent]] 形成延伸关系——从软件层面（如 [[马维斯]]）上升到硬件+软件全栈重构。

## 与现有概念的关联

- **[[本地推理]]**：[[rtx-spark]] 将数据中心级算力塞进笔记本，是本地推理的硬件突破
- **[[ai-subscription-crisis]]**：桌面版支持Agent 7×24小时本地免计费运行，是对订阅制危机的硬件层回应
- **[[token作为生产资料]]**：本地运行万亿参数模型意味着Token生产资料的去中心化
- **[[任务执行范式]]**：NVIDIA Agent Toolkit的四层架构是对此范式的硬件级背书

## 哲学张力

黄仁勋宣称"用户不再是人类"，但当前Agent的实际成熟度是否足以成为主要计算主体，仍存疑问。同时，英伟达同时推动本地Agent运行和超大规模云端AI工厂，两者在商业逻辑上存在潜在张力。