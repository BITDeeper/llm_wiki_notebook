---
type: event
title: OpenAI通用模型推翻Erdős单位距离问题猜想
created: 2026-05-21
updated: 2026-05-21
tags: [ai-for-science, 数学突破, openai, 历史性事件]
related: [openai, erdős单位距离问题, ai-for-science, gpt-5.5, paul-erdős, 代数数论-离散几何关联, 通用推理模型科学突破]
sources: ["ai首次证明数学核心猜想：80年的经典难题，被openai搞定了.md"]
origin_date: 2026-05-21
time_span:
  start: 2026-05-21
  end: null
participants: [openai, paul-erdős, timothy-gowers, arul-shankar, noam-brown, will-sawin, thomas-bloom]
causes: [scaling-law, 通用推理模型科学突破]
effects: [ai-for-science, 代数数论-离散几何关联]
significance: high
---
# OpenAI通用模型推翻Erdős单位距离问题猜想

## 事件概述

2026年5月21日（周四），[[openai]] 宣布用一个通用型大语言模型推翻了离散几何学中悬而未决近80年的 [[erdős单位距离问题]] 的核心猜想。这是**人工智能首次自主解决数学领域的核心著名未解问题**。

## 事件经过

### 背景
- 1946年，[[paul-erdős]] 提出单位距离问题，断言正方形网格结构是最优解
- 近80年来，数学界普遍接受这一直觉，无人能撼动"正方形网格不可超越"的共识
- 1984年Spencer、Szemerédi和Trotter确立O(n^(4/3))上限后，40余年无重大进展

### 突破
- OpenAI的通用大语言模型发现了一类全新的构造族，性能优于正方形网格
- 证明对于无穷多个 n 值，可以构建出至少拥有 n^(1+ε) 个单位距离对的 n 个点的配置
- AI的核心原创思想：用代数数域扩张替代高斯整数，利用无限类域塔和Golod-Shafarevich理论

### 验证与改进
- [[will-sawin]]（普林斯顿大学数学教授）独立验证并改进，确定 ε = 0.014
- [[thomas-bloom]]（曼彻斯特大学研究员）撰写配套研究工作

## 重要评价

- **[[timothy-gowers]]**（菲尔兹奖得主）："AI数学的一个里程碑……如果这是人写的论文，会毫不犹豫建议顶刊接收"
- **[[arul-shankar]]**（著名数论学家）："当前AI模型已经不只是人类数学家的助手——它们能够提出原创而巧妙的想法"
- **[[noam-brown]]**（OpenAI科学家）：强调这是通用型大语言模型，非专门为数学设计，可能为 [[gpt-5.5]] Pro的下一版本

## 影响与意义

1. **AI角色转变：** 标志着AI从"人类助手"向"独立研究者"的角色转变
2. **跨领域关联：** 揭示了 [[代数数论-离散几何关联|代数数论与离散几何之间意想不到的关联]]
3. **通用vs专用路线：** 与Google DeepMind的专用系统（[[aletheia]]）形成对比，暗示通用推理路线可能更具扩展性
4. **科研自动化前景：** 这种推理能力可迁移至生物学、物理学、材料科学等领域，构成迈向"科研自动化"的关键一环
5. **[[scaling-law]]实证：** 为"Scaling没有墙"论点提供强有力的实证支持