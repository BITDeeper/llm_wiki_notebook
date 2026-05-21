---
type: source
title: "学术海报不用愁，一句话精准自动编辑，华东师大开源APEX"
tags: [ai-agent, academic-tools, multimodal, open-source]
related: [apex, apex-bench, ju-ji-shi-fan-da-xue, ju-bu-ke-kong-bian-ji, shen-cha-tiao-zheng-ji-zhi]
created: 2026-01-21
updated: 2026-01-21
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/eGYyv5uIK2qsIIQBgT25Rw"
venue: "新智元"
sources: ["学术海报不用愁，一句话精准自动编辑，华东师大开源apex.md"]
---

# 学术海报不用愁，一句话精准自动编辑，华东师大开源APEX

## 概述
本文报道了华东师范大学 Planning Lab 提出的 [[apex]] 框架。这是首个面向交互式学术海报编辑的 Agent 框架，旨在解决现有 AI 工具在生成海报后缺乏精准修改能力的问题。

## 核心痛点
现有的学术海报自动化工具（如 [[Paper2Poster]]、[[PosterGen]]）虽然能生成初稿，但存在以下局限：
1.  **缺乏交互能力**：无法在初稿基础上进行精准的二次修改。
2.  **重绘式幻觉**：现有的“重绘式”方法（如 Banana Pro）通过重新生成整张图像来修改，容易导致严重的视觉幻觉，扭曲图表数据，破坏无关内容。
3.  **通用 Agent 水土不服**：通用 PPT Agent 难以理解学术海报的高密度排版结构。

## APEX 解决方案
[[apex]] 通过以下技术实现“一句话精准编辑”：
1.  **多层级 API**：预定义了一套从“单元素操作”到“组操作”的 API（如 `move_group`），替代不稳定的代码生成，实现增量式编辑。
2.  **审查—调整机制**：在首次编辑后，系统会对比前后状态，检查是否存在冗余操作或指令不一致，并进行二次修正。
3.  **数据真实性保障**：利用论文理解工具直接从 PDF 提取数据（如消融实验表格），避免 AI 瞎编。

## APEX-Bench 评测
团队构建了首个学术海报编辑基准测试 [[apex-bench]]：
-   **数据规模**：涵盖 59 篇顶会论文（ICLR, ICML, NeurIPS）及 514 条编辑指令。
-   **评估维度**：指令遵循度（I.F.）、修改范围控制度（M.S.）、视觉一致性（V.C.）。
-   **结果**：APEX 在各项指标上均显著优于重绘式方法和通用 PPT Agent。

## 意义
该框架填补了学术海报自动编辑的领域空白，将 AI 的角色从单纯的“生成者”转变为可协作的“编辑者”，有效解决了 [[chong-hui-shi-fang-fa]] 带来的幻觉问题。