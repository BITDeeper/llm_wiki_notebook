---
type: source
title: "Nature和Science同时报道了一篇论文，试图根治AI幻觉"
tags: [ai-for-science, rag, hallucination, open-source, nature, science]
related: [openscholar, dr-tulu, akari-asai, 检索增强生成, 幻觉, scaling-law]
created: 2026-02-05
updated: 2026-02-05
authors: ["新智元", "艾伦"]
year: 2026
url: "https://mp.weixin.qq.com/s/FrrtkFGaHr4YLvDvV60ozQ"
venue: "新智元"
sources: ["nature和science同时报道了一篇论文，试图根治ai幻觉.md"]
---

# Nature和Science同时报道了一篇论文，试图根治AI幻觉

## 概述
本文报道了由华盛顿大学和艾伦人工智能研究所（Ai2）开发的 [[OpenScholar]] 模型及其进阶版 [[DR Tulu]]。这两项成果分别被《Nature》正刊发表和《Science》报道，旨在通过 [[检索增强生成]]（RAG）技术根治 [[幻觉]] 问题，证明了在科学领域，“检索+自查”的架构优于单纯依赖参数规模的“黑盒”模型。

## 核心发现

### OpenScholar：终结参数崇拜
- **规模**：仅 8B 参数的小模型。
- **机制**：摒弃死记硬背，外接包含 4500 万篇开放获取论文的数据库。
- **流程**：
  1. **检索**：快速捞取相关文献片段。
  2. **重排序**：利用交叉编码器去伪存真。
  3. **生成与反馈**：自查机制，确保每句话都有确凿文献背书。
- **成果**：在 [[scholarqabench]] 基准测试中击败当时的旗舰模型，推理成本降低两个数量级（约 0.003 美元/次）。

### DR Tulu：迈向深度研究
- **定位**：针对长篇幅、多维度的深度研究任务。
- **核心技术**：[[演化评分规则的强化学习]]（RLER）。
- **能力**：动态生成评分细则，具备规划能力，能像成熟研究员一样撰写长篇报告。

## 关键人物
- **[[Akari Asai]]**：项目核心开发者，即将入职 CMU。其研究哲学是“不要试图把世界装进模型里，要让模型学会拥抱世界”。

## 行业意义
- **打破迷信**：证明了在特定垂直领域，架构优化和检索机制比单纯扩大参数规模（[[scaling-law]]）更有效。
- **民主化**：通过开源高性能小模型，打破巨头对顶级科研 AI 工具的垄断。