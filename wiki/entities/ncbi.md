---
type: entity
title: NCBI
created: 2026-06-10
updated: 2026-06-10
tags: [组织, 生物信息学, 美国]
related: [ncbi-virus, gget-virus, ai-for-science]
sources: ["rss/claude把病毒起源算错90年，都是网页惹的祸？.md"]
---
# NCBI

美国国家生物技术信息中心（National Center for Biotechnology Information），维护包括GenBank、RefSeq、[[ncbi-virus|NCBI Virus]]在内的核心生物医学数据库体系。

## 与AI智能体的关系

NCBI的数据库基础设施为人类浏览器交互设计，其过滤逻辑嵌在网页层而非程序化API中，导致AI智能体无法稳定、可复现地检索数据。Anthropic与NCBI的研究者合作开发了[[gget-virus]]，将网页过滤行为翻译为机器可调用的确定性检索层。