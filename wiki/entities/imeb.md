---
type: entity
title: IMEB (Image Multi-Entity Benchmark)
created: 2026-05-21
updated: 2026-05-21
tags: [评测基准, 多模态搜索, 效率评估]
related: [hypereyes, 成本感知评分-cas, 小红书]
sources: ["hypereyes：从「搜得更深」到「搜得更宽」，并行多模态搜索智能体的效率革命.md"]
origin_date: 2026-05-19
---
# IMEB (Image Multi-Entity Benchmark)

IMEB 是 [[小红书]] 研究团队随 [[hypereyes|HyperEyes]] 发布的首个包含 300 条极具挑战性的多实体视觉评测基准。

## 设计理念

现有多模态榜单普遍存在「只看准不看快」的弊端。IMEB 的核心创新在于将**搜索效率**作为重要评估维度，纠正了传统基准只关注准确率而忽视成本效率的导向。

## 配套评分标准

与 IMEB 配套发布的 [[成本感知评分-cas|CAS（成本感知评分）]] 在统一标尺下，将准确率、Token 消耗和工具调用轮次进行联合评估，把传统的答案质量换算为「单位延迟下的有效信息密度」，从根本上遏制大模型靠堆砌算力暴力刷榜的行为。

## 意义

IMEB 代表了 AI 评测从「唯准确率论」向「效率-准确率联合评估」的转变，与 [[tokenmaxxing]] 所反映的 Token 吞吐量最大化趋势形成鲜明对照。