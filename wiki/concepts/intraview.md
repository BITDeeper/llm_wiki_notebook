---
type: concept
title: IntraView
created: 2026-06-04
updated: 2026-06-04
tags: [ai-for-science, 文献检索, 任务定义]
related: [intragent, intrabench, 佐治亚大学, 单篇文献深度解析]
sources: ["规避文献幻觉，准确率提升13.2%！细粒度检索智能体-acl26.md"]
origin_date: 2026-04-01
---
# IntraView

**IntraView**（INformation reTRieval through literAture reVIEW，文献内部信息检索）是由 [[佐治亚大学]] 团队联合五个STEM学科专家共同定义的新任务，旨在填补传统跨文献检索无法满足单篇文献精准信息提取需求的技术鸿沟。

## 任务定义

IntraView 区别于传统的跨文献检索任务，聚焦于对**单篇文献内部**的细粒度信息检索，要求AI系统能够：

- 精准提取特定的实验设置和多变量控制参数
- 获取上下文假设和隐藏在复杂图文逻辑中的元数据
- 跨越不同章节进行信息比对和多步骤逻辑推理
- 对原文献语境保持绝对忠实，不引入外部虚构内容

## 任务驱动

该任务定义由实际科研痛点驱动，源于物理、地球科学、公共卫生、工程和材料科学等领域专家的亲身科研经历——在复现实验、推导公式边界条件、查阅合成配方等关键节点上，科研人员需要对单篇核心文献进行毫无幻觉的深度挖掘。

## 关联

- [[intrabench]] — 为 IntraView 任务构建的专家级基准测试集
- [[intragent]] — 为攻克 IntraView 任务开发的智能体框架