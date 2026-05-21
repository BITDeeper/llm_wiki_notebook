---
type: concept
title: IRIS-MBTI
created: 2026-03-14
updated: 2026-03-14
tags: [分类系统, 公平性, 模型评估, 隐喻]
related: [iris-benchmark, 理想公平性, 现实保真度, 偏见惯性与可控性]
sources: ["ai嘴上说公平，实则偏见？首个基准给大模型做心理体检-iclr'26.md"]
---

# IRIS-MBTI

[[iris-mbti]] 是 [[iris-benchmark]] 提出的一种模型定性诊断工具，将大模型在公平性维度的表现类比为人类的“人格类型”。

## 分类依据

基于模型在以下三个维度的相对表现进行分类：
- **理想公平性 (IFS)**
- **现实保真度 (RFS)**
- **偏见惯性与可控性 (BIS)**

## 典型人格原型

- **UAF (The Adaptive Idealist / 适应型理想主义者)**：各维度表现均衡且优秀，是目前的理想标杆。
- **HDF (The Teachable Student / 孺子可教者)**：初始认知较弱，但具有极强的可塑性和执行力。
- **HDR (The Dogmatic Preacher / 固执的说教者)**：充满偏见且拒绝接受纠正。

## 作用

这种直观的“人设”画像帮助开发者根据具体应用场景（如社会模拟需高保真，儿童插画需高理想公平）快速筛选出性格最匹配的 AI 模型。